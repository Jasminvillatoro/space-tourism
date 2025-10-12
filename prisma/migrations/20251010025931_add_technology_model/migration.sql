-- CreateTable
CREATE TABLE "public"."Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT,
    "description" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);
