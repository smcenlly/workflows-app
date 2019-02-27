## Agenda
* Display app
* Display features like 
    * moving from route to the other while persisting state
    * persist state of page number of programs and each program's activities
    * display store in dev tools 
* Ask what state that each component needs
* Start with programs list component 
* Go through concepts below with examples from code
* Run tests 
  * "fit" and "xit"

## Concepts
* Store
* Queries (Selectors)
  * Easily tested. Check selectors.spec.ts
* Actions
  * No need to be tested
* Reducers
  * Simple pure tests
  * Display the ui reducer first to show the default behavior then show how  @ngrx/entity could help
* Effects
  * Async Operations
  * Marble tests
  * Logic is extracted outside components


## Notes
  * Components without Logic
  * Not all components should be connected to the store
    * For example, it makes sense that the form component (activity-form) would not be connected to the store. 
  * ChangeDetectionStrategy.OnPush reduces or eliminates the dirty checks that angular performs which enhances performance
  * Hardships
    * Boilerplate
      * schematics could help
    * Knowledge of rxjs
  * To be enhanced
    * Instead of using utilities in components like what I did in "activities-list" component, I could have used selectors which are probably better
    * Include router inside the state and do not let components navigate routes
