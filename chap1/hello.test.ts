import { CharStream, CommonTokenStream } from 'antlr4ng';
import { HelloLexer } from './.antlr/HelloLexer.js';
import { HelloParser } from './.antlr/HelloParser.js';

test('', () => {
  const src = `hello parrt`;
  const stream = new CharStream(src);
  const lexer = new HelloLexer(stream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new HelloParser(tokenStream);
  parser.r();
  // console.log(src);
});
