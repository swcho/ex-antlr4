// Generated from /Users/swcho/projects/swcho/ex-antlr4/chap1/Hello.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class HelloParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly ID = 2;
    public static readonly WS = 3;
    public static readonly RULE_r = 0;

    public static readonly literalNames = [
        null, "'hello'"
    ];

    public static readonly symbolicNames = [
        null, null, "ID", "WS"
    ];
    public static readonly ruleNames = [
        "r",
    ];

    public get grammarFileName(): string { return "Hello.g4"; }
    public get literalNames(): (string | null)[] { return HelloParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return HelloParser.symbolicNames; }
    public get ruleNames(): string[] { return HelloParser.ruleNames; }
    public get serializedATN(): number[] { return HelloParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, HelloParser._ATN, HelloParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public r(): RContext {
        let localContext = new RContext(this.context, this.state);
        this.enterRule(localContext, 0, HelloParser.RULE_r);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2;
            this.match(HelloParser.T__0);
            this.state = 3;
            this.match(HelloParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,3,6,2,0,7,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,4,0,2,1,0,0,0,2,3,5,
        1,0,0,3,4,5,2,0,0,4,1,1,0,0,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!HelloParser.__ATN) {
            HelloParser.__ATN = new antlr.ATNDeserializer().deserialize(HelloParser._serializedATN);
        }

        return HelloParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(HelloParser.literalNames, HelloParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return HelloParser.vocabulary;
    }

    private static readonly decisionsToDFA = HelloParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class RContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(HelloParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return HelloParser.RULE_r;
    }
}
