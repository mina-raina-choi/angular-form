/*
 * We've got a ton of examples in this project. This interface defines the
 * structure of a single example.
 */

 export interface ExampleDef {
     label: string;
     name: string;
     path: string;
     component: any;
     dev?: boolean
 }