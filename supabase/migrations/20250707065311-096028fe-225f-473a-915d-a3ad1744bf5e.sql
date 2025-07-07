
-- Create tables for dynamic database connections
CREATE TABLE public.database_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  db_type VARCHAR(50) NOT NULL, -- 'mysql', 'postgresql', 'mongodb'
  host VARCHAR(255) NOT NULL,
  port INTEGER NOT NULL,
  database_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password_encrypted TEXT NOT NULL,
  schema_info JSONB, -- Store table schemas dynamically
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for storing query history
CREATE TABLE public.query_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  connection_id UUID REFERENCES public.database_connections(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  sql_query TEXT NOT NULL,
  execution_time FLOAT,
  row_count INTEGER,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for storing insights
CREATE TABLE public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  connection_id UUID REFERENCES public.database_connections(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  insight TEXT NOT NULL,
  suggested_chart VARCHAR(50),
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for storing forecasts
CREATE TABLE public.forecasts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  connection_id UUID REFERENCES public.database_connections(id) ON DELETE CASCADE,
  table_name VARCHAR(255) NOT NULL,
  date_column VARCHAR(255) NOT NULL,
  value_column VARCHAR(255) NOT NULL,
  periods INTEGER NOT NULL,
  forecast_data JSONB NOT NULL,
  ai_insight JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.database_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.query_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forecasts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can manage their own database connections" ON public.database_connections
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own query history" ON public.query_history
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own insights" ON public.insights
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own forecasts" ON public.forecasts
  FOR ALL USING (auth.uid() = user_id);
