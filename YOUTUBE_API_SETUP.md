# YouTube API Setup Guide

## 🔑 Getting Your YouTube Data API Key

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click "Select a project" → "NEW PROJECT"
4. Enter project name (e.g., "Heavenly Glory YouTube API")
5. Click "Create"

### Step 2: Enable YouTube Data API
1. In your project, go to "APIs & Services" → "Library"
2. Search for "YouTube Data API v3"
3. Click on it and then click "Enable"

### Step 3: Create API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API key"
3. Copy the API key (it will look like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXX`)
4. **Important**: Restrict the key for security:
   - Click on the API key name
   - Under "Application restrictions", select "HTTP referrers"
   - Add your website domain (e.g., `*.heavenlyglory.org`)
   - Under "API restrictions", select "Restrict key"
   - Select "YouTube Data API v3"

## 📺 Getting Your Channel ID

### Method 1: From Channel URL
1. Go to your YouTube channel: https://www.youtube.com/@MichaelMuriithi-y5u
2. Look at the URL - it might show the channel ID
3. If not, view page source and search for `channelId`

### Method 2: Using API (after getting API key)
Use this JavaScript in browser console:
```javascript
// Replace with your API key
const API_KEY = 'YOUR_API_KEY_HERE';
const USERNAME = 'MichaelMuriithi-y5u';

fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${USERNAME}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            console.log('Channel ID:', data.items[0].id);
        }
    });
```

### Method 3: From Channel Page Source
1. Go to your channel page
2. Right-click → "View Page Source"
3. Search for `"channelId"`
4. The value will be your channel ID (starts with "UC")

## ⚙️ Configuration

### Replace in latest-sermons.html:
```javascript
const YOUTUBE_CONFIG = {
    API_KEY: 'YOUR_ACTUAL_API_KEY_HERE',     // Replace this
    CHANNEL_ID: 'YOUR_ACTUAL_CHANNEL_ID_HERE', // Replace this
    MAX_RESULTS: 6,
    // ... rest stays the same
};
```

## 🧪 Testing

### Test API Call:
```javascript
// Test in browser console
const API_KEY = 'your_key_here';
const CHANNEL_ID = 'your_channel_id_here';

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`)
    .then(response => response.json())
    .then(data => console.log(data));
```

## 📋 Example Values

Your configuration should look like:
```javascript
const YOUTUBE_CONFIG = {
    API_KEY: 'AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    CHANNEL_ID: 'UCxxxxxxxxxxxxxxxxxxxxxxxxxx',
    MAX_RESULTS: 6,
    // ...
};
```

## 🔒 Security Tips

1. **Never expose API key in client-side code in production**
2. **Use referrer restrictions** to limit API key usage
3. **Monitor API usage** in Google Cloud Console
4. **Set usage quotas** to prevent unexpected costs

## 💡 Alternative: Server-Side Proxy

For better security, consider:
1. Creating a simple server-side proxy
2. Store API key on server
3. Fetch data from your server instead of directly from YouTube API

## 🚀 Deployment Notes

- The API key will work on localhost during development
- For production, add your domain to API key restrictions
- Test thoroughly before going live
- Monitor API usage to stay within free tier limits

## 📞 Support

If you need help:
1. Check Google Cloud Console for API errors
2. Verify channel ID is correct
3. Ensure YouTube Data API v3 is enabled
4. Check API key restrictions
