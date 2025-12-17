load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 045 activates: kills people');
  return {phase: 1.27362};
});

print('Mongoose OS Brain 045 online – hydrogen valve ready');
