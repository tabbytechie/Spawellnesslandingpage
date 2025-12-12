-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Notification templates
CREATE TABLE notification_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    subject VARCHAR(255),
    body TEXT NOT NULL,
    channel VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sent notifications
CREATE TABLE sent_notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    template_id UUID REFERENCES notification_templates(id),
    recipient VARCHAR(255),
    subject VARCHAR(255),
    body TEXT,
    channel VARCHAR(50),
    status VARCHAR(50) DEFAULT 'sent',
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delivery_receipt JSONB
);

-- Indexes
CREATE INDEX idx_notification_templates_channel ON notification_templates(channel);
CREATE INDEX idx_sent_notifications_user_id ON sent_notifications(user_id);
CREATE INDEX idx_sent_notifications_template_id ON sent_notifications(template_id);
CREATE INDEX idx_sent_notifications_status ON sent_notifications(status);