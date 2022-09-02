import { Injectable } from '@angular/core';

@Injectable({
  provideOn: 'root'
})
export InjOnRoot {

}

@Injectable({
  provideOn: 'paltform'
})
export InjOnPlatform {

}

@Injectable({
  provideOn: 'any'
})
export InjOnAny {

}

@Injectable()
export class InjectableService {
  constructor() {}
}
