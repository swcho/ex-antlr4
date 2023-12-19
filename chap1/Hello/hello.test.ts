import { CharStream, CommonTokenStream, Trees } from 'antlr4ng';
import { HelloLexer } from './.antlr/HelloLexer.js';
import { HelloParser } from './.antlr/HelloParser.js';

beforeEach(async () => {
  global.console = await import('console');
});

test('Hello parrt', () => {
  const src = `hello parrt`;
  const stream = new CharStream(src);
  const lexer = new HelloLexer(stream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new HelloParser(tokenStream);
  const parseTree = parser.r();
  console.log(Trees.toStringTree(parseTree, HelloParser.ruleNames));
  tokenStream.getTokens().map((t) => console.log(t.toString()));
});
