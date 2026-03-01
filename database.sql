--
-- PostgreSQL database dump
--

\restrict ON3iHffJYaixj3sWo1JCxLcy5sYKkjCAfLYmcj9kFsqjFFVj5CZIaiMrs7mAhLM

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    session_id uuid,
    client_id uuid,
    amount integer NOT NULL,
    status character varying(50) DEFAULT 'pending'::character varying,
    payment_method character varying(100),
    transaction_id character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.payments OWNER TO postgres;

--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    session_id uuid,
    trainer_id uuid,
    client_id uuid,
    rating integer,
    comment text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT reviews_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    trainer_id uuid,
    client_id uuid,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone NOT NULL,
    duration_minutes integer DEFAULT 60,
    status character varying(50) DEFAULT 'scheduled'::character varying,
    price integer NOT NULL,
    commission_amount integer,
    trainer_earnings integer,
    notes text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: trainer_schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trainer_schedules (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    trainer_id uuid,
    day_of_week integer,
    start_time time without time zone,
    end_time time without time zone,
    is_available boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.trainer_schedules OWNER TO postgres;

--
-- Name: trainers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trainers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    specialization character varying(100),
    bio text,
    hourly_rate integer DEFAULT 5000,
    rating numeric(3,2) DEFAULT 0,
    reviews_count integer DEFAULT 0,
    photo_url text,
    verified boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.trainers OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(20),
    avatar_url text,
    bio text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payments (id, session_id, client_id, amount, status, payment_method, transaction_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, session_id, trainer_id, client_id, rating, comment, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, trainer_id, client_id, start_time, end_time, duration_minutes, status, price, commission_amount, trainer_earnings, notes, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trainer_schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trainer_schedules (id, trainer_id, day_of_week, start_time, end_time, is_available, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trainers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trainers (id, user_id, specialization, bio, hourly_rate, rating, reviews_count, photo_url, verified, created_at, updated_at) FROM stdin;
2e8646bd-4ad7-476f-b890-3d55ebd2c35f	ae961f36-2610-4010-b962-3a884efe1c85	Йога	Опытный профессиональный тренер с 5+ годами опыта	5000	4.50	0	\N	t	2026-03-01 12:22:15.189993	2026-03-01 12:22:15.189993
e7b91835-ea63-42b7-9e8b-6875dd5151ad	f3468232-481b-464e-bbdc-9a6a29a8d3a5	Силовые тренировки	Опытный профессиональный тренер с 5+ годами опыта	5000	4.50	0	\N	t	2026-03-01 12:22:15.189993	2026-03-01 12:22:15.189993
2329bf7b-f6dd-411d-b33e-99c45d687b8a	ccbf6473-4b8a-4d1f-9935-76825ffef39e	Фитнес	Опытный профессиональный тренер с 5+ годами опыта	5000	4.50	0	\N	t	2026-03-01 12:22:15.189993	2026-03-01 12:22:15.189993
0af1d96e-e570-43df-bdfe-bac2d1da0c52	797683ab-f618-44d5-9550-93e87d44037e	Личный тренинг	Опытный профессиональный тренер с 5+ годами опыта	5000	4.50	0	\N	t	2026-03-01 12:22:15.189993	2026-03-01 12:22:15.189993
f5e125ad-62eb-464b-83f4-6bbd42e6239a	bcc37f98-6af1-4640-af00-d4f51c304673	Пилатес	Опытный профессиональный тренер с 5+ годами опыта	5000	4.50	0	\N	t	2026-03-01 12:22:15.189993	2026-03-01 12:22:15.189993
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, name, phone, avatar_url, bio, created_at, updated_at) FROM stdin;
ae961f36-2610-4010-b962-3a884efe1c85	alina@trainers.kz	Алина Сергеева	+77001234567	\N	Йога инструктор	2026-03-01 12:22:15.189266	2026-03-01 12:22:15.189266
f3468232-481b-464e-bbdc-9a6a29a8d3a5	dmitry@trainers.kz	Дмитрий Смирнов	+77007654321	\N	Тренер по силовым тренировкам	2026-03-01 12:22:15.189266	2026-03-01 12:22:15.189266
ccbf6473-4b8a-4d1f-9935-76825ffef39e	mariya@trainers.kz	Мария Петрова	+77009876543	\N	Фитнес тренер	2026-03-01 12:22:15.189266	2026-03-01 12:22:15.189266
797683ab-f618-44d5-9550-93e87d44037e	ivan@trainers.kz	Иван Кузнецов	+77005555555	\N	Личный тренер	2026-03-01 12:22:15.189266	2026-03-01 12:22:15.189266
bcc37f98-6af1-4640-af00-d4f51c304673	natasha@trainers.kz	Наталья Волкова	+77003333333	\N	Инструктор пилатеса	2026-03-01 12:22:15.189266	2026-03-01 12:22:15.189266
\.


--
-- Name: payments payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: trainer_schedules trainer_schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trainer_schedules
    ADD CONSTRAINT trainer_schedules_pkey PRIMARY KEY (id);


--
-- Name: trainers trainers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: payments payments_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payments payments_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.sessions(id) ON DELETE CASCADE;


--
-- Name: reviews reviews_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: reviews reviews_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.sessions(id) ON DELETE CASCADE;


--
-- Name: reviews reviews_trainer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_trainer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id) ON DELETE CASCADE;


--
-- Name: trainer_schedules trainer_schedules_trainer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trainer_schedules
    ADD CONSTRAINT trainer_schedules_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id) ON DELETE CASCADE;


--
-- Name: trainers trainers_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict ON3iHffJYaixj3sWo1JCxLcy5sYKkjCAfLYmcj9kFsqjFFVj5CZIaiMrs7mAhLM

