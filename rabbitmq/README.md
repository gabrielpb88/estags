# RabbitMQ

RabbitMQ é uma ferramenta de mensageria.

Mensagens são organizadas em filas (queues).

Dados podem ser escritos e lidos da fila, isso permite comunicação entre aplicações.

Porta padrão para gerenciamento do RabbitMQ: 15672

* A producer is a user application that sends messages.
* A queue is a buffer that stores messages.
* A consumer is a user application that receives messages.

The core idea in the messaging model in RabbitMQ is that the producer never sends any messages directly to a queue.

Instead, the producer can only send messages to an exchange. An exchange is a very simple thing. On one side it receives messages from producers and the other side it pushes them to queues. The exchange must know exactly what to do with a message it receives. Should it be appended to a particular queue? Should it be appended to many queues? Or should it get discarded. The rules for that are defined by the exchange type.

