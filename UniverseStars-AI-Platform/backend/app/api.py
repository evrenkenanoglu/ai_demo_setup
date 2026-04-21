from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize App
app = FastAPI(title="UniverseStars Core Engine")

# Add Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Models
class PromptRequest(BaseModel):
    query: str
    session_id: str

# Routes
@app.get("/")
async def root():
    return {"status": "online", "service": "UniverseStars Core"}

@app.post("/upload")
async def upload_document():
    return {"status": "success"}

@app.post("/generate")
async def generate_response(request: PromptRequest):
    return {"response": f"Processed: {request.query}"}

@app.delete("/clear_session/{session_id}")
async def clear_session(session_id: str):
    return {"status": "purged"}