import { Observable, of } from 'rxjs'
import { BackendError } from 'src/app/types/models'

export interface IBackendErrorGetter {
  error$: Observable<BackendError>
}

export abstract class BackendErrorGetter implements IBackendErrorGetter {
  abstract error$: Observable<BackendError>
}

export class DefaultBackendErrorGetter extends BackendErrorGetter {
  error$ = of(undefined) as Observable<BackendError>
}
