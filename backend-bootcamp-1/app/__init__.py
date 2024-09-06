from fastapi import FastAPI
from starlette.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.domain.exceptions import HTTPException
from app.api import api

def create_app():
    app = FastAPI()

    app.include_router(api.router, prefix="/api")

    # Apply CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # React frontend origin
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(HTTPException)
    async def exception_handler(_, exception: HTTPException):
        return JSONResponse(
            status_code=exception.status_code,
            content={"error_body": {"title": exception.title, "message": exception.message}}
        )


    return app