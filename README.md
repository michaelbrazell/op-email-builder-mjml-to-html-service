# Email Generator Service

A microservice that converts MJML markup to responsive HTML for emails.

## Setup

```bash
# Install dependencies
npm install

# Start the server
npm start

# Start with auto-reload during development
npm run dev
```

## API

### Convert MJML to HTML

**Endpoint:** `POST /convert`

**Request Body:**

```json
{
  "mjmlContent": "<mjml>...</mjml>"
}
```

**Response:**

```json
{
  "html": "<!DOCTYPE html>..."
}
```

### Health Check

**Endpoint:** `GET /health`

**Response:**

```json
{
  "status": "ok"
}
```

## Example Usage

```bash
curl -X POST http://localhost:3000/convert \
  -H "Content-Type: application/json" \
  -d '{"mjmlContent": "<mjml><mj-body><mj-section><mj-column><mj-text>Hello World</mj-text></mj-column></mj-section></mj-body></mjml>"}'
```