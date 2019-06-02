import { Context } from '../../../src/common';
import { pass } from '../../test-utils';

describe('Miscellaneous - ranges', () => {
  pass('Miscellaneous - ranges (pass)', [
    [
      `let fun = () => {
        // one
        // two
        // three
        return (1);
    }`,
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'let',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ArrowFunctionExpression',
                  body: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ReturnStatement',
                        argument: {
                          type: 'Literal',
                          value: 1,
                          start: 81,
                          end: 82
                        },
                        start: 73,
                        end: 84
                      }
                    ],
                    start: 16,
                    end: 90
                  },
                  params: [],
                  async: false,
                  expression: false,
                  start: 10,
                  end: 90
                },
                id: {
                  type: 'Identifier',
                  name: 'fun',
                  start: 4,
                  end: 7
                },
                start: 4,
                end: 90
              }
            ],
            start: 0,
            end: 90
          }
        ],
        start: 0,
        end: 90
      }
    ],
    [
      'let',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Identifier',
              name: 'let',
              start: 0,
              end: 3
            },
            start: 0,
            end: 3
          }
        ],
        start: 0,
        end: 3
      }
    ],
    [
      'let.bar[foo]',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'MemberExpression',
              object: {
                type: 'MemberExpression',
                object: {
                  type: 'Identifier',
                  name: 'let',
                  start: 0,
                  end: 3
                },
                computed: false,
                property: {
                  type: 'Identifier',
                  name: 'bar',
                  start: 4,
                  end: 7
                },
                start: 0,
                end: 7
              },
              computed: true,
              property: {
                type: 'Identifier',
                name: 'foo',
                start: 8,
                end: 11
              },
              start: 0,
              end: 12
            },
            start: 0,
            end: 12
          }
        ],
        start: 0,
        end: 12
      }
    ],
    [
      '({f({x} = {x: 10}) {}});',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    name: 'f',
                    start: 2,
                    end: 3
                  },
                  value: {
                    type: 'FunctionExpression',
                    params: [
                      {
                        type: 'AssignmentPattern',
                        left: {
                          type: 'ObjectPattern',
                          properties: [
                            {
                              type: 'Property',
                              kind: 'init',
                              key: {
                                type: 'Identifier',
                                name: 'x',
                                start: 5,
                                end: 6
                              },
                              computed: false,
                              value: {
                                type: 'Identifier',
                                name: 'x',
                                start: 5,
                                end: 6
                              },
                              method: false,
                              shorthand: true,
                              start: 5,
                              end: 6
                            }
                          ],
                          start: 4,
                          end: 7
                        },
                        right: {
                          type: 'ObjectExpression',
                          properties: [
                            {
                              type: 'Property',
                              key: {
                                type: 'Identifier',
                                name: 'x',
                                start: 11,
                                end: 12
                              },
                              value: {
                                type: 'Literal',
                                value: 10,
                                start: 14,
                                end: 16
                              },
                              kind: 'init',
                              computed: false,
                              method: false,
                              shorthand: false,
                              start: 11,
                              end: 16
                            }
                          ],
                          start: 10,
                          end: 17
                        },
                        start: 4,
                        end: 17
                      }
                    ],
                    body: {
                      type: 'BlockStatement',
                      body: [],
                      start: 19,
                      end: 21
                    },
                    async: false,
                    generator: false,
                    id: null,
                    start: 3,
                    end: 21
                  },
                  kind: 'init',
                  computed: false,
                  method: true,
                  shorthand: false,
                  start: 2,
                  end: 21
                }
              ],
              start: 1,
              end: 22
            },
            start: 0,
            end: 24
          }
        ],
        start: 0,
        end: 24
      }
    ],
    [
      'var [x, , [, z]] = [1,2,[3,4]];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'Literal',
                      value: 1,
                      start: 20,
                      end: 21
                    },
                    {
                      type: 'Literal',
                      value: 2,
                      start: 22,
                      end: 23
                    },
                    {
                      type: 'ArrayExpression',
                      elements: [
                        {
                          type: 'Literal',
                          value: 3,
                          start: 25,
                          end: 26
                        },
                        {
                          type: 'Literal',
                          value: 4,
                          start: 27,
                          end: 28
                        }
                      ],
                      start: 24,
                      end: 29
                    }
                  ],
                  start: 19,
                  end: 30
                },
                id: {
                  type: 'ArrayPattern',
                  elements: [
                    {
                      type: 'Identifier',
                      name: 'x',
                      start: 5,
                      end: 6
                    },
                    null,
                    {
                      type: 'ArrayPattern',
                      elements: [
                        null,
                        {
                          type: 'Identifier',
                          name: 'z',
                          start: 13,
                          end: 14
                        }
                      ],
                      start: 10,
                      end: 15
                    }
                  ],
                  start: 4,
                  end: 16
                },
                start: 4,
                end: 30
              }
            ],
            start: 0,
            end: 31
          }
        ],
        start: 0,
        end: 31
      }
    ],
    [
      '({x,y,} = 0)',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Identifier',
                      name: 'x',
                      start: 2,
                      end: 3
                    },
                    value: {
                      type: 'Identifier',
                      name: 'x',
                      start: 2,
                      end: 3
                    },
                    kind: 'init',
                    computed: false,
                    method: false,
                    shorthand: true,
                    start: 2,
                    end: 3
                  },
                  {
                    type: 'Property',
                    key: {
                      type: 'Identifier',
                      name: 'y',
                      start: 4,
                      end: 5
                    },
                    value: {
                      type: 'Identifier',
                      name: 'y',
                      start: 4,
                      end: 5
                    },
                    kind: 'init',
                    computed: false,
                    method: false,
                    shorthand: true,
                    start: 4,
                    end: 5
                  }
                ],
                start: 1,
                end: 7
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 0,
                start: 10,
                end: 11
              },
              start: 1,
              end: 11
            },
            start: 0,
            end: 12
          }
        ],
        start: 0,
        end: 12
      }
    ],
    [
      '({x: y = z = 0} = 1)',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Identifier',
                      name: 'x',
                      start: 2,
                      end: 3
                    },
                    value: {
                      type: 'AssignmentPattern',
                      left: {
                        type: 'Identifier',
                        name: 'y',
                        start: 5,
                        end: 6
                      },
                      right: {
                        type: 'AssignmentExpression',
                        left: {
                          type: 'Identifier',
                          name: 'z',
                          start: 9,
                          end: 10
                        },
                        operator: '=',
                        right: {
                          type: 'Literal',
                          value: 0,
                          start: 13,
                          end: 14
                        },
                        start: 9,
                        end: 14
                      },
                      start: 5,
                      end: 14
                    },
                    kind: 'init',
                    computed: false,
                    method: false,
                    shorthand: false,
                    start: 2,
                    end: 14
                  }
                ],
                start: 1,
                end: 15
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 1,
                start: 18,
                end: 19
              },
              start: 1,
              end: 19
            },
            start: 0,
            end: 20
          }
        ],
        start: 0,
        end: 20
      }
    ],
    [
      '[...[...a[x]]] = b',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'RestElement',
                    argument: {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'RestElement',
                          argument: {
                            type: 'MemberExpression',
                            object: {
                              type: 'Identifier',
                              name: 'a',
                              start: 8,
                              end: 9
                            },
                            computed: true,
                            property: {
                              type: 'Identifier',
                              name: 'x',
                              start: 10,
                              end: 11
                            },
                            start: 8,
                            end: 12
                          },
                          start: 5,
                          end: 12
                        }
                      ],
                      start: 4,
                      end: 13
                    },
                    start: 1,
                    end: 13
                  }
                ],
                start: 0,
                end: 14
              },
              operator: '=',
              right: {
                type: 'Identifier',
                name: 'b',
                start: 17,
                end: 18
              },
              start: 0,
              end: 18
            },
            start: 0,
            end: 18
          }
        ],
        start: 0,
        end: 18
      }
    ],
    [
      '[{a=0}, ...b] = 0',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'a',
                          start: 2,
                          end: 3
                        },
                        value: {
                          type: 'AssignmentPattern',
                          left: {
                            type: 'Identifier',
                            name: 'a',
                            start: 2,
                            end: 3
                          },
                          right: {
                            type: 'Literal',
                            value: 0,
                            start: 4,
                            end: 5
                          },
                          start: 2,
                          end: 5
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: true,
                        start: 2,
                        end: 5
                      }
                    ],
                    start: 1,
                    end: 6
                  },
                  {
                    type: 'RestElement',
                    argument: {
                      type: 'Identifier',
                      name: 'b',
                      start: 11,
                      end: 12
                    },
                    start: 8,
                    end: 12
                  }
                ],
                start: 0,
                end: 13
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 0,
                start: 16,
                end: 17
              },
              start: 0,
              end: 17
            },
            start: 0,
            end: 17
          }
        ],
        start: 0,
        end: 17
      }
    ],
    [
      'var [{a = 0}] = 0;',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'Literal',
                  value: 0,
                  start: 16,
                  end: 17
                },
                id: {
                  type: 'ArrayPattern',
                  elements: [
                    {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          kind: 'init',
                          key: {
                            type: 'Identifier',
                            name: 'a',
                            start: 6,
                            end: 7
                          },
                          computed: false,
                          value: {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'a',
                              start: 6,
                              end: 7
                            },
                            right: {
                              type: 'Literal',
                              value: 0,
                              start: 10,
                              end: 11
                            },
                            start: 6,
                            end: 11
                          },
                          method: false,
                          shorthand: true,
                          start: 6,
                          end: 11
                        }
                      ],
                      start: 5,
                      end: 12
                    }
                  ],
                  start: 4,
                  end: 13
                },
                start: 4,
                end: 17
              }
            ],
            start: 0,
            end: 18
          }
        ],
        start: 0,
        end: 18
      }
    ],
    [
      `var x = {
      baz(a = 10) {},
      foo(a, b = 10) {},
      toast(a, b = 10, c) {}
    };`,
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ObjectExpression',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'baz',
                        start: 16,
                        end: 19
                      },
                      value: {
                        type: 'FunctionExpression',
                        params: [
                          {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'a',
                              start: 20,
                              end: 21
                            },
                            right: {
                              type: 'Literal',
                              value: 10,
                              start: 24,
                              end: 26
                            },
                            start: 20,
                            end: 26
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 28,
                          end: 30
                        },
                        async: false,
                        generator: false,
                        id: null,
                        start: 19,
                        end: 30
                      },
                      kind: 'init',
                      computed: false,
                      method: true,
                      shorthand: false,
                      start: 16,
                      end: 30
                    },
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'foo',
                        start: 38,
                        end: 41
                      },
                      value: {
                        type: 'FunctionExpression',
                        params: [
                          {
                            type: 'Identifier',
                            name: 'a',
                            start: 42,
                            end: 43
                          },
                          {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'b',
                              start: 45,
                              end: 46
                            },
                            right: {
                              type: 'Literal',
                              value: 10,
                              start: 49,
                              end: 51
                            },
                            start: 45,
                            end: 51
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 53,
                          end: 55
                        },
                        async: false,
                        generator: false,
                        id: null,
                        start: 41,
                        end: 55
                      },
                      kind: 'init',
                      computed: false,
                      method: true,
                      shorthand: false,
                      start: 38,
                      end: 55
                    },
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'toast',
                        start: 63,
                        end: 68
                      },
                      value: {
                        type: 'FunctionExpression',
                        params: [
                          {
                            type: 'Identifier',
                            name: 'a',
                            start: 69,
                            end: 70
                          },
                          {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'b',
                              start: 72,
                              end: 73
                            },
                            right: {
                              type: 'Literal',
                              value: 10,
                              start: 76,
                              end: 78
                            },
                            start: 72,
                            end: 78
                          },
                          {
                            type: 'Identifier',
                            name: 'c',
                            start: 80,
                            end: 81
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 83,
                          end: 85
                        },
                        async: false,
                        generator: false,
                        id: null,
                        start: 68,
                        end: 85
                      },
                      kind: 'init',
                      computed: false,
                      method: true,
                      shorthand: false,
                      start: 63,
                      end: 85
                    }
                  ],
                  start: 8,
                  end: 91
                },
                id: {
                  type: 'Identifier',
                  name: 'x',
                  start: 4,
                  end: 5
                },
                start: 4,
                end: 91
              }
            ],
            start: 0,
            end: 92
          }
        ],
        start: 0,
        end: 92
      }
    ],
    [
      '([,,])=>0',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'Literal',
                value: 0,
                start: 8,
                end: 9
              },
              params: [
                {
                  type: 'ArrayPattern',
                  elements: [null, null],
                  start: 1,
                  end: 5
                }
              ],
              async: false,
              expression: true,
              start: 0,
              end: 9
            },
            start: 0,
            end: 9
          }
        ],
        start: 0,
        end: 9
      }
    ],
    [
      'for([a,b[a],{c,d=e,[f]:[g,h().a,(0).k,...i[0]]}] in 0);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForInStatement',
            body: {
              type: 'EmptyStatement',
              start: 54,
              end: 55
            },
            left: {
              type: 'ArrayPattern',
              elements: [
                {
                  type: 'Identifier',
                  name: 'a',
                  start: 5,
                  end: 6
                },
                {
                  type: 'MemberExpression',
                  object: {
                    type: 'Identifier',
                    name: 'b',
                    start: 7,
                    end: 8
                  },
                  computed: true,
                  property: {
                    type: 'Identifier',
                    name: 'a',
                    start: 9,
                    end: 10
                  },
                  start: 7,
                  end: 11
                },
                {
                  type: 'ObjectPattern',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'c',
                        start: 13,
                        end: 14
                      },
                      value: {
                        type: 'Identifier',
                        name: 'c',
                        start: 13,
                        end: 14
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: true,
                      start: 13,
                      end: 14
                    },
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'd',
                        start: 15,
                        end: 16
                      },
                      value: {
                        type: 'AssignmentPattern',
                        left: {
                          type: 'Identifier',
                          name: 'd',
                          start: 15,
                          end: 16
                        },
                        right: {
                          type: 'Identifier',
                          name: 'e',
                          start: 17,
                          end: 18
                        },
                        start: 15,
                        end: 18
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: true,
                      start: 15,
                      end: 18
                    },
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'f',
                        start: 20,
                        end: 21
                      },
                      value: {
                        type: 'ArrayPattern',
                        elements: [
                          {
                            type: 'Identifier',
                            name: 'g',
                            start: 24,
                            end: 25
                          },
                          {
                            type: 'MemberExpression',
                            object: {
                              type: 'CallExpression',
                              callee: {
                                type: 'Identifier',
                                name: 'h',
                                start: 26,
                                end: 27
                              },
                              arguments: [],
                              start: 26,
                              end: 29
                            },
                            computed: false,
                            property: {
                              type: 'Identifier',
                              name: 'a',
                              start: 30,
                              end: 31
                            },
                            start: 26,
                            end: 31
                          },
                          {
                            type: 'MemberExpression',
                            object: {
                              type: 'Literal',
                              value: 0,
                              start: 33,
                              end: 34
                            },
                            computed: false,
                            property: {
                              type: 'Identifier',
                              name: 'k',
                              start: 36,
                              end: 37
                            },
                            start: 32,
                            end: 37
                          },
                          {
                            type: 'RestElement',
                            argument: {
                              type: 'MemberExpression',
                              object: {
                                type: 'Identifier',
                                name: 'i',
                                start: 41,
                                end: 42
                              },
                              computed: true,
                              property: {
                                type: 'Literal',
                                value: 0,
                                start: 43,
                                end: 44
                              },
                              start: 41,
                              end: 45
                            },
                            start: 38,
                            end: 45
                          }
                        ],
                        start: 23,
                        end: 46
                      },
                      kind: 'init',
                      computed: true,
                      method: false,
                      shorthand: false,
                      start: 19,
                      end: 46
                    }
                  ],
                  start: 12,
                  end: 47
                }
              ],
              start: 4,
              end: 48
            },
            right: {
              type: 'Literal',
              value: 0,
              start: 52,
              end: 53
            },
            start: 0,
            end: 55
          }
        ],
        start: 0,
        end: 55
      }
    ],
    [
      '({x = 10, y: { z = 10 }}) => [x, z]',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'ArrayExpression',
                elements: [
                  {
                    type: 'Identifier',
                    name: 'x',
                    start: 30,
                    end: 31
                  },
                  {
                    type: 'Identifier',
                    name: 'z',
                    start: 33,
                    end: 34
                  }
                ],
                start: 29,
                end: 35
              },
              params: [
                {
                  type: 'ObjectPattern',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'x',
                        start: 2,
                        end: 3
                      },
                      value: {
                        type: 'AssignmentPattern',
                        left: {
                          type: 'Identifier',
                          name: 'x',
                          start: 2,
                          end: 3
                        },
                        right: {
                          type: 'Literal',
                          value: 10,
                          start: 6,
                          end: 8
                        },
                        start: 2,
                        end: 8
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: true,
                      start: 2,
                      end: 8
                    },
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'y',
                        start: 10,
                        end: 11
                      },
                      value: {
                        type: 'ObjectPattern',
                        properties: [
                          {
                            type: 'Property',
                            key: {
                              type: 'Identifier',
                              name: 'z',
                              start: 15,
                              end: 16
                            },
                            value: {
                              type: 'AssignmentPattern',
                              left: {
                                type: 'Identifier',
                                name: 'z',
                                start: 15,
                                end: 16
                              },
                              right: {
                                type: 'Literal',
                                value: 10,
                                start: 19,
                                end: 21
                              },
                              start: 15,
                              end: 21
                            },
                            kind: 'init',
                            computed: false,
                            method: false,
                            shorthand: true,
                            start: 15,
                            end: 21
                          }
                        ],
                        start: 13,
                        end: 23
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: false,
                      start: 10,
                      end: 23
                    }
                  ],
                  start: 1,
                  end: 24
                }
              ],
              async: false,
              expression: true,
              start: 0,
              end: 35
            },
            start: 0,
            end: 35
          }
        ],
        start: 0,
        end: 35
      }
    ],
    [
      '(x, y = 9, ...a) => {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'BlockStatement',
                body: [],
                start: 20,
                end: 22
              },
              params: [
                {
                  type: 'Identifier',
                  name: 'x',
                  start: 1,
                  end: 2
                },
                {
                  type: 'AssignmentPattern',
                  left: {
                    type: 'Identifier',
                    name: 'y',
                    start: 4,
                    end: 5
                  },
                  right: {
                    type: 'Literal',
                    value: 9,
                    start: 8,
                    end: 9
                  },
                  start: 4,
                  end: 9
                },
                {
                  type: 'RestElement',
                  argument: {
                    type: 'Identifier',
                    name: 'a',
                    start: 14,
                    end: 15
                  },
                  start: 11,
                  end: 15
                }
              ],
              async: false,
              expression: false,
              start: 0,
              end: 22
            },
            start: 0,
            end: 22
          }
        ],
        start: 0,
        end: 22
      }
    ],
    [
      '({ tyssjh = ((cspagh = 4) => a) } = 1) => { /*jjj*/ }; (function(a) { })()',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'BlockStatement',
                body: [],
                start: 42,
                end: 53
              },
              params: [
                {
                  type: 'AssignmentPattern',
                  left: {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'tyssjh',
                          start: 3,
                          end: 9
                        },
                        value: {
                          type: 'AssignmentPattern',
                          left: {
                            type: 'Identifier',
                            name: 'tyssjh',
                            start: 3,
                            end: 9
                          },
                          right: {
                            type: 'ArrowFunctionExpression',
                            body: {
                              type: 'Identifier',
                              name: 'a',
                              start: 29,
                              end: 30
                            },
                            params: [
                              {
                                type: 'AssignmentPattern',
                                left: {
                                  type: 'Identifier',
                                  name: 'cspagh',
                                  start: 14,
                                  end: 20
                                },
                                right: {
                                  type: 'Literal',
                                  value: 4,
                                  start: 23,
                                  end: 24
                                },
                                start: 14,
                                end: 24
                              }
                            ],
                            async: false,
                            expression: true,
                            start: 13,
                            end: 30
                          },
                          start: 3,
                          end: 31
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: true,
                        start: 3,
                        end: 31
                      }
                    ],
                    start: 1,
                    end: 33
                  },
                  right: {
                    type: 'Literal',
                    value: 1,
                    start: 36,
                    end: 37
                  },
                  start: 1,
                  end: 37
                }
              ],
              async: false,
              expression: false,
              start: 0,
              end: 53
            },
            start: 0,
            end: 54
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              callee: {
                type: 'FunctionExpression',
                params: [
                  {
                    type: 'Identifier',
                    name: 'a',
                    start: 65,
                    end: 66
                  }
                ],
                body: {
                  type: 'BlockStatement',
                  body: [],
                  start: 68,
                  end: 71
                },
                async: false,
                generator: false,
                id: null,
                start: 56,
                end: 71
              },
              arguments: [],
              start: 55,
              end: 74
            },
            start: 55,
            end: 74
          }
        ],
        start: 0,
        end: 74
      }
    ],
    [
      '[...{a:a = 1}] = [{}];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'RestElement',
                    argument: {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          key: {
                            type: 'Identifier',
                            name: 'a',
                            start: 5,
                            end: 6
                          },
                          value: {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'a',
                              start: 7,
                              end: 8
                            },
                            right: {
                              type: 'Literal',
                              value: 1,
                              start: 11,
                              end: 12
                            },
                            start: 7,
                            end: 12
                          },
                          kind: 'init',
                          computed: false,
                          method: false,
                          shorthand: false,
                          start: 5,
                          end: 12
                        }
                      ],
                      start: 4,
                      end: 13
                    },
                    start: 1,
                    end: 13
                  }
                ],
                start: 0,
                end: 14
              },
              operator: '=',
              right: {
                type: 'ArrayExpression',
                elements: [
                  {
                    type: 'ObjectExpression',
                    properties: [],
                    start: 18,
                    end: 20
                  }
                ],
                start: 17,
                end: 21
              },
              start: 0,
              end: 21
            },
            start: 0,
            end: 22
          }
        ],
        start: 0,
        end: 22
      }
    ],
    [
      '[[[...a]]] = [[[]]];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'ArrayPattern',
                    elements: [
                      {
                        type: 'ArrayPattern',
                        elements: [
                          {
                            type: 'RestElement',
                            argument: {
                              type: 'Identifier',
                              name: 'a',
                              start: 6,
                              end: 7
                            },
                            start: 3,
                            end: 7
                          }
                        ],
                        start: 2,
                        end: 8
                      }
                    ],
                    start: 1,
                    end: 9
                  }
                ],
                start: 0,
                end: 10
              },
              operator: '=',
              right: {
                type: 'ArrayExpression',
                elements: [
                  {
                    type: 'ArrayExpression',
                    elements: [
                      {
                        type: 'ArrayExpression',
                        elements: [],
                        start: 15,
                        end: 17
                      }
                    ],
                    start: 14,
                    end: 18
                  }
                ],
                start: 13,
                end: 19
              },
              start: 0,
              end: 19
            },
            start: 0,
            end: 20
          }
        ],
        start: 0,
        end: 20
      }
    ],
    [
      'bar1 = ( {abcdef  = (((((a1)) = (30))))} = (b1 = 40) ) => { try { throw a1; } catch(a1) { } };',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'Identifier',
                name: 'bar1',
                start: 0,
                end: 4
              },
              operator: '=',
              right: {
                type: 'ArrowFunctionExpression',
                body: {
                  type: 'BlockStatement',
                  body: [
                    {
                      type: 'TryStatement',
                      block: {
                        type: 'BlockStatement',
                        body: [
                          {
                            type: 'ThrowStatement',
                            argument: {
                              type: 'Identifier',
                              name: 'a1',
                              start: 72,
                              end: 74
                            },
                            start: 66,
                            end: 75
                          }
                        ],
                        start: 64,
                        end: 77
                      },
                      handler: {
                        type: 'CatchClause',
                        param: {
                          type: 'Identifier',
                          name: 'a1',
                          start: 84,
                          end: 86
                        },
                        body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 88,
                          end: 91
                        },
                        start: 78,
                        end: 91
                      },
                      finalizer: null,
                      start: 60,
                      end: 91
                    }
                  ],
                  start: 58,
                  end: 93
                },
                params: [
                  {
                    type: 'AssignmentPattern',
                    left: {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          key: {
                            type: 'Identifier',
                            name: 'abcdef',
                            start: 10,
                            end: 16
                          },
                          value: {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'abcdef',
                              start: 10,
                              end: 16
                            },
                            right: {
                              type: 'AssignmentExpression',
                              left: {
                                type: 'Identifier',
                                name: 'a1',
                                start: 25,
                                end: 27
                              },
                              operator: '=',
                              right: {
                                type: 'Literal',
                                value: 30,
                                start: 33,
                                end: 35
                              },
                              start: 23,
                              end: 36
                            },
                            start: 10,
                            end: 39
                          },
                          kind: 'init',
                          computed: false,
                          method: false,
                          shorthand: true,
                          start: 10,
                          end: 39
                        }
                      ],
                      start: 9,
                      end: 40
                    },
                    right: {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'Identifier',
                        name: 'b1',
                        start: 44,
                        end: 46
                      },
                      operator: '=',
                      right: {
                        type: 'Literal',
                        value: 40,
                        start: 49,
                        end: 51
                      },
                      start: 44,
                      end: 51
                    },
                    start: 9,
                    end: 52
                  }
                ],
                async: false,
                expression: false,
                start: 7,
                end: 93
              },
              start: 0,
              end: 93
            },
            start: 0,
            end: 94
          }
        ],
        start: 0,
        end: 94
      }
    ],
    [
      'var e = 1; ( {tuvwxy  = (((  {}   =  1 )))} = (e)) => {  try{ } catch(e) {}}',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'Literal',
                  value: 1,
                  start: 8,
                  end: 9
                },
                id: {
                  type: 'Identifier',
                  name: 'e',
                  start: 4,
                  end: 5
                },
                start: 4,
                end: 9
              }
            ],
            start: 0,
            end: 10
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'TryStatement',
                    block: {
                      type: 'BlockStatement',
                      body: [],
                      start: 60,
                      end: 63
                    },
                    handler: {
                      type: 'CatchClause',
                      param: {
                        type: 'Identifier',
                        name: 'e',
                        start: 70,
                        end: 71
                      },
                      body: {
                        type: 'BlockStatement',
                        body: [],
                        start: 73,
                        end: 75
                      },
                      start: 64,
                      end: 75
                    },
                    finalizer: null,
                    start: 57,
                    end: 75
                  }
                ],
                start: 54,
                end: 76
              },
              params: [
                {
                  type: 'AssignmentPattern',
                  left: {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'tuvwxy',
                          start: 14,
                          end: 20
                        },
                        value: {
                          type: 'AssignmentPattern',
                          left: {
                            type: 'Identifier',
                            name: 'tuvwxy',
                            start: 14,
                            end: 20
                          },
                          right: {
                            type: 'AssignmentExpression',
                            left: {
                              type: 'ObjectPattern',
                              properties: [],
                              start: 29,
                              end: 31
                            },
                            operator: '=',
                            right: {
                              type: 'Literal',
                              value: 1,
                              start: 37,
                              end: 38
                            },
                            start: 29,
                            end: 38
                          },
                          start: 14,
                          end: 42
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: true,
                        start: 14,
                        end: 42
                      }
                    ],
                    start: 13,
                    end: 43
                  },
                  right: {
                    type: 'Identifier',
                    name: 'e',
                    start: 47,
                    end: 48
                  },
                  start: 13,
                  end: 49
                }
              ],
              async: false,
              expression: false,
              start: 11,
              end: 76
            },
            start: 11,
            end: 76
          }
        ],
        start: 0,
        end: 76
      }
    ],
    [
      'var a = [1], i = 0; ({x:a[i++]} = {});',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'Literal',
                      value: 1,
                      start: 9,
                      end: 10
                    }
                  ],
                  start: 8,
                  end: 11
                },
                id: {
                  type: 'Identifier',
                  name: 'a',
                  start: 4,
                  end: 5
                },
                start: 4,
                end: 11
              },
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'Literal',
                  value: 0,
                  start: 17,
                  end: 18
                },
                id: {
                  type: 'Identifier',
                  name: 'i',
                  start: 13,
                  end: 14
                },
                start: 13,
                end: 18
              }
            ],
            start: 0,
            end: 19
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Identifier',
                      name: 'x',
                      start: 22,
                      end: 23
                    },
                    value: {
                      type: 'MemberExpression',
                      object: {
                        type: 'Identifier',
                        name: 'a',
                        start: 24,
                        end: 25
                      },
                      computed: true,
                      property: {
                        type: 'UpdateExpression',
                        argument: {
                          type: 'Identifier',
                          name: 'i',
                          start: 26,
                          end: 27
                        },
                        operator: '++',
                        prefix: false,
                        start: 26,
                        end: 29
                      },
                      start: 24,
                      end: 30
                    },
                    kind: 'init',
                    computed: false,
                    method: false,
                    shorthand: false,
                    start: 22,
                    end: 30
                  }
                ],
                start: 21,
                end: 31
              },
              operator: '=',
              right: {
                type: 'ObjectExpression',
                properties: [],
                start: 34,
                end: 36
              },
              start: 21,
              end: 36
            },
            start: 20,
            end: 38
          }
        ],
        start: 0,
        end: 38
      }
    ],
    [
      'function foo() { return {x:1}; }; [...foo()["x"]] = [10];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'FunctionDeclaration',
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ReturnStatement',
                  argument: {
                    type: 'ObjectExpression',
                    properties: [
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'x',
                          start: 25,
                          end: 26
                        },
                        value: {
                          type: 'Literal',
                          value: 1,
                          start: 27,
                          end: 28
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: false,
                        start: 25,
                        end: 28
                      }
                    ],
                    start: 24,
                    end: 29
                  },
                  start: 17,
                  end: 30
                }
              ],
              start: 15,
              end: 32
            },
            async: false,
            generator: false,
            id: {
              type: 'Identifier',
              name: 'foo',
              start: 9,
              end: 12
            },
            start: 0,
            end: 32
          },
          {
            type: 'EmptyStatement',
            start: 32,
            end: 33
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'RestElement',
                    argument: {
                      type: 'MemberExpression',
                      object: {
                        type: 'CallExpression',
                        callee: {
                          type: 'Identifier',
                          name: 'foo',
                          start: 38,
                          end: 41
                        },
                        arguments: [],
                        start: 38,
                        end: 43
                      },
                      computed: true,
                      property: {
                        type: 'Literal',
                        value: 'x',
                        start: 44,
                        end: 47
                      },
                      start: 38,
                      end: 48
                    },
                    start: 35,
                    end: 48
                  }
                ],
                start: 34,
                end: 49
              },
              operator: '=',
              right: {
                type: 'ArrayExpression',
                elements: [
                  {
                    type: 'Literal',
                    value: 10,
                    start: 53,
                    end: 55
                  }
                ],
                start: 52,
                end: 56
              },
              start: 34,
              end: 56
            },
            start: 34,
            end: 57
          }
        ],
        start: 0,
        end: 57
      }
    ],
    [
      'var [{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'ObjectExpression',
                      properties: [
                        {
                          type: 'Property',
                          key: {
                            type: 'Identifier',
                            name: 'x',
                            start: 74,
                            end: 75
                          },
                          value: {
                            type: 'ArrayExpression',
                            elements: [
                              {
                                type: 'ObjectExpression',
                                properties: [
                                  {
                                    type: 'Property',
                                    key: {
                                      type: 'Identifier',
                                      name: 'y',
                                      start: 78,
                                      end: 79
                                    },
                                    value: {
                                      type: 'ObjectExpression',
                                      properties: [],
                                      start: 80,
                                      end: 82
                                    },
                                    kind: 'init',
                                    computed: false,
                                    method: false,
                                    shorthand: false,
                                    start: 78,
                                    end: 82
                                  }
                                ],
                                start: 77,
                                end: 83
                              }
                            ],
                            start: 76,
                            end: 84
                          },
                          kind: 'init',
                          computed: false,
                          method: false,
                          shorthand: false,
                          start: 74,
                          end: 84
                        }
                      ],
                      start: 73,
                      end: 85
                    },
                    {
                      type: 'ObjectExpression',
                      properties: [],
                      start: 87,
                      end: 89
                    },
                    {
                      type: 'ObjectExpression',
                      properties: [
                        {
                          type: 'Property',
                          key: {
                            type: 'Identifier',
                            name: 'x3',
                            start: 92,
                            end: 94
                          },
                          value: {
                            type: 'ObjectExpression',
                            properties: [
                              {
                                type: 'Property',
                                key: {
                                  type: 'Identifier',
                                  name: 'y3',
                                  start: 96,
                                  end: 98
                                },
                                value: {
                                  type: 'ArrayExpression',
                                  elements: [
                                    {
                                      type: 'ObjectExpression',
                                      properties: [],
                                      start: 100,
                                      end: 102
                                    }
                                  ],
                                  start: 99,
                                  end: 103
                                },
                                kind: 'init',
                                computed: false,
                                method: false,
                                shorthand: false,
                                start: 96,
                                end: 103
                              }
                            ],
                            start: 95,
                            end: 104
                          },
                          kind: 'init',
                          computed: false,
                          method: false,
                          shorthand: false,
                          start: 92,
                          end: 104
                        }
                      ],
                      start: 91,
                      end: 105
                    }
                  ],
                  start: 72,
                  end: 106
                },
                id: {
                  type: 'ArrayPattern',
                  elements: [
                    {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          kind: 'init',
                          key: {
                            type: 'Identifier',
                            name: 'x',
                            start: 6,
                            end: 7
                          },
                          computed: false,
                          value: {
                            type: 'ArrayPattern',
                            elements: [
                              {
                                type: 'ObjectPattern',
                                properties: [
                                  {
                                    type: 'Property',
                                    kind: 'init',
                                    key: {
                                      type: 'Identifier',
                                      name: 'y',
                                      start: 12,
                                      end: 13
                                    },
                                    computed: false,
                                    value: {
                                      type: 'ObjectPattern',
                                      properties: [
                                        {
                                          type: 'Property',
                                          kind: 'init',
                                          key: {
                                            type: 'Identifier',
                                            name: 'z',
                                            start: 15,
                                            end: 16
                                          },
                                          computed: false,
                                          value: {
                                            type: 'AssignmentPattern',
                                            left: {
                                              type: 'Identifier',
                                              name: 'z',
                                              start: 15,
                                              end: 16
                                            },
                                            right: {
                                              type: 'Literal',
                                              value: 1,
                                              start: 19,
                                              end: 20
                                            },
                                            start: 15,
                                            end: 20
                                          },
                                          method: false,
                                          shorthand: true,
                                          start: 15,
                                          end: 20
                                        }
                                      ],
                                      start: 14,
                                      end: 21
                                    },
                                    method: false,
                                    shorthand: false,
                                    start: 12,
                                    end: 21
                                  },
                                  {
                                    type: 'Property',
                                    kind: 'init',
                                    key: {
                                      type: 'Identifier',
                                      name: 'z1',
                                      start: 23,
                                      end: 25
                                    },
                                    computed: false,
                                    value: {
                                      type: 'AssignmentPattern',
                                      left: {
                                        type: 'Identifier',
                                        name: 'z1',
                                        start: 23,
                                        end: 25
                                      },
                                      right: {
                                        type: 'Literal',
                                        value: 2,
                                        start: 28,
                                        end: 29
                                      },
                                      start: 23,
                                      end: 29
                                    },
                                    method: false,
                                    shorthand: true,
                                    start: 23,
                                    end: 29
                                  }
                                ],
                                start: 11,
                                end: 30
                              }
                            ],
                            start: 10,
                            end: 31
                          },
                          method: false,
                          shorthand: false,
                          start: 6,
                          end: 31
                        }
                      ],
                      start: 5,
                      end: 33
                    },
                    {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          kind: 'init',
                          key: {
                            type: 'Identifier',
                            name: 'x2',
                            start: 36,
                            end: 38
                          },
                          computed: false,
                          value: {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'x2',
                              start: 36,
                              end: 38
                            },
                            right: {
                              type: 'Literal',
                              value: 3,
                              start: 41,
                              end: 42
                            },
                            start: 36,
                            end: 42
                          },
                          method: false,
                          shorthand: true,
                          start: 36,
                          end: 42
                        }
                      ],
                      start: 35,
                      end: 43
                    },
                    {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          kind: 'init',
                          key: {
                            type: 'Identifier',
                            name: 'x3',
                            start: 46,
                            end: 48
                          },
                          computed: false,
                          value: {
                            type: 'ObjectPattern',
                            properties: [
                              {
                                type: 'Property',
                                kind: 'init',
                                key: {
                                  type: 'Identifier',
                                  name: 'y3',
                                  start: 52,
                                  end: 54
                                },
                                computed: false,
                                value: {
                                  type: 'ArrayPattern',
                                  elements: [
                                    {
                                      type: 'ObjectPattern',
                                      properties: [
                                        {
                                          type: 'Property',
                                          kind: 'init',
                                          key: {
                                            type: 'Identifier',
                                            name: 'z3',
                                            start: 57,
                                            end: 59
                                          },
                                          computed: false,
                                          value: {
                                            type: 'AssignmentPattern',
                                            left: {
                                              type: 'Identifier',
                                              name: 'z3',
                                              start: 57,
                                              end: 59
                                            },
                                            right: {
                                              type: 'Literal',
                                              value: 4,
                                              start: 62,
                                              end: 63
                                            },
                                            start: 57,
                                            end: 63
                                          },
                                          method: false,
                                          shorthand: true,
                                          start: 57,
                                          end: 63
                                        }
                                      ],
                                      start: 56,
                                      end: 64
                                    }
                                  ],
                                  start: 55,
                                  end: 65
                                },
                                method: false,
                                shorthand: false,
                                start: 52,
                                end: 65
                              }
                            ],
                            start: 51,
                            end: 66
                          },
                          method: false,
                          shorthand: false,
                          start: 46,
                          end: 66
                        }
                      ],
                      start: 45,
                      end: 67
                    }
                  ],
                  start: 4,
                  end: 69
                },
                start: 4,
                end: 106
              }
            ],
            start: 0,
            end: 107
          }
        ],
        start: 0,
        end: 107
      }
    ],
    [
      `let {
      x:{
          y:{
              z:{
                  k:k2 = 31
                } = { k:21 }
            } = { z:{ k:20 } }
        } = { y: { z:{} } }
    } = { x:{ y:{ z:{} } } };`,
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'let',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'ObjectExpression',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'x',
                        start: 174,
                        end: 175
                      },
                      value: {
                        type: 'ObjectExpression',
                        properties: [
                          {
                            type: 'Property',
                            key: {
                              type: 'Identifier',
                              name: 'y',
                              start: 178,
                              end: 179
                            },
                            value: {
                              type: 'ObjectExpression',
                              properties: [
                                {
                                  type: 'Property',
                                  key: {
                                    type: 'Identifier',
                                    name: 'z',
                                    start: 182,
                                    end: 183
                                  },
                                  value: {
                                    type: 'ObjectExpression',
                                    properties: [],
                                    start: 184,
                                    end: 186
                                  },
                                  kind: 'init',
                                  computed: false,
                                  method: false,
                                  shorthand: false,
                                  start: 182,
                                  end: 186
                                }
                              ],
                              start: 180,
                              end: 188
                            },
                            kind: 'init',
                            computed: false,
                            method: false,
                            shorthand: false,
                            start: 178,
                            end: 188
                          }
                        ],
                        start: 176,
                        end: 190
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: false,
                      start: 174,
                      end: 190
                    }
                  ],
                  start: 172,
                  end: 192
                },
                id: {
                  type: 'ObjectPattern',
                  properties: [
                    {
                      type: 'Property',
                      kind: 'init',
                      key: {
                        type: 'Identifier',
                        name: 'x',
                        start: 12,
                        end: 13
                      },
                      computed: false,
                      value: {
                        type: 'AssignmentPattern',
                        left: {
                          type: 'ObjectPattern',
                          properties: [
                            {
                              type: 'Property',
                              kind: 'init',
                              key: {
                                type: 'Identifier',
                                name: 'y',
                                start: 26,
                                end: 27
                              },
                              computed: false,
                              value: {
                                type: 'AssignmentPattern',
                                left: {
                                  type: 'ObjectPattern',
                                  properties: [
                                    {
                                      type: 'Property',
                                      kind: 'init',
                                      key: {
                                        type: 'Identifier',
                                        name: 'z',
                                        start: 44,
                                        end: 45
                                      },
                                      computed: false,
                                      value: {
                                        type: 'AssignmentPattern',
                                        left: {
                                          type: 'ObjectPattern',
                                          properties: [
                                            {
                                              type: 'Property',
                                              kind: 'init',
                                              key: {
                                                type: 'Identifier',
                                                name: 'k',
                                                start: 66,
                                                end: 67
                                              },
                                              computed: false,
                                              value: {
                                                type: 'AssignmentPattern',
                                                left: {
                                                  type: 'Identifier',
                                                  name: 'k2',
                                                  start: 68,
                                                  end: 70
                                                },
                                                right: {
                                                  type: 'Literal',
                                                  value: 31,
                                                  start: 73,
                                                  end: 75
                                                },
                                                start: 68,
                                                end: 75
                                              },
                                              method: false,
                                              shorthand: false,
                                              start: 66,
                                              end: 75
                                            }
                                          ],
                                          start: 46,
                                          end: 93
                                        },
                                        right: {
                                          type: 'ObjectExpression',
                                          properties: [
                                            {
                                              type: 'Property',
                                              key: {
                                                type: 'Identifier',
                                                name: 'k',
                                                start: 98,
                                                end: 99
                                              },
                                              value: {
                                                type: 'Literal',
                                                value: 21,
                                                start: 100,
                                                end: 102
                                              },
                                              kind: 'init',
                                              computed: false,
                                              method: false,
                                              shorthand: false,
                                              start: 98,
                                              end: 102
                                            }
                                          ],
                                          start: 96,
                                          end: 104
                                        },
                                        start: 46,
                                        end: 104
                                      },
                                      method: false,
                                      shorthand: false,
                                      start: 44,
                                      end: 104
                                    }
                                  ],
                                  start: 28,
                                  end: 118
                                },
                                right: {
                                  type: 'ObjectExpression',
                                  properties: [
                                    {
                                      type: 'Property',
                                      key: {
                                        type: 'Identifier',
                                        name: 'z',
                                        start: 123,
                                        end: 124
                                      },
                                      value: {
                                        type: 'ObjectExpression',
                                        properties: [
                                          {
                                            type: 'Property',
                                            key: {
                                              type: 'Identifier',
                                              name: 'k',
                                              start: 127,
                                              end: 128
                                            },
                                            value: {
                                              type: 'Literal',
                                              value: 20,
                                              start: 129,
                                              end: 131
                                            },
                                            kind: 'init',
                                            computed: false,
                                            method: false,
                                            shorthand: false,
                                            start: 127,
                                            end: 131
                                          }
                                        ],
                                        start: 125,
                                        end: 133
                                      },
                                      kind: 'init',
                                      computed: false,
                                      method: false,
                                      shorthand: false,
                                      start: 123,
                                      end: 133
                                    }
                                  ],
                                  start: 121,
                                  end: 135
                                },
                                start: 28,
                                end: 135
                              },
                              method: false,
                              shorthand: false,
                              start: 26,
                              end: 135
                            }
                          ],
                          start: 14,
                          end: 145
                        },
                        right: {
                          type: 'ObjectExpression',
                          properties: [
                            {
                              type: 'Property',
                              key: {
                                type: 'Identifier',
                                name: 'y',
                                start: 150,
                                end: 151
                              },
                              value: {
                                type: 'ObjectExpression',
                                properties: [
                                  {
                                    type: 'Property',
                                    key: {
                                      type: 'Identifier',
                                      name: 'z',
                                      start: 155,
                                      end: 156
                                    },
                                    value: {
                                      type: 'ObjectExpression',
                                      properties: [],
                                      start: 157,
                                      end: 159
                                    },
                                    kind: 'init',
                                    computed: false,
                                    method: false,
                                    shorthand: false,
                                    start: 155,
                                    end: 159
                                  }
                                ],
                                start: 153,
                                end: 161
                              },
                              kind: 'init',
                              computed: false,
                              method: false,
                              shorthand: false,
                              start: 150,
                              end: 161
                            }
                          ],
                          start: 148,
                          end: 163
                        },
                        start: 14,
                        end: 163
                      },
                      method: false,
                      shorthand: false,
                      start: 12,
                      end: 163
                    }
                  ],
                  start: 4,
                  end: 169
                },
                start: 4,
                end: 192
              }
            ],
            start: 0,
            end: 193
          }
        ],
        start: 0,
        end: 193
      }
    ],
    [
      'var x = (new Foo).x;',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'MemberExpression',
                  object: {
                    type: 'NewExpression',
                    callee: {
                      type: 'Identifier',
                      name: 'Foo',
                      start: 13,
                      end: 16
                    },
                    arguments: [],
                    start: 9,
                    end: 16
                  },
                  computed: false,
                  property: {
                    type: 'Identifier',
                    name: 'x',
                    start: 18,
                    end: 19
                  },
                  start: 8,
                  end: 19
                },
                id: {
                  type: 'Identifier',
                  name: 'x',
                  start: 4,
                  end: 5
                },
                start: 4,
                end: 19
              }
            ],
            start: 0,
            end: 20
          }
        ],
        start: 0,
        end: 20
      }
    ],
    [
      'var private = [["hello"]][0][0];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'MemberExpression',
                  object: {
                    type: 'MemberExpression',
                    object: {
                      type: 'ArrayExpression',
                      elements: [
                        {
                          type: 'ArrayExpression',
                          elements: [
                            {
                              type: 'Literal',
                              value: 'hello',
                              start: 16,
                              end: 23
                            }
                          ],
                          start: 15,
                          end: 24
                        }
                      ],
                      start: 14,
                      end: 25
                    },
                    computed: true,
                    property: {
                      type: 'Literal',
                      value: 0,
                      start: 26,
                      end: 27
                    },
                    start: 14,
                    end: 28
                  },
                  computed: true,
                  property: {
                    type: 'Literal',
                    value: 0,
                    start: 29,
                    end: 30
                  },
                  start: 14,
                  end: 31
                },
                id: {
                  type: 'Identifier',
                  name: 'private',
                  start: 4,
                  end: 11
                },
                start: 4,
                end: 31
              }
            ],
            start: 0,
            end: 32
          }
        ],
        start: 0,
        end: 32
      }
    ],
    [
      'if ((b === undefined && c === undefined) || (this.b === undefined && this.c === undefined)) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'IfStatement',
            test: {
              type: 'LogicalExpression',
              left: {
                type: 'LogicalExpression',
                left: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'Identifier',
                    name: 'b',
                    start: 5,
                    end: 6
                  },
                  right: {
                    type: 'Identifier',
                    name: 'undefined',
                    start: 11,
                    end: 20
                  },
                  operator: '===',
                  start: 5,
                  end: 20
                },
                right: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'Identifier',
                    name: 'c',
                    start: 24,
                    end: 25
                  },
                  right: {
                    type: 'Identifier',
                    name: 'undefined',
                    start: 30,
                    end: 39
                  },
                  operator: '===',
                  start: 24,
                  end: 39
                },
                operator: '&&',
                start: 5,
                end: 39
              },
              right: {
                type: 'LogicalExpression',
                left: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {
                      type: 'ThisExpression',
                      start: 45,
                      end: 49
                    },
                    computed: false,
                    property: {
                      type: 'Identifier',
                      name: 'b',
                      start: 50,
                      end: 51
                    },
                    start: 45,
                    end: 51
                  },
                  right: {
                    type: 'Identifier',
                    name: 'undefined',
                    start: 56,
                    end: 65
                  },
                  operator: '===',
                  start: 45,
                  end: 65
                },
                right: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {
                      type: 'ThisExpression',
                      start: 69,
                      end: 73
                    },
                    computed: false,
                    property: {
                      type: 'Identifier',
                      name: 'c',
                      start: 74,
                      end: 75
                    },
                    start: 69,
                    end: 75
                  },
                  right: {
                    type: 'Identifier',
                    name: 'undefined',
                    start: 80,
                    end: 89
                  },
                  operator: '===',
                  start: 69,
                  end: 89
                },
                operator: '&&',
                start: 45,
                end: 89
              },
              operator: '||',
              start: 4,
              end: 90
            },
            consequent: {
              type: 'BlockStatement',
              body: [],
              start: 92,
              end: 94
            },
            alternate: null,
            start: 0,
            end: 94
          }
        ],
        start: 0,
        end: 94
      }
    ],
    [
      '[((((((x.y))))))] = obj',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'MemberExpression',
                    object: {
                      type: 'Identifier',
                      name: 'x',
                      start: 7,
                      end: 8
                    },
                    computed: false,
                    property: {
                      type: 'Identifier',
                      name: 'y',
                      start: 9,
                      end: 10
                    },
                    start: 7,
                    end: 10
                  }
                ],
                start: 0,
                end: 17
              },
              operator: '=',
              right: {
                type: 'Identifier',
                name: 'obj',
                start: 20,
                end: 23
              },
              start: 0,
              end: 23
            },
            start: 0,
            end: 23
          }
        ],
        start: 0,
        end: 23
      }
    ],
    [
      '({[(a)()]: {}})',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'CallExpression',
                    callee: {
                      type: 'Identifier',
                      name: 'a',
                      start: 4,
                      end: 5
                    },
                    arguments: [],
                    start: 3,
                    end: 8
                  },
                  value: {
                    type: 'ObjectExpression',
                    properties: [],
                    start: 11,
                    end: 13
                  },
                  kind: 'init',
                  computed: true,
                  method: false,
                  shorthand: false,
                  start: 2,
                  end: 13
                }
              ],
              start: 1,
              end: 14
            },
            start: 0,
            end: 15
          }
        ],
        start: 0,
        end: 15
      }
    ],
    [
      '({a = [b]} = 1)',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Identifier',
                      name: 'a',
                      start: 2,
                      end: 3
                    },
                    value: {
                      type: 'AssignmentPattern',
                      left: {
                        type: 'Identifier',
                        name: 'a',
                        start: 2,
                        end: 3
                      },
                      right: {
                        type: 'ArrayExpression',
                        elements: [
                          {
                            type: 'Identifier',
                            name: 'b',
                            start: 7,
                            end: 8
                          }
                        ],
                        start: 6,
                        end: 9
                      },
                      start: 2,
                      end: 9
                    },
                    kind: 'init',
                    computed: false,
                    method: false,
                    shorthand: true,
                    start: 2,
                    end: 9
                  }
                ],
                start: 1,
                end: 10
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 1,
                start: 13,
                end: 14
              },
              start: 1,
              end: 14
            },
            start: 0,
            end: 15
          }
        ],
        start: 0,
        end: 15
      }
    ],
    [
      '({["a"]: [b]} = 1 / (d = (e)))',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Literal',
                      value: 'a',
                      start: 3,
                      end: 6
                    },
                    value: {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'Identifier',
                          name: 'b',
                          start: 10,
                          end: 11
                        }
                      ],
                      start: 9,
                      end: 12
                    },
                    kind: 'init',
                    computed: true,
                    method: false,
                    shorthand: false,
                    start: 2,
                    end: 12
                  }
                ],
                start: 1,
                end: 13
              },
              operator: '=',
              right: {
                type: 'BinaryExpression',
                left: {
                  type: 'Literal',
                  value: 1,
                  start: 16,
                  end: 17
                },
                right: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'Identifier',
                    name: 'd',
                    start: 21,
                    end: 22
                  },
                  operator: '=',
                  right: {
                    type: 'Identifier',
                    name: 'e',
                    start: 26,
                    end: 27
                  },
                  start: 21,
                  end: 28
                },
                operator: '/',
                start: 16,
                end: 29
              },
              start: 1,
              end: 29
            },
            start: 0,
            end: 30
          }
        ],
        start: 0,
        end: 30
      }
    ],
    [
      '({["a"]: [b]} = 1 / (d = ((a)) = a))',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    key: {
                      type: 'Literal',
                      value: 'a',
                      start: 3,
                      end: 6
                    },
                    value: {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'Identifier',
                          name: 'b',
                          start: 10,
                          end: 11
                        }
                      ],
                      start: 9,
                      end: 12
                    },
                    kind: 'init',
                    computed: true,
                    method: false,
                    shorthand: false,
                    start: 2,
                    end: 12
                  }
                ],
                start: 1,
                end: 13
              },
              operator: '=',
              right: {
                type: 'BinaryExpression',
                left: {
                  type: 'Literal',
                  value: 1,
                  start: 16,
                  end: 17
                },
                right: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'Identifier',
                    name: 'd',
                    start: 21,
                    end: 22
                  },
                  operator: '=',
                  right: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'Identifier',
                      name: 'a',
                      start: 27,
                      end: 28
                    },
                    operator: '=',
                    right: {
                      type: 'Identifier',
                      name: 'a',
                      start: 33,
                      end: 34
                    },
                    start: 25,
                    end: 34
                  },
                  start: 21,
                  end: 34
                },
                operator: '/',
                start: 16,
                end: 35
              },
              start: 1,
              end: 35
            },
            start: 0,
            end: 36
          }
        ],
        start: 0,
        end: 36
      }
    ],
    [
      '({a: ("string") / a[3](a = b.c) })',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    name: 'a',
                    start: 2,
                    end: 3
                  },
                  value: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'Literal',
                      value: 'string',
                      start: 6,
                      end: 14
                    },
                    right: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        object: {
                          type: 'Identifier',
                          name: 'a',
                          start: 18,
                          end: 19
                        },
                        computed: true,
                        property: {
                          type: 'Literal',
                          value: 3,
                          start: 20,
                          end: 21
                        },
                        start: 18,
                        end: 22
                      },
                      arguments: [
                        {
                          type: 'AssignmentExpression',
                          left: {
                            type: 'Identifier',
                            name: 'a',
                            start: 23,
                            end: 24
                          },
                          operator: '=',
                          right: {
                            type: 'MemberExpression',
                            object: {
                              type: 'Identifier',
                              name: 'b',
                              start: 27,
                              end: 28
                            },
                            computed: false,
                            property: {
                              type: 'Identifier',
                              name: 'c',
                              start: 29,
                              end: 30
                            },
                            start: 27,
                            end: 30
                          },
                          start: 23,
                          end: 30
                        }
                      ],
                      start: 18,
                      end: 31
                    },
                    operator: '/',
                    start: 5,
                    end: 31
                  },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: false,
                  start: 2,
                  end: 31
                }
              ],
              start: 1,
              end: 33
            },
            start: 0,
            end: 34
          }
        ],
        start: 0,
        end: 34
      }
    ],
    [
      '({a: ("string") / a[3](((((a = b.c))))) })',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    name: 'a',
                    start: 2,
                    end: 3
                  },
                  value: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'Literal',
                      value: 'string',
                      start: 6,
                      end: 14
                    },
                    right: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        object: {
                          type: 'Identifier',
                          name: 'a',
                          start: 18,
                          end: 19
                        },
                        computed: true,
                        property: {
                          type: 'Literal',
                          value: 3,
                          start: 20,
                          end: 21
                        },
                        start: 18,
                        end: 22
                      },
                      arguments: [
                        {
                          type: 'AssignmentExpression',
                          left: {
                            type: 'Identifier',
                            name: 'a',
                            start: 27,
                            end: 28
                          },
                          operator: '=',
                          right: {
                            type: 'MemberExpression',
                            object: {
                              type: 'Identifier',
                              name: 'b',
                              start: 31,
                              end: 32
                            },
                            computed: false,
                            property: {
                              type: 'Identifier',
                              name: 'c',
                              start: 33,
                              end: 34
                            },
                            start: 31,
                            end: 34
                          },
                          start: 27,
                          end: 34
                        }
                      ],
                      start: 18,
                      end: 39
                    },
                    operator: '/',
                    start: 5,
                    end: 39
                  },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: false,
                  start: 2,
                  end: 39
                }
              ],
              start: 1,
              end: 41
            },
            start: 0,
            end: 42
          }
        ],
        start: 0,
        end: 42
      }
    ],
    [
      '({a: ("string") / a[3](((((a /= [b.c] = (x)))))) })',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    name: 'a',
                    start: 2,
                    end: 3
                  },
                  value: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'Literal',
                      value: 'string',
                      start: 6,
                      end: 14
                    },
                    right: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        object: {
                          type: 'Identifier',
                          name: 'a',
                          start: 18,
                          end: 19
                        },
                        computed: true,
                        property: {
                          type: 'Literal',
                          value: 3,
                          start: 20,
                          end: 21
                        },
                        start: 18,
                        end: 22
                      },
                      arguments: [
                        {
                          type: 'AssignmentExpression',
                          left: {
                            type: 'Identifier',
                            name: 'a',
                            start: 27,
                            end: 28
                          },
                          operator: '/=',
                          right: {
                            type: 'AssignmentExpression',
                            left: {
                              type: 'ArrayPattern',
                              elements: [
                                {
                                  type: 'MemberExpression',
                                  object: {
                                    type: 'Identifier',
                                    name: 'b',
                                    start: 33,
                                    end: 34
                                  },
                                  computed: false,
                                  property: {
                                    type: 'Identifier',
                                    name: 'c',
                                    start: 35,
                                    end: 36
                                  },
                                  start: 33,
                                  end: 36
                                }
                              ],
                              start: 32,
                              end: 37
                            },
                            operator: '=',
                            right: {
                              type: 'Identifier',
                              name: 'x',
                              start: 41,
                              end: 42
                            },
                            start: 32,
                            end: 43
                          },
                          start: 27,
                          end: 43
                        }
                      ],
                      start: 18,
                      end: 48
                    },
                    operator: '/',
                    start: 5,
                    end: 48
                  },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: false,
                  start: 2,
                  end: 48
                }
              ],
              start: 1,
              end: 50
            },
            start: 0,
            end: 51
          }
        ],
        start: 0,
        end: 51
      }
    ],
    [
      'try { throw {x:10, z:["this is z"]}; }  catch({x, y, z:[z]}) {x;}',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'TryStatement',
            block: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ThrowStatement',
                  argument: {
                    type: 'ObjectExpression',
                    properties: [
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'x',
                          start: 13,
                          end: 14
                        },
                        value: {
                          type: 'Literal',
                          value: 10,
                          start: 15,
                          end: 17
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: false,
                        start: 13,
                        end: 17
                      },
                      {
                        type: 'Property',
                        key: {
                          type: 'Identifier',
                          name: 'z',
                          start: 19,
                          end: 20
                        },
                        value: {
                          type: 'ArrayExpression',
                          elements: [
                            {
                              type: 'Literal',
                              value: 'this is z',
                              start: 22,
                              end: 33
                            }
                          ],
                          start: 21,
                          end: 34
                        },
                        kind: 'init',
                        computed: false,
                        method: false,
                        shorthand: false,
                        start: 19,
                        end: 34
                      }
                    ],
                    start: 12,
                    end: 35
                  },
                  start: 6,
                  end: 36
                }
              ],
              start: 4,
              end: 38
            },
            handler: {
              type: 'CatchClause',
              param: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'Property',
                    kind: 'init',
                    key: {
                      type: 'Identifier',
                      name: 'x',
                      start: 47,
                      end: 48
                    },
                    computed: false,
                    value: {
                      type: 'Identifier',
                      name: 'x',
                      start: 47,
                      end: 48
                    },
                    method: false,
                    shorthand: true,
                    start: 47,
                    end: 48
                  },
                  {
                    type: 'Property',
                    kind: 'init',
                    key: {
                      type: 'Identifier',
                      name: 'y',
                      start: 50,
                      end: 51
                    },
                    computed: false,
                    value: {
                      type: 'Identifier',
                      name: 'y',
                      start: 50,
                      end: 51
                    },
                    method: false,
                    shorthand: true,
                    start: 50,
                    end: 51
                  },
                  {
                    type: 'Property',
                    kind: 'init',
                    key: {
                      type: 'Identifier',
                      name: 'z',
                      start: 53,
                      end: 54
                    },
                    computed: false,
                    value: {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'Identifier',
                          name: 'z',
                          start: 56,
                          end: 57
                        }
                      ],
                      start: 55,
                      end: 58
                    },
                    method: false,
                    shorthand: false,
                    start: 53,
                    end: 58
                  }
                ],
                start: 46,
                end: 59
              },
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'Identifier',
                      name: 'x',
                      start: 62,
                      end: 63
                    },
                    start: 62,
                    end: 64
                  }
                ],
                start: 61,
                end: 65
              },
              start: 40,
              end: 65
            },
            finalizer: null,
            start: 0,
            end: 65
          }
        ],
        start: 0,
        end: 65
      }
    ],
    [
      'for (let x in { a: a[i++] = () => eval("x") }) { b[j++] = () => eval("x"); }',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForInStatement',
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'MemberExpression',
                      object: {
                        type: 'Identifier',
                        name: 'b',
                        start: 49,
                        end: 50
                      },
                      computed: true,
                      property: {
                        type: 'UpdateExpression',
                        argument: {
                          type: 'Identifier',
                          name: 'j',
                          start: 51,
                          end: 52
                        },
                        operator: '++',
                        prefix: false,
                        start: 51,
                        end: 54
                      },
                      start: 49,
                      end: 55
                    },
                    operator: '=',
                    right: {
                      type: 'ArrowFunctionExpression',
                      body: {
                        type: 'CallExpression',
                        callee: {
                          type: 'Identifier',
                          name: 'eval',
                          start: 64,
                          end: 68
                        },
                        arguments: [
                          {
                            type: 'Literal',
                            value: 'x',
                            start: 69,
                            end: 72
                          }
                        ],
                        start: 64,
                        end: 73
                      },
                      params: [],
                      async: false,
                      expression: true,
                      start: 58,
                      end: 73
                    },
                    start: 49,
                    end: 73
                  },
                  start: 49,
                  end: 74
                }
              ],
              start: 47,
              end: 76
            },
            left: {
              type: 'VariableDeclaration',
              kind: 'let',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  init: null,
                  id: {
                    type: 'Identifier',
                    name: 'x',
                    start: 9,
                    end: 10
                  },
                  start: 9,
                  end: 10
                }
              ],
              start: 5,
              end: 10
            },
            right: {
              type: 'ObjectExpression',
              properties: [
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    name: 'a',
                    start: 16,
                    end: 17
                  },
                  value: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'MemberExpression',
                      object: {
                        type: 'Identifier',
                        name: 'a',
                        start: 19,
                        end: 20
                      },
                      computed: true,
                      property: {
                        type: 'UpdateExpression',
                        argument: {
                          type: 'Identifier',
                          name: 'i',
                          start: 21,
                          end: 22
                        },
                        operator: '++',
                        prefix: false,
                        start: 21,
                        end: 24
                      },
                      start: 19,
                      end: 25
                    },
                    operator: '=',
                    right: {
                      type: 'ArrowFunctionExpression',
                      body: {
                        type: 'CallExpression',
                        callee: {
                          type: 'Identifier',
                          name: 'eval',
                          start: 34,
                          end: 38
                        },
                        arguments: [
                          {
                            type: 'Literal',
                            value: 'x',
                            start: 39,
                            end: 42
                          }
                        ],
                        start: 34,
                        end: 43
                      },
                      params: [],
                      async: false,
                      expression: true,
                      start: 28,
                      end: 43
                    },
                    start: 19,
                    end: 43
                  },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: false,
                  start: 16,
                  end: 43
                }
              ],
              start: 14,
              end: 45
            },
            start: 0,
            end: 76
          }
        ],
        start: 0,
        end: 76
      }
    ],
    [
      'bar2 = ( {abcdef  = (((((a2)) = (30))))} = (b2 = 40) ) => { try { throw a2; } catch(a2) { } };',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'Identifier',
                name: 'bar2',
                start: 0,
                end: 4
              },
              operator: '=',
              right: {
                type: 'ArrowFunctionExpression',
                body: {
                  type: 'BlockStatement',
                  body: [
                    {
                      type: 'TryStatement',
                      block: {
                        type: 'BlockStatement',
                        body: [
                          {
                            type: 'ThrowStatement',
                            argument: {
                              type: 'Identifier',
                              name: 'a2',
                              start: 72,
                              end: 74
                            },
                            start: 66,
                            end: 75
                          }
                        ],
                        start: 64,
                        end: 77
                      },
                      handler: {
                        type: 'CatchClause',
                        param: {
                          type: 'Identifier',
                          name: 'a2',
                          start: 84,
                          end: 86
                        },
                        body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 88,
                          end: 91
                        },
                        start: 78,
                        end: 91
                      },
                      finalizer: null,
                      start: 60,
                      end: 91
                    }
                  ],
                  start: 58,
                  end: 93
                },
                params: [
                  {
                    type: 'AssignmentPattern',
                    left: {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          key: {
                            type: 'Identifier',
                            name: 'abcdef',
                            start: 10,
                            end: 16
                          },
                          value: {
                            type: 'AssignmentPattern',
                            left: {
                              type: 'Identifier',
                              name: 'abcdef',
                              start: 10,
                              end: 16
                            },
                            right: {
                              type: 'AssignmentExpression',
                              left: {
                                type: 'Identifier',
                                name: 'a2',
                                start: 25,
                                end: 27
                              },
                              operator: '=',
                              right: {
                                type: 'Literal',
                                value: 30,
                                start: 33,
                                end: 35
                              },
                              start: 23,
                              end: 36
                            },
                            start: 10,
                            end: 39
                          },
                          kind: 'init',
                          computed: false,
                          method: false,
                          shorthand: true,
                          start: 10,
                          end: 39
                        }
                      ],
                      start: 9,
                      end: 40
                    },
                    right: {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'Identifier',
                        name: 'b2',
                        start: 44,
                        end: 46
                      },
                      operator: '=',
                      right: {
                        type: 'Literal',
                        value: 40,
                        start: 49,
                        end: 51
                      },
                      start: 44,
                      end: 51
                    },
                    start: 9,
                    end: 52
                  }
                ],
                async: false,
                expression: false,
                start: 7,
                end: 93
              },
              start: 0,
              end: 93
            },
            start: 0,
            end: 94
          }
        ],
        start: 0,
        end: 94
      }
    ],
    [
      '[[a]=[1]] = [];',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'AssignmentPattern',
                    left: {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'Identifier',
                          name: 'a',
                          start: 2,
                          end: 3
                        }
                      ],
                      start: 1,
                      end: 4
                    },
                    right: {
                      type: 'ArrayExpression',
                      elements: [
                        {
                          type: 'Literal',
                          value: 1,
                          start: 6,
                          end: 7
                        }
                      ],
                      start: 5,
                      end: 8
                    },
                    start: 1,
                    end: 8
                  }
                ],
                start: 0,
                end: 9
              },
              operator: '=',
              right: {
                type: 'ArrayExpression',
                elements: [],
                start: 12,
                end: 14
              },
              start: 0,
              end: 14
            },
            start: 0,
            end: 15
          }
        ],
        start: 0,
        end: 15
      }
    ],
    [
      '({a:a}=1)()',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              callee: {
                type: 'AssignmentExpression',
                left: {
                  type: 'ObjectPattern',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'a',
                        start: 2,
                        end: 3
                      },
                      value: {
                        type: 'Identifier',
                        name: 'a',
                        start: 4,
                        end: 5
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: false,
                      start: 2,
                      end: 5
                    }
                  ],
                  start: 1,
                  end: 6
                },
                operator: '=',
                right: {
                  type: 'Literal',
                  value: 1,
                  start: 7,
                  end: 8
                },
                start: 1,
                end: 8
              },
              arguments: [],
              start: 0,
              end: 11
            },
            start: 0,
            end: 11
          }
        ],
        start: 0,
        end: 11
      }
    ],
    [
      '([1 || 1].a = 1)',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'MemberExpression',
                object: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'LogicalExpression',
                      left: {
                        type: 'Literal',
                        value: 1,
                        start: 2,
                        end: 3
                      },
                      right: {
                        type: 'Literal',
                        value: 1,
                        start: 7,
                        end: 8
                      },
                      operator: '||',
                      start: 2,
                      end: 8
                    }
                  ],
                  start: 1,
                  end: 9
                },
                computed: false,
                property: {
                  type: 'Identifier',
                  name: 'a',
                  start: 10,
                  end: 11
                },
                start: 1,
                end: 11
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 1,
                start: 14,
                end: 15
              },
              start: 1,
              end: 15
            },
            start: 0,
            end: 16
          }
        ],
        start: 0,
        end: 16
      }
    ],
    [
      '({a: 1 || 1}.a = 1)',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'MemberExpression',
                object: {
                  type: 'ObjectExpression',
                  properties: [
                    {
                      type: 'Property',
                      key: {
                        type: 'Identifier',
                        name: 'a',
                        start: 2,
                        end: 3
                      },
                      value: {
                        type: 'LogicalExpression',
                        left: {
                          type: 'Literal',
                          value: 1,
                          start: 5,
                          end: 6
                        },
                        right: {
                          type: 'Literal',
                          value: 1,
                          start: 10,
                          end: 11
                        },
                        operator: '||',
                        start: 5,
                        end: 11
                      },
                      kind: 'init',
                      computed: false,
                      method: false,
                      shorthand: false,
                      start: 2,
                      end: 11
                    }
                  ],
                  start: 1,
                  end: 12
                },
                computed: false,
                property: {
                  type: 'Identifier',
                  name: 'a',
                  start: 13,
                  end: 14
                },
                start: 1,
                end: 14
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: 1,
                start: 17,
                end: 18
              },
              start: 1,
              end: 18
            },
            start: 0,
            end: 19
          }
        ],
        start: 0,
        end: 19
      }
    ],
    [
      'function f() { ((((a))((b)()).l))() }',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'FunctionDeclaration',
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      object: {
                        type: 'CallExpression',
                        callee: {
                          type: 'Identifier',
                          name: 'a',
                          start: 19,
                          end: 20
                        },
                        arguments: [
                          {
                            type: 'CallExpression',
                            callee: {
                              type: 'Identifier',
                              name: 'b',
                              start: 24,
                              end: 25
                            },
                            arguments: [],
                            start: 23,
                            end: 28
                          }
                        ],
                        start: 17,
                        end: 29
                      },
                      computed: false,
                      property: {
                        type: 'Identifier',
                        name: 'l',
                        start: 30,
                        end: 31
                      },
                      start: 17,
                      end: 31
                    },
                    arguments: [],
                    start: 15,
                    end: 35
                  },
                  start: 15,
                  end: 35
                }
              ],
              start: 13,
              end: 37
            },
            async: false,
            generator: false,
            id: {
              type: 'Identifier',
              name: 'f',
              start: 9,
              end: 10
            },
            start: 0,
            end: 37
          }
        ],
        start: 0,
        end: 37
      }
    ],
    [
      'for (/x/g + b;;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForStatement',
            body: {
              type: 'EmptyStatement',
              start: 16,
              end: 17
            },
            init: {
              type: 'BinaryExpression',
              left: {
                type: 'Literal',
                value: /x/g,
                regex: {
                  pattern: 'x',
                  flags: 'g'
                },
                start: 5,
                end: 9
              },
              right: {
                type: 'Identifier',
                name: 'b',
                start: 12,
                end: 13
              },
              operator: '+',
              start: 5,
              end: 13
            },
            test: null,
            update: null,
            start: 0,
            end: 17
          }
        ],
        start: 0,
        end: 17
      }
    ],
    [
      '([...x+=y]);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrayExpression',
              elements: [
                {
                  type: 'SpreadElement',
                  argument: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'Identifier',
                      name: 'x',
                      start: 5,
                      end: 6
                    },
                    operator: '+=',
                    right: {
                      type: 'Identifier',
                      name: 'y',
                      start: 8,
                      end: 9
                    },
                    start: 5,
                    end: 9
                  },
                  start: 2,
                  end: 9
                }
              ],
              start: 1,
              end: 10
            },
            start: 0,
            end: 12
          }
        ],
        start: 0,
        end: 12
      }
    ],
    [
      '({...[].x} = x);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ObjectPattern',
                properties: [
                  {
                    type: 'RestElement',
                    argument: {
                      type: 'MemberExpression',
                      object: {
                        type: 'ArrayExpression',
                        elements: [],
                        start: 5,
                        end: 7
                      },
                      computed: false,
                      property: {
                        type: 'Identifier',
                        name: 'x',
                        start: 8,
                        end: 9
                      },
                      start: 5,
                      end: 9
                    },
                    start: 2,
                    end: 9
                  }
                ],
                start: 1,
                end: 10
              },
              operator: '=',
              right: {
                type: 'Identifier',
                name: 'x',
                start: 13,
                end: 14
              },
              start: 1,
              end: 14
            },
            start: 0,
            end: 16
          }
        ],
        start: 0,
        end: 16
      }
    ],
    [
      '(((x)))++;',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UpdateExpression',
              argument: {
                type: 'Identifier',
                name: 'x',
                start: 3,
                end: 4
              },
              operator: '++',
              prefix: false,
              start: 0,
              end: 9
            },
            start: 0,
            end: 10
          }
        ],
        start: 0,
        end: 10
      }
    ],

    [
      `__str="";
     outer : for(index=0; index<4; index+=1) {
         nested : for(index_n=0; index_n<=index; index_n++) {
       if (index*index_n >= 4)break ;
       __str+=""+index+index_n;
         }
     }`,
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'Identifier',
                name: '__str',
                start: 0,
                end: 5
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: '',
                start: 6,
                end: 8
              },
              start: 0,
              end: 8
            },
            start: 0,
            end: 9
          },
          {
            type: 'LabeledStatement',
            label: {
              type: 'Identifier',
              name: 'outer',
              start: 15,
              end: 20
            },
            body: {
              type: 'ForStatement',
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'LabeledStatement',
                    label: {
                      type: 'Identifier',
                      name: 'nested',
                      start: 66,
                      end: 72
                    },
                    body: {
                      type: 'ForStatement',
                      body: {
                        type: 'BlockStatement',
                        body: [
                          {
                            type: 'IfStatement',
                            test: {
                              type: 'BinaryExpression',
                              left: {
                                type: 'BinaryExpression',
                                left: {
                                  type: 'Identifier',
                                  name: 'index',
                                  start: 130,
                                  end: 135
                                },
                                right: {
                                  type: 'Identifier',
                                  name: 'index_n',
                                  start: 136,
                                  end: 143
                                },
                                operator: '*',
                                start: 130,
                                end: 143
                              },
                              right: {
                                type: 'Literal',
                                value: 4,
                                start: 147,
                                end: 148
                              },
                              operator: '>=',
                              start: 130,
                              end: 148
                            },
                            consequent: {
                              type: 'BreakStatement',
                              label: null,
                              start: 149,
                              end: 156
                            },
                            alternate: null,
                            start: 126,
                            end: 156
                          },
                          {
                            type: 'ExpressionStatement',
                            expression: {
                              type: 'AssignmentExpression',
                              left: {
                                type: 'Identifier',
                                name: '__str',
                                start: 164,
                                end: 169
                              },
                              operator: '+=',
                              right: {
                                type: 'BinaryExpression',
                                left: {
                                  type: 'BinaryExpression',
                                  left: {
                                    type: 'Literal',
                                    value: '',
                                    start: 171,
                                    end: 173
                                  },
                                  right: {
                                    type: 'Identifier',
                                    name: 'index',
                                    start: 174,
                                    end: 179
                                  },
                                  operator: '+',
                                  start: 171,
                                  end: 179
                                },
                                right: {
                                  type: 'Identifier',
                                  name: 'index_n',
                                  start: 180,
                                  end: 187
                                },
                                operator: '+',
                                start: 171,
                                end: 187
                              },
                              start: 164,
                              end: 187
                            },
                            start: 164,
                            end: 188
                          }
                        ],
                        start: 117,
                        end: 199
                      },
                      init: {
                        type: 'AssignmentExpression',
                        left: {
                          type: 'Identifier',
                          name: 'index_n',
                          start: 79,
                          end: 86
                        },
                        operator: '=',
                        right: {
                          type: 'Literal',
                          value: 0,
                          start: 87,
                          end: 88
                        },
                        start: 79,
                        end: 88
                      },
                      test: {
                        type: 'BinaryExpression',
                        left: {
                          type: 'Identifier',
                          name: 'index_n',
                          start: 90,
                          end: 97
                        },
                        right: {
                          type: 'Identifier',
                          name: 'index',
                          start: 99,
                          end: 104
                        },
                        operator: '<=',
                        start: 90,
                        end: 104
                      },
                      update: {
                        type: 'UpdateExpression',
                        argument: {
                          type: 'Identifier',
                          name: 'index_n',
                          start: 106,
                          end: 113
                        },
                        operator: '++',
                        prefix: false,
                        start: 106,
                        end: 115
                      },
                      start: 75,
                      end: 199
                    },
                    start: 66,
                    end: 199
                  }
                ],
                start: 55,
                end: 206
              },
              init: {
                type: 'AssignmentExpression',
                left: {
                  type: 'Identifier',
                  name: 'index',
                  start: 27,
                  end: 32
                },
                operator: '=',
                right: {
                  type: 'Literal',
                  value: 0,
                  start: 33,
                  end: 34
                },
                start: 27,
                end: 34
              },
              test: {
                type: 'BinaryExpression',
                left: {
                  type: 'Identifier',
                  name: 'index',
                  start: 36,
                  end: 41
                },
                right: {
                  type: 'Literal',
                  value: 4,
                  start: 42,
                  end: 43
                },
                operator: '<',
                start: 36,
                end: 43
              },
              update: {
                type: 'AssignmentExpression',
                left: {
                  type: 'Identifier',
                  name: 'index',
                  start: 45,
                  end: 50
                },
                operator: '+=',
                right: {
                  type: 'Literal',
                  value: 1,
                  start: 52,
                  end: 53
                },
                start: 45,
                end: 53
              },
              start: 23,
              end: 206
            },
            start: 15,
            end: 206
          }
        ],
        start: 0,
        end: 206
      }
    ],
    [
      `var probeBefore = function() { return x; };
     var probeTest, probeIncr, probeBody;
     var run = true;
     for (
         var _ = eval('var x = 1;');
         run && (probeTest = function() { return x; });
         probeIncr = function() { return x; }
       )
       probeBody = function() { return x; }, run = false;
     var x = 2;`,
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'FunctionExpression',
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ReturnStatement',
                        argument: {
                          type: 'Identifier',
                          name: 'x',
                          start: 38,
                          end: 39
                        },
                        start: 31,
                        end: 40
                      }
                    ],
                    start: 29,
                    end: 42
                  },
                  async: false,
                  generator: false,
                  id: null,
                  start: 18,
                  end: 42
                },
                id: {
                  type: 'Identifier',
                  name: 'probeBefore',
                  start: 4,
                  end: 15
                },
                start: 4,
                end: 42
              }
            ],
            start: 0,
            end: 43
          },
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: null,
                id: {
                  type: 'Identifier',
                  name: 'probeTest',
                  start: 53,
                  end: 62
                },
                start: 53,
                end: 62
              },
              {
                type: 'VariableDeclarator',
                init: null,
                id: {
                  type: 'Identifier',
                  name: 'probeIncr',
                  start: 64,
                  end: 73
                },
                start: 64,
                end: 73
              },
              {
                type: 'VariableDeclarator',
                init: null,
                id: {
                  type: 'Identifier',
                  name: 'probeBody',
                  start: 75,
                  end: 84
                },
                start: 75,
                end: 84
              }
            ],
            start: 49,
            end: 85
          },
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'Literal',
                  value: true,
                  start: 101,
                  end: 105
                },
                id: {
                  type: 'Identifier',
                  name: 'run',
                  start: 95,
                  end: 98
                },
                start: 95,
                end: 105
              }
            ],
            start: 91,
            end: 106
          },
          {
            type: 'ForStatement',
            body: {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [
                  {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'Identifier',
                      name: 'probeBody',
                      start: 273,
                      end: 282
                    },
                    operator: '=',
                    right: {
                      type: 'FunctionExpression',
                      params: [],
                      body: {
                        type: 'BlockStatement',
                        body: [
                          {
                            type: 'ReturnStatement',
                            argument: {
                              type: 'Identifier',
                              name: 'x',
                              start: 305,
                              end: 306
                            },
                            start: 298,
                            end: 307
                          }
                        ],
                        start: 296,
                        end: 309
                      },
                      async: false,
                      generator: false,
                      id: null,
                      start: 285,
                      end: 309
                    },
                    start: 273,
                    end: 309
                  },
                  {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'Identifier',
                      name: 'run',
                      start: 311,
                      end: 314
                    },
                    operator: '=',
                    right: {
                      type: 'Literal',
                      value: false,
                      start: 317,
                      end: 322
                    },
                    start: 311,
                    end: 322
                  }
                ],
                start: 273,
                end: 322
              },
              start: 273,
              end: 323
            },
            init: {
              type: 'VariableDeclaration',
              kind: 'var',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  init: {
                    type: 'CallExpression',
                    callee: {
                      type: 'Identifier',
                      name: 'eval',
                      start: 135,
                      end: 139
                    },
                    arguments: [
                      {
                        type: 'Literal',
                        value: 'var x = 1;',
                        start: 140,
                        end: 152
                      }
                    ],
                    start: 135,
                    end: 153
                  },
                  id: {
                    type: 'Identifier',
                    name: '_',
                    start: 131,
                    end: 132
                  },
                  start: 131,
                  end: 153
                }
              ],
              start: 127,
              end: 153
            },
            test: {
              type: 'LogicalExpression',
              left: {
                type: 'Identifier',
                name: 'run',
                start: 164,
                end: 167
              },
              right: {
                type: 'AssignmentExpression',
                left: {
                  type: 'Identifier',
                  name: 'probeTest',
                  start: 172,
                  end: 181
                },
                operator: '=',
                right: {
                  type: 'FunctionExpression',
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ReturnStatement',
                        argument: {
                          type: 'Identifier',
                          name: 'x',
                          start: 204,
                          end: 205
                        },
                        start: 197,
                        end: 206
                      }
                    ],
                    start: 195,
                    end: 208
                  },
                  async: false,
                  generator: false,
                  id: null,
                  start: 184,
                  end: 208
                },
                start: 172,
                end: 208
              },
              operator: '&&',
              start: 164,
              end: 209
            },
            update: {
              type: 'AssignmentExpression',
              left: {
                type: 'Identifier',
                name: 'probeIncr',
                start: 220,
                end: 229
              },
              operator: '=',
              right: {
                type: 'FunctionExpression',
                params: [],
                body: {
                  type: 'BlockStatement',
                  body: [
                    {
                      type: 'ReturnStatement',
                      argument: {
                        type: 'Identifier',
                        name: 'x',
                        start: 252,
                        end: 253
                      },
                      start: 245,
                      end: 254
                    }
                  ],
                  start: 243,
                  end: 256
                },
                async: false,
                generator: false,
                id: null,
                start: 232,
                end: 256
              },
              start: 220,
              end: 256
            },
            start: 112,
            end: 323
          },
          {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                init: {
                  type: 'Literal',
                  value: 2,
                  start: 337,
                  end: 338
                },
                id: {
                  type: 'Identifier',
                  name: 'x',
                  start: 333,
                  end: 334
                },
                start: 333,
                end: 338
              }
            ],
            start: 329,
            end: 339
          }
        ],
        start: 0,
        end: 339
      }
    ],
    [
      'for ([x.y];;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForStatement',
            body: {
              type: 'EmptyStatement',
              start: 13,
              end: 14
            },
            init: {
              type: 'ArrayExpression',
              elements: [
                {
                  type: 'MemberExpression',
                  object: {
                    type: 'Identifier',
                    name: 'x',
                    start: 6,
                    end: 7
                  },
                  computed: false,
                  property: {
                    type: 'Identifier',
                    name: 'y',
                    start: 8,
                    end: 9
                  },
                  start: 6,
                  end: 9
                }
              ],
              start: 5,
              end: 10
            },
            test: null,
            update: null,
            start: 0,
            end: 14
          }
        ],
        start: 0,
        end: 14
      }
    ],
    [
      'for (let [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = [{ u: 777, w: 888, y: 999 }]; a < 1; ) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForStatement',
            body: {
              type: 'BlockStatement',
              body: [],
              start: 102,
              end: 104
            },
            init: {
              type: 'VariableDeclaration',
              kind: 'let',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  init: {
                    type: 'ArrayExpression',
                    elements: [
                      {
                        type: 'ObjectExpression',
                        properties: [
                          {
                            type: 'Property',
                            key: {
                              type: 'Identifier',
                              name: 'u',
                              start: 66,
                              end: 67
                            },
                            value: {
                              type: 'Literal',
                              value: 777,
                              start: 69,
                              end: 72
                            },
                            kind: 'init',
                            computed: false,
                            method: false,
                            shorthand: false,
                            start: 66,
                            end: 72
                          },
                          {
                            type: 'Property',
                            key: {
                              type: 'Identifier',
                              name: 'w',
                              start: 74,
                              end: 75
                            },
                            value: {
                              type: 'Literal',
                              value: 888,
                              start: 77,
                              end: 80
                            },
                            kind: 'init',
                            computed: false,
                            method: false,
                            shorthand: false,
                            start: 74,
                            end: 80
                          },
                          {
                            type: 'Property',
                            key: {
                              type: 'Identifier',
                              name: 'y',
                              start: 82,
                              end: 83
                            },
                            value: {
                              type: 'Literal',
                              value: 999,
                              start: 85,
                              end: 88
                            },
                            kind: 'init',
                            computed: false,
                            method: false,
                            shorthand: false,
                            start: 82,
                            end: 88
                          }
                        ],
                        start: 64,
                        end: 90
                      }
                    ],
                    start: 63,
                    end: 91
                  },
                  id: {
                    type: 'ArrayPattern',
                    elements: [
                      {
                        type: 'AssignmentPattern',
                        left: {
                          type: 'ObjectPattern',
                          properties: [
                            {
                              type: 'Property',
                              kind: 'init',
                              key: {
                                type: 'Identifier',
                                name: 'u',
                                start: 12,
                                end: 13
                              },
                              computed: false,
                              value: {
                                type: 'Identifier',
                                name: 'v',
                                start: 15,
                                end: 16
                              },
                              method: false,
                              shorthand: false,
                              start: 12,
                              end: 16
                            },
                            {
                              type: 'Property',
                              kind: 'init',
                              key: {
                                type: 'Identifier',
                                name: 'w',
                                start: 18,
                                end: 19
                              },
                              computed: false,
                              value: {
                                type: 'Identifier',
                                name: 'x',
                                start: 21,
                                end: 22
                              },
                              method: false,
                              shorthand: false,
                              start: 18,
                              end: 22
                            },
                            {
                              type: 'Property',
                              kind: 'init',
                              key: {
                                type: 'Identifier',
                                name: 'y',
                                start: 24,
                                end: 25
                              },
                              computed: false,
                              value: {
                                type: 'Identifier',
                                name: 'z',
                                start: 27,
                                end: 28
                              },
                              method: false,
                              shorthand: false,
                              start: 24,
                              end: 28
                            }
                          ],
                          start: 10,
                          end: 30
                        },
                        right: {
                          type: 'ObjectExpression',
                          properties: [
                            {
                              type: 'Property',
                              key: {
                                type: 'Identifier',
                                name: 'u',
                                start: 35,
                                end: 36
                              },
                              value: {
                                type: 'Literal',
                                value: 444,
                                start: 38,
                                end: 41
                              },
                              kind: 'init',
                              computed: false,
                              method: false,
                              shorthand: false,
                              start: 35,
                              end: 41
                            },
                            {
                              type: 'Property',
                              key: {
                                type: 'Identifier',
                                name: 'w',
                                start: 43,
                                end: 44
                              },
                              value: {
                                type: 'Literal',
                                value: 555,
                                start: 46,
                                end: 49
                              },
                              kind: 'init',
                              computed: false,
                              method: false,
                              shorthand: false,
                              start: 43,
                              end: 49
                            },
                            {
                              type: 'Property',
                              key: {
                                type: 'Identifier',
                                name: 'y',
                                start: 51,
                                end: 52
                              },
                              value: {
                                type: 'Literal',
                                value: 666,
                                start: 54,
                                end: 57
                              },
                              kind: 'init',
                              computed: false,
                              method: false,
                              shorthand: false,
                              start: 51,
                              end: 57
                            }
                          ],
                          start: 33,
                          end: 59
                        },
                        start: 10,
                        end: 59
                      }
                    ],
                    start: 9,
                    end: 60
                  },
                  start: 9,
                  end: 91
                }
              ],
              start: 5,
              end: 91
            },
            test: {
              type: 'BinaryExpression',
              left: {
                type: 'Identifier',
                name: 'a',
                start: 93,
                end: 94
              },
              right: {
                type: 'Literal',
                value: 1,
                start: 97,
                end: 98
              },
              operator: '<',
              start: 93,
              end: 98
            },
            update: null,
            start: 0,
            end: 104
          }
        ],
        start: 0,
        end: 104
      }
    ],
    [
      'for ((x)=>{};;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForStatement',
            body: {
              type: 'EmptyStatement',
              start: 15,
              end: 16
            },
            init: {
              type: 'ArrowFunctionExpression',
              body: {
                type: 'BlockStatement',
                body: [],
                start: 10,
                end: 12
              },
              params: [
                {
                  type: 'Identifier',
                  name: 'x',
                  start: 6,
                  end: 7
                }
              ],
              async: false,
              expression: false,
              start: 5,
              end: 12
            },
            test: null,
            update: null,
            start: 0,
            end: 16
          }
        ],
        start: 0,
        end: 16
      }
    ],
    [
      'function z() { for (let c in new.target) for (let o in (--((b)).debugger)) debugger; }',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'FunctionDeclaration',
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ForInStatement',
                  body: {
                    type: 'ForInStatement',
                    body: {
                      type: 'DebuggerStatement',
                      start: 75,
                      end: 84
                    },
                    left: {
                      type: 'VariableDeclaration',
                      kind: 'let',
                      declarations: [
                        {
                          type: 'VariableDeclarator',
                          init: null,
                          id: {
                            type: 'Identifier',
                            name: 'o',
                            start: 50,
                            end: 51
                          },
                          start: 50,
                          end: 51
                        }
                      ],
                      start: 46,
                      end: 51
                    },
                    right: {
                      type: 'UpdateExpression',
                      argument: {
                        type: 'MemberExpression',
                        object: {
                          type: 'Identifier',
                          name: 'b',
                          start: 60,
                          end: 61
                        },
                        computed: false,
                        property: {
                          type: 'Identifier',
                          name: 'debugger',
                          start: 64,
                          end: 72
                        },
                        start: 58,
                        end: 72
                      },
                      operator: '--',
                      prefix: true,
                      start: 56,
                      end: 72
                    },
                    start: 41,
                    end: 84
                  },
                  left: {
                    type: 'VariableDeclaration',
                    kind: 'let',
                    declarations: [
                      {
                        type: 'VariableDeclarator',
                        init: null,
                        id: {
                          type: 'Identifier',
                          name: 'c',
                          start: 24,
                          end: 25
                        },
                        start: 24,
                        end: 25
                      }
                    ],
                    start: 20,
                    end: 25
                  },
                  right: {
                    meta: {
                      type: 'Identifier',
                      name: 'new',
                      start: 29,
                      end: 32
                    },
                    type: 'MetaProperty',
                    property: {
                      type: 'Identifier',
                      name: 'target',
                      start: 33,
                      end: 39
                    },
                    start: 29,
                    end: 39
                  },
                  start: 15,
                  end: 84
                }
              ],
              start: 13,
              end: 86
            },
            async: false,
            generator: false,
            id: {
              type: 'Identifier',
              name: 'z',
              start: 9,
              end: 10
            },
            start: 0,
            end: 86
          }
        ],
        start: 0,
        end: 86
      }
    ],
    [
      'for (((x)=>{}).x of y);',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ForOfStatement',
            body: {
              type: 'EmptyStatement',
              start: 22,
              end: 23
            },
            left: {
              type: 'MemberExpression',
              object: {
                type: 'ArrowFunctionExpression',
                body: {
                  type: 'BlockStatement',
                  body: [],
                  start: 11,
                  end: 13
                },
                params: [
                  {
                    type: 'Identifier',
                    name: 'x',
                    start: 7,
                    end: 8
                  }
                ],
                async: false,
                expression: false,
                start: 6,
                end: 13
              },
              computed: false,
              property: {
                type: 'Identifier',
                name: 'x',
                start: 15,
                end: 16
              },
              start: 5,
              end: 16
            },
            right: {
              type: 'Identifier',
              name: 'y',
              start: 20,
              end: 21
            },
            await: false,
            start: 0,
            end: 23
          }
        ],
        start: 0,
        end: 23
      }
    ],
    [
      '{}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 2,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 2,
            body: []
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{debugger;}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 11,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 11,
            body: [
              {
                type: 'DebuggerStatement',
                start: 1,
                end: 10
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'function f() {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 15,
        body: [
          {
            type: 'FunctionDeclaration',
            start: 0,
            end: 15,
            id: {
              type: 'Identifier',
              start: 9,
              end: 10,
              name: 'f'
            },
            generator: false,
            async: false,
            params: [],
            body: {
              type: 'BlockStatement',
              start: 13,
              end: 15,
              body: []
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'var a',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 5,
        body: [
          {
            type: 'VariableDeclaration',
            start: 0,
            end: 5,
            declarations: [
              {
                type: 'VariableDeclarator',
                start: 4,
                end: 5,
                id: {
                  type: 'Identifier',
                  start: 4,
                  end: 5,
                  name: 'a'
                },
                init: null
              }
            ],
            kind: 'var'
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{{}}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 4,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 4,
            body: [
              {
                type: 'BlockStatement',
                start: 1,
                end: 3,
                body: []
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{{{{}}}}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 8,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 8,
            body: [
              {
                type: 'BlockStatement',
                start: 1,
                end: 7,
                body: [
                  {
                    type: 'BlockStatement',
                    start: 2,
                    end: 6,
                    body: [
                      {
                        type: 'BlockStatement',
                        start: 3,
                        end: 5,
                        body: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{{a}}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 5,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 5,
            body: [
              {
                type: 'BlockStatement',
                start: 1,
                end: 4,
                body: [
                  {
                    type: 'ExpressionStatement',
                    start: 2,
                    end: 3,
                    expression: {
                      type: 'Identifier',
                      start: 2,
                      end: 3,
                      name: 'a'
                    }
                  }
                ]
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[a]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 3,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 3,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 3,
              elements: [
                {
                  type: 'Identifier',
                  start: 1,
                  end: 2,
                  name: 'a'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '"foo";',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 6,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 6,
            expression: {
              type: 'Literal',
              start: 0,
              end: 5,
              value: 'foo'
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'foo; "bar"; 9;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 14,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 4,
            expression: {
              type: 'Identifier',
              start: 0,
              end: 3,
              name: 'foo'
            }
          },
          {
            type: 'ExpressionStatement',
            start: 5,
            end: 11,
            expression: {
              type: 'Literal',
              start: 5,
              end: 10,
              value: 'bar'
            }
          },
          {
            type: 'ExpressionStatement',
            start: 12,
            end: 14,
            expression: {
              type: 'Literal',
              start: 12,
              end: 13,
              value: 9
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a, b',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 4,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 4,
            expression: {
              type: 'SequenceExpression',
              start: 0,
              end: 4,
              expressions: [
                {
                  type: 'Identifier',
                  start: 0,
                  end: 1,
                  name: 'a'
                },
                {
                  type: 'Identifier',
                  start: 3,
                  end: 4,
                  name: 'b'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a = 2',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 5,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 5,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 5,
              operator: '=',
              left: {
                type: 'Identifier',
                start: 0,
                end: 1,
                name: 'a'
              },
              right: {
                type: 'Literal',
                start: 4,
                end: 5,
                value: 2
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a = b, c',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 8,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 8,
            expression: {
              type: 'SequenceExpression',
              start: 0,
              end: 8,
              expressions: [
                {
                  type: 'AssignmentExpression',
                  start: 0,
                  end: 5,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 0,
                    end: 1,
                    name: 'a'
                  },
                  right: {
                    type: 'Identifier',
                    start: 4,
                    end: 5,
                    name: 'b'
                  }
                },
                {
                  type: 'Identifier',
                  start: 7,
                  end: 8,
                  name: 'c'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a, b = c',
      Context.OptionsRanges,
      {
        type: 'Program',
        sourceType: 'script',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'SequenceExpression',
              expressions: [
                {
                  type: 'Identifier',
                  name: 'a',
                  start: 0,
                  end: 1
                },
                {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'Identifier',
                    name: 'b',
                    start: 3,
                    end: 4
                  },
                  operator: '=',
                  right: {
                    type: 'Identifier',
                    name: 'c',
                    start: 7,
                    end: 8
                  },
                  start: 3,
                  end: 8
                }
              ],
              start: 0,
              end: 8
            },
            start: 0,
            end: 8
          }
        ],
        start: 0,
        end: 8
      }
    ],
    [
      'a, b = c, d',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 11,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 11,
            expression: {
              type: 'SequenceExpression',
              start: 0,
              end: 11,
              expressions: [
                {
                  type: 'Identifier',
                  start: 0,
                  end: 1,
                  name: 'a'
                },
                {
                  type: 'AssignmentExpression',
                  start: 3,
                  end: 8,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 3,
                    end: 4,
                    name: 'b'
                  },
                  right: {
                    type: 'Identifier',
                    start: 7,
                    end: 8,
                    name: 'c'
                  }
                },
                {
                  type: 'Identifier',
                  start: 10,
                  end: 11,
                  name: 'd'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a, b, c = d',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 11,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 11,
            expression: {
              type: 'SequenceExpression',
              start: 0,
              end: 11,
              expressions: [
                {
                  type: 'Identifier',
                  start: 0,
                  end: 1,
                  name: 'a'
                },
                {
                  type: 'Identifier',
                  start: 3,
                  end: 4,
                  name: 'b'
                },
                {
                  type: 'AssignmentExpression',
                  start: 6,
                  end: 11,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 6,
                    end: 7,
                    name: 'c'
                  },
                  right: {
                    type: 'Identifier',
                    start: 10,
                    end: 11,
                    name: 'd'
                  }
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a, b = 2',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 8,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 8,
            expression: {
              type: 'SequenceExpression',
              start: 0,
              end: 8,
              expressions: [
                {
                  type: 'Identifier',
                  start: 0,
                  end: 1,
                  name: 'a'
                },
                {
                  type: 'AssignmentExpression',
                  start: 3,
                  end: 8,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 3,
                    end: 4,
                    name: 'b'
                  },
                  right: {
                    type: 'Literal',
                    start: 7,
                    end: 8,
                    value: 2
                  }
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{ 1; }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 6,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 6,
            body: [
              {
                type: 'ExpressionStatement',
                start: 2,
                end: 4,
                expression: {
                  type: 'Literal',
                  start: 2,
                  end: 3,
                  value: 1
                }
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{ a = 2; }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 10,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 10,
            body: [
              {
                type: 'ExpressionStatement',
                start: 2,
                end: 8,
                expression: {
                  type: 'AssignmentExpression',
                  start: 2,
                  end: 7,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 2,
                    end: 3,
                    name: 'a'
                  },
                  right: {
                    type: 'Literal',
                    start: 6,
                    end: 7,
                    value: 2
                  }
                }
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '1; 2;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 5,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 2,
            expression: {
              type: 'Literal',
              start: 0,
              end: 1,
              value: 1
            }
          },
          {
            type: 'ExpressionStatement',
            start: 3,
            end: 5,
            expression: {
              type: 'Literal',
              start: 3,
              end: 4,
              value: 2
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[ foo ]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 7,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 7,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 7,
              elements: [
                {
                  type: 'Identifier',
                  start: 2,
                  end: 5,
                  name: 'foo'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[foo]; [foo];',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 13,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 6,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 5,
              elements: [
                {
                  type: 'Identifier',
                  start: 1,
                  end: 4,
                  name: 'foo'
                }
              ]
            }
          },
          {
            type: 'ExpressionStatement',
            start: 7,
            end: 13,
            expression: {
              type: 'ArrayExpression',
              start: 7,
              end: 12,
              elements: [
                {
                  type: 'Identifier',
                  start: 8,
                  end: 11,
                  name: 'foo'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[ foo ] = bar',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 13,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 13,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 13,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 7,
                elements: [
                  {
                    type: 'Identifier',
                    start: 2,
                    end: 5,
                    name: 'foo'
                  }
                ]
              },
              right: {
                type: 'Identifier',
                start: 10,
                end: 13,
                name: 'bar'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[[foo]]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 7,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 7,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 7,
              elements: [
                {
                  type: 'ArrayExpression',
                  start: 1,
                  end: 6,
                  elements: [
                    {
                      type: 'Identifier',
                      start: 2,
                      end: 5,
                      name: 'foo'
                    }
                  ]
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[[foo]] = []',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 12,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 12,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 12,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 7,
                elements: [
                  {
                    type: 'ArrayPattern',
                    start: 1,
                    end: 6,
                    elements: [
                      {
                        type: 'Identifier',
                        start: 2,
                        end: 5,
                        name: 'foo'
                      }
                    ]
                  }
                ]
              },
              right: {
                type: 'ArrayExpression',
                start: 10,
                end: 12,
                elements: []
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    /*   ['[[foo]] = [bar = nchanged]', Context.OptionsRanges, {
      "type": "Program",
      "start": 0,
      "end": 26,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 0,
          "end": 26,
          "expression": {
            "type": "AssignmentExpression",
            "start": 0,
            "end": 26,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 0,
              "end": 7,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1,
                  "end": 6,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2,
                      "end": 5,
                      "name": "foo"
                    }
                  ]
                }
              ]
            },
            "right": {
              "type": "ArrayExpression",
              "start": 10,
              "end": 26,
              "elements": [
                {
                  "type": "AssignmentExpression",
                  "start": 11,
                  "end": 25,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 14,
                    "name": "bar"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 25,
                    "name": "nchanged"
                  }
                }
              ]
            }
          }
        }
      ],
      "sourceType": "script"
    }],*/
    [
      '[a, b]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 6,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 6,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 6,
              elements: [
                {
                  type: 'Identifier',
                  start: 1,
                  end: 2,
                  name: 'a'
                },
                {
                  type: 'Identifier',
                  start: 4,
                  end: 5,
                  name: 'b'
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[a = b, c = d]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 14,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 14,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 14,
              elements: [
                {
                  type: 'AssignmentExpression',
                  start: 1,
                  end: 6,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 1,
                    end: 2,
                    name: 'a'
                  },
                  right: {
                    type: 'Identifier',
                    start: 5,
                    end: 6,
                    name: 'b'
                  }
                },
                {
                  type: 'AssignmentExpression',
                  start: 8,
                  end: 13,
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    start: 8,
                    end: 9,
                    name: 'c'
                  },
                  right: {
                    type: 'Identifier',
                    start: 12,
                    end: 13,
                    name: 'd'
                  }
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[[[a.b =[]]]]',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 13,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 13,
            expression: {
              type: 'ArrayExpression',
              start: 0,
              end: 13,
              elements: [
                {
                  type: 'ArrayExpression',
                  start: 1,
                  end: 12,
                  elements: [
                    {
                      type: 'ArrayExpression',
                      start: 2,
                      end: 11,
                      elements: [
                        {
                          type: 'AssignmentExpression',
                          start: 3,
                          end: 10,
                          operator: '=',
                          left: {
                            type: 'MemberExpression',
                            start: 3,
                            end: 6,
                            object: {
                              type: 'Identifier',
                              start: 3,
                              end: 4,
                              name: 'a'
                            },
                            property: {
                              type: 'Identifier',
                              start: 5,
                              end: 6,
                              name: 'b'
                            },
                            computed: false
                          },
                          right: {
                            type: 'ArrayExpression',
                            start: 8,
                            end: 10,
                            elements: []
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = [[[[[[[a=b] = c]]] = c] = c] = c] = c;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 82,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 82,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 81,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 41,
                elements: [
                  {
                    type: 'AssignmentPattern',
                    start: 1,
                    end: 40,
                    left: {
                      type: 'ArrayPattern',
                      start: 1,
                      end: 36,
                      elements: [
                        {
                          type: 'AssignmentPattern',
                          start: 2,
                          end: 35,
                          left: {
                            type: 'ArrayPattern',
                            start: 2,
                            end: 31,
                            elements: [
                              {
                                type: 'AssignmentPattern',
                                start: 3,
                                end: 30,
                                left: {
                                  type: 'ArrayPattern',
                                  start: 3,
                                  end: 26,
                                  elements: [
                                    {
                                      type: 'AssignmentPattern',
                                      start: 4,
                                      end: 25,
                                      left: {
                                        type: 'ArrayPattern',
                                        start: 4,
                                        end: 21,
                                        elements: [
                                          {
                                            type: 'AssignmentPattern',
                                            start: 5,
                                            end: 20,
                                            left: {
                                              type: 'ArrayPattern',
                                              start: 5,
                                              end: 16,
                                              elements: [
                                                {
                                                  type: 'AssignmentPattern',
                                                  start: 6,
                                                  end: 15,
                                                  left: {
                                                    type: 'ArrayPattern',
                                                    start: 6,
                                                    end: 11,
                                                    elements: [
                                                      {
                                                        type: 'AssignmentPattern',
                                                        start: 7,
                                                        end: 10,
                                                        left: {
                                                          type: 'Identifier',
                                                          start: 7,
                                                          end: 8,
                                                          name: 'a'
                                                        },
                                                        right: {
                                                          type: 'Identifier',
                                                          start: 9,
                                                          end: 10,
                                                          name: 'b'
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  right: {
                                                    type: 'Identifier',
                                                    start: 14,
                                                    end: 15,
                                                    name: 'c'
                                                  }
                                                }
                                              ]
                                            },
                                            right: {
                                              type: 'Identifier',
                                              start: 19,
                                              end: 20,
                                              name: 'c'
                                            }
                                          }
                                        ]
                                      },
                                      right: {
                                        type: 'Identifier',
                                        start: 24,
                                        end: 25,
                                        name: 'c'
                                      }
                                    }
                                  ]
                                },
                                right: {
                                  type: 'Identifier',
                                  start: 29,
                                  end: 30,
                                  name: 'c'
                                }
                              }
                            ]
                          },
                          right: {
                            type: 'Identifier',
                            start: 34,
                            end: 35,
                            name: 'c'
                          }
                        }
                      ]
                    },
                    right: {
                      type: 'Identifier',
                      start: 39,
                      end: 40,
                      name: 'c'
                    }
                  }
                ]
              },
              right: {
                type: 'AssignmentExpression',
                start: 44,
                end: 81,
                operator: '=',
                left: {
                  type: 'ArrayPattern',
                  start: 44,
                  end: 77,
                  elements: [
                    {
                      type: 'AssignmentPattern',
                      start: 45,
                      end: 76,
                      left: {
                        type: 'ArrayPattern',
                        start: 45,
                        end: 72,
                        elements: [
                          {
                            type: 'AssignmentPattern',
                            start: 46,
                            end: 71,
                            left: {
                              type: 'ArrayPattern',
                              start: 46,
                              end: 67,
                              elements: [
                                {
                                  type: 'AssignmentPattern',
                                  start: 47,
                                  end: 66,
                                  left: {
                                    type: 'ArrayPattern',
                                    start: 47,
                                    end: 62,
                                    elements: [
                                      {
                                        type: 'ArrayPattern',
                                        start: 48,
                                        end: 61,
                                        elements: [
                                          {
                                            type: 'ArrayPattern',
                                            start: 49,
                                            end: 60,
                                            elements: [
                                              {
                                                type: 'AssignmentPattern',
                                                start: 50,
                                                end: 59,
                                                left: {
                                                  type: 'ArrayPattern',
                                                  start: 50,
                                                  end: 55,
                                                  elements: [
                                                    {
                                                      type: 'AssignmentPattern',
                                                      start: 51,
                                                      end: 54,
                                                      left: {
                                                        type: 'Identifier',
                                                        start: 51,
                                                        end: 52,
                                                        name: 'a'
                                                      },
                                                      right: {
                                                        type: 'Identifier',
                                                        start: 53,
                                                        end: 54,
                                                        name: 'b'
                                                      }
                                                    }
                                                  ]
                                                },
                                                right: {
                                                  type: 'Identifier',
                                                  start: 58,
                                                  end: 59,
                                                  name: 'c'
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  right: {
                                    type: 'Identifier',
                                    start: 65,
                                    end: 66,
                                    name: 'c'
                                  }
                                }
                              ]
                            },
                            right: {
                              type: 'Identifier',
                              start: 70,
                              end: 71,
                              name: 'c'
                            }
                          }
                        ]
                      },
                      right: {
                        type: 'Identifier',
                        start: 75,
                        end: 76,
                        name: 'c'
                      }
                    }
                  ]
                },
                right: {
                  type: 'Identifier',
                  start: 80,
                  end: 81,
                  name: 'c'
                }
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'foo; bar;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 9,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 4,
            expression: {
              type: 'Identifier',
              start: 0,
              end: 3,
              name: 'foo'
            }
          },
          {
            type: 'ExpressionStatement',
            start: 5,
            end: 9,
            expression: {
              type: 'Identifier',
              start: 5,
              end: 8,
              name: 'bar'
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'foo; bar; goo;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 14,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 4,
            expression: {
              type: 'Identifier',
              start: 0,
              end: 3,
              name: 'foo'
            }
          },
          {
            type: 'ExpressionStatement',
            start: 5,
            end: 9,
            expression: {
              type: 'Identifier',
              start: 5,
              end: 8,
              name: 'bar'
            }
          },
          {
            type: 'ExpressionStatement',
            start: 10,
            end: 14,
            expression: {
              type: 'Identifier',
              start: 10,
              end: 13,
              name: 'goo'
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{a}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 3,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 3,
            body: [
              {
                type: 'ExpressionStatement',
                start: 1,
                end: 2,
                expression: {
                  type: 'Identifier',
                  start: 1,
                  end: 2,
                  name: 'a'
                }
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{if (false) {} else ;}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 22,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 22,
            body: [
              {
                type: 'IfStatement',
                start: 1,
                end: 21,
                test: {
                  type: 'Literal',
                  start: 5,
                  end: 10,
                  value: false
                },
                consequent: {
                  type: 'BlockStatement',
                  start: 12,
                  end: 14,
                  body: []
                },
                alternate: {
                  type: 'EmptyStatement',
                  start: 20,
                  end: 21
                }
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '{if (false) a }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 15,
        body: [
          {
            type: 'BlockStatement',
            start: 0,
            end: 15,
            body: [
              {
                type: 'IfStatement',
                start: 1,
                end: 13,
                test: {
                  type: 'Literal',
                  start: 5,
                  end: 10,
                  value: false
                },
                consequent: {
                  type: 'ExpressionStatement',
                  start: 12,
                  end: 13,
                  expression: {
                    type: 'Identifier',
                    start: 12,
                    end: 13,
                    name: 'a'
                  }
                },
                alternate: null
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if (a) b',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 8,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 8,
            test: {
              type: 'Identifier',
              start: 4,
              end: 5,
              name: 'a'
            },
            consequent: {
              type: 'ExpressionStatement',
              start: 7,
              end: 8,
              expression: {
                type: 'Identifier',
                start: 7,
                end: 8,
                name: 'b'
              }
            },
            alternate: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if (false) {} else ;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 20,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 20,
            test: {
              type: 'Literal',
              start: 4,
              end: 9,
              value: false
            },
            consequent: {
              type: 'BlockStatement',
              start: 11,
              end: 13,
              body: []
            },
            alternate: {
              type: 'EmptyStatement',
              start: 19,
              end: 20
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if(a)b;else c;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 14,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 14,
            test: {
              type: 'Identifier',
              start: 3,
              end: 4,
              name: 'a'
            },
            consequent: {
              type: 'ExpressionStatement',
              start: 5,
              end: 7,
              expression: {
                type: 'Identifier',
                start: 5,
                end: 6,
                name: 'b'
              }
            },
            alternate: {
              type: 'ExpressionStatement',
              start: 12,
              end: 14,
              expression: {
                type: 'Identifier',
                start: 12,
                end: 13,
                name: 'c'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if(a)b',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 6,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 6,
            test: {
              type: 'Identifier',
              start: 3,
              end: 4,
              name: 'a'
            },
            consequent: {
              type: 'ExpressionStatement',
              start: 5,
              end: 6,
              expression: {
                type: 'Identifier',
                start: 5,
                end: 6,
                name: 'b'
              }
            },
            alternate: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if (foo) a; if (bar) b; else c;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 31,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 11,
            test: {
              type: 'Identifier',
              start: 4,
              end: 7,
              name: 'foo'
            },
            consequent: {
              type: 'ExpressionStatement',
              start: 9,
              end: 11,
              expression: {
                type: 'Identifier',
                start: 9,
                end: 10,
                name: 'a'
              }
            },
            alternate: null
          },
          {
            type: 'IfStatement',
            start: 12,
            end: 31,
            test: {
              type: 'Identifier',
              start: 16,
              end: 19,
              name: 'bar'
            },
            consequent: {
              type: 'ExpressionStatement',
              start: 21,
              end: 23,
              expression: {
                type: 'Identifier',
                start: 21,
                end: 22,
                name: 'b'
              }
            },
            alternate: {
              type: 'ExpressionStatement',
              start: 29,
              end: 31,
              expression: {
                type: 'Identifier',
                start: 29,
                end: 30,
                name: 'c'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'if (a > 2) {b = c }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 19,
        body: [
          {
            type: 'IfStatement',
            start: 0,
            end: 19,
            test: {
              type: 'BinaryExpression',
              start: 4,
              end: 9,
              left: {
                type: 'Identifier',
                start: 4,
                end: 5,
                name: 'a'
              },
              operator: '>',
              right: {
                type: 'Literal',
                start: 8,
                end: 9,
                value: 2
              }
            },
            consequent: {
              type: 'BlockStatement',
              start: 11,
              end: 19,
              body: [
                {
                  type: 'ExpressionStatement',
                  start: 12,
                  end: 17,
                  expression: {
                    type: 'AssignmentExpression',
                    start: 12,
                    end: 17,
                    operator: '=',
                    left: {
                      type: 'Identifier',
                      start: 12,
                      end: 13,
                      name: 'b'
                    },
                    right: {
                      type: 'Identifier',
                      start: 16,
                      end: 17,
                      name: 'c'
                    }
                  }
                }
              ]
            },
            alternate: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'while (x < 10) { x++; y--; }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 28,
        body: [
          {
            type: 'WhileStatement',
            start: 0,
            end: 28,
            test: {
              type: 'BinaryExpression',
              start: 7,
              end: 13,
              left: {
                type: 'Identifier',
                start: 7,
                end: 8,
                name: 'x'
              },
              operator: '<',
              right: {
                type: 'Literal',
                start: 11,
                end: 13,
                value: 10
              }
            },
            body: {
              type: 'BlockStatement',
              start: 15,
              end: 28,
              body: [
                {
                  type: 'ExpressionStatement',
                  start: 17,
                  end: 21,
                  expression: {
                    type: 'UpdateExpression',
                    start: 17,
                    end: 20,
                    operator: '++',
                    prefix: false,
                    argument: {
                      type: 'Identifier',
                      start: 17,
                      end: 18,
                      name: 'x'
                    }
                  }
                },
                {
                  type: 'ExpressionStatement',
                  start: 22,
                  end: 26,
                  expression: {
                    type: 'UpdateExpression',
                    start: 22,
                    end: 25,
                    operator: '--',
                    prefix: false,
                    argument: {
                      type: 'Identifier',
                      start: 22,
                      end: 23,
                      name: 'y'
                    }
                  }
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'while (i-->1) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 16,
        body: [
          {
            type: 'WhileStatement',
            start: 0,
            end: 16,
            test: {
              type: 'BinaryExpression',
              start: 7,
              end: 12,
              left: {
                type: 'UpdateExpression',
                start: 7,
                end: 10,
                operator: '--',
                prefix: false,
                argument: {
                  type: 'Identifier',
                  start: 7,
                  end: 8,
                  name: 'i'
                }
              },
              operator: '>',
              right: {
                type: 'Literal',
                start: 11,
                end: 12,
                value: 1
              }
            },
            body: {
              type: 'BlockStatement',
              start: 14,
              end: 16,
              body: []
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'try {} catch({e=x}){}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 21,
        body: [
          {
            type: 'TryStatement',
            start: 0,
            end: 21,
            block: {
              type: 'BlockStatement',
              start: 4,
              end: 6,
              body: []
            },
            handler: {
              type: 'CatchClause',
              start: 7,
              end: 21,
              param: {
                type: 'ObjectPattern',
                start: 13,
                end: 18,
                properties: [
                  {
                    type: 'Property',
                    start: 14,
                    end: 17,
                    method: false,
                    shorthand: true,
                    computed: false,
                    key: {
                      type: 'Identifier',
                      start: 14,
                      end: 15,
                      name: 'e'
                    },
                    kind: 'init',
                    value: {
                      type: 'AssignmentPattern',
                      start: 14,
                      end: 17,
                      left: {
                        type: 'Identifier',
                        start: 14,
                        end: 15,
                        name: 'e'
                      },
                      right: {
                        type: 'Identifier',
                        start: 16,
                        end: 17,
                        name: 'x'
                      }
                    }
                  }
                ]
              },
              body: {
                type: 'BlockStatement',
                start: 19,
                end: 21,
                body: []
              }
            },
            finalizer: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'try {} catch {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 15,
        body: [
          {
            type: 'TryStatement',
            start: 0,
            end: 15,
            block: {
              type: 'BlockStatement',
              start: 4,
              end: 6,
              body: []
            },
            handler: {
              type: 'CatchClause',
              start: 7,
              end: 15,
              param: null,
              body: {
                type: 'BlockStatement',
                start: 13,
                end: 15,
                body: []
              }
            },
            finalizer: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'try { } catch (e) { say(e) }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 28,
        body: [
          {
            type: 'TryStatement',
            start: 0,
            end: 28,
            block: {
              type: 'BlockStatement',
              start: 4,
              end: 7,
              body: []
            },
            handler: {
              type: 'CatchClause',
              start: 8,
              end: 28,
              param: {
                type: 'Identifier',
                start: 15,
                end: 16,
                name: 'e'
              },
              body: {
                type: 'BlockStatement',
                start: 18,
                end: 28,
                body: [
                  {
                    type: 'ExpressionStatement',
                    start: 20,
                    end: 26,
                    expression: {
                      type: 'CallExpression',
                      start: 20,
                      end: 26,
                      callee: {
                        type: 'Identifier',
                        start: 20,
                        end: 23,
                        name: 'say'
                      },
                      arguments: [
                        {
                          type: 'Identifier',
                          start: 24,
                          end: 25,
                          name: 'e'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            finalizer: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'try { } catch ([a = 0]) { }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 27,
        body: [
          {
            type: 'TryStatement',
            start: 0,
            end: 27,
            block: {
              type: 'BlockStatement',
              start: 4,
              end: 7,
              body: []
            },
            handler: {
              type: 'CatchClause',
              start: 8,
              end: 27,
              param: {
                type: 'ArrayPattern',
                start: 15,
                end: 22,
                elements: [
                  {
                    type: 'AssignmentPattern',
                    start: 16,
                    end: 21,
                    left: {
                      type: 'Identifier',
                      start: 16,
                      end: 17,
                      name: 'a'
                    },
                    right: {
                      type: 'Literal',
                      start: 20,
                      end: 21,
                      value: 0
                    }
                  }
                ]
              },
              body: {
                type: 'BlockStatement',
                start: 24,
                end: 27,
                body: []
              }
            },
            finalizer: null
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'throw foo;',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 10,
        body: [
          {
            type: 'ThrowStatement',
            start: 0,
            end: 10,
            argument: {
              type: 'Identifier',
              start: 6,
              end: 9,
              name: 'foo'
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'throw x * y',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 11,
        body: [
          {
            type: 'ThrowStatement',
            start: 0,
            end: 11,
            argument: {
              type: 'BinaryExpression',
              start: 6,
              end: 11,
              left: {
                type: 'Identifier',
                start: 6,
                end: 7,
                name: 'x'
              },
              operator: '*',
              right: {
                type: 'Identifier',
                start: 10,
                end: 11,
                name: 'y'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'switch(foo) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 14,
        body: [
          {
            type: 'SwitchStatement',
            start: 0,
            end: 14,
            discriminant: {
              type: 'Identifier',
              start: 7,
              end: 10,
              name: 'foo'
            },
            cases: []
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'switch (A) {default: D; case B: C; }',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 36,
        body: [
          {
            type: 'SwitchStatement',
            start: 0,
            end: 36,
            discriminant: {
              type: 'Identifier',
              start: 8,
              end: 9,
              name: 'A'
            },
            cases: [
              {
                type: 'SwitchCase',
                start: 12,
                end: 23,
                consequent: [
                  {
                    type: 'ExpressionStatement',
                    start: 21,
                    end: 23,
                    expression: {
                      type: 'Identifier',
                      start: 21,
                      end: 22,
                      name: 'D'
                    }
                  }
                ],
                test: null
              },
              {
                type: 'SwitchCase',
                start: 24,
                end: 34,
                consequent: [
                  {
                    type: 'ExpressionStatement',
                    start: 32,
                    end: 34,
                    expression: {
                      type: 'Identifier',
                      start: 32,
                      end: 33,
                      name: 'C'
                    }
                  }
                ],
                test: {
                  type: 'Identifier',
                  start: 29,
                  end: 30,
                  name: 'B'
                }
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'switch(a){case 1:default:}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 26,
        body: [
          {
            type: 'SwitchStatement',
            start: 0,
            end: 26,
            discriminant: {
              type: 'Identifier',
              start: 7,
              end: 8,
              name: 'a'
            },
            cases: [
              {
                type: 'SwitchCase',
                start: 10,
                end: 17,
                consequent: [],
                test: {
                  type: 'Literal',
                  start: 15,
                  end: 16,
                  value: 1
                }
              },
              {
                type: 'SwitchCase',
                start: 17,
                end: 25,
                consequent: [],
                test: null
              }
            ]
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for (a;;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 10,
        body: [
          {
            type: 'ForStatement',
            start: 0,
            end: 10,
            init: {
              type: 'Identifier',
              start: 5,
              end: 6,
              name: 'a'
            },
            test: null,
            update: null,
            body: {
              type: 'EmptyStatement',
              start: 9,
              end: 10
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for (let [...foo] = obj;;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 27,
        body: [
          {
            type: 'ForStatement',
            start: 0,
            end: 27,
            init: {
              type: 'VariableDeclaration',
              start: 5,
              end: 23,
              declarations: [
                {
                  type: 'VariableDeclarator',
                  start: 9,
                  end: 23,
                  id: {
                    type: 'ArrayPattern',
                    start: 9,
                    end: 17,
                    elements: [
                      {
                        type: 'RestElement',
                        start: 10,
                        end: 16,
                        argument: {
                          type: 'Identifier',
                          start: 13,
                          end: 16,
                          name: 'foo'
                        }
                      }
                    ]
                  },
                  init: {
                    type: 'Identifier',
                    start: 20,
                    end: 23,
                    name: 'obj'
                  }
                }
              ],
              kind: 'let'
            },
            test: null,
            update: null,
            body: {
              type: 'EmptyStatement',
              start: 26,
              end: 27
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for (let [foo=a] = arr;;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 26,
        body: [
          {
            type: 'ForStatement',
            start: 0,
            end: 26,
            init: {
              type: 'VariableDeclaration',
              start: 5,
              end: 22,
              declarations: [
                {
                  type: 'VariableDeclarator',
                  start: 9,
                  end: 22,
                  id: {
                    type: 'ArrayPattern',
                    start: 9,
                    end: 16,
                    elements: [
                      {
                        type: 'AssignmentPattern',
                        start: 10,
                        end: 15,
                        left: {
                          type: 'Identifier',
                          start: 10,
                          end: 13,
                          name: 'foo'
                        },
                        right: {
                          type: 'Identifier',
                          start: 14,
                          end: 15,
                          name: 'a'
                        }
                      }
                    ]
                  },
                  init: {
                    type: 'Identifier',
                    start: 19,
                    end: 22,
                    name: 'arr'
                  }
                }
              ],
              kind: 'let'
            },
            test: null,
            update: null,
            body: {
              type: 'EmptyStatement',
              start: 25,
              end: 26
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for (x.y of [23]) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 20,
        body: [
          {
            type: 'ForOfStatement',
            start: 0,
            end: 20,
            await: false,
            left: {
              type: 'MemberExpression',
              start: 5,
              end: 8,
              object: {
                type: 'Identifier',
                start: 5,
                end: 6,
                name: 'x'
              },
              property: {
                type: 'Identifier',
                start: 7,
                end: 8,
                name: 'y'
              },
              computed: false
            },
            right: {
              type: 'ArrayExpression',
              start: 12,
              end: 16,
              elements: [
                {
                  type: 'Literal',
                  start: 13,
                  end: 15,
                  value: 23
                }
              ]
            },
            body: {
              type: 'BlockStatement',
              start: 18,
              end: 20,
              body: []
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for ( let[x] of [[34]] ) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 27,
        body: [
          {
            type: 'ForOfStatement',
            start: 0,
            end: 27,
            await: false,
            left: {
              type: 'VariableDeclaration',
              start: 6,
              end: 12,
              declarations: [
                {
                  type: 'VariableDeclarator',
                  start: 9,
                  end: 12,
                  id: {
                    type: 'ArrayPattern',
                    start: 9,
                    end: 12,
                    elements: [
                      {
                        type: 'Identifier',
                        start: 10,
                        end: 11,
                        name: 'x'
                      }
                    ]
                  },
                  init: null
                }
              ],
              kind: 'let'
            },
            right: {
              type: 'ArrayExpression',
              start: 16,
              end: 22,
              elements: [
                {
                  type: 'ArrayExpression',
                  start: 17,
                  end: 21,
                  elements: [
                    {
                      type: 'Literal',
                      start: 18,
                      end: 20,
                      value: 34
                    }
                  ]
                }
              ]
            },
            body: {
              type: 'BlockStatement',
              start: 25,
              end: 27,
              body: []
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'for (yield[g]--;;);',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 19,
        body: [
          {
            type: 'ForStatement',
            start: 0,
            end: 19,
            init: {
              type: 'UpdateExpression',
              start: 5,
              end: 15,
              operator: '--',
              prefix: false,
              argument: {
                type: 'MemberExpression',
                start: 5,
                end: 13,
                object: {
                  type: 'Identifier',
                  start: 5,
                  end: 10,
                  name: 'yield'
                },
                property: {
                  type: 'Identifier',
                  start: 11,
                  end: 12,
                  name: 'g'
                },
                computed: true
              }
            },
            test: null,
            update: null,
            body: {
              type: 'EmptyStatement',
              start: 18,
              end: 19
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'function fn4([[x, y, ...z]]) {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 31,
        body: [
          {
            type: 'FunctionDeclaration',
            start: 0,
            end: 31,
            id: {
              type: 'Identifier',
              start: 9,
              end: 12,
              name: 'fn4'
            },
            generator: false,
            async: false,
            params: [
              {
                type: 'ArrayPattern',
                start: 13,
                end: 27,
                elements: [
                  {
                    type: 'ArrayPattern',
                    start: 14,
                    end: 26,
                    elements: [
                      {
                        type: 'Identifier',
                        start: 15,
                        end: 16,
                        name: 'x'
                      },
                      {
                        type: 'Identifier',
                        start: 18,
                        end: 19,
                        name: 'y'
                      },
                      {
                        type: 'RestElement',
                        start: 21,
                        end: 25,
                        argument: {
                          type: 'Identifier',
                          start: 24,
                          end: 25,
                          name: 'z'
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            body: {
              type: 'BlockStatement',
              start: 29,
              end: 31,
              body: []
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[x.a=a] = 0',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 11,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 11,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 11,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 7,
                elements: [
                  {
                    type: 'AssignmentPattern',
                    start: 1,
                    end: 6,
                    left: {
                      type: 'MemberExpression',
                      start: 1,
                      end: 4,
                      object: {
                        type: 'Identifier',
                        start: 1,
                        end: 2,
                        name: 'x'
                      },
                      property: {
                        type: 'Identifier',
                        start: 3,
                        end: 4,
                        name: 'a'
                      },
                      computed: false
                    },
                    right: {
                      type: 'Identifier',
                      start: 5,
                      end: 6,
                      name: 'a'
                    }
                  }
                ]
              },
              right: {
                type: 'Literal',
                start: 10,
                end: 11,
                value: 0
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[{a=0},{a=0}] = 0',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 17,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 17,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 17,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 13,
                elements: [
                  {
                    type: 'ObjectPattern',
                    start: 1,
                    end: 6,
                    properties: [
                      {
                        type: 'Property',
                        start: 2,
                        end: 5,
                        method: false,
                        shorthand: true,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 2,
                          end: 3,
                          name: 'a'
                        },
                        kind: 'init',
                        value: {
                          type: 'AssignmentPattern',
                          start: 2,
                          end: 5,
                          left: {
                            type: 'Identifier',
                            start: 2,
                            end: 3,
                            name: 'a'
                          },
                          right: {
                            type: 'Literal',
                            start: 4,
                            end: 5,
                            value: 0
                          }
                        }
                      }
                    ]
                  },
                  {
                    type: 'ObjectPattern',
                    start: 7,
                    end: 12,
                    properties: [
                      {
                        type: 'Property',
                        start: 8,
                        end: 11,
                        method: false,
                        shorthand: true,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 8,
                          end: 9,
                          name: 'a'
                        },
                        kind: 'init',
                        value: {
                          type: 'AssignmentPattern',
                          start: 8,
                          end: 11,
                          left: {
                            type: 'Identifier',
                            start: 8,
                            end: 9,
                            name: 'a'
                          },
                          right: {
                            type: 'Literal',
                            start: 10,
                            end: 11,
                            value: 0
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              right: {
                type: 'Literal',
                start: 16,
                end: 17,
                value: 0
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[...[...a[x]]] = 1',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 18,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 18,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 18,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 14,
                elements: [
                  {
                    type: 'RestElement',
                    start: 1,
                    end: 13,
                    argument: {
                      type: 'ArrayPattern',
                      start: 4,
                      end: 13,
                      elements: [
                        {
                          type: 'RestElement',
                          start: 5,
                          end: 12,
                          argument: {
                            type: 'MemberExpression',
                            start: 8,
                            end: 12,
                            object: {
                              type: 'Identifier',
                              start: 8,
                              end: 9,
                              name: 'a'
                            },
                            property: {
                              type: 'Identifier',
                              start: 10,
                              end: 11,
                              name: 'x'
                            },
                            computed: true
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              right: {
                type: 'Literal',
                start: 17,
                end: 18,
                value: 1
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'var {x: y, z: { a: b } } = { x: "3", z: { a: "b" } };',
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 53,
        body: [
          {
            type: 'VariableDeclaration',
            start: 0,
            end: 53,
            declarations: [
              {
                type: 'VariableDeclarator',
                start: 4,
                end: 52,
                id: {
                  type: 'ObjectPattern',
                  start: 4,
                  end: 24,
                  properties: [
                    {
                      type: 'Property',
                      start: 5,
                      end: 9,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 5,
                        end: 6,
                        name: 'x'
                      },
                      value: {
                        type: 'Identifier',
                        start: 8,
                        end: 9,
                        name: 'y'
                      },
                      kind: 'init'
                    },
                    {
                      type: 'Property',
                      start: 11,
                      end: 22,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 11,
                        end: 12,
                        name: 'z'
                      },
                      value: {
                        type: 'ObjectPattern',
                        start: 14,
                        end: 22,
                        properties: [
                          {
                            type: 'Property',
                            start: 16,
                            end: 20,
                            method: false,
                            shorthand: false,
                            computed: false,
                            key: {
                              type: 'Identifier',
                              start: 16,
                              end: 17,
                              name: 'a'
                            },
                            value: {
                              type: 'Identifier',
                              start: 19,
                              end: 20,
                              name: 'b'
                            },
                            kind: 'init'
                          }
                        ]
                      },
                      kind: 'init'
                    }
                  ]
                },
                init: {
                  type: 'ObjectExpression',
                  start: 27,
                  end: 52,
                  properties: [
                    {
                      type: 'Property',
                      start: 29,
                      end: 35,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 29,
                        end: 30,
                        name: 'x'
                      },
                      value: {
                        type: 'Literal',
                        start: 32,
                        end: 35,
                        value: '3',
                        raw: '"3"'
                      },
                      kind: 'init'
                    },
                    {
                      type: 'Property',
                      start: 37,
                      end: 50,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 37,
                        end: 38,
                        name: 'z'
                      },
                      value: {
                        type: 'ObjectExpression',
                        start: 40,
                        end: 50,
                        properties: [
                          {
                            type: 'Property',
                            start: 42,
                            end: 48,
                            method: false,
                            shorthand: false,
                            computed: false,
                            key: {
                              type: 'Identifier',
                              start: 42,
                              end: 43,
                              name: 'a'
                            },
                            value: {
                              type: 'Literal',
                              start: 45,
                              end: 48,
                              value: 'b',
                              raw: '"b"'
                            },
                            kind: 'init'
                          }
                        ]
                      },
                      kind: 'init'
                    }
                  ]
                }
              }
            ],
            kind: 'var'
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[a,b=0,[c,...a[0]]={}]=0;',
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 25,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 25,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 24,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 22,
                elements: [
                  {
                    type: 'Identifier',
                    start: 1,
                    end: 2,
                    name: 'a'
                  },
                  {
                    type: 'AssignmentPattern',
                    start: 3,
                    end: 6,
                    left: {
                      type: 'Identifier',
                      start: 3,
                      end: 4,
                      name: 'b'
                    },
                    right: {
                      type: 'Literal',
                      start: 5,
                      end: 6,
                      value: 0,
                      raw: '0'
                    }
                  },
                  {
                    type: 'AssignmentPattern',
                    start: 7,
                    end: 21,
                    left: {
                      type: 'ArrayPattern',
                      start: 7,
                      end: 18,
                      elements: [
                        {
                          type: 'Identifier',
                          start: 8,
                          end: 9,
                          name: 'c'
                        },
                        {
                          type: 'RestElement',
                          start: 10,
                          end: 17,
                          argument: {
                            type: 'MemberExpression',
                            start: 13,
                            end: 17,
                            object: {
                              type: 'Identifier',
                              start: 13,
                              end: 14,
                              name: 'a'
                            },
                            property: {
                              type: 'Literal',
                              start: 15,
                              end: 16,
                              value: 0,
                              raw: '0'
                            },
                            computed: true
                          }
                        }
                      ]
                    },
                    right: {
                      type: 'ObjectExpression',
                      start: 19,
                      end: 21,
                      properties: []
                    }
                  }
                ]
              },
              right: {
                type: 'Literal',
                start: 23,
                end: 24,
                value: 0,
                raw: '0'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '({a,b=b,a:c,[a]:[d]})=>0;',
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 25,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 25,
            expression: {
              type: 'ArrowFunctionExpression',
              start: 0,
              end: 24,
              expression: true,
              async: false,
              params: [
                {
                  type: 'ObjectPattern',
                  start: 1,
                  end: 20,
                  properties: [
                    {
                      type: 'Property',
                      start: 2,
                      end: 3,
                      method: false,
                      shorthand: true,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 2,
                        end: 3,
                        name: 'a'
                      },
                      kind: 'init',
                      value: {
                        type: 'Identifier',
                        start: 2,
                        end: 3,
                        name: 'a'
                      }
                    },
                    {
                      type: 'Property',
                      start: 4,
                      end: 7,
                      method: false,
                      shorthand: true,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 4,
                        end: 5,
                        name: 'b'
                      },
                      kind: 'init',
                      value: {
                        type: 'AssignmentPattern',
                        start: 4,
                        end: 7,
                        left: {
                          type: 'Identifier',
                          start: 4,
                          end: 5,
                          name: 'b'
                        },
                        right: {
                          type: 'Identifier',
                          start: 6,
                          end: 7,
                          name: 'b'
                        }
                      }
                    },
                    {
                      type: 'Property',
                      start: 8,
                      end: 11,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 8,
                        end: 9,
                        name: 'a'
                      },
                      value: {
                        type: 'Identifier',
                        start: 10,
                        end: 11,
                        name: 'c'
                      },
                      kind: 'init'
                    },
                    {
                      type: 'Property',
                      start: 12,
                      end: 19,
                      method: false,
                      shorthand: false,
                      computed: true,
                      key: {
                        type: 'Identifier',
                        start: 13,
                        end: 14,
                        name: 'a'
                      },
                      value: {
                        type: 'ArrayPattern',
                        start: 16,
                        end: 19,
                        elements: [
                          {
                            type: 'Identifier',
                            start: 17,
                            end: 18,
                            name: 'd'
                          }
                        ]
                      },
                      kind: 'init'
                    }
                  ]
                }
              ],
              body: {
                type: 'Literal',
                start: 23,
                end: 24,
                value: 0,
                raw: '0'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '(x, y = 9, {b}, z = 8, ...a) => {}',
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 34,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 34,
            expression: {
              type: 'ArrowFunctionExpression',
              start: 0,
              end: 34,
              expression: false,
              async: false,
              params: [
                {
                  type: 'Identifier',
                  start: 1,
                  end: 2,
                  name: 'x'
                },
                {
                  type: 'AssignmentPattern',
                  start: 4,
                  end: 9,
                  left: {
                    type: 'Identifier',
                    start: 4,
                    end: 5,
                    name: 'y'
                  },
                  right: {
                    type: 'Literal',
                    start: 8,
                    end: 9,
                    value: 9,
                    raw: '9'
                  }
                },
                {
                  type: 'ObjectPattern',
                  start: 11,
                  end: 14,
                  properties: [
                    {
                      type: 'Property',
                      start: 12,
                      end: 13,
                      method: false,
                      shorthand: true,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 12,
                        end: 13,
                        name: 'b'
                      },
                      kind: 'init',
                      value: {
                        type: 'Identifier',
                        start: 12,
                        end: 13,
                        name: 'b'
                      }
                    }
                  ]
                },
                {
                  type: 'AssignmentPattern',
                  start: 16,
                  end: 21,
                  left: {
                    type: 'Identifier',
                    start: 16,
                    end: 17,
                    name: 'z'
                  },
                  right: {
                    type: 'Literal',
                    start: 20,
                    end: 21,
                    value: 8,
                    raw: '8'
                  }
                },
                {
                  type: 'RestElement',
                  start: 23,
                  end: 27,
                  argument: {
                    type: 'Identifier',
                    start: 26,
                    end: 27,
                    name: 'a'
                  }
                }
              ],
              body: {
                type: 'BlockStatement',
                start: 32,
                end: 34,
                body: []
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[...[{prop: 1}.prop]] = []',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 26,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 26,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 26,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 21,
                elements: [
                  {
                    type: 'RestElement',
                    start: 1,
                    end: 20,
                    argument: {
                      type: 'ArrayPattern',
                      start: 4,
                      end: 20,
                      elements: [
                        {
                          type: 'MemberExpression',
                          start: 5,
                          end: 19,
                          object: {
                            type: 'ObjectExpression',
                            start: 5,
                            end: 14,
                            properties: [
                              {
                                type: 'Property',
                                start: 6,
                                end: 13,
                                method: false,
                                shorthand: false,
                                computed: false,
                                key: {
                                  type: 'Identifier',
                                  start: 6,
                                  end: 10,
                                  name: 'prop'
                                },
                                value: {
                                  type: 'Literal',
                                  start: 12,
                                  end: 13,
                                  value: 1
                                },
                                kind: 'init'
                              }
                            ]
                          },
                          property: {
                            type: 'Identifier',
                            start: 15,
                            end: 19,
                            name: 'prop'
                          },
                          computed: false
                        }
                      ]
                    }
                  }
                ]
              },
              right: {
                type: 'ArrayExpression',
                start: 24,
                end: 26,
                elements: []
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'f = ([cls = class {}]) => {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 28,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 28,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 28,
              operator: '=',
              left: {
                type: 'Identifier',
                start: 0,
                end: 1,
                name: 'f'
              },
              right: {
                type: 'ArrowFunctionExpression',
                start: 4,
                end: 28,
                expression: false,
                async: false,
                params: [
                  {
                    type: 'ArrayPattern',
                    start: 5,
                    end: 21,
                    elements: [
                      {
                        type: 'AssignmentPattern',
                        start: 6,
                        end: 20,
                        left: {
                          type: 'Identifier',
                          start: 6,
                          end: 9,
                          name: 'cls'
                        },
                        right: {
                          type: 'ClassExpression',
                          start: 12,
                          end: 20,
                          id: null,
                          superClass: null,
                          body: {
                            type: 'ClassBody',
                            start: 18,
                            end: 20,
                            body: []
                          }
                        }
                      }
                    ]
                  }
                ],
                body: {
                  type: 'BlockStatement',
                  start: 26,
                  end: 28,
                  body: []
                }
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'f = ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) => {}',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 83,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 83,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 83,
              operator: '=',
              left: {
                type: 'Identifier',
                start: 0,
                end: 1,
                name: 'f'
              },
              right: {
                type: 'ArrowFunctionExpression',
                start: 4,
                end: 83,
                expression: false,
                async: false,
                params: [
                  {
                    type: 'ArrayPattern',
                    start: 5,
                    end: 76,
                    elements: [
                      {
                        type: 'AssignmentPattern',
                        start: 6,
                        end: 20,
                        left: {
                          type: 'Identifier',
                          start: 6,
                          end: 9,
                          name: 'cls'
                        },
                        right: {
                          type: 'ClassExpression',
                          start: 12,
                          end: 20,
                          id: null,
                          superClass: null,
                          body: {
                            type: 'ClassBody',
                            start: 18,
                            end: 20,
                            body: []
                          }
                        }
                      },
                      {
                        type: 'AssignmentPattern',
                        start: 22,
                        end: 39,
                        left: {
                          type: 'Identifier',
                          start: 22,
                          end: 26,
                          name: 'xCls'
                        },
                        right: {
                          type: 'ClassExpression',
                          start: 29,
                          end: 39,
                          id: {
                            type: 'Identifier',
                            start: 35,
                            end: 36,
                            name: 'X'
                          },
                          superClass: null,
                          body: {
                            type: 'ClassBody',
                            start: 37,
                            end: 39,
                            body: []
                          }
                        }
                      },
                      {
                        type: 'AssignmentPattern',
                        start: 41,
                        end: 75,
                        left: {
                          type: 'Identifier',
                          start: 41,
                          end: 46,
                          name: 'xCls2'
                        },
                        right: {
                          type: 'ClassExpression',
                          start: 49,
                          end: 75,
                          id: null,
                          superClass: null,
                          body: {
                            type: 'ClassBody',
                            start: 55,
                            end: 75,
                            body: [
                              {
                                type: 'MethodDefinition',
                                start: 57,
                                end: 73,
                                kind: 'method',
                                static: true,
                                computed: false,
                                key: {
                                  type: 'Identifier',
                                  start: 64,
                                  end: 68,
                                  name: 'name'
                                },
                                value: {
                                  type: 'FunctionExpression',
                                  start: 68,
                                  end: 73,
                                  generator: false,
                                  id: null,
                                  async: false,
                                  params: [],
                                  body: {
                                    type: 'BlockStatement',
                                    start: 71,
                                    end: 73,
                                    body: []
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                ],
                body: {
                  type: 'BlockStatement',
                  start: 81,
                  end: 83,
                  body: []
                }
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '[{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];',
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 103,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 103,
            expression: {
              type: 'AssignmentExpression',
              start: 0,
              end: 102,
              operator: '=',
              left: {
                type: 'ArrayPattern',
                start: 0,
                end: 65,
                elements: [
                  {
                    type: 'ObjectPattern',
                    start: 1,
                    end: 29,
                    properties: [
                      {
                        type: 'Property',
                        start: 2,
                        end: 27,
                        method: false,
                        shorthand: false,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 2,
                          end: 3,
                          name: 'x'
                        },
                        value: {
                          type: 'ArrayPattern',
                          start: 6,
                          end: 27,
                          elements: [
                            {
                              type: 'ObjectPattern',
                              start: 7,
                              end: 26,
                              properties: [
                                {
                                  type: 'Property',
                                  start: 8,
                                  end: 17,
                                  method: false,
                                  shorthand: false,
                                  computed: false,
                                  key: {
                                    type: 'Identifier',
                                    start: 8,
                                    end: 9,
                                    name: 'y'
                                  },
                                  value: {
                                    type: 'ObjectPattern',
                                    start: 10,
                                    end: 17,
                                    properties: [
                                      {
                                        type: 'Property',
                                        start: 11,
                                        end: 16,
                                        method: false,
                                        shorthand: true,
                                        computed: false,
                                        key: {
                                          type: 'Identifier',
                                          start: 11,
                                          end: 12,
                                          name: 'z'
                                        },
                                        kind: 'init',
                                        value: {
                                          type: 'AssignmentPattern',
                                          start: 11,
                                          end: 16,
                                          left: {
                                            type: 'Identifier',
                                            start: 11,
                                            end: 12,
                                            name: 'z'
                                          },
                                          right: {
                                            type: 'Literal',
                                            start: 15,
                                            end: 16,
                                            value: 1,
                                            raw: '1'
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  kind: 'init'
                                },
                                {
                                  type: 'Property',
                                  start: 19,
                                  end: 25,
                                  method: false,
                                  shorthand: true,
                                  computed: false,
                                  key: {
                                    type: 'Identifier',
                                    start: 19,
                                    end: 21,
                                    name: 'z1'
                                  },
                                  kind: 'init',
                                  value: {
                                    type: 'AssignmentPattern',
                                    start: 19,
                                    end: 25,
                                    left: {
                                      type: 'Identifier',
                                      start: 19,
                                      end: 21,
                                      name: 'z1'
                                    },
                                    right: {
                                      type: 'Literal',
                                      start: 24,
                                      end: 25,
                                      value: 2,
                                      raw: '2'
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        kind: 'init'
                      }
                    ]
                  },
                  {
                    type: 'ObjectPattern',
                    start: 31,
                    end: 39,
                    properties: [
                      {
                        type: 'Property',
                        start: 32,
                        end: 38,
                        method: false,
                        shorthand: true,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 32,
                          end: 34,
                          name: 'x2'
                        },
                        kind: 'init',
                        value: {
                          type: 'AssignmentPattern',
                          start: 32,
                          end: 38,
                          left: {
                            type: 'Identifier',
                            start: 32,
                            end: 34,
                            name: 'x2'
                          },
                          right: {
                            type: 'Literal',
                            start: 37,
                            end: 38,
                            value: 3,
                            raw: '3'
                          }
                        }
                      }
                    ]
                  },
                  {
                    type: 'ObjectPattern',
                    start: 41,
                    end: 63,
                    properties: [
                      {
                        type: 'Property',
                        start: 42,
                        end: 62,
                        method: false,
                        shorthand: false,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 42,
                          end: 44,
                          name: 'x3'
                        },
                        value: {
                          type: 'ObjectPattern',
                          start: 47,
                          end: 62,
                          properties: [
                            {
                              type: 'Property',
                              start: 48,
                              end: 61,
                              method: false,
                              shorthand: false,
                              computed: false,
                              key: {
                                type: 'Identifier',
                                start: 48,
                                end: 50,
                                name: 'y3'
                              },
                              value: {
                                type: 'ArrayPattern',
                                start: 51,
                                end: 61,
                                elements: [
                                  {
                                    type: 'ObjectPattern',
                                    start: 52,
                                    end: 60,
                                    properties: [
                                      {
                                        type: 'Property',
                                        start: 53,
                                        end: 59,
                                        method: false,
                                        shorthand: true,
                                        computed: false,
                                        key: {
                                          type: 'Identifier',
                                          start: 53,
                                          end: 55,
                                          name: 'z3'
                                        },
                                        kind: 'init',
                                        value: {
                                          type: 'AssignmentPattern',
                                          start: 53,
                                          end: 59,
                                          left: {
                                            type: 'Identifier',
                                            start: 53,
                                            end: 55,
                                            name: 'z3'
                                          },
                                          right: {
                                            type: 'Literal',
                                            start: 58,
                                            end: 59,
                                            value: 4,
                                            raw: '4'
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              kind: 'init'
                            }
                          ]
                        },
                        kind: 'init'
                      }
                    ]
                  }
                ]
              },
              right: {
                type: 'ArrayExpression',
                start: 68,
                end: 102,
                elements: [
                  {
                    type: 'ObjectExpression',
                    start: 69,
                    end: 81,
                    properties: [
                      {
                        type: 'Property',
                        start: 70,
                        end: 80,
                        method: false,
                        shorthand: false,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 70,
                          end: 71,
                          name: 'x'
                        },
                        value: {
                          type: 'ArrayExpression',
                          start: 72,
                          end: 80,
                          elements: [
                            {
                              type: 'ObjectExpression',
                              start: 73,
                              end: 79,
                              properties: [
                                {
                                  type: 'Property',
                                  start: 74,
                                  end: 78,
                                  method: false,
                                  shorthand: false,
                                  computed: false,
                                  key: {
                                    type: 'Identifier',
                                    start: 74,
                                    end: 75,
                                    name: 'y'
                                  },
                                  value: {
                                    type: 'ObjectExpression',
                                    start: 76,
                                    end: 78,
                                    properties: []
                                  },
                                  kind: 'init'
                                }
                              ]
                            }
                          ]
                        },
                        kind: 'init'
                      }
                    ]
                  },
                  {
                    type: 'ObjectExpression',
                    start: 83,
                    end: 85,
                    properties: []
                  },
                  {
                    type: 'ObjectExpression',
                    start: 87,
                    end: 101,
                    properties: [
                      {
                        type: 'Property',
                        start: 88,
                        end: 100,
                        method: false,
                        shorthand: false,
                        computed: false,
                        key: {
                          type: 'Identifier',
                          start: 88,
                          end: 90,
                          name: 'x3'
                        },
                        value: {
                          type: 'ObjectExpression',
                          start: 91,
                          end: 100,
                          properties: [
                            {
                              type: 'Property',
                              start: 92,
                              end: 99,
                              method: false,
                              shorthand: false,
                              computed: false,
                              key: {
                                type: 'Identifier',
                                start: 92,
                                end: 94,
                                name: 'y3'
                              },
                              value: {
                                type: 'ArrayExpression',
                                start: 95,
                                end: 99,
                                elements: [
                                  {
                                    type: 'ObjectExpression',
                                    start: 96,
                                    end: 98,
                                    properties: []
                                  }
                                ]
                              },
                              kind: 'init'
                            }
                          ]
                        },
                        kind: 'init'
                      }
                    ]
                  }
                ]
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      `function bind_bindFunction0(fun, thisArg, boundArgs) {
      return function bound() {
          // Ensure we allocate a call-object slot for |boundArgs|, so the
          // debugger can access this value.
          if (false) void boundArgs;

          var newTarget;
          if (_IsConstructing()) {
              newTarget = new.target;
              if (newTarget === bound)
                  newTarget = fun;
              switch (arguments.length) {
                case 0:
                  return constructContentFunction(fun, newTarget);
                case 1:
                  return constructContentFunction(fun, newTarget, SPREAD(arguments, 1));
                case 2:
                  return constructContentFunction(fun, newTarget, SPREAD(arguments, 2));
                case 3:
                  return constructContentFunction(fun, newTarget, SPREAD(arguments, 3));
                case 4:
                  return constructContentFunction(fun, newTarget, SPREAD(arguments, 4));
                case 5:
                  return constructContentFunction(fun, newTarget, SPREAD(arguments, 5));
                default:
                  var args = FUN_APPLY(bind_mapArguments, null, arguments);
                  return bind_constructFunctionN(fun, newTarget, args);
              }
          } else {
              switch (arguments.length) {
                case 0:
                  return callContentFunction(fun, thisArg);
                case 1:
                  return callContentFunction(fun, thisArg, SPREAD(arguments, 1));
                case 2:
                  return callContentFunction(fun, thisArg, SPREAD(arguments, 2));
                case 3:
                  return callContentFunction(fun, thisArg, SPREAD(arguments, 3));
                case 4:
                  return callContentFunction(fun, thisArg, SPREAD(arguments, 4));
                case 5:
                  return callContentFunction(fun, thisArg, SPREAD(arguments, 5));
                default:
                  return FUN_APPLY(fun, thisArg, arguments);
              }
          }
      };
    }`,
      Context.OptionsRanges | Context.OptionsRaw,
      {
        type: 'Program',
        start: 0,
        end: 2107,
        body: [
          {
            type: 'FunctionDeclaration',
            start: 0,
            end: 2107,
            id: {
              type: 'Identifier',
              start: 9,
              end: 27,
              name: 'bind_bindFunction0'
            },
            generator: false,
            async: false,
            params: [
              {
                type: 'Identifier',
                start: 28,
                end: 31,
                name: 'fun'
              },
              {
                type: 'Identifier',
                start: 33,
                end: 40,
                name: 'thisArg'
              },
              {
                type: 'Identifier',
                start: 42,
                end: 51,
                name: 'boundArgs'
              }
            ],
            body: {
              type: 'BlockStatement',
              start: 53,
              end: 2107,
              body: [
                {
                  type: 'ReturnStatement',
                  start: 61,
                  end: 2101,
                  argument: {
                    type: 'FunctionExpression',
                    start: 68,
                    end: 2100,
                    id: {
                      type: 'Identifier',
                      start: 77,
                      end: 82,
                      name: 'bound'
                    },
                    generator: false,
                    async: false,
                    params: [],
                    body: {
                      type: 'BlockStatement',
                      start: 85,
                      end: 2100,
                      body: [
                        {
                          type: 'IfStatement',
                          start: 217,
                          end: 243,
                          test: {
                            type: 'Literal',
                            start: 221,
                            end: 226,
                            value: false,
                            raw: 'false'
                          },
                          consequent: {
                            type: 'ExpressionStatement',
                            start: 228,
                            end: 243,
                            expression: {
                              type: 'UnaryExpression',
                              start: 228,
                              end: 242,
                              operator: 'void',
                              prefix: true,
                              argument: {
                                type: 'Identifier',
                                start: 233,
                                end: 242,
                                name: 'boundArgs'
                              }
                            }
                          },
                          alternate: null
                        },
                        {
                          type: 'VariableDeclaration',
                          start: 255,
                          end: 269,
                          declarations: [
                            {
                              type: 'VariableDeclarator',
                              start: 259,
                              end: 268,
                              id: {
                                type: 'Identifier',
                                start: 259,
                                end: 268,
                                name: 'newTarget'
                              },
                              init: null
                            }
                          ],
                          kind: 'var'
                        },
                        {
                          type: 'IfStatement',
                          start: 280,
                          end: 2092,
                          test: {
                            type: 'CallExpression',
                            start: 284,
                            end: 301,
                            callee: {
                              type: 'Identifier',
                              start: 284,
                              end: 299,
                              name: '_IsConstructing'
                            },
                            arguments: []
                          },
                          consequent: {
                            type: 'BlockStatement',
                            start: 303,
                            end: 1315,
                            body: [
                              {
                                type: 'ExpressionStatement',
                                start: 319,
                                end: 342,
                                expression: {
                                  type: 'AssignmentExpression',
                                  start: 319,
                                  end: 341,
                                  operator: '=',
                                  left: {
                                    type: 'Identifier',
                                    start: 319,
                                    end: 328,
                                    name: 'newTarget'
                                  },
                                  right: {
                                    type: 'MetaProperty',
                                    start: 331,
                                    end: 341,
                                    meta: {
                                      type: 'Identifier',
                                      start: 331,
                                      end: 334,
                                      name: 'new'
                                    },
                                    property: {
                                      type: 'Identifier',
                                      start: 335,
                                      end: 341,
                                      name: 'target'
                                    }
                                  }
                                }
                              },
                              {
                                type: 'IfStatement',
                                start: 357,
                                end: 416,
                                test: {
                                  type: 'BinaryExpression',
                                  start: 361,
                                  end: 380,
                                  left: {
                                    type: 'Identifier',
                                    start: 361,
                                    end: 370,
                                    name: 'newTarget'
                                  },
                                  operator: '===',
                                  right: {
                                    type: 'Identifier',
                                    start: 375,
                                    end: 380,
                                    name: 'bound'
                                  }
                                },
                                consequent: {
                                  type: 'ExpressionStatement',
                                  start: 400,
                                  end: 416,
                                  expression: {
                                    type: 'AssignmentExpression',
                                    start: 400,
                                    end: 415,
                                    operator: '=',
                                    left: {
                                      type: 'Identifier',
                                      start: 400,
                                      end: 409,
                                      name: 'newTarget'
                                    },
                                    right: {
                                      type: 'Identifier',
                                      start: 412,
                                      end: 415,
                                      name: 'fun'
                                    }
                                  }
                                },
                                alternate: null
                              },
                              {
                                type: 'SwitchStatement',
                                start: 431,
                                end: 1303,
                                discriminant: {
                                  type: 'MemberExpression',
                                  start: 439,
                                  end: 455,
                                  object: {
                                    type: 'Identifier',
                                    start: 439,
                                    end: 448,
                                    name: 'arguments'
                                  },
                                  property: {
                                    type: 'Identifier',
                                    start: 449,
                                    end: 455,
                                    name: 'length'
                                  },
                                  computed: false
                                },
                                cases: [
                                  {
                                    type: 'SwitchCase',
                                    start: 475,
                                    end: 549,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 501,
                                        end: 549,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 508,
                                          end: 548,
                                          callee: {
                                            type: 'Identifier',
                                            start: 508,
                                            end: 532,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 533,
                                              end: 536,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 538,
                                              end: 547,
                                              name: 'newTarget'
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 480,
                                      end: 481,
                                      value: 0,
                                      raw: '0'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 566,
                                    end: 662,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 592,
                                        end: 662,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 599,
                                          end: 661,
                                          callee: {
                                            type: 'Identifier',
                                            start: 599,
                                            end: 623,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 624,
                                              end: 627,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 629,
                                              end: 638,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 640,
                                              end: 660,
                                              callee: {
                                                type: 'Identifier',
                                                start: 640,
                                                end: 646,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 647,
                                                  end: 656,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 658,
                                                  end: 659,
                                                  value: 1,
                                                  raw: '1'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 571,
                                      end: 572,
                                      value: 1,
                                      raw: '1'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 679,
                                    end: 775,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 705,
                                        end: 775,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 712,
                                          end: 774,
                                          callee: {
                                            type: 'Identifier',
                                            start: 712,
                                            end: 736,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 737,
                                              end: 740,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 742,
                                              end: 751,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 753,
                                              end: 773,
                                              callee: {
                                                type: 'Identifier',
                                                start: 753,
                                                end: 759,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 760,
                                                  end: 769,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 771,
                                                  end: 772,
                                                  value: 2,
                                                  raw: '2'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 684,
                                      end: 685,
                                      value: 2,
                                      raw: '2'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 792,
                                    end: 888,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 818,
                                        end: 888,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 825,
                                          end: 887,
                                          callee: {
                                            type: 'Identifier',
                                            start: 825,
                                            end: 849,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 850,
                                              end: 853,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 855,
                                              end: 864,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 866,
                                              end: 886,
                                              callee: {
                                                type: 'Identifier',
                                                start: 866,
                                                end: 872,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 873,
                                                  end: 882,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 884,
                                                  end: 885,
                                                  value: 3,
                                                  raw: '3'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 797,
                                      end: 798,
                                      value: 3,
                                      raw: '3'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 905,
                                    end: 1001,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 931,
                                        end: 1001,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 938,
                                          end: 1000,
                                          callee: {
                                            type: 'Identifier',
                                            start: 938,
                                            end: 962,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 963,
                                              end: 966,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 968,
                                              end: 977,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 979,
                                              end: 999,
                                              callee: {
                                                type: 'Identifier',
                                                start: 979,
                                                end: 985,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 986,
                                                  end: 995,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 997,
                                                  end: 998,
                                                  value: 4,
                                                  raw: '4'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 910,
                                      end: 911,
                                      value: 4,
                                      raw: '4'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1018,
                                    end: 1114,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1044,
                                        end: 1114,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1051,
                                          end: 1113,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1051,
                                            end: 1075,
                                            name: 'constructContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1076,
                                              end: 1079,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1081,
                                              end: 1090,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1092,
                                              end: 1112,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1092,
                                                end: 1098,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1099,
                                                  end: 1108,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1110,
                                                  end: 1111,
                                                  value: 5,
                                                  raw: '5'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1023,
                                      end: 1024,
                                      value: 5,
                                      raw: '5'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1131,
                                    end: 1287,
                                    consequent: [
                                      {
                                        type: 'VariableDeclaration',
                                        start: 1158,
                                        end: 1215,
                                        declarations: [
                                          {
                                            type: 'VariableDeclarator',
                                            start: 1162,
                                            end: 1214,
                                            id: {
                                              type: 'Identifier',
                                              start: 1162,
                                              end: 1166,
                                              name: 'args'
                                            },
                                            init: {
                                              type: 'CallExpression',
                                              start: 1169,
                                              end: 1214,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1169,
                                                end: 1178,
                                                name: 'FUN_APPLY'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1179,
                                                  end: 1196,
                                                  name: 'bind_mapArguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1198,
                                                  end: 1202,
                                                  value: null,
                                                  raw: 'null'
                                                },
                                                {
                                                  type: 'Identifier',
                                                  start: 1204,
                                                  end: 1213,
                                                  name: 'arguments'
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        kind: 'var'
                                      },
                                      {
                                        type: 'ReturnStatement',
                                        start: 1234,
                                        end: 1287,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1241,
                                          end: 1286,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1241,
                                            end: 1264,
                                            name: 'bind_constructFunctionN'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1265,
                                              end: 1268,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1270,
                                              end: 1279,
                                              name: 'newTarget'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1281,
                                              end: 1285,
                                              name: 'args'
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: null
                                  }
                                ]
                              }
                            ]
                          },
                          alternate: {
                            type: 'BlockStatement',
                            start: 1321,
                            end: 2092,
                            body: [
                              {
                                type: 'SwitchStatement',
                                start: 1337,
                                end: 2080,
                                discriminant: {
                                  type: 'MemberExpression',
                                  start: 1345,
                                  end: 1361,
                                  object: {
                                    type: 'Identifier',
                                    start: 1345,
                                    end: 1354,
                                    name: 'arguments'
                                  },
                                  property: {
                                    type: 'Identifier',
                                    start: 1355,
                                    end: 1361,
                                    name: 'length'
                                  },
                                  computed: false
                                },
                                cases: [
                                  {
                                    type: 'SwitchCase',
                                    start: 1381,
                                    end: 1448,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1407,
                                        end: 1448,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1414,
                                          end: 1447,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1414,
                                            end: 1433,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1434,
                                              end: 1437,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1439,
                                              end: 1446,
                                              name: 'thisArg'
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1386,
                                      end: 1387,
                                      value: 0,
                                      raw: '0'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1465,
                                    end: 1554,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1491,
                                        end: 1554,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1498,
                                          end: 1553,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1498,
                                            end: 1517,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1518,
                                              end: 1521,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1523,
                                              end: 1530,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1532,
                                              end: 1552,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1532,
                                                end: 1538,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1539,
                                                  end: 1548,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1550,
                                                  end: 1551,
                                                  value: 1,
                                                  raw: '1'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1470,
                                      end: 1471,
                                      value: 1,
                                      raw: '1'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1571,
                                    end: 1660,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1597,
                                        end: 1660,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1604,
                                          end: 1659,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1604,
                                            end: 1623,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1624,
                                              end: 1627,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1629,
                                              end: 1636,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1638,
                                              end: 1658,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1638,
                                                end: 1644,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1645,
                                                  end: 1654,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1656,
                                                  end: 1657,
                                                  value: 2,
                                                  raw: '2'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1576,
                                      end: 1577,
                                      value: 2,
                                      raw: '2'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1677,
                                    end: 1766,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1703,
                                        end: 1766,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1710,
                                          end: 1765,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1710,
                                            end: 1729,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1730,
                                              end: 1733,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1735,
                                              end: 1742,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1744,
                                              end: 1764,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1744,
                                                end: 1750,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1751,
                                                  end: 1760,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1762,
                                                  end: 1763,
                                                  value: 3,
                                                  raw: '3'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1682,
                                      end: 1683,
                                      value: 3,
                                      raw: '3'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1783,
                                    end: 1872,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1809,
                                        end: 1872,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1816,
                                          end: 1871,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1816,
                                            end: 1835,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1836,
                                              end: 1839,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1841,
                                              end: 1848,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1850,
                                              end: 1870,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1850,
                                                end: 1856,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1857,
                                                  end: 1866,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1868,
                                                  end: 1869,
                                                  value: 4,
                                                  raw: '4'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1788,
                                      end: 1789,
                                      value: 4,
                                      raw: '4'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1889,
                                    end: 1978,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 1915,
                                        end: 1978,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 1922,
                                          end: 1977,
                                          callee: {
                                            type: 'Identifier',
                                            start: 1922,
                                            end: 1941,
                                            name: 'callContentFunction'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 1942,
                                              end: 1945,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 1947,
                                              end: 1954,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'CallExpression',
                                              start: 1956,
                                              end: 1976,
                                              callee: {
                                                type: 'Identifier',
                                                start: 1956,
                                                end: 1962,
                                                name: 'SPREAD'
                                              },
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  start: 1963,
                                                  end: 1972,
                                                  name: 'arguments'
                                                },
                                                {
                                                  type: 'Literal',
                                                  start: 1974,
                                                  end: 1975,
                                                  value: 5,
                                                  raw: '5'
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: {
                                      type: 'Literal',
                                      start: 1894,
                                      end: 1895,
                                      value: 5,
                                      raw: '5'
                                    }
                                  },
                                  {
                                    type: 'SwitchCase',
                                    start: 1995,
                                    end: 2064,
                                    consequent: [
                                      {
                                        type: 'ReturnStatement',
                                        start: 2022,
                                        end: 2064,
                                        argument: {
                                          type: 'CallExpression',
                                          start: 2029,
                                          end: 2063,
                                          callee: {
                                            type: 'Identifier',
                                            start: 2029,
                                            end: 2038,
                                            name: 'FUN_APPLY'
                                          },
                                          arguments: [
                                            {
                                              type: 'Identifier',
                                              start: 2039,
                                              end: 2042,
                                              name: 'fun'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 2044,
                                              end: 2051,
                                              name: 'thisArg'
                                            },
                                            {
                                              type: 'Identifier',
                                              start: 2053,
                                              end: 2062,
                                              name: 'arguments'
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    test: null
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      'a--',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 3,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 3,
            expression: {
              type: 'UpdateExpression',
              start: 0,
              end: 3,
              operator: '--',
              prefix: false,
              argument: {
                type: 'Identifier',
                start: 0,
                end: 1,
                name: 'a'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ],
    [
      '--a',
      Context.OptionsRanges,
      {
        type: 'Program',
        start: 0,
        end: 3,
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 3,
            expression: {
              type: 'UpdateExpression',
              start: 0,
              end: 3,
              operator: '--',
              prefix: true,
              argument: {
                type: 'Identifier',
                start: 2,
                end: 3,
                name: 'a'
              }
            }
          }
        ],
        sourceType: 'script'
      }
    ]
  ]);
});
