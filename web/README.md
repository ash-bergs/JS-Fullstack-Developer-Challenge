This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

**Solution Overview:**

For this challenge, I created a Next.js project within the `web` directory. The project includes:

1. **Welcome Landing Page:** A simple landing page that routes to a login form.
2. **Login Form:** Using "test@example.com" and "password", the user can log in and be routed to the `/video` page.
3. **Video Page:** Displays a video hosted on S3. The video is publicly available for read access.

**Challenges & Future Improvements:**

1. **Authentication:** The authentication implementation in this project uses NextAuth, but for a more robust solution, I would:

   - Integrate an OAuth provider for better security.
   - Enhance the credentials provider, possibly implementing encryption for sensitive data.
   - Resolve the missing environment variables (`NEXTAUTH_URL`, `JWT_SECRET`), which currently cause errors in the app.

2. **Deployment Struggles:**
   - I encountered difficulties with deploying the app to AWS Amplify. The issue seems to stem from misconfigurations, possibly in the `next.config.js`, the Amplify `amplify.yml`, or missing environment variables.
   - I believe with more time, these issues could have been resolved by reviewing the deployment settings, debugging the environment variables, and adjusting the build configurations.

**Conclusion:**
While the project functions as intended for the given challenge, there are areas that would benefit from more time to refine, especially around authentication and deployment.

---
