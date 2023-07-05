# Nest CRUD Deployment to Vercel

## Add the custom vecel-build command

```json
 "vercel-build":"prisma generate && prisma migrate deploy && pnpm run build",
 ```

 ## vercel.json


 ```json
 {
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS"
      ]
    }
  ],
  "env": {
    "DATABASE_URL": "postgres://amm834:fT8wKmvAkg1U@ep-soft-credit-377725-pooler.ap-southeast-1.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=10",
    "DIRECT_URL": "postgres://amm834:fT8wKmvAkg1U@ep-soft-credit-377725.ap-southeast-1.aws.neon.tech/neondb?connect_timeout=10",
    "JWT_SECRET": "jwtsecret123"
  }
}
 ```