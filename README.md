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

## Configuration
- The server runs on port `3000` by default.
- Ensure your CyberPanel Node.js selector is pointed to `server.ts` (using `tsx`) or the compiled output.
