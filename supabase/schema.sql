create extension if not exists pgcrypto;

create table if not exists public.intake_submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('waitlist', 'partnership')),
  name text not null,
  email text not null,
  organization text,
  role text,
  interest text,
  profile_type text,
  access_type text,
  timeframe text,
  restrictions_acknowledged_at timestamptz,
  message text,
  consented_at timestamptz not null,
  verified_at timestamptz,
  verification_token uuid unique,
  created_at timestamptz not null default now()
);

alter table public.intake_submissions enable row level security;

alter table public.intake_submissions add column if not exists profile_type text;
alter table public.intake_submissions add column if not exists access_type text;
alter table public.intake_submissions add column if not exists timeframe text;
alter table public.intake_submissions add column if not exists restrictions_acknowledged_at timestamptz;

drop index if exists public.intake_waitlist_email_unique;
create unique index if not exists intake_kind_email_unique
on public.intake_submissions (kind, email);

comment on table public.intake_submissions is 'Private form submissions. Server-side service-role access only.';
