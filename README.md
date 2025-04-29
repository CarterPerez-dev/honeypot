# honeypot
```json
[
  {
    "_id": "68103ae89e98be55e4cd7577",
    "cookies": {
      "session": "0iYo-Pg0c4np46avNIEAA-63S3nDtQqOMJJjROMfRRw.j9mbSxFedtg39a2VS3jt5aifo6U"
    },
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en,en-AU;q=0.9",
      "Connection": "Keep-Alive",
      "Cookie": "session=0iYo-Pg0c4np46avNIEAA-63S3nDtQqOMJJjROMfRRw.j9mbSxFedtg39a2VS3jt5aifo6U",
      "Host": "192.168.1.172:8080",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Forwarded-For": "192.168.1.69",
      "X-Forwarded-Host": "192.168.1.172:8080",
      "X-Forwarded-Server": "apache"
    },
    "http_method": "GET",
    "interaction_id": "d695c179284991288db62a2c660496d642489501bc43bf07f7fac6d3b5059bac",
    "interaction_type": "page_view",
    "ip_address": "192.168.1.69",
    "page_type": "admin_panels",
    "path": "/admin/login",
    "query_string": {},
    "referer": "",
    "timestamp": "2025-04-29T02:35:20.846000",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
  },
  {
    "_id": "680f985cc8fd76aa066a7e48",
    "cookies": {
      "session": "v3_HmuQXLVqd3hKPwz3bIAmDrrqjaItqFrfGV_kCUio.M1fUQdwJsx-Ia3m3Tf9zULcb36k"
    },
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en,en-AU;q=0.9",
      "Cache-Control": "max-age=0",
      "Connection": "Keep-Alive",
      "Cookie": "session=v3_HmuQXLVqd3hKPwz3bIAmDrrqjaItqFrfGV_kCUio.M1fUQdwJsx-Ia3m3Tf9zULcb36k",
      "Host": "192.168.1.172:8080",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Forwarded-For": "192.168.1.69",
      "X-Forwarded-Host": "192.168.1.172:8080",
      "X-Forwarded-Server": "apache"
    },
    "http_method": "GET",
    "interaction_id": "c4bb040686cf19633a590cecd2e2228f1fc92a934a56d1e0e1ec1db0a538ba53",
    "interaction_type": "page_view",
    "ip_address": "192.168.1.69",
    "page_type": "admin_panels",
    "path": "/admin/login",
    "query_string": {},
    "referer": "",
    "timestamp": "2025-04-28T15:01:48.395000",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
  },
  {
    "_id": "680f8b8cef0a23521c15f34a",
    "cookies": {},
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en,en-AU;q=0.9",
      "Connection": "Keep-Alive",
      "Host": "192.168.1.172:8080",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Forwarded-For": "192.168.1.69",
      "X-Forwarded-Host": "192.168.1.172:8080",
      "X-Forwarded-Server": "apache"
    },
    "http_method": "GET",
    "interaction_id": "6b69de945ccddef873139c4873395c20513812b893176aa0a412d9b609c332c9",
    "interaction_type": "page_view",
    "ip_address": "192.168.1.69",
    "page_type": "admin_panels",
    "path": "/admin/login",
    "query_string": {},
    "referer": "",
    "timestamp": "2025-04-28T14:07:08.251000",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
  }
]
```
# Explanation of Honeypot Interaction Data
-----
- `_id`: A unique database identifier for this record (like a fingerprint for the data entry)
- `cookies`: Shows the visitor had an active session cookie, which helps track their browsing session
- `headers`: Contains all the technical information sent by the visitor's browser:
  - `Accept`: Shows what content types the browser can handle (HTML, XML, images, etc.)
  - `Accept-Encoding`: Compression methods the browser supports (gzip, deflate)
  - `Accept-Language`: Visitor prefers English content, specifically Australian English as secondary
  - `Connection`: Browser wants to keep the connection open for faster loading
  - `Cookie`: The actual session cookie value being sent
  - `Host`: The server name and port being accessed (your local IP address)
  - `Upgrade-Insecure-Requests`: Browser is willing to upgrade to HTTPS if available
  - `User-Agent`: Visitor is using Chrome 135 on Windows 10
  - `X-Forwarded-For`: Original IP address of visitor 
  - `X-Forwarded-Host/Server`: Information about the proxy server configuration
- `http_method`: Visitor used a GET request (just viewing the page, not submitting data)
- `interaction_id`: A unique ID for this specific visitor interaction
- `interaction_type`: This was a simple page view (someone looking at the page)
- `ip_address`: The visitor's IP address on your local network
- `page_type`: This honeypot is simulating an admin panel login page
- `path`: The specific URL path visited (/admin/login)
- `query_string`: Empty object means no extra parameters were in the URL
- `referer`: Empty value means they typed the URL directly or used a bookmark
- `timestamp`: Exact date and time of the visit (April 29, 2025, 2:35 AM UTC)
- `user_agent`: Full details of the visitor's browser and operating system

The other two records follow the same pattern but are from earlier visits (April 28, 2025), with slightly different session cookies and request details but accessing the same admin login honeypot.


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
