import { Injectable } from '@angular/core';
import { CustomConfig } from './config.module';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private config: CustomConfig) {}

  public getConfig(): CustomConfig {
    return this.config;
  }

  public getApiEndpoint(): string {
    return this.config.apiEndpoint;
  }
}
