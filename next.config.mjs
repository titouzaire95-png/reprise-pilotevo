create table if not exists trade_in_cases (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  brand text not null,
  model text not null,
  trim text,
  year integer,
  mileage integer,
  energy text,
  gearbox text,
  client_price integer,
  vehicle jsonb not null,
  comparables jsonb not null default '[]'::jsonb,
  result jsonb not null,
  status text not null default 'draft'
);

create index if not exists trade_in_cases_created_at_idx on trade_in_cases(created_at desc);
create index if not exists trade_in_cases_brand_model_idx on trade_in_cases(brand, model);
