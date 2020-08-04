import { Server, IndexController } from '@scripty/server';
import dotenv from 'dotenv'

const init = async () => {
    dotenv.config();

    let server = new Server();

    await server.addController(new IndexController({ title: '@scripty/react-modal' }));
    server.start(3016);
};

init().catch((err) => {
    console.error(err.message);
});
