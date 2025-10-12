-- CreateTable
CREATE TABLE "public"."Crew" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT,
    "role" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);
