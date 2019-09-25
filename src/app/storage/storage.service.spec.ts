import { TestBed } from '@angular/core/testing'

import { StorageService } from './storage.service'
import { StorageModule } from './storage.module'
import { Storage } from '@ionic/storage'
import faker from 'faker'
import SpyObj = jasmine.SpyObj
import { TokenType } from '../auth/store/types/SignIn'

describe('StorageService', () => {
  let storageSpy: SpyObj<Storage>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('Storage', ['get', 'set'])
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Storage,
          useValue: spy,
        },
        StorageModule,
      ],
    })
    storageSpy = TestBed.get(Storage)
  })

  describe('getUser', () => {
    it('should return parsed user', async () => {
      const service: StorageService = TestBed.get(StorageService)
      const fakeUser = {
        id: faker.random.number(),
        tokenType: TokenType.Bearer,
        accessToken: faker.random.uuid(),
        user: {
          id: faker.random.number(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          roles: []
        }
      }
      storageSpy.get.and.returnValue(Promise.resolve(JSON.stringify(fakeUser)))

      expect(await service.getUser()).toEqual(fakeUser)
    })

    it('should return undefined in case user not exists', async () => {
      const service: StorageService = TestBed.get(StorageService)
      const fakeUser = undefined
      storageSpy.get.and.returnValue(Promise.resolve(fakeUser))

      expect(await service.getUser()).toEqual(fakeUser)
    })
  })
})
