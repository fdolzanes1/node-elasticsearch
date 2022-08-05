import { Client } from '@elastic/elasticsearch'


function getClient() {
  const client = new Client({
    node: 'http://localhost:9200',
    auth: {
      username: 'elastic',
      password: 'changeme' 
    }
  });

  return client
  
}

export default getClient;