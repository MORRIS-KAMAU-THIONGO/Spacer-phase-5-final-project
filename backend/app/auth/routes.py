from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import SessionLocal
from app.auth.schemas import (
    RegisterRequest,
    LoginRequest,
    TokenResponse
)
from app.auth.service import (
    register_user,
    authenticate_user
)

router = APIRouter()