# STYN - Social Platform

A Facebook-inspired social networking home page built with React, Tailwind CSS, and Express.

## Deployment Instructions (CyberPanel / Node.js)

1. **Upload Files**: Upload all project files to your server (e.g., in `/home/domain.com/public_html/`).
2. **Terminal Access**: Open your terminal and navigate to the project directory:
   ```bash
   cd /home/domain.com/public_html/
   ```
   *Note: If you cloned into a subdirectory (like `stynaaa`), make sure to `cd` into that folder first:*
   ```bash
   cd stynaaa
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Build the App**:
   ```bash
   npm run build
   ```
5. **Start the Server**:
   ```bash
   npm start
   ```

## Using PM2 (Recommended for Production)
If you want the app to stay running in the background, use PM2:
```bash
# 1. Start the app directly with Node
pm2 start server.js --name "styn"

# 2. To see logs
pm2 logs styn

# 3. To stop the app
pm2 stop styn
```

## Troubleshooting
- **Command not found**: You likely forgot the `start` keyword. Use `pm2 start ...` instead of just `pm2 ...`.
- **File not found**: Ensure your file is named `server.js` (not `server.ts`).
- **Vulnerabilities**: If `npm install` shows vulnerabilities, you can run `npm audit fix`, but most are related to the development build tools and won't affect your live site.
