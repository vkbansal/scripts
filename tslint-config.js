module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        align: true,
        'array-type': [true, 'array-simple'],
        'arrow-parens': true,
        'arrow-return-shorthand': true,
        'await-promise': true,
        ban: false,
        'ban-types': false,
        'binary-expression-operand-order': false,
        'callable-types': true,
        'class-name': true,
        'comment-format': [true, 'check-space'],
        'completed-docs': false,
        curly: [true, 'ignore-same-line'],
        'cyclomatic-complexity': false,
        deprecation: true,
        encoding: true,
        eofline: true,
        'file-header': false,
        forin: true,
        'import-blacklist': false,
        'import-spacing': true,
        indent: [true, 'spaces', 4],
        'interface-name': [true, 'never-prefix'],
        'interface-over-type-literal': true,
        'jsdoc-format': true,
        'label-position': true,
        'linebreak-style': [true, 'LF'],
        'match-default-export-name': false,
        'max-classes-per-file': [true, 1],
        'max-file-line-count': false,
        'max-line-length': [true, 120],
        'member-access': [true, 'no-public'],
        'member-ordering': [true, 'fields-first'],
        'new-parens': true,
        'newline-before-return': true,
        'no-angle-bracket-type-assertion': true,
        'no-any': false,
        'no-arg': true,
        'no-bitwise': true,
        'no-boolean-literal-compare': true,
        'no-conditional-assignment': true,
        'no-consecutive-blank-lines': true,
        'no-console': true,
        'no-construct': true,
        'no-debugger': true,
        'no-default-export': true,
        'no-duplicate-imports': true,
        'no-duplicate-super': true,
        'no-duplicate-variable': true,
        'no-empty': true,
        'no-empty-interface': true,
        'no-eval': true,
        'no-floating-promises': false,
        'no-for-in-array': true,
        'no-import-side-effect': false,
        'no-inferrable-types': [true, 'ignore-params'],
        'no-inferred-empty-object-type': true,
        'no-internal-module': true,
        'no-invalid-template-strings': true,
        'no-invalid-this': true,
        'no-irregular-whitespace': true,
        'no-magic-numbers': false,
        'no-mergeable-namespace': false,
        'no-misused-new': true,
        'no-namespace': true,
        'no-non-null-assertion': true,
        'no-null-keyword': false,
        'no-object-literal-type-assertion': true,
        'no-parameter-properties': true,
        'no-parameter-reassignment': false,
        'no-reference': true,
        'no-reference-import': true,
        'no-require-imports': true,
        'no-shadowed-variable': true,
        'no-sparse-arrays': true,
        'no-string-literal': true,
        'no-string-throw': true,
        'no-submodule-imports': false,
        'no-switch-case-fall-through': true,
        'no-this-assignment': true,
        'no-trailing-whitespace': true,
        'no-unbound-method': true,
        'no-unnecessary-callback-wrapper': false,
        'no-unnecessary-initializer': true,
        'no-unnecessary-qualifier': true,
        'no-unnecessary-type-assertion': true,
        'no-unsafe-any': false,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-unused-variable': true,
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'no-var-requires': true,
        'no-void-expression': true,
        'number-literal-format': true,
        'object-literal-key-quotes': [true, 'as-needed'],
        'object-literal-shorthand': true,
        'object-literal-sort-keys': false,
        'one-line': true,
        'one-variable-per-declaration': true,
        'only-arrow-functions': false,
        'ordered-imports': [
            true,
            {
                'import-sources-order': 'any',
                'grouped-imports': true,
                'named-imports-order': 'any',
                'module-source-path': 'full'
            }
        ],
        'prefer-conditional-expression': true,
        'prefer-const': true,
        'prefer-for-of': true,
        'prefer-function-over-method': false,
        'prefer-method-signature': true,
        'prefer-object-spread': true,
        'prefer-switch': true,
        'prefer-template': true,
        'promise-function-async': true,
        quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
        radix: true,
        'restrict-plus-operands': true,
        'return-undefined': true,
        semicolon: false,
        'space-before-function-paren': [true, 'anonymous'],
        'space-within-parens': [true, 0],
        'strict-boolean-expressions': false,
        'strict-type-predicates': true,
        'switch-default': true,
        'switch-final-break': [true, 'never'],
        'trailing-comma': [true, { multiline: 'never', singleline: 'never' }],
        'triple-equals': true,
        'type-literal-delimiter': true,
        typedef: true,
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                parameter: 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                parameter: 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        'typeof-compare': false,
        'unified-signatures': true,
        'use-default-type-parameter': true,
        'use-isnan': true,
        'variable-name': [true, 'allow-pascal-case'],
        whitespace: true
    }
};
