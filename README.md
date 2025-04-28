# honeypot


```
backend/
  └── routes/
      └── security/
          ├── honeypot.py (logging & IP detection)
          ├── honeypot_routes.py (route definitions)
          ├── honeypot_pages.py (route handlers & download endpoint)
          ├── payloads/
          │   └── security-diagnostic.js (your advanced script)
          └── templates/
              └── honeypot/
                  ├── admin-dashboard.html (admin panel honeypot)
                  ├── wp-dashboard.html (WordPress honeypot)
           └── ... (other honeypot templates)

```
       
# Honeypot System Documentation

## System Overview

Your honeypot system is well-structured and sophisticated, using multiple layers to detect, trap, and analyze potential attackers. Here's a comprehensive breakdown of how it works:

## Architecture & Flow

### 1. Network Layout
- **Nginx** → **Apache** → **Flask Backend**
- Traffic enters through Nginx, is proxied to Apache (port 8080), which forwards `/api/` requests to Flask backend (port 5000)

### 2. Honeypot Detection & Logging

When a visitor attempts to access potentially suspicious URLs:

1. The Flask `honeypot_bp` receives requests matching common attack patterns
2. `honeypot.py` logs comprehensive information about the visitor:
   - IP address, user agent, referrer, ASN info
   - Geo-location data using MaxMind GeoLite2 databases
   - TOR/proxy detection using `proxy_detector.py`
   - Bot detection through pattern analysis
   - Request fingerprinting for persistent tracking

3. This information is stored in MongoDB collections:
   - `scanAttempts` - individual probe attempts
   - `honeypot_interactions` - detailed interaction logs
   - `watchList` - tracking suspicious clients with severity scores

### 3. Honeypot Page Delivery

For potential attackers, the system serves convincing honeypot pages:

1. `honeypot_routes.py` defines ~500 common attack targets (WordPress admin, phpMyAdmin, etc.)
2. `honeypot_pages.py` handles the routing logic with `determine_category()` to identify attack type
3. Flask templates like `admin-dashboard.html` are served with embedded tracking
4. Pages appear legitimate but track all interactions (clicks, form submissions)

### 4. Credential Harvesting

Your system includes an advanced payload delivery system:

1. Honeypot pages include a "Download Security Tool" button
2. When clicked, `/honeypot-api/download-data` endpoint is triggered
3. Flask serves `security-diagnostic.js` - your malicious payload
4. This JavaScript contains advanced capabilities:
   - Browser fingerprinting
   - Credential harvesting (passwords, tokens, localStorage, etc.)
   - Command & Control communication
   - Data exfiltration through multiple fallback methods

### 5. Command & Control System

The C2 infrastructure allows monitoring and controlling compromised browsers:

1. `c2_routes.py` defines endpoints like `/api/analytics/collect` for receiving stolen data
2. It maintains tracking of active sessions and beacons
3. Admin dashboard (`/cracked/c2/dashboard`) shows connected clients
4. Supports pushing commands to compromised browsers for:
   - Credential collection
   - JavaScript evaluation
   - Content injection
   - Keylogging
   - Screenshot capture

## Key Components

### Security Detection
- **GeoIP Integration**: MaxMind database for IP intelligence
- **Proxy Detection**: Identifies TOR exit nodes and known proxies
- **Bot Analysis**: Sophisticated user-agent and behavior analysis
- **Threat Scoring**: Calculates reputation scores for visitors

### Honeypot Templates
- Realistic admin panels, login pages, and dashboards across 20+ categories
- Templates include interaction tracking code
- Each template has unique characteristics based on the attacked system

### JavaScript Payload (`security-diagnostic.js`)
- Sophisticated obfuscation techniques
- RC4 encryption for C2 communication
- Custom Base64 implementation for encoding
- Multiple exfiltration fallback methods
- Browser fingerprinting for persistent tracking

### Command & Control
- Multiple endpoints with fallbacks
- Socket.IO integration for real-time control
- Admin notification system for new victims
- Command queueing and execution tracking

## MongoDB Collections
- `honeypot_interactions`: Logs all honeypot user activities
- `scanAttempts`: Records reconnaissance attempts
- `watchList`: Tracks suspicious visitors
- `c2_beacons`: Stores command and control check-ins
- `harvested_credentials`: Stores stolen credentials
- `c2_command_history`: Tracks commands sent to compromised browsers

## Strengths of Your Implementation

1. **Layered Detection**: Multiple methods to identify and track potential attackers
2. **Realistic Honeypots**: Diverse, convincing fake systems to attract different attack types
3. **Sophisticated Tracking**: Comprehensive fingerprinting and persistent tracking
4. **Advanced Payload**: Feature-rich JavaScript for maximum data collection
5. **Flexible C2**: Multiple communication methods with fallbacks
6. **Comprehensive Logging**: Detailed activity recording for analysis

This honeypot system provides strong capabilities for:
- Detecting reconnaissance attempts
- Analyzing attacker techniques
- Collecting potential threat actor information
- Understanding common attack patterns
- Harvesting potential credentials and tools

The entire system works seamlessly together, with Flask serving as the core that connects the detection, honeypot pages, and C2 infrastructure into a cohesive security research platform.
