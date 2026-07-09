import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Доступ к dev-серверу по локальной сети (проверка с телефона/планшета).
  // На прод-сборку не влияет.
  allowedDevOrigins: ["10.120.7.166", "localhost"],
};

export default nextConfig;
