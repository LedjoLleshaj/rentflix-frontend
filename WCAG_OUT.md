- [ ] 1.1.1 Non-text Content: All non-text content that is presented to the user has a text alternative that serves the
  equivalent purpose

  > Emoji: Basta mettere aria-hidden="true"

- [ ] 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be
  programmatically determined or are available in text.

  > Guardare axe DevTools

- [ ] 1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading
  sequence can be programmatically determined.

  > È stato rispettato ad esempio nella definizione della navbar e della appbar.

- [ ] ~~1.3.3 Sensory Characteristics: Instructions provided for understanding and operating content do not rely solely on~~
  ~~sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.~~

- [ ] 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action,
  prompting a response, or distinguishing a visual element.

  > In ogni input è presente un bordo rosso e un testo che indica il tipo di errore, se la validazione non è andata a buon fine

- [ ] 2.1.1 Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific
  timings for individual keystrokes, except where the underlying function requires input that depends on the path of the
  user's movement and not just the endpoints.

  > Tutto il sito è navigabile con la tastiera usando `tab` e `shift + tab`


- [ ] 2.1.2 No Keyboard Trap: If keyboard focus can be moved to a component of the page using a keyboard interface, then
  focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified
  arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

  > È stato rispettato ad esempio nei dialog di dettaglio film, dettaglio noleggio e nuovo noleggio


- [ ] ~~2.1.4 Character Key Shortcuts: If a keyboard shortcut is implemented in content using only letter (including upper-~~
  ~~and lower-case letters), punctuation, number, or symbol characters~~

- [ ] 2.3.1 Three Flashes or Below Threshold: Web pages do not contain anything that flashes more than three times in any
  one second period, or the flash is below the general flash and red flash thresholds.

  > Il nostro sito non contiene niente che lampeggi

- [ ] ~~2.4.1 Bypass Blocks: A mechanism is available to bypass blocks of content that are repeated on multiple Web pages (~~
  ~~navigation buttons)~~

- 2.4.2 Page Titled: Web pages have titles that describe topic or purpose.

  > Ogni pagina ha il titolo corretto

- 2.4.3 Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or
  operation, focusable components receive focus in an order that preserves meaning and operability.

  >Ogni elemento e navigabile con `tab` nel ordine che si dovrebbe anche leggere


- ~~2.4.4 Link Purpose (In Context): The purpose of each link can be determined from the link text alone or from the link~~
  ~~text together with its programmatically determined link context, except where the purpose of the link would be~~
  ~~ambiguous to users in general.~~

  >Non abbiamo link? ma nella sidebar solo buttoni che reinderizzano la view

- 2.5.1 Pointer Gestures: All functionality that uses multipoint or path-based gestures for operation can be operated
  with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.

  >Nelle slider della tabella quando si parla di dimensioni piccole e possibile cambiare usando arrayKey e anche mouse pointer.
  
- 2.5.2 Pointer Cancellation: For functionality that can be operated using a single pointer, at least one of the
  following is true:

  - No Down-Event: The down-event of the pointer is not used to execute any part of the function;
  - Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function
    before completion or to undo the function after completion;
  - Up Reversal: The up-event reverses any outcome of the preceding down-event;
  - Essential: Completing the function on the down-event is essential.

  >Si puo cancellare l'esecuzione di un evento se l'utente tennendo il mouse cliccatto esce fuori dal elemento e poi lancia il click.Questo e un comportamento default quando come event trigger viene usato (click) che succede quando il mouse finisce il click.Per tornare dietro oppure revertire lesecuzione negli elementi di one click basta clicckare di nuovo (light/dark/mode...login/logout...cambiare view) negli altri e sempre richiesto una conferma (fare un rent non e neanche 1 clickable)

- 2.5.3 Label in Name !!: For user interface components with labels that include text or images of text, the name
  contains the text that is presented visually.

  >le aria labels che abbiamo messo sono uguali al testo visivo e a volte anche piu verbosi.x
  
- ~~2.5.4 Motion Actuation: Functionality that can be operated by device motion or user motion can also be operated by~~
  ~~user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:~~
  
  - ~~Supported Interface: The motion is used to operate functionality through an accessibility supported interface;~~
  - ~~Essential: The motion is essential for the function and doing so would invalidate the activity.~~
  
- ~~3.1.1 Language of Page: The default human language of each Web page can be programmatically determined.~~

  >Not yet...

- 3.2.1 On Focus: When any component receives focus, it does not initiate a change of context.

  >Ogni componente interativo deve essere cliccato per cambiare il contesto(interaggire) on focus ci sono solo cambiamenti di stilo per evidenziare il tipo di elemento. 

- ~~3.2.2 On Input: Changing the setting of any user interface component does not automatically cause a change of context~~
  ~~unless the user has been advised of the behavior before using the component.~~

- 3.3.1 Error Identification: If an input error is automatically detected, the item that is in error is identified and
  the error is described to the user in text.

  >fatto nella validazione di login se input non e di lunghezza minima ed e anche facile vedere dove bisogna mettere le info.
  
- 3.3.2 Labels or Instructions: Labels or instructions are provided when content requires user input.

  >ogni input field e sempre dentro una mat-form che garantisce il label.(nella login non ce mat-label, nella search title c'e)

- ~~4.1.1 Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are~~
  ~~nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except~~
  ~~where the specifications allow these features.~~

- 4.1.2 Name, Role, Value: For all user interface components (including but not limited to: form elements, links and
  components generated by scripts), the name and role can be programmatically determined; states, properties, and values
  that can be set by the user can be programmatically set; and notification of changes to these items is available to
  user agents, including assistive technologies.
  
  >fatto dapertutto

Level AA:

- 1.3.4 Orientation: Content does not restrict its view and operation to a single display orientation, such as portrait
  or landscape, unless a specific display orientation is essential.
  
  >il nostro app funziona in entrambi i modi(portrait/landscape) anche se per mobile e consigliabile usare landscape soprattuo per le tabelle ogni funzionamento e garantito in qualsiasi dimensione.
  
- ~~1.3.5 Identify Input Purpose: The purpose of each input field collecting information about the user can be~~
  ~~programmatically~~
  
  >Non abbiamo implementato la autocomplete.
  
- 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1

  >Controllato con AXE devtools e risolto.

- 1.4.4 Resize text: Except for captions and images of text, text can be resized without assistive technology up to 200
  percent without loss of content or functionality.
  
  >Abbiamo implementato la (zoom-in/zoom-out) che aiuta a cambiare le dimensioni della pagina (non solo text)
  
- (Check) 1.4.10 Reflow: Content can be presented without loss of information or functionality, and without requiring
  scrolling in two dimensions
  
  > La pagina e testata con le dimensioni di tablet mobile e desktop ed garantito la responsiveness
  
- (Check) 1.4.11 Non-text Contrast: The visual presentation of the following have a contrast ratio of at least 3:1
  against adjacent color(s)
  
  >Garantito ta material e testato con AXE devtools
  
- (Check) 1.4.13 Content on Hover or Focus: Where receiving and then removing pointer hover or keyboard focus triggers
  additional content to become visible and then hidden, the following...
  
  Abbiamo usato sia hover mettendo una shadow sia cambiando il pointer.
  
- (Check) 2.4.6 Headings and Labels: Headings and labels describe topic or purpose.

  >Abbiamo sempre messo la label per input

- (Check) 2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where the keyboard focus
  indicator is visible.
  
  >Garantito da Material
  
- ~~3.1.2 Language of Parts: The human language of each passage or phrase in the content can be programmatically~~
  ~~determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have~~
  ~~become part of the vernacular of the immediately surrounding text.~~
  
  >Non abbiamo language changes
  
- 3.2.3 Consistent Navigation: Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages
  occur in the same relative order each time they are repeated, unless a change is initiated by the user.
  
  >Gli elementi sono sempre nello stesso ordine.
  
- 3.2.4 Consistent Identification: Components that have the same functionality within a set of Web pages are identified
  consistently.
  
  >Per i buttoni che cambiano funzionalita (dark/light mode) cambia anche la aria label sempre
  
-  3.3.3 Error Suggestion: If an input error is automatically detected and suggestions for correction are known, then the
  suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
  
  >Nella login form abbiamo implementato la validazione che da anche il tipo di errore(>4  char...) Non diamo suggerimenti nella serach title siccome abbiamo fatto in modo che la tabella si aggiorna continuamente.
  
- 3.3.4 Error Prevention (Legal, Financial, Data): For Web pages that cause legal commitments or financial transactions
  for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test
  responses, at least one of the following is true:
  
  - ~~Reversible: Submissions are reversible.~~
  - Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct
    them.
  
  >La data viene preso gia in formato corretto siccome lutente sceglie tra le possibile opzioni
  
  - Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the
    submission.
  
  >Abbiamo una confirmation dialog quando si fa la renting di un film
  
- ~~4.1.3 Status Messages: In content implemented using markup languages, status messages can be programmatically~~
  ~~determined through role or properties such that they can be presented to the user by assistive technologies without~~
  ~~receiving focus.~~
  
  
  
  

L'attributo role: specifica il ruolo (semantica) dell'elemento (button, checkbox, tree, tablist, tab, ecc);

- proprietà aria-label, aria-labelledby, aria-valuenow, ecc.: attributi che descrivono la natura di un dato oggetto.
- Una modifica di una proprietà può avere un impatto rilevante sul significato o sulla presentazione di un oggetto;
- stati aria-checked, aria-selected, ecc.: proprietà dinamiche che esprimono le caratteristiche di un oggetto.
- Possono cambiare in risposta ad azioni intraprese dall'utente o a processi automatizzati.
- Gli stati non influenzano la natura essenziale dell'oggetto, ma rappresentano i dati associati all'oggetto o alle
  possibilità di interazione dell'utente con esso.
