import { Scenario } from './Scenario.class.js'

export namespace Once {
    enum Mode {
        /**
         * Running inside a browser using <script type="module"> tag
         */
        BROWSER,
        /**
         * Running inside a browser inside an iFrame, so it can use host ONCE
         */
        IFRANE,
        /**
         * Running on a device OS natively e.g. iOS, Android, ShiftOS
         * NOT IMPLEMENTED YET
         */
        NATIVE,
        /**
         * Running on a NodeJS Server
         */
        NODESERVER,
        /**
         * Running inside a ServiceWorker
         */
        SERVICEWORKER,
        /**
         * Running inside a WebWorker
         */
        WEBWORKER
    }

    export class Once {
      private constructor () {

      }

      static async init (scenario?:Scenario) {
        console.log('Once.created')
        if (scenario) {
        }
        return new Once()
      }

      static async start () {
        console.log('start.Once')
        const instance = await Once.init()
        return instance
      }
    }
}
