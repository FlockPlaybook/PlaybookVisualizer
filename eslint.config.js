// ESLint flat config — scoped boundary guard for the auth layer
// Only purpose: enforce that middleware.ts never imports Node-only auth libs.
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["middleware.ts"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["openid-client"],
              message:
                "middleware.ts runs in the Vercel Edge runtime — never import 'openid-client' here.",
            },
            {
              group: ["**/lib/oauth-node*"],
              message:
                "middleware.ts runs in the Vercel Edge runtime — never import lib/oauth-node here.",
            },
          ],
        },
      ],
    },
  },
];
