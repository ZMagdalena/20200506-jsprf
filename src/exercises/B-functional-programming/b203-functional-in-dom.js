import { li } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

/**
    #Task:
    1. Show data items from the back-end as <li> list items in the DOM.
    2. Add the "Active women users" table next to "Active users"

    #Goal:
    Using functional programming in a practical example where we render something in the DOM.
*/

  // Data came from back-end as table of strings:
  const backendApiCallRequest = () => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna'];

  // Your solution:


  // DOM wrappers:
  const ulUserList = $('#userList');
  const sampleLi = li('Sample element <li>');

  ulUserList.appendChild(sampleLi);

  /*
    // Conceptual DOM layout for 2nd part of the task:
    <div class="row">
        <div class="col-6">
            <h6>Active users</h6>
            <ul id="userList" class="list-group">
                <li class="list-group-item">marian</li>
                <li class="list-group-item">stefan</li>
                ...
            </ul>
        </div>
        <div class="col-6">
            <h6>Active women users</h6>
            <ul id="womenList" class="list-group">
                <li class="list-group-item">jadwiga</li>
                <li class="list-group-item">anna</li>
                ...
            </ul>
        </div>
    </div>
  */
