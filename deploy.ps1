param (
    [string]$TargetIP = "192.168.31.100",
    [string]$User = "clusteradmin",
    [string]$SshKeyPath = "$HOME\.ssh\id_ed25519",
    [string]$RemoteDeployDir = "ai_demo_deploy"
)

$LocalScriptsDir = Join-Path -Path $PSScriptRoot -ChildPath "scripts"
$SshOptions = "-i `"$SshKeyPath`" -o StrictHostKeyChecking=accept-new -o BatchMode=yes"

# 1. Check Connectivity
ssh -q $SshOptions "${User}@${TargetIP}" "exit"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ERROR: SSH Authentication failed." -ForegroundColor Red
    exit
}

# 2. Prepare Remote Directory
ssh $SshOptions "${User}@${TargetIP}" "rm -rf ~/$RemoteDeployDir && mkdir -p ~/$RemoteDeployDir"

# 3. Transfer Files
Write-Host ">>> Transferring scripts to Ubuntu..." -ForegroundColor DarkGray
scp -r $SshOptions "$LocalScriptsDir" "${User}@${TargetIP}:~/$RemoteDeployDir/"

# 4. Assign Executable Permissions and Fix Line Endings
Write-Host ">>> Setting executable permissions on remote scripts..." -ForegroundColor DarkGray
$RemoteCmd = "sed -i 's/\r$//' ~/$RemoteDeployDir/scripts/*.sh; chmod +x ~/$RemoteDeployDir/scripts/*.sh"
ssh $SshOptions "${User}@${TargetIP}" "$RemoteCmd"

Write-Host "✅ Deployment and executable permissions set." -ForegroundColor Green