import { TestBed, inject } from '@angular/core/testing';

import { RepositoriesService } from './repositories.service';

describe('GithubRepositoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriesService]
    });
  });

  it('should be created', inject([RepositoriesService], (service: RepositoriesService) => {
    expect(service).toBeTruthy();
  }));
});
