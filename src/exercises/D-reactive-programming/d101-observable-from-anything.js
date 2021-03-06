import { Observable } from 'rxjs'

/**
  #Task:
  Receive values from observable and show on the console.
  What happens if we have several consumers?

  #Goal:
  Showing that Observable can be created from any - even synchronous values

  #Porównaj:
  ../C-asynchronous-concepts/c206-promise-from-anything.js
*/

  new Observable( (observer) => {

    observer.next(1234);
  });

