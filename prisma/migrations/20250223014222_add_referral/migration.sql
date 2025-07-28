-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "referrerName" TEXT NOT NULL,
    "referrerEmail" TEXT NOT NULL,
    "referrerPhone" TEXT NOT NULL,
    "referralName" TEXT NOT NULL,
    "referralPhone" TEXT NOT NULL,
    "referralEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);
