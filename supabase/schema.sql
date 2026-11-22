create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id text primary key,
  user_id uuid references public.users (id) on delete cascade,
  plan text not null,
  quantity integer not null default 1,
  subtotal integer not null default 0,
  discount integer not null default 0,
  add_on integer not null default 0,
  shipping integer not null default 0,
  total integer not null,
  promo text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  customer_name text,
  customer_email text,
  customer_phone text,
  customer_address text,
  customer_city text,
  customer_postal_code text,
  customer_country text
);

create index if not exists orders_user_id_idx on public.orders (user_id);
