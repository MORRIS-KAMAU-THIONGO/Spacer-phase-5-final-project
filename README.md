# Spacer — Book Unique Spaces for Meetings, Creation & Celebrations

Spacer is a platform that brings people together to **meet**, **create**, and **celebrate** by making it easy to find and book unique spaces by the hour or day. Space owners can list spaces, and clients can browse, authenticate (local/social), book, and receive simulated billing/invoicing.

---

## Table of Contents
- [Problem](#problem)
- [Solution](#solution)
- [MVP Features](#mvp-features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Docs](#api-docs)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## Problem
Communities and teams often struggle to find welcoming, flexible spaces to gather around shared passions—whether for collaboration, events, workshops, or milestone celebrations.

## Solution
Spacer provides:
- An online marketplace to **discover and book spaces**
- Tools for owners/admins to **list and manage spaces**
- Booking flows for clients with **duration-based pricing**
- Booking status updates to prevent double-booking
- An agreement/incubator workflow and **simulated payments** (billing + invoicing)

---

## MVP Features

### Admin Module
- Add spaces
- View and edit spaces (with full space details)
- Add users by roles and permissions
- View all users

### Client Module
- View available spaces
- View space details
- Authentication
  - Local auth
  - Social auth (optional / configurable)
- Book a space
  - Specify duration
  - Total amount auto-calculated based on duration
  - Booking status changes to unavailable until released/updated
- Agreement incubator
- Simulated payment flow (billing and invoicing)

---

## Tech Stack
**Backend**
- Python (Flask or FastAPI)
- JWT Authentication
- PostgreSQL

**Frontend**
- ReactJS
- Redux Toolkit (state management)

**Testing**
- Frontend: Jest
- Backend: Python unit tests (e.g., `pytest` or `unittest`)

**Design**
- Figma wireframes (mobile-friendly)

---

## Repository Structure

spacer/
backend/
app/
core/
database/
auth/
payments/
utils/
tests/
requirements.txt
.env.example
frontend/
src/
public/
package.json
.env.example
README.md

