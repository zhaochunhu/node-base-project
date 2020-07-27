export interface AppOpts {
  port?: number;
  captcha?: boolean;
  layerName?: string;
  namespace?: string;
  salt?: string;
}

export interface RabbitMQOpts {
  url?: string;
  queueName?: string;
}

export interface ChickenUrlOpts {
  init?: string;
  batch?: string;
  code?: string;
  camera?: string;
  domain?: string;
}