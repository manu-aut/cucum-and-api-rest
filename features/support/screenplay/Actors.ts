import { Cast, Actor, TakeNotes } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';



export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(BrowseTheWeb.using(protractor.browser),
        TakeNotes.usingAnEmptyNotepad()
        
        );
    }
}