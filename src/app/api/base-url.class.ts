import { InjectionToken } from '@angular/core'
import { environment } from 'src/environments/environment'

export const cmsUrl = new InjectionToken<string>('cmsUrl', {
  providedIn: 'root',
  factory: () => environment.cmsUrl
})

export const apiUrl = new InjectionToken<string>('apiUrl', {
  providedIn: 'root',
  factory: () => environment.apiUrl
})
