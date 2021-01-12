var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};

// public/pkgs/@babel/types@7.12.12/lib/utils/shallowEqual.js
var require_shallowEqual = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = shallowEqual;
  function shallowEqual(actual, expected) {
    const keys = Object.keys(expected);
    for (const key of keys) {
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
    return true;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/generated/index.js
var require_generated = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isArrayExpression = isArrayExpression;
  exports.isAssignmentExpression = isAssignmentExpression;
  exports.isBinaryExpression = isBinaryExpression;
  exports.isInterpreterDirective = isInterpreterDirective;
  exports.isDirective = isDirective;
  exports.isDirectiveLiteral = isDirectiveLiteral;
  exports.isBlockStatement = isBlockStatement;
  exports.isBreakStatement = isBreakStatement;
  exports.isCallExpression = isCallExpression;
  exports.isCatchClause = isCatchClause;
  exports.isConditionalExpression = isConditionalExpression;
  exports.isContinueStatement = isContinueStatement;
  exports.isDebuggerStatement = isDebuggerStatement;
  exports.isDoWhileStatement = isDoWhileStatement;
  exports.isEmptyStatement = isEmptyStatement;
  exports.isExpressionStatement = isExpressionStatement;
  exports.isFile = isFile;
  exports.isForInStatement = isForInStatement;
  exports.isForStatement = isForStatement;
  exports.isFunctionDeclaration = isFunctionDeclaration;
  exports.isFunctionExpression = isFunctionExpression;
  exports.isIdentifier = isIdentifier;
  exports.isIfStatement = isIfStatement;
  exports.isLabeledStatement = isLabeledStatement;
  exports.isStringLiteral = isStringLiteral;
  exports.isNumericLiteral = isNumericLiteral;
  exports.isNullLiteral = isNullLiteral;
  exports.isBooleanLiteral = isBooleanLiteral;
  exports.isRegExpLiteral = isRegExpLiteral;
  exports.isLogicalExpression = isLogicalExpression;
  exports.isMemberExpression = isMemberExpression;
  exports.isNewExpression = isNewExpression;
  exports.isProgram = isProgram;
  exports.isObjectExpression = isObjectExpression;
  exports.isObjectMethod = isObjectMethod;
  exports.isObjectProperty = isObjectProperty;
  exports.isRestElement = isRestElement;
  exports.isReturnStatement = isReturnStatement;
  exports.isSequenceExpression = isSequenceExpression;
  exports.isParenthesizedExpression = isParenthesizedExpression;
  exports.isSwitchCase = isSwitchCase;
  exports.isSwitchStatement = isSwitchStatement;
  exports.isThisExpression = isThisExpression;
  exports.isThrowStatement = isThrowStatement;
  exports.isTryStatement = isTryStatement;
  exports.isUnaryExpression = isUnaryExpression;
  exports.isUpdateExpression = isUpdateExpression;
  exports.isVariableDeclaration = isVariableDeclaration;
  exports.isVariableDeclarator = isVariableDeclarator;
  exports.isWhileStatement = isWhileStatement;
  exports.isWithStatement = isWithStatement;
  exports.isAssignmentPattern = isAssignmentPattern;
  exports.isArrayPattern = isArrayPattern;
  exports.isArrowFunctionExpression = isArrowFunctionExpression;
  exports.isClassBody = isClassBody;
  exports.isClassExpression = isClassExpression;
  exports.isClassDeclaration = isClassDeclaration;
  exports.isExportAllDeclaration = isExportAllDeclaration;
  exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
  exports.isExportNamedDeclaration = isExportNamedDeclaration;
  exports.isExportSpecifier = isExportSpecifier;
  exports.isForOfStatement = isForOfStatement;
  exports.isImportDeclaration = isImportDeclaration;
  exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
  exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
  exports.isImportSpecifier = isImportSpecifier;
  exports.isMetaProperty = isMetaProperty;
  exports.isClassMethod = isClassMethod;
  exports.isObjectPattern = isObjectPattern;
  exports.isSpreadElement = isSpreadElement;
  exports.isSuper = isSuper;
  exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
  exports.isTemplateElement = isTemplateElement;
  exports.isTemplateLiteral = isTemplateLiteral;
  exports.isYieldExpression = isYieldExpression;
  exports.isAwaitExpression = isAwaitExpression;
  exports.isImport = isImport;
  exports.isBigIntLiteral = isBigIntLiteral;
  exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
  exports.isOptionalMemberExpression = isOptionalMemberExpression;
  exports.isOptionalCallExpression = isOptionalCallExpression;
  exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
  exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
  exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
  exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
  exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
  exports.isClassImplements = isClassImplements;
  exports.isDeclareClass = isDeclareClass;
  exports.isDeclareFunction = isDeclareFunction;
  exports.isDeclareInterface = isDeclareInterface;
  exports.isDeclareModule = isDeclareModule;
  exports.isDeclareModuleExports = isDeclareModuleExports;
  exports.isDeclareTypeAlias = isDeclareTypeAlias;
  exports.isDeclareOpaqueType = isDeclareOpaqueType;
  exports.isDeclareVariable = isDeclareVariable;
  exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
  exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
  exports.isDeclaredPredicate = isDeclaredPredicate;
  exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
  exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
  exports.isFunctionTypeParam = isFunctionTypeParam;
  exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
  exports.isInferredPredicate = isInferredPredicate;
  exports.isInterfaceExtends = isInterfaceExtends;
  exports.isInterfaceDeclaration = isInterfaceDeclaration;
  exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
  exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
  exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
  exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
  exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
  exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
  exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
  exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
  exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
  exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
  exports.isObjectTypeIndexer = isObjectTypeIndexer;
  exports.isObjectTypeProperty = isObjectTypeProperty;
  exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
  exports.isOpaqueType = isOpaqueType;
  exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
  exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
  exports.isStringTypeAnnotation = isStringTypeAnnotation;
  exports.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
  exports.isThisTypeAnnotation = isThisTypeAnnotation;
  exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
  exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
  exports.isTypeAlias = isTypeAlias;
  exports.isTypeAnnotation = isTypeAnnotation;
  exports.isTypeCastExpression = isTypeCastExpression;
  exports.isTypeParameter = isTypeParameter;
  exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
  exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
  exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
  exports.isVariance = isVariance;
  exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
  exports.isEnumDeclaration = isEnumDeclaration;
  exports.isEnumBooleanBody = isEnumBooleanBody;
  exports.isEnumNumberBody = isEnumNumberBody;
  exports.isEnumStringBody = isEnumStringBody;
  exports.isEnumSymbolBody = isEnumSymbolBody;
  exports.isEnumBooleanMember = isEnumBooleanMember;
  exports.isEnumNumberMember = isEnumNumberMember;
  exports.isEnumStringMember = isEnumStringMember;
  exports.isEnumDefaultedMember = isEnumDefaultedMember;
  exports.isJSXAttribute = isJSXAttribute;
  exports.isJSXClosingElement = isJSXClosingElement;
  exports.isJSXElement = isJSXElement;
  exports.isJSXEmptyExpression = isJSXEmptyExpression;
  exports.isJSXExpressionContainer = isJSXExpressionContainer;
  exports.isJSXSpreadChild = isJSXSpreadChild;
  exports.isJSXIdentifier = isJSXIdentifier;
  exports.isJSXMemberExpression = isJSXMemberExpression;
  exports.isJSXNamespacedName = isJSXNamespacedName;
  exports.isJSXOpeningElement = isJSXOpeningElement;
  exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
  exports.isJSXText = isJSXText;
  exports.isJSXFragment = isJSXFragment;
  exports.isJSXOpeningFragment = isJSXOpeningFragment;
  exports.isJSXClosingFragment = isJSXClosingFragment;
  exports.isNoop = isNoop;
  exports.isPlaceholder = isPlaceholder;
  exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
  exports.isArgumentPlaceholder = isArgumentPlaceholder;
  exports.isBindExpression = isBindExpression;
  exports.isClassProperty = isClassProperty;
  exports.isPipelineTopicExpression = isPipelineTopicExpression;
  exports.isPipelineBareFunction = isPipelineBareFunction;
  exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
  exports.isClassPrivateProperty = isClassPrivateProperty;
  exports.isClassPrivateMethod = isClassPrivateMethod;
  exports.isImportAttribute = isImportAttribute;
  exports.isDecorator = isDecorator;
  exports.isDoExpression = isDoExpression;
  exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
  exports.isPrivateName = isPrivateName;
  exports.isRecordExpression = isRecordExpression;
  exports.isTupleExpression = isTupleExpression;
  exports.isDecimalLiteral = isDecimalLiteral;
  exports.isStaticBlock = isStaticBlock;
  exports.isTSParameterProperty = isTSParameterProperty;
  exports.isTSDeclareFunction = isTSDeclareFunction;
  exports.isTSDeclareMethod = isTSDeclareMethod;
  exports.isTSQualifiedName = isTSQualifiedName;
  exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
  exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
  exports.isTSPropertySignature = isTSPropertySignature;
  exports.isTSMethodSignature = isTSMethodSignature;
  exports.isTSIndexSignature = isTSIndexSignature;
  exports.isTSAnyKeyword = isTSAnyKeyword;
  exports.isTSBooleanKeyword = isTSBooleanKeyword;
  exports.isTSBigIntKeyword = isTSBigIntKeyword;
  exports.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
  exports.isTSNeverKeyword = isTSNeverKeyword;
  exports.isTSNullKeyword = isTSNullKeyword;
  exports.isTSNumberKeyword = isTSNumberKeyword;
  exports.isTSObjectKeyword = isTSObjectKeyword;
  exports.isTSStringKeyword = isTSStringKeyword;
  exports.isTSSymbolKeyword = isTSSymbolKeyword;
  exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
  exports.isTSUnknownKeyword = isTSUnknownKeyword;
  exports.isTSVoidKeyword = isTSVoidKeyword;
  exports.isTSThisType = isTSThisType;
  exports.isTSFunctionType = isTSFunctionType;
  exports.isTSConstructorType = isTSConstructorType;
  exports.isTSTypeReference = isTSTypeReference;
  exports.isTSTypePredicate = isTSTypePredicate;
  exports.isTSTypeQuery = isTSTypeQuery;
  exports.isTSTypeLiteral = isTSTypeLiteral;
  exports.isTSArrayType = isTSArrayType;
  exports.isTSTupleType = isTSTupleType;
  exports.isTSOptionalType = isTSOptionalType;
  exports.isTSRestType = isTSRestType;
  exports.isTSNamedTupleMember = isTSNamedTupleMember;
  exports.isTSUnionType = isTSUnionType;
  exports.isTSIntersectionType = isTSIntersectionType;
  exports.isTSConditionalType = isTSConditionalType;
  exports.isTSInferType = isTSInferType;
  exports.isTSParenthesizedType = isTSParenthesizedType;
  exports.isTSTypeOperator = isTSTypeOperator;
  exports.isTSIndexedAccessType = isTSIndexedAccessType;
  exports.isTSMappedType = isTSMappedType;
  exports.isTSLiteralType = isTSLiteralType;
  exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
  exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
  exports.isTSInterfaceBody = isTSInterfaceBody;
  exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
  exports.isTSAsExpression = isTSAsExpression;
  exports.isTSTypeAssertion = isTSTypeAssertion;
  exports.isTSEnumDeclaration = isTSEnumDeclaration;
  exports.isTSEnumMember = isTSEnumMember;
  exports.isTSModuleDeclaration = isTSModuleDeclaration;
  exports.isTSModuleBlock = isTSModuleBlock;
  exports.isTSImportType = isTSImportType;
  exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
  exports.isTSExternalModuleReference = isTSExternalModuleReference;
  exports.isTSNonNullExpression = isTSNonNullExpression;
  exports.isTSExportAssignment = isTSExportAssignment;
  exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
  exports.isTSTypeAnnotation = isTSTypeAnnotation;
  exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
  exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
  exports.isTSTypeParameter = isTSTypeParameter;
  exports.isExpression = isExpression;
  exports.isBinary = isBinary;
  exports.isScopable = isScopable;
  exports.isBlockParent = isBlockParent;
  exports.isBlock = isBlock;
  exports.isStatement = isStatement;
  exports.isTerminatorless = isTerminatorless;
  exports.isCompletionStatement = isCompletionStatement;
  exports.isConditional = isConditional;
  exports.isLoop = isLoop;
  exports.isWhile = isWhile;
  exports.isExpressionWrapper = isExpressionWrapper;
  exports.isFor = isFor;
  exports.isForXStatement = isForXStatement;
  exports.isFunction = isFunction;
  exports.isFunctionParent = isFunctionParent;
  exports.isPureish = isPureish;
  exports.isDeclaration = isDeclaration;
  exports.isPatternLike = isPatternLike;
  exports.isLVal = isLVal;
  exports.isTSEntityName = isTSEntityName;
  exports.isLiteral = isLiteral;
  exports.isImmutable = isImmutable;
  exports.isUserWhitespacable = isUserWhitespacable;
  exports.isMethod = isMethod;
  exports.isObjectMember = isObjectMember;
  exports.isProperty = isProperty;
  exports.isUnaryLike = isUnaryLike;
  exports.isPattern = isPattern;
  exports.isClass = isClass;
  exports.isModuleDeclaration = isModuleDeclaration;
  exports.isExportDeclaration = isExportDeclaration;
  exports.isModuleSpecifier = isModuleSpecifier;
  exports.isFlow = isFlow;
  exports.isFlowType = isFlowType;
  exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
  exports.isFlowDeclaration = isFlowDeclaration;
  exports.isFlowPredicate = isFlowPredicate;
  exports.isEnumBody = isEnumBody;
  exports.isEnumMember = isEnumMember;
  exports.isJSX = isJSX;
  exports.isPrivate = isPrivate;
  exports.isTSTypeElement = isTSTypeElement;
  exports.isTSType = isTSType;
  exports.isTSBaseType = isTSBaseType;
  exports.isNumberLiteral = isNumberLiteral;
  exports.isRegexLiteral = isRegexLiteral;
  exports.isRestProperty = isRestProperty;
  exports.isSpreadProperty = isSpreadProperty;
  var _shallowEqual = _interopRequireDefault(require_shallowEqual());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function isArrayExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isAssignmentExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBinaryExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BinaryExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isInterpreterDirective(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterpreterDirective") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDirective(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Directive") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDirectiveLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DirectiveLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBlockStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBreakStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isCallExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "CallExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isCatchClause(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "CatchClause") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isConditionalExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ConditionalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isContinueStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ContinueStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDebuggerStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DebuggerStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDoWhileStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEmptyStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EmptyStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExpressionStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExpressionStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFile(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "File") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isForInStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isForStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isIdentifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isIfStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "IfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isLabeledStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "LabeledStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isStringLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNumericLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumericLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNullLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isRegExpLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RegExpLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isLogicalExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "LogicalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isMemberExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNewExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NewExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isProgram(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Program") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectMethod(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isRestElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RestElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isReturnStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ReturnStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSequenceExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SequenceExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isParenthesizedExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ParenthesizedExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSwitchCase(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SwitchCase") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSwitchStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SwitchStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isThisExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThisExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isThrowStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThrowStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTryStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TryStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isUnaryExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnaryExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isUpdateExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UpdateExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isVariableDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VariableDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isVariableDeclarator(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VariableDeclarator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isWhileStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "WhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isWithStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "WithStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isAssignmentPattern(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isArrayPattern(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isArrowFunctionExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrowFunctionExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportAllDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDefaultDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportDefaultDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportNamedDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportNamedDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isForOfStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImportDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImportDefaultSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImportNamespaceSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportNamespaceSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImportSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isMetaProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MetaProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassMethod(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectPattern(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSpreadElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SpreadElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSuper(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Super") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTaggedTemplateExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TaggedTemplateExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTemplateElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TemplateElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTemplateLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TemplateLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isYieldExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "YieldExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isAwaitExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AwaitExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImport(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Import") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBigIntLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BigIntLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportNamespaceSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportNamespaceSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isOptionalMemberExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OptionalMemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isOptionalCallExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OptionalCallExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isAnyTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isArrayTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanLiteralTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNullLiteralTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassImplements(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassImplements") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareClass(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareClass") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareFunction(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareInterface(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareInterface") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareModule(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareModule") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareModuleExports(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareModuleExports") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareTypeAlias(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareTypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareOpaqueType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareOpaqueType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareVariable(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareVariable") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareExportDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareExportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareExportAllDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareExportAllDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclaredPredicate(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclaredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExistsTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExistsTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionTypeParam(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionTypeParam") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isGenericTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "GenericTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isInferredPredicate(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InferredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceExtends(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceExtends") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isIntersectionTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "IntersectionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isMixedTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MixedTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEmptyTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EmptyTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNullableTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullableTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberLiteralTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeInternalSlot(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeInternalSlot") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeCallProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeCallProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeIndexer(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeIndexer") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeSpreadProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeSpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isOpaqueType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OpaqueType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isQualifiedTypeIdentifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "QualifiedTypeIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isStringLiteralTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isStringTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSymbolTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SymbolTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isThisTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThisTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTupleTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TupleTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeofTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeofTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeAlias(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeCastExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeCastExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameter(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameter") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameterDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameterDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameterInstantiation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameterInstantiation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isUnionTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isVariance(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Variance") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isVoidTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBooleanBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumNumberBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumNumberBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumStringBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumStringBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumSymbolBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumSymbolBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBooleanMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumNumberMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumNumberMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumStringMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumStringMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumDefaultedMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumDefaultedMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXAttribute(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXClosingElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXClosingElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXEmptyExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXEmptyExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXExpressionContainer(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXExpressionContainer") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXSpreadChild(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXSpreadChild") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXIdentifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXMemberExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXMemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXNamespacedName(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXNamespacedName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXOpeningElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXOpeningElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXSpreadAttribute(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXSpreadAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXText(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXText") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXFragment(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXOpeningFragment(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXOpeningFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXClosingFragment(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXClosingFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNoop(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Noop") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPlaceholder(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Placeholder") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isV8IntrinsicIdentifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "V8IntrinsicIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isArgumentPlaceholder(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArgumentPlaceholder") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBindExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BindExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelineTopicExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelineTopicExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelineBareFunction(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelineBareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelinePrimaryTopicReference(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelinePrimaryTopicReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassPrivateProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClassPrivateMethod(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImportAttribute(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDecorator(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Decorator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDoExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDefaultSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPrivateName(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PrivateName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isRecordExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RecordExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTupleExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TupleExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDecimalLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DecimalLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isStaticBlock(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StaticBlock") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSParameterProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSParameterProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSDeclareFunction(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSDeclareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSDeclareMethod(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSDeclareMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSQualifiedName(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSQualifiedName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSCallSignatureDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSCallSignatureDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConstructSignatureDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConstructSignatureDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSPropertySignature(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSPropertySignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSMethodSignature(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSMethodSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIndexSignature(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIndexSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSAnyKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBooleanKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSBooleanKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBigIntKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSBigIntKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIntrinsicKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIntrinsicKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNeverKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNeverKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNullKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNullKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNumberKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNumberKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSObjectKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSObjectKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSStringKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSStringKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSSymbolKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSSymbolKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUndefinedKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUndefinedKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUnknownKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUnknownKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSVoidKeyword(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSVoidKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSThisType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSThisType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSFunctionType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSFunctionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConstructorType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConstructorType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeReference(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypePredicate(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypePredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeQuery(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeQuery") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSArrayType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSArrayType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTupleType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTupleType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSOptionalType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSOptionalType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSRestType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSRestType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNamedTupleMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNamedTupleMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUnionType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUnionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIntersectionType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIntersectionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConditionalType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConditionalType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInferType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInferType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSParenthesizedType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSParenthesizedType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeOperator(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeOperator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIndexedAccessType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSMappedType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSMappedType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSLiteralType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSLiteralType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExpressionWithTypeArguments(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExpressionWithTypeArguments") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInterfaceDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInterfaceDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInterfaceBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInterfaceBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAliasDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAliasDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSAsExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAsExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAssertion(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAssertion") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEnumDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSEnumDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEnumMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSEnumMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSModuleDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSModuleDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSModuleBlock(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSModuleBlock") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSImportType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSImportType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSImportEqualsDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSImportEqualsDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExternalModuleReference(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExternalModuleReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNonNullExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNonNullExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExportAssignment(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExportAssignment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNamespaceExportDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNamespaceExportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameterInstantiation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameterInstantiation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameterDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameterDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameter(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameter") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExpression(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayExpression" || nodeType === "AssignmentExpression" || nodeType === "BinaryExpression" || nodeType === "CallExpression" || nodeType === "ConditionalExpression" || nodeType === "FunctionExpression" || nodeType === "Identifier" || nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "LogicalExpression" || nodeType === "MemberExpression" || nodeType === "NewExpression" || nodeType === "ObjectExpression" || nodeType === "SequenceExpression" || nodeType === "ParenthesizedExpression" || nodeType === "ThisExpression" || nodeType === "UnaryExpression" || nodeType === "UpdateExpression" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassExpression" || nodeType === "MetaProperty" || nodeType === "Super" || nodeType === "TaggedTemplateExpression" || nodeType === "TemplateLiteral" || nodeType === "YieldExpression" || nodeType === "AwaitExpression" || nodeType === "Import" || nodeType === "BigIntLiteral" || nodeType === "OptionalMemberExpression" || nodeType === "OptionalCallExpression" || nodeType === "TypeCastExpression" || nodeType === "JSXElement" || nodeType === "JSXFragment" || nodeType === "BindExpression" || nodeType === "PipelinePrimaryTopicReference" || nodeType === "DoExpression" || nodeType === "RecordExpression" || nodeType === "TupleExpression" || nodeType === "DecimalLiteral" || nodeType === "TSAsExpression" || nodeType === "TSTypeAssertion" || nodeType === "TSNonNullExpression" || nodeType === "Placeholder" && (node.expectedNode === "Expression" || node.expectedNode === "Identifier" || node.expectedNode === "StringLiteral")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBinary(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BinaryExpression" || nodeType === "LogicalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isScopable(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "CatchClause" || nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "Program" || nodeType === "ObjectMethod" || nodeType === "SwitchStatement" || nodeType === "WhileStatement" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassExpression" || nodeType === "ClassDeclaration" || nodeType === "ForOfStatement" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod" || nodeType === "StaticBlock" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBlockParent(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "CatchClause" || nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "Program" || nodeType === "ObjectMethod" || nodeType === "SwitchStatement" || nodeType === "WhileStatement" || nodeType === "ArrowFunctionExpression" || nodeType === "ForOfStatement" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod" || nodeType === "StaticBlock" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isBlock(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "Program" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "DebuggerStatement" || nodeType === "DoWhileStatement" || nodeType === "EmptyStatement" || nodeType === "ExpressionStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "IfStatement" || nodeType === "LabeledStatement" || nodeType === "ReturnStatement" || nodeType === "SwitchStatement" || nodeType === "ThrowStatement" || nodeType === "TryStatement" || nodeType === "VariableDeclaration" || nodeType === "WhileStatement" || nodeType === "WithStatement" || nodeType === "ClassDeclaration" || nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ForOfStatement" || nodeType === "ImportDeclaration" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias" || nodeType === "EnumDeclaration" || nodeType === "TSDeclareFunction" || nodeType === "TSInterfaceDeclaration" || nodeType === "TSTypeAliasDeclaration" || nodeType === "TSEnumDeclaration" || nodeType === "TSModuleDeclaration" || nodeType === "TSImportEqualsDeclaration" || nodeType === "TSExportAssignment" || nodeType === "TSNamespaceExportDeclaration" || nodeType === "Placeholder" && (node.expectedNode === "Statement" || node.expectedNode === "Declaration" || node.expectedNode === "BlockStatement")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTerminatorless(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "ReturnStatement" || nodeType === "ThrowStatement" || nodeType === "YieldExpression" || nodeType === "AwaitExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isCompletionStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "ReturnStatement" || nodeType === "ThrowStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isConditional(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ConditionalExpression" || nodeType === "IfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isLoop(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "WhileStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isWhile(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement" || nodeType === "WhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExpressionWrapper(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExpressionStatement" || nodeType === "ParenthesizedExpression" || nodeType === "TypeCastExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFor(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isForXStatement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunction(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "ObjectMethod" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionParent(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "ObjectMethod" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPureish(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "ArrowFunctionExpression" || nodeType === "BigIntLiteral" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "VariableDeclaration" || nodeType === "ClassDeclaration" || nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ImportDeclaration" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias" || nodeType === "EnumDeclaration" || nodeType === "TSDeclareFunction" || nodeType === "TSInterfaceDeclaration" || nodeType === "TSTypeAliasDeclaration" || nodeType === "TSEnumDeclaration" || nodeType === "TSModuleDeclaration" || nodeType === "Placeholder" && node.expectedNode === "Declaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPatternLike(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "RestElement" || nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "Placeholder" && (node.expectedNode === "Pattern" || node.expectedNode === "Identifier")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isLVal(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "MemberExpression" || nodeType === "RestElement" || nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "TSParameterProperty" || nodeType === "Placeholder" && (node.expectedNode === "Pattern" || node.expectedNode === "Identifier")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEntityName(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "TSQualifiedName" || nodeType === "Placeholder" && node.expectedNode === "Identifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isLiteral(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "TemplateLiteral" || nodeType === "BigIntLiteral" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isImmutable(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "BigIntLiteral" || nodeType === "JSXAttribute" || nodeType === "JSXClosingElement" || nodeType === "JSXElement" || nodeType === "JSXExpressionContainer" || nodeType === "JSXSpreadChild" || nodeType === "JSXOpeningElement" || nodeType === "JSXText" || nodeType === "JSXFragment" || nodeType === "JSXOpeningFragment" || nodeType === "JSXClosingFragment" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isUserWhitespacable(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ObjectProperty" || nodeType === "ObjectTypeInternalSlot" || nodeType === "ObjectTypeCallProperty" || nodeType === "ObjectTypeIndexer" || nodeType === "ObjectTypeProperty" || nodeType === "ObjectTypeSpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isMethod(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ObjectProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isProperty(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectProperty" || nodeType === "ClassProperty" || nodeType === "ClassPrivateProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isUnaryLike(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnaryExpression" || nodeType === "SpreadElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPattern(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "Placeholder" && node.expectedNode === "Pattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isClass(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassExpression" || nodeType === "ClassDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isModuleDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ImportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isModuleSpecifier(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportSpecifier" || nodeType === "ImportDefaultSpecifier" || nodeType === "ImportNamespaceSpecifier" || nodeType === "ImportSpecifier" || nodeType === "ExportNamespaceSpecifier" || nodeType === "ExportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFlow(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "ArrayTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "BooleanLiteralTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "ClassImplements" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "DeclaredPredicate" || nodeType === "ExistsTypeAnnotation" || nodeType === "FunctionTypeAnnotation" || nodeType === "FunctionTypeParam" || nodeType === "GenericTypeAnnotation" || nodeType === "InferredPredicate" || nodeType === "InterfaceExtends" || nodeType === "InterfaceDeclaration" || nodeType === "InterfaceTypeAnnotation" || nodeType === "IntersectionTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NullableTypeAnnotation" || nodeType === "NumberLiteralTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "ObjectTypeAnnotation" || nodeType === "ObjectTypeInternalSlot" || nodeType === "ObjectTypeCallProperty" || nodeType === "ObjectTypeIndexer" || nodeType === "ObjectTypeProperty" || nodeType === "ObjectTypeSpreadProperty" || nodeType === "OpaqueType" || nodeType === "QualifiedTypeIdentifier" || nodeType === "StringLiteralTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "TupleTypeAnnotation" || nodeType === "TypeofTypeAnnotation" || nodeType === "TypeAlias" || nodeType === "TypeAnnotation" || nodeType === "TypeCastExpression" || nodeType === "TypeParameter" || nodeType === "TypeParameterDeclaration" || nodeType === "TypeParameterInstantiation" || nodeType === "UnionTypeAnnotation" || nodeType === "Variance" || nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "ArrayTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "BooleanLiteralTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "ExistsTypeAnnotation" || nodeType === "FunctionTypeAnnotation" || nodeType === "GenericTypeAnnotation" || nodeType === "InterfaceTypeAnnotation" || nodeType === "IntersectionTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NullableTypeAnnotation" || nodeType === "NumberLiteralTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "ObjectTypeAnnotation" || nodeType === "StringLiteralTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "TupleTypeAnnotation" || nodeType === "TypeofTypeAnnotation" || nodeType === "UnionTypeAnnotation" || nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowBaseAnnotation(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowDeclaration(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowPredicate(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclaredPredicate" || nodeType === "InferredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBody(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanBody" || nodeType === "EnumNumberBody" || nodeType === "EnumStringBody" || nodeType === "EnumSymbolBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumMember(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanMember" || nodeType === "EnumNumberMember" || nodeType === "EnumStringMember" || nodeType === "EnumDefaultedMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isJSX(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXAttribute" || nodeType === "JSXClosingElement" || nodeType === "JSXElement" || nodeType === "JSXEmptyExpression" || nodeType === "JSXExpressionContainer" || nodeType === "JSXSpreadChild" || nodeType === "JSXIdentifier" || nodeType === "JSXMemberExpression" || nodeType === "JSXNamespacedName" || nodeType === "JSXOpeningElement" || nodeType === "JSXSpreadAttribute" || nodeType === "JSXText" || nodeType === "JSXFragment" || nodeType === "JSXOpeningFragment" || nodeType === "JSXClosingFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isPrivate(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateProperty" || nodeType === "ClassPrivateMethod" || nodeType === "PrivateName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeElement(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSCallSignatureDeclaration" || nodeType === "TSConstructSignatureDeclaration" || nodeType === "TSPropertySignature" || nodeType === "TSMethodSignature" || nodeType === "TSIndexSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword" || nodeType === "TSBooleanKeyword" || nodeType === "TSBigIntKeyword" || nodeType === "TSIntrinsicKeyword" || nodeType === "TSNeverKeyword" || nodeType === "TSNullKeyword" || nodeType === "TSNumberKeyword" || nodeType === "TSObjectKeyword" || nodeType === "TSStringKeyword" || nodeType === "TSSymbolKeyword" || nodeType === "TSUndefinedKeyword" || nodeType === "TSUnknownKeyword" || nodeType === "TSVoidKeyword" || nodeType === "TSThisType" || nodeType === "TSFunctionType" || nodeType === "TSConstructorType" || nodeType === "TSTypeReference" || nodeType === "TSTypePredicate" || nodeType === "TSTypeQuery" || nodeType === "TSTypeLiteral" || nodeType === "TSArrayType" || nodeType === "TSTupleType" || nodeType === "TSOptionalType" || nodeType === "TSRestType" || nodeType === "TSUnionType" || nodeType === "TSIntersectionType" || nodeType === "TSConditionalType" || nodeType === "TSInferType" || nodeType === "TSParenthesizedType" || nodeType === "TSTypeOperator" || nodeType === "TSIndexedAccessType" || nodeType === "TSMappedType" || nodeType === "TSLiteralType" || nodeType === "TSExpressionWithTypeArguments" || nodeType === "TSImportType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBaseType(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword" || nodeType === "TSBooleanKeyword" || nodeType === "TSBigIntKeyword" || nodeType === "TSIntrinsicKeyword" || nodeType === "TSNeverKeyword" || nodeType === "TSNullKeyword" || nodeType === "TSNumberKeyword" || nodeType === "TSObjectKeyword" || nodeType === "TSStringKeyword" || nodeType === "TSSymbolKeyword" || nodeType === "TSUndefinedKeyword" || nodeType === "TSUnknownKeyword" || nodeType === "TSVoidKeyword" || nodeType === "TSThisType" || nodeType === "TSLiteralType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberLiteral(node, opts) {
    console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isRegexLiteral(node, opts) {
    console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RegexLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isRestProperty(node, opts) {
    console.trace("The node type RestProperty has been renamed to RestElement");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RestProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
  function isSpreadProperty(node, opts) {
    console.trace("The node type SpreadProperty has been renamed to SpreadElement");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
    return false;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/matchesPattern.js
var require_matchesPattern = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = matchesPattern;
  var _generated = require_generated();
  function matchesPattern(member, match, allowPartial) {
    if (!(0, _generated.isMemberExpression)(member))
      return false;
    const parts = Array.isArray(match) ? match : match.split(".");
    const nodes = [];
    let node;
    for (node = member; (0, _generated.isMemberExpression)(node); node = node.object) {
      nodes.push(node.property);
    }
    nodes.push(node);
    if (nodes.length < parts.length)
      return false;
    if (!allowPartial && nodes.length > parts.length)
      return false;
    for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
      const node2 = nodes[j];
      let value;
      if ((0, _generated.isIdentifier)(node2)) {
        value = node2.name;
      } else if ((0, _generated.isStringLiteral)(node2)) {
        value = node2.value;
      } else {
        return false;
      }
      if (parts[i] !== value)
        return false;
    }
    return true;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/buildMatchMemberExpression.js
var require_buildMatchMemberExpression = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchMemberExpression;
  var _matchesPattern = _interopRequireDefault(require_matchesPattern());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function buildMatchMemberExpression(match, allowPartial) {
    const parts = match.split(".");
    return (member) => (0, _matchesPattern.default)(member, parts, allowPartial);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/react/isReactComponent.js
var require_isReactComponent = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _buildMatchMemberExpression = _interopRequireDefault(require_buildMatchMemberExpression());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
  var _default = isReactComponent;
  exports.default = _default;
});

// public/pkgs/@babel/types@7.12.12/lib/validators/react/isCompatTag.js
var require_isCompatTag = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCompatTag;
  function isCompatTag(tagName) {
    return !!tagName && /^[a-z]/.test(tagName);
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS((exports, module) => {
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  module.exports = listCacheClear;
});

// node_modules/lodash/eq.js
var require_eq = __commonJS((exports, module) => {
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  module.exports = eq;
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS((exports, module) => {
  var eq = require_eq();
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  module.exports = assocIndexOf;
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS((exports, module) => {
  var assocIndexOf = require_assocIndexOf();
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  module.exports = listCacheDelete;
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS((exports, module) => {
  var assocIndexOf = require_assocIndexOf();
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  module.exports = listCacheGet;
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS((exports, module) => {
  var assocIndexOf = require_assocIndexOf();
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  module.exports = listCacheHas;
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS((exports, module) => {
  var assocIndexOf = require_assocIndexOf();
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  module.exports = listCacheSet;
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS((exports, module) => {
  var listCacheClear = require_listCacheClear();
  var listCacheDelete = require_listCacheDelete();
  var listCacheGet = require_listCacheGet();
  var listCacheHas = require_listCacheHas();
  var listCacheSet = require_listCacheSet();
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  module.exports = ListCache;
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS((exports, module) => {
  var ListCache = require_ListCache();
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  module.exports = stackClear;
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS((exports, module) => {
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  module.exports = stackDelete;
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS((exports, module) => {
  function stackGet(key) {
    return this.__data__.get(key);
  }
  module.exports = stackGet;
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS((exports, module) => {
  function stackHas(key) {
    return this.__data__.has(key);
  }
  module.exports = stackHas;
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS((exports, module) => {
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  module.exports = freeGlobal;
});

// node_modules/lodash/_root.js
var require_root = __commonJS((exports, module) => {
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  module.exports = root;
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS((exports, module) => {
  var root = require_root();
  var Symbol2 = root.Symbol;
  module.exports = Symbol2;
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS((exports, module) => {
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  module.exports = getRawTag;
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS((exports, module) => {
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  module.exports = objectToString;
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS((exports, module) => {
  var Symbol2 = require_Symbol();
  var getRawTag = require_getRawTag();
  var objectToString = require_objectToString();
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  module.exports = baseGetTag;
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS((exports, module) => {
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  module.exports = isObject;
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS((exports, module) => {
  var baseGetTag = require_baseGetTag();
  var isObject = require_isObject();
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  module.exports = isFunction;
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS((exports, module) => {
  var root = require_root();
  var coreJsData = root["__core-js_shared__"];
  module.exports = coreJsData;
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS((exports, module) => {
  var coreJsData = require_coreJsData();
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  module.exports = isMasked;
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS((exports, module) => {
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  module.exports = toSource;
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS((exports, module) => {
  var isFunction = require_isFunction();
  var isMasked = require_isMasked();
  var isObject = require_isObject();
  var toSource = require_toSource();
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  module.exports = baseIsNative;
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS((exports, module) => {
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  module.exports = getValue;
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS((exports, module) => {
  var baseIsNative = require_baseIsNative();
  var getValue = require_getValue();
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  module.exports = getNative;
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var root = require_root();
  var Map = getNative(root, "Map");
  module.exports = Map;
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var nativeCreate = getNative(Object, "create");
  module.exports = nativeCreate;
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS((exports, module) => {
  var nativeCreate = require_nativeCreate();
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  module.exports = hashClear;
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS((exports, module) => {
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  module.exports = hashDelete;
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS((exports, module) => {
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  module.exports = hashGet;
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS((exports, module) => {
  var nativeCreate = require_nativeCreate();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  module.exports = hashHas;
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS((exports, module) => {
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  module.exports = hashSet;
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS((exports, module) => {
  var hashClear = require_hashClear();
  var hashDelete = require_hashDelete();
  var hashGet = require_hashGet();
  var hashHas = require_hashHas();
  var hashSet = require_hashSet();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  module.exports = Hash;
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS((exports, module) => {
  var Hash = require_Hash();
  var ListCache = require_ListCache();
  var Map = require_Map();
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash()
    };
  }
  module.exports = mapCacheClear;
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS((exports, module) => {
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  module.exports = isKeyable;
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS((exports, module) => {
  var isKeyable = require_isKeyable();
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  module.exports = getMapData;
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS((exports, module) => {
  var getMapData = require_getMapData();
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  module.exports = mapCacheDelete;
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS((exports, module) => {
  var getMapData = require_getMapData();
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  module.exports = mapCacheGet;
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS((exports, module) => {
  var getMapData = require_getMapData();
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  module.exports = mapCacheHas;
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS((exports, module) => {
  var getMapData = require_getMapData();
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  module.exports = mapCacheSet;
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS((exports, module) => {
  var mapCacheClear = require_mapCacheClear();
  var mapCacheDelete = require_mapCacheDelete();
  var mapCacheGet = require_mapCacheGet();
  var mapCacheHas = require_mapCacheHas();
  var mapCacheSet = require_mapCacheSet();
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  module.exports = MapCache;
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS((exports, module) => {
  var ListCache = require_ListCache();
  var Map = require_Map();
  var MapCache = require_MapCache();
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  module.exports = stackSet;
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS((exports, module) => {
  var ListCache = require_ListCache();
  var stackClear = require_stackClear();
  var stackDelete = require_stackDelete();
  var stackGet = require_stackGet();
  var stackHas = require_stackHas();
  var stackSet = require_stackSet();
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  module.exports = Stack;
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS((exports, module) => {
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  module.exports = arrayEach;
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  module.exports = defineProperty;
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS((exports, module) => {
  var defineProperty = require_defineProperty();
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  module.exports = baseAssignValue;
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS((exports, module) => {
  var baseAssignValue = require_baseAssignValue();
  var eq = require_eq();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  module.exports = assignValue;
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS((exports, module) => {
  var assignValue = require_assignValue();
  var baseAssignValue = require_baseAssignValue();
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  module.exports = copyObject;
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS((exports, module) => {
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  module.exports = baseTimes;
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS((exports, module) => {
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  module.exports = isObjectLike;
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS((exports, module) => {
  var baseGetTag = require_baseGetTag();
  var isObjectLike = require_isObjectLike();
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  module.exports = baseIsArguments;
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS((exports, module) => {
  var baseIsArguments = require_baseIsArguments();
  var isObjectLike = require_isObjectLike();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  module.exports = isArguments;
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS((exports, module) => {
  var isArray = Array.isArray;
  module.exports = isArray;
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS((exports, module) => {
  function stubFalse() {
    return false;
  }
  module.exports = stubFalse;
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS((exports, module) => {
  var root = require_root();
  var stubFalse = require_stubFalse();
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = isBuffer;
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS((exports, module) => {
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  module.exports = isIndex;
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS((exports, module) => {
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  module.exports = isLength;
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS((exports, module) => {
  var baseGetTag = require_baseGetTag();
  var isLength = require_isLength();
  var isObjectLike = require_isObjectLike();
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  module.exports = baseIsTypedArray;
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS((exports, module) => {
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  module.exports = baseUnary;
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS((exports, module) => {
  var freeGlobal = require_freeGlobal();
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil;
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS((exports, module) => {
  var baseIsTypedArray = require_baseIsTypedArray();
  var baseUnary = require_baseUnary();
  var nodeUtil = require_nodeUtil();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  module.exports = isTypedArray;
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS((exports, module) => {
  var baseTimes = require_baseTimes();
  var isArguments = require_isArguments();
  var isArray = require_isArray();
  var isBuffer = require_isBuffer();
  var isIndex = require_isIndex();
  var isTypedArray = require_isTypedArray();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = arrayLikeKeys;
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS((exports, module) => {
  var objectProto = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  module.exports = isPrototype;
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS((exports, module) => {
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  module.exports = overArg;
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS((exports, module) => {
  var overArg = require_overArg();
  var nativeKeys = overArg(Object.keys, Object);
  module.exports = nativeKeys;
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS((exports, module) => {
  var isPrototype = require_isPrototype();
  var nativeKeys = require_nativeKeys();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = baseKeys;
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS((exports, module) => {
  var isFunction = require_isFunction();
  var isLength = require_isLength();
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  module.exports = isArrayLike;
});

// node_modules/lodash/keys.js
var require_keys = __commonJS((exports, module) => {
  var arrayLikeKeys = require_arrayLikeKeys();
  var baseKeys = require_baseKeys();
  var isArrayLike = require_isArrayLike();
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  module.exports = keys;
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS((exports, module) => {
  var copyObject = require_copyObject();
  var keys = require_keys();
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  module.exports = baseAssign;
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS((exports, module) => {
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = nativeKeysIn;
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS((exports, module) => {
  var isObject = require_isObject();
  var isPrototype = require_isPrototype();
  var nativeKeysIn = require_nativeKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = baseKeysIn;
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS((exports, module) => {
  var arrayLikeKeys = require_arrayLikeKeys();
  var baseKeysIn = require_baseKeysIn();
  var isArrayLike = require_isArrayLike();
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  module.exports = keysIn;
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS((exports, module) => {
  var copyObject = require_copyObject();
  var keysIn = require_keysIn();
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  module.exports = baseAssignIn;
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS((exports, module) => {
  var root = require_root();
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root.Buffer : void 0;
  var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer;
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS((exports, module) => {
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  module.exports = copyArray;
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS((exports, module) => {
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  module.exports = arrayFilter;
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS((exports, module) => {
  function stubArray() {
    return [];
  }
  module.exports = stubArray;
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS((exports, module) => {
  var arrayFilter = require_arrayFilter();
  var stubArray = require_stubArray();
  var objectProto = Object.prototype;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  module.exports = getSymbols;
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS((exports, module) => {
  var copyObject = require_copyObject();
  var getSymbols = require_getSymbols();
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  module.exports = copySymbols;
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS((exports, module) => {
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  module.exports = arrayPush;
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS((exports, module) => {
  var overArg = require_overArg();
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  module.exports = getPrototype;
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS((exports, module) => {
  var arrayPush = require_arrayPush();
  var getPrototype = require_getPrototype();
  var getSymbols = require_getSymbols();
  var stubArray = require_stubArray();
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };
  module.exports = getSymbolsIn;
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS((exports, module) => {
  var copyObject = require_copyObject();
  var getSymbolsIn = require_getSymbolsIn();
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  module.exports = copySymbolsIn;
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS((exports, module) => {
  var arrayPush = require_arrayPush();
  var isArray = require_isArray();
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  module.exports = baseGetAllKeys;
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS((exports, module) => {
  var baseGetAllKeys = require_baseGetAllKeys();
  var getSymbols = require_getSymbols();
  var keys = require_keys();
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  module.exports = getAllKeys;
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS((exports, module) => {
  var baseGetAllKeys = require_baseGetAllKeys();
  var getSymbolsIn = require_getSymbolsIn();
  var keysIn = require_keysIn();
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }
  module.exports = getAllKeysIn;
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var root = require_root();
  var DataView = getNative(root, "DataView");
  module.exports = DataView;
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var root = require_root();
  var Promise2 = getNative(root, "Promise");
  module.exports = Promise2;
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var root = require_root();
  var Set2 = getNative(root, "Set");
  module.exports = Set2;
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS((exports, module) => {
  var getNative = require_getNative();
  var root = require_root();
  var WeakMap2 = getNative(root, "WeakMap");
  module.exports = WeakMap2;
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS((exports, module) => {
  var DataView = require_DataView();
  var Map = require_Map();
  var Promise2 = require_Promise();
  var Set2 = require_Set();
  var WeakMap2 = require_WeakMap();
  var baseGetTag = require_baseGetTag();
  var toSource = require_toSource();
  var mapTag = "[object Map]";
  var objectTag = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag = "[object Set]";
  var weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView);
  var mapCtorString = toSource(Map);
  var promiseCtorString = toSource(Promise2);
  var setCtorString = toSource(Set2);
  var weakMapCtorString = toSource(WeakMap2);
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  module.exports = getTag;
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS((exports, module) => {
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  module.exports = initCloneArray;
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS((exports, module) => {
  var root = require_root();
  var Uint8Array2 = root.Uint8Array;
  module.exports = Uint8Array2;
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS((exports, module) => {
  var Uint8Array2 = require_Uint8Array();
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  module.exports = cloneArrayBuffer;
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS((exports, module) => {
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  module.exports = cloneDataView;
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS((exports, module) => {
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  module.exports = cloneRegExp;
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS((exports, module) => {
  var Symbol2 = require_Symbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  module.exports = cloneSymbol;
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS((exports, module) => {
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  module.exports = cloneTypedArray;
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS((exports, module) => {
  var cloneArrayBuffer = require_cloneArrayBuffer();
  var cloneDataView = require_cloneDataView();
  var cloneRegExp = require_cloneRegExp();
  var cloneSymbol = require_cloneSymbol();
  var cloneTypedArray = require_cloneTypedArray();
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return new Ctor();
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return new Ctor();
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  module.exports = initCloneByTag;
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS((exports, module) => {
  var isObject = require_isObject();
  var objectCreate = Object.create;
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  module.exports = baseCreate;
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS((exports, module) => {
  var baseCreate = require_baseCreate();
  var getPrototype = require_getPrototype();
  var isPrototype = require_isPrototype();
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  module.exports = initCloneObject;
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS((exports, module) => {
  var getTag = require_getTag();
  var isObjectLike = require_isObjectLike();
  var mapTag = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  module.exports = baseIsMap;
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS((exports, module) => {
  var baseIsMap = require_baseIsMap();
  var baseUnary = require_baseUnary();
  var nodeUtil = require_nodeUtil();
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  module.exports = isMap;
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS((exports, module) => {
  var getTag = require_getTag();
  var isObjectLike = require_isObjectLike();
  var setTag = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  module.exports = baseIsSet;
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS((exports, module) => {
  var baseIsSet = require_baseIsSet();
  var baseUnary = require_baseUnary();
  var nodeUtil = require_nodeUtil();
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  module.exports = isSet;
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS((exports, module) => {
  var Stack = require_Stack();
  var arrayEach = require_arrayEach();
  var assignValue = require_assignValue();
  var baseAssign = require_baseAssign();
  var baseAssignIn = require_baseAssignIn();
  var cloneBuffer = require_cloneBuffer();
  var copyArray = require_copyArray();
  var copySymbols = require_copySymbols();
  var copySymbolsIn = require_copySymbolsIn();
  var getAllKeys = require_getAllKeys();
  var getAllKeysIn = require_getAllKeysIn();
  var getTag = require_getTag();
  var initCloneArray = require_initCloneArray();
  var initCloneByTag = require_initCloneByTag();
  var initCloneObject = require_initCloneObject();
  var isArray = require_isArray();
  var isBuffer = require_isBuffer();
  var isMap = require_isMap();
  var isObject = require_isObject();
  var isSet = require_isSet();
  var keys = require_keys();
  var keysIn = require_keysIn();
  var CLONE_DEEP_FLAG = 1;
  var CLONE_FLAT_FLAG = 2;
  var CLONE_SYMBOLS_FLAG = 4;
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  module.exports = baseClone;
});

// node_modules/lodash/clone.js
var require_clone = __commonJS((exports, module) => {
  var baseClone = require_baseClone();
  var CLONE_SYMBOLS_FLAG = 4;
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }
  module.exports = clone;
});

// node_modules/to-fast-properties/index.js
var require_to_fast_properties = __commonJS((exports, module) => {
  "use strict";
  var fastProto = null;
  function FastObject(o) {
    if (fastProto !== null && typeof fastProto.property) {
      const result = fastProto;
      fastProto = FastObject.prototype = null;
      return result;
    }
    fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
    return new FastObject();
  }
  FastObject();
  module.exports = function toFastproperties(o) {
    return FastObject(o);
  };
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isType.js
var require_isType = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isType;
  var _definitions = require_definitions();
  function isType(nodeType, targetType) {
    if (nodeType === targetType)
      return true;
    if (_definitions.ALIAS_KEYS[targetType])
      return false;
    const aliases = _definitions.FLIPPED_ALIAS_KEYS[targetType];
    if (aliases) {
      if (aliases[0] === nodeType)
        return true;
      for (const alias of aliases) {
        if (nodeType === alias)
          return true;
      }
    }
    return false;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isPlaceholderType.js
var require_isPlaceholderType = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPlaceholderType;
  var _definitions = require_definitions();
  function isPlaceholderType(placeholderType, targetType) {
    if (placeholderType === targetType)
      return true;
    const aliases = _definitions.PLACEHOLDERS_ALIAS[placeholderType];
    if (aliases) {
      for (const alias of aliases) {
        if (targetType === alias)
          return true;
      }
    }
    return false;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/is.js
var require_is = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = is;
  var _shallowEqual = _interopRequireDefault(require_shallowEqual());
  var _isType = _interopRequireDefault(require_isType());
  var _isPlaceholderType = _interopRequireDefault(require_isPlaceholderType());
  var _definitions = require_definitions();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function is(type, node, opts) {
    if (!node)
      return false;
    const matches = (0, _isType.default)(node.type, type);
    if (!matches) {
      if (!opts && node.type === "Placeholder" && type in _definitions.FLIPPED_ALIAS_KEYS) {
        return (0, _isPlaceholderType.default)(node.expectedNode, type);
      }
      return false;
    }
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isIdentifierStart = isIdentifierStart;
  exports.isIdentifierChar = isIdentifierChar;
  exports.isIdentifierName = isIdentifierName;
  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function isInAstralSet(code, set) {
    let pos = 65536;
    for (let i = 0, length = set.length; i < length; i += 2) {
      pos += set[i];
      if (pos > code)
        return false;
      pos += set[i + 1];
      if (pos >= code)
        return true;
    }
    return false;
  }
  function isIdentifierStart(code) {
    if (code < 65)
      return code === 36;
    if (code <= 90)
      return true;
    if (code < 97)
      return code === 95;
    if (code <= 122)
      return true;
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes);
  }
  function isIdentifierChar(code) {
    if (code < 48)
      return code === 36;
    if (code < 58)
      return true;
    if (code < 65)
      return false;
    if (code <= 90)
      return true;
    if (code < 97)
      return code === 95;
    if (code <= 122)
      return true;
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
  }
  function isIdentifierName(name) {
    let isFirst = true;
    for (let _i = 0, _Array$from = Array.from(name); _i < _Array$from.length; _i++) {
      const char = _Array$from[_i];
      const cp = char.codePointAt(0);
      if (isFirst) {
        if (!isIdentifierStart(cp)) {
          return false;
        }
        isFirst = false;
      } else if (!isIdentifierChar(cp)) {
        return false;
      }
    }
    return !isFirst;
  }
});

// node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isReservedWord = isReservedWord;
  exports.isStrictReservedWord = isStrictReservedWord;
  exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
  exports.isStrictBindReservedWord = isStrictBindReservedWord;
  exports.isKeyword = isKeyword;
  var reservedWords = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  };
  var keywords = new Set(reservedWords.keyword);
  var reservedWordsStrictSet = new Set(reservedWords.strict);
  var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
  function isReservedWord(word, inModule) {
    return inModule && word === "await" || word === "enum";
  }
  function isStrictReservedWord(word, inModule) {
    return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
  }
  function isStrictBindOnlyReservedWord(word) {
    return reservedWordsStrictBindSet.has(word);
  }
  function isStrictBindReservedWord(word, inModule) {
    return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
  }
  function isKeyword(word) {
    return keywords.has(word);
  }
});

// node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "isIdentifierName", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierName;
    }
  });
  Object.defineProperty(exports, "isIdentifierChar", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierChar;
    }
  });
  Object.defineProperty(exports, "isIdentifierStart", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierStart;
    }
  });
  Object.defineProperty(exports, "isReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictBindOnlyReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictBindReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictBindReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictReservedWord;
    }
  });
  Object.defineProperty(exports, "isKeyword", {
    enumerable: true,
    get: function() {
      return _keyword.isKeyword;
    }
  });
  var _identifier = require_identifier();
  var _keyword = require_keyword();
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isValidIdentifier.js
var require_isValidIdentifier = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValidIdentifier;
  var _helperValidatorIdentifier = require_lib();
  function isValidIdentifier(name, reserved = true) {
    if (typeof name !== "string")
      return false;
    if (reserved) {
      if ((0, _helperValidatorIdentifier.isKeyword)(name) || (0, _helperValidatorIdentifier.isStrictReservedWord)(name, true)) {
        return false;
      }
    }
    return (0, _helperValidatorIdentifier.isIdentifierName)(name);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/constants/index.js
var require_constants = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
  var STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
  exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
  var FLATTENABLE_KEYS = ["body", "expressions"];
  exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
  var FOR_INIT_KEYS = ["left", "init"];
  exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
  var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
  exports.COMMENT_KEYS = COMMENT_KEYS;
  var LOGICAL_OPERATORS = ["||", "&&", "??"];
  exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
  var UPDATE_OPERATORS = ["++", "--"];
  exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
  var BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
  exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
  var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
  exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
  var COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
  exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
  var BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
  exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
  var NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
  var BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
  exports.BINARY_OPERATORS = BINARY_OPERATORS;
  var ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map((op) => op + "="), ...LOGICAL_OPERATORS.map((op) => op + "=")];
  exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
  var BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
  exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
  var NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
  exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
  var STRING_UNARY_OPERATORS = ["typeof"];
  exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
  var UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
  exports.UNARY_OPERATORS = UNARY_OPERATORS;
  var INHERIT_KEYS = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  };
  exports.INHERIT_KEYS = INHERIT_KEYS;
  var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
  exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
  var NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
  exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
});

// public/pkgs/@babel/types@7.12.12/lib/validators/validate.js
var require_validate = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validate;
  exports.validateField = validateField;
  exports.validateChild = validateChild;
  var _definitions = require_definitions();
  function validate(node, key, val) {
    if (!node)
      return;
    const fields = _definitions.NODE_FIELDS[node.type];
    if (!fields)
      return;
    const field = fields[key];
    validateField(node, key, val, field);
    validateChild(node, key, val);
  }
  function validateField(node, key, val, field) {
    if (!(field == null ? void 0 : field.validate))
      return;
    if (field.optional && val == null)
      return;
    field.validate(node, key, val);
  }
  function validateChild(node, key, val) {
    if (val == null)
      return;
    const validate2 = _definitions.NODE_PARENT_VALIDATIONS[val.type];
    if (!validate2)
      return;
    validate2(node, key, val);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/utils.js
var require_utils = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validate = validate;
  exports.typeIs = typeIs;
  exports.validateType = validateType;
  exports.validateOptional = validateOptional;
  exports.validateOptionalType = validateOptionalType;
  exports.arrayOf = arrayOf;
  exports.arrayOfType = arrayOfType;
  exports.validateArrayOfType = validateArrayOfType;
  exports.assertEach = assertEach;
  exports.assertOneOf = assertOneOf;
  exports.assertNodeType = assertNodeType;
  exports.assertNodeOrValueType = assertNodeOrValueType;
  exports.assertValueType = assertValueType;
  exports.assertShape = assertShape;
  exports.assertOptionalChainStart = assertOptionalChainStart;
  exports.chain = chain;
  exports.default = defineType;
  exports.NODE_PARENT_VALIDATIONS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;
  var _is = _interopRequireDefault(require_is());
  var _validate = require_validate();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var VISITOR_KEYS = {};
  exports.VISITOR_KEYS = VISITOR_KEYS;
  var ALIAS_KEYS = {};
  exports.ALIAS_KEYS = ALIAS_KEYS;
  var FLIPPED_ALIAS_KEYS = {};
  exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
  var NODE_FIELDS = {};
  exports.NODE_FIELDS = NODE_FIELDS;
  var BUILDER_KEYS = {};
  exports.BUILDER_KEYS = BUILDER_KEYS;
  var DEPRECATED_KEYS = {};
  exports.DEPRECATED_KEYS = DEPRECATED_KEYS;
  var NODE_PARENT_VALIDATIONS = {};
  exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;
  function getType(val) {
    if (Array.isArray(val)) {
      return "array";
    } else if (val === null) {
      return "null";
    } else {
      return typeof val;
    }
  }
  function validate(validate2) {
    return {
      validate: validate2
    };
  }
  function typeIs(typeName) {
    return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
  }
  function validateType(typeName) {
    return validate(typeIs(typeName));
  }
  function validateOptional(validate2) {
    return {
      validate: validate2,
      optional: true
    };
  }
  function validateOptionalType(typeName) {
    return {
      validate: typeIs(typeName),
      optional: true
    };
  }
  function arrayOf(elementType) {
    return chain(assertValueType("array"), assertEach(elementType));
  }
  function arrayOfType(typeName) {
    return arrayOf(typeIs(typeName));
  }
  function validateArrayOfType(typeName) {
    return validate(arrayOfType(typeName));
  }
  function assertEach(callback) {
    function validator(node, key, val) {
      if (!Array.isArray(val))
        return;
      for (let i = 0; i < val.length; i++) {
        const subkey = `${key}[${i}]`;
        const v = val[i];
        callback(node, subkey, v);
        if (process.env.BABEL_TYPES_8_BREAKING)
          (0, _validate.validateChild)(node, subkey, v);
      }
    }
    validator.each = callback;
    return validator;
  }
  function assertOneOf(...values) {
    function validate2(node, key, val) {
      if (values.indexOf(val) < 0) {
        throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
      }
    }
    validate2.oneOf = values;
    return validate2;
  }
  function assertNodeType(...types) {
    function validate2(node, key, val) {
      for (const type of types) {
        if ((0, _is.default)(type, val)) {
          (0, _validate.validateChild)(node, key, val);
          return;
        }
      }
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
    }
    validate2.oneOfNodeTypes = types;
    return validate2;
  }
  function assertNodeOrValueType(...types) {
    function validate2(node, key, val) {
      for (const type of types) {
        if (getType(val) === type || (0, _is.default)(type, val)) {
          (0, _validate.validateChild)(node, key, val);
          return;
        }
      }
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
    }
    validate2.oneOfNodeOrValueTypes = types;
    return validate2;
  }
  function assertValueType(type) {
    function validate2(node, key, val) {
      const valid = getType(val) === type;
      if (!valid) {
        throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
      }
    }
    validate2.type = type;
    return validate2;
  }
  function assertShape(shape) {
    function validate2(node, key, val) {
      const errors = [];
      for (const property of Object.keys(shape)) {
        try {
          (0, _validate.validateField)(node, property, val[property], shape[property]);
        } catch (error) {
          if (error instanceof TypeError) {
            errors.push(error.message);
            continue;
          }
          throw error;
        }
      }
      if (errors.length) {
        throw new TypeError(`Property ${key} of ${node.type} expected to have the following:
${errors.join("\n")}`);
      }
    }
    validate2.shapeOf = shape;
    return validate2;
  }
  function assertOptionalChainStart() {
    function validate2(node) {
      var _current;
      let current = node;
      while (node) {
        const {
          type
        } = current;
        if (type === "OptionalCallExpression") {
          if (current.optional)
            return;
          current = current.callee;
          continue;
        }
        if (type === "OptionalMemberExpression") {
          if (current.optional)
            return;
          current = current.object;
          continue;
        }
        break;
      }
      throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
    }
    return validate2;
  }
  function chain(...fns) {
    const validate2 = function(...args) {
      for (const fn of fns) {
        fn(...args);
      }
    };
    validate2.chainOf = fns;
    return validate2;
  }
  var validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
  var validFieldKeys = ["default", "optional", "validate"];
  function defineType(type, opts = {}) {
    const inherits = opts.inherits && store[opts.inherits] || {};
    let fields = opts.fields;
    if (!fields) {
      fields = {};
      if (inherits.fields) {
        const keys = Object.getOwnPropertyNames(inherits.fields);
        for (const key of keys) {
          const field = inherits.fields[key];
          fields[key] = {
            default: field.default,
            optional: field.optional,
            validate: field.validate
          };
        }
      }
    }
    const visitor = opts.visitor || inherits.visitor || [];
    const aliases = opts.aliases || inherits.aliases || [];
    const builder = opts.builder || inherits.builder || opts.visitor || [];
    for (const k of Object.keys(opts)) {
      if (validTypeOpts.indexOf(k) === -1) {
        throw new Error(`Unknown type option "${k}" on ${type}`);
      }
    }
    if (opts.deprecatedAlias) {
      DEPRECATED_KEYS[opts.deprecatedAlias] = type;
    }
    for (const key of visitor.concat(builder)) {
      fields[key] = fields[key] || {};
    }
    for (const key of Object.keys(fields)) {
      const field = fields[key];
      if (field.default !== void 0 && builder.indexOf(key) === -1) {
        field.optional = true;
      }
      if (field.default === void 0) {
        field.default = null;
      } else if (!field.validate && field.default != null) {
        field.validate = assertValueType(getType(field.default));
      }
      for (const k of Object.keys(field)) {
        if (validFieldKeys.indexOf(k) === -1) {
          throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
        }
      }
    }
    VISITOR_KEYS[type] = opts.visitor = visitor;
    BUILDER_KEYS[type] = opts.builder = builder;
    NODE_FIELDS[type] = opts.fields = fields;
    ALIAS_KEYS[type] = opts.aliases = aliases;
    aliases.forEach((alias) => {
      FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
      FLIPPED_ALIAS_KEYS[alias].push(type);
    });
    if (opts.validate) {
      NODE_PARENT_VALIDATIONS[type] = opts.validate;
    }
    store[type] = opts;
  }
  var store = {};
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/core.js
var require_core = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;
  var _is = _interopRequireDefault(require_is());
  var _isValidIdentifier = _interopRequireDefault(require_isValidIdentifier());
  var _helperValidatorIdentifier = require_lib();
  var _constants = require_constants();
  var _utils = _interopRequireWildcard(require_utils());
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  (0, _utils.default)("ArrayExpression", {
    fields: {
      elements: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
        default: !process.env.BABEL_TYPES_8_BREAKING ? [] : void 0
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  (0, _utils.default)("AssignmentExpression", {
    fields: {
      operator: {
        validate: function() {
          if (!process.env.BABEL_TYPES_8_BREAKING) {
            return (0, _utils.assertValueType)("string");
          }
          const identifier = (0, _utils.assertOneOf)(..._constants.ASSIGNMENT_OPERATORS);
          const pattern = (0, _utils.assertOneOf)("=");
          return function(node, key, val) {
            const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
            validator(node, key, val);
          };
        }()
      },
      left: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  });
  (0, _utils.default)("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: (0, _utils.assertOneOf)(..._constants.BINARY_OPERATORS)
      },
      left: {
        validate: function() {
          const expression = (0, _utils.assertNodeType)("Expression");
          const inOp = (0, _utils.assertNodeType)("Expression", "PrivateName");
          const validator = function(node, key, val) {
            const validator2 = node.operator === "in" ? inOp : expression;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "PrivateName"];
          return validator;
        }()
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  });
  (0, _utils.default)("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    }
  });
  (0, _utils.default)("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertNodeType)("DirectiveLiteral")
      }
    }
  });
  (0, _utils.default)("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    }
  });
  (0, _utils.default)("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  });
  (0, _utils.default)("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, _utils.assertNodeType)("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  (0, _utils.default)("CallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, _utils.assertNodeType)("Expression", "V8IntrinsicIdentifier")
      },
      arguments: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      }
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      optional: {
        validate: (0, _utils.assertOneOf)(true, false),
        optional: true
      }
    } : {}, {
      typeArguments: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
        optional: true
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
        optional: true
      }
    })
  });
  (0, _utils.default)("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
  (0, _utils.default)("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      alternate: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  });
  (0, _utils.default)("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, _utils.assertNodeType)("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  (0, _utils.default)("DebuggerStatement", {
    aliases: ["Statement"]
  });
  (0, _utils.default)("DoWhileStatement", {
    visitor: ["test", "body"],
    fields: {
      test: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  });
  (0, _utils.default)("EmptyStatement", {
    aliases: ["Statement"]
  });
  (0, _utils.default)("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  });
  (0, _utils.default)("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: (0, _utils.assertNodeType)("Program")
      },
      comments: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {
        }, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }) : (0, _utils.assertEach)((0, _utils.assertNodeType)("CommentBlock", "CommentLine")),
        optional: true
      },
      tokens: {
        validate: (0, _utils.assertEach)(Object.assign(() => {
        }, {
          type: "any"
        })),
        optional: true
      }
    }
  });
  (0, _utils.default)("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  (0, _utils.default)("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
        optional: true
      },
      test: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      },
      update: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  var functionCommon = {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
    },
    generator: {
      default: false
    },
    async: {
      default: false
    }
  };
  exports.functionCommon = functionCommon;
  var functionTypeAnnotationCommon = {
    returnType: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    }
  };
  exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
  var functionDeclarationCommon = Object.assign({}, functionCommon, {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  });
  exports.functionDeclarationCommon = functionDeclarationCommon;
  (0, _utils.default)("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "params", "body", "returnType", "typeParameters"],
    fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: function() {
      if (!process.env.BABEL_TYPES_8_BREAKING)
        return () => {
        };
      const identifier = (0, _utils.assertNodeType)("Identifier");
      return function(parent, key, node) {
        if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
          identifier(node, "id", node.id);
        }
      };
    }()
  });
  (0, _utils.default)("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
      id: {
        validate: (0, _utils.assertNodeType)("Identifier"),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    })
  });
  var patternLikeCommon = {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    }
  };
  exports.patternLikeCommon = patternLikeCommon;
  (0, _utils.default)("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, patternLikeCommon, {
      name: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (!(0, _isValidIdentifier.default)(val, false)) {
            throw new TypeError(`"${val}" is not a valid identifier name`);
          }
        }, {
          type: "string"
        }))
      },
      optional: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      }
    }),
    validate(parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING)
        return;
      const match = /\.(\w+)$/.exec(key);
      if (!match)
        return;
      const [, parentKey] = match;
      const nonComp = {
        computed: false
      };
      if (parentKey === "property") {
        if ((0, _is.default)("MemberExpression", parent, nonComp))
          return;
        if ((0, _is.default)("OptionalMemberExpression", parent, nonComp))
          return;
      } else if (parentKey === "key") {
        if ((0, _is.default)("Property", parent, nonComp))
          return;
        if ((0, _is.default)("Method", parent, nonComp))
          return;
      } else if (parentKey === "exported") {
        if ((0, _is.default)("ExportSpecifier", parent))
          return;
      } else if (parentKey === "imported") {
        if ((0, _is.default)("ImportSpecifier", parent, {
          imported: node
        }))
          return;
      } else if (parentKey === "meta") {
        if ((0, _is.default)("MetaProperty", parent, {
          meta: node
        }))
          return;
      }
      if (((0, _helperValidatorIdentifier.isKeyword)(node.name) || (0, _helperValidatorIdentifier.isReservedWord)(node.name, false)) && node.name !== "this") {
        throw new TypeError(`"${node.name}" is not a valid identifier`);
      }
    }
  });
  (0, _utils.default)("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, _utils.assertNodeType)("Statement")
      },
      alternate: {
        optional: true,
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  (0, _utils.default)("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: (0, _utils.assertNodeType)("Identifier")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  (0, _utils.default)("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("number")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: (0, _utils.assertValueType)("string")
      },
      flags: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          const invalid = /[^gimsuy]/.exec(val);
          if (invalid) {
            throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
          }
        }, {
          type: "string"
        })),
        default: ""
      }
    }
  });
  (0, _utils.default)("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: (0, _utils.assertOneOf)(..._constants.LOGICAL_OPERATORS)
      },
      left: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("MemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal"],
    fields: Object.assign({
      object: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      property: {
        validate: function() {
          const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
          const computed = (0, _utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
          return validator;
        }()
      },
      computed: {
        default: false
      }
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      optional: {
        validate: (0, _utils.assertOneOf)(true, false),
        optional: true
      }
    } : {})
  });
  (0, _utils.default)("NewExpression", {
    inherits: "CallExpression"
  });
  (0, _utils.default)("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceFile: {
        validate: (0, _utils.assertValueType)("string")
      },
      sourceType: {
        validate: (0, _utils.assertOneOf)("script", "module"),
        default: "script"
      },
      interpreter: {
        validate: (0, _utils.assertNodeType)("InterpreterDirective"),
        default: null,
        optional: true
      },
      directives: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  });
  (0, _utils.default)("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
      }
    }
  });
  (0, _utils.default)("ObjectMethod", {
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
      kind: Object.assign({
        validate: (0, _utils.assertOneOf)("method", "get", "set")
      }, !process.env.BABEL_TYPES_8_BREAKING ? {
        default: "method"
      } : {}),
      computed: {
        default: false
      },
      key: {
        validate: function() {
          const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
          const computed = (0, _utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
          return validator;
        }()
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    }),
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  });
  (0, _utils.default)("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand", ...!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : []],
    fields: {
      computed: {
        default: false
      },
      key: {
        validate: function() {
          const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
          const computed = (0, _utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
          return validator;
        }()
      },
      value: {
        validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
      },
      shorthand: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (val && node.computed) {
            throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
          }
        }, {
          type: "boolean"
        }), function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (val && !(0, _is.default)("Identifier", node.key)) {
            throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
          }
        }),
        default: false
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    },
    visitor: ["key", "value", "decorators"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: function() {
      const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern");
      const expression = (0, _utils.assertNodeType)("Expression");
      return function(parent, key, node) {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return;
        const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
        validator(node, "value", node.value);
      };
    }()
  });
  (0, _utils.default)("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["LVal", "PatternLike"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, patternLikeCommon, {
      argument: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "Pattern", "MemberExpression")
      }
    }),
    validate(parent, key) {
      if (!process.env.BABEL_TYPES_8_BREAKING)
        return;
      const match = /(\w+)\[(\d+)\]/.exec(key);
      if (!match)
        throw new Error("Internal Babel error: malformed key.");
      const [, listKey, index] = match;
      if (parent[listKey].length > index + 1) {
        throw new TypeError(`RestElement must be last element of ${listKey}`);
      }
    }
  });
  (0, _utils.default)("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      }
    }
  });
  (0, _utils.default)("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
      }
    },
    aliases: ["Expression"]
  });
  (0, _utils.default)("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      },
      consequent: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
      }
    }
  });
  (0, _utils.default)("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      cases: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
      }
    }
  });
  (0, _utils.default)("ThisExpression", {
    aliases: ["Expression"]
  });
  (0, _utils.default)("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function(node) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (!node.handler && !node.finalizer) {
            throw new TypeError("TryStatement expects either a handler or finalizer, or both");
          }
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        }))
      },
      handler: {
        optional: true,
        validate: (0, _utils.assertNodeType)("CatchClause")
      },
      finalizer: {
        optional: true,
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    }
  });
  (0, _utils.default)("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: true
      },
      argument: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, _utils.assertOneOf)(..._constants.UNARY_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  });
  (0, _utils.default)("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: false
      },
      argument: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
      },
      operator: {
        validate: (0, _utils.assertOneOf)(..._constants.UPDATE_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  });
  (0, _utils.default)("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      kind: {
        validate: (0, _utils.assertOneOf)("var", "let", "const")
      },
      declarations: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
      }
    },
    validate(parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING)
        return;
      if (!(0, _is.default)("ForXStatement", parent, {
        left: node
      }))
        return;
      if (node.declarations.length !== 1) {
        throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
      }
    }
  });
  (0, _utils.default)("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: function() {
          if (!process.env.BABEL_TYPES_8_BREAKING) {
            return (0, _utils.assertNodeType)("LVal");
          }
          const normal = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
          const without = (0, _utils.assertNodeType)("Identifier");
          return function(node, key, val) {
            const validator = node.init ? normal : without;
            validator(node, key, val);
          };
        }()
      },
      definite: {
        optional: true,
        validate: (0, _utils.assertValueType)("boolean")
      },
      init: {
        optional: true,
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  (0, _utils.default)("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      }
    }
  });
  (0, _utils.default)("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon, {
      left: {
        validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    })
  });
  (0, _utils.default)("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon, {
      elements: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike")))
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    })
  });
  (0, _utils.default)("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["params", "body", "returnType", "typeParameters"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
      expression: {
        validate: (0, _utils.assertValueType)("boolean")
      },
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
      }
    })
  });
  (0, _utils.default)("ClassBody", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
      }
    }
  });
  (0, _utils.default)("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: {
      id: {
        validate: (0, _utils.assertNodeType)("Identifier"),
        optional: true
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: true,
        validate: (0, _utils.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      },
      implements: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      },
      mixins: {
        validate: (0, _utils.assertNodeType)("InterfaceExtends"),
        optional: true
      }
    }
  });
  (0, _utils.default)("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: {
      id: {
        validate: (0, _utils.assertNodeType)("Identifier")
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: (0, _utils.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: true,
        validate: (0, _utils.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      },
      implements: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      },
      mixins: {
        validate: (0, _utils.assertNodeType)("InterfaceExtends"),
        optional: true
      },
      declare: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      abstract: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      }
    },
    validate: function() {
      const identifier = (0, _utils.assertNodeType)("Identifier");
      return function(parent, key, node) {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return;
        if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
          identifier(node, "id", node.id);
        }
      };
    }()
  });
  (0, _utils.default)("ExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      source: {
        validate: (0, _utils.assertNodeType)("StringLiteral")
      },
      exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value")),
      assertions: {
        optional: true,
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertNodeType)("ImportAttribute"))
      }
    }
  });
  (0, _utils.default)("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        validate: (0, _utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
      }
    }
  });
  (0, _utils.default)("ExportNamedDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        optional: true,
        validate: (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (val && node.specifiers.length) {
            throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
          }
        }, {
          oneOfNodeTypes: ["Declaration"]
        }), function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (val && node.source) {
            throw new TypeError("Cannot export a declaration from a source");
          }
        })
      },
      assertions: {
        optional: true,
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertNodeType)("ImportAttribute"))
      },
      specifiers: {
        default: [],
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)(function() {
          const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
          const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return sourced;
          return function(node, key, val) {
            const validator = node.source ? sourced : sourceless;
            validator(node, key, val);
          };
        }()))
      },
      source: {
        validate: (0, _utils.assertNodeType)("StringLiteral"),
        optional: true
      },
      exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
    }
  });
  (0, _utils.default)("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, _utils.assertNodeType)("Identifier")
      },
      exported: {
        validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
      }
    }
  });
  (0, _utils.default)("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: function() {
          if (!process.env.BABEL_TYPES_8_BREAKING) {
            return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
          }
          const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
          const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
          return function(node, key, val) {
            if ((0, _is.default)("VariableDeclaration", val)) {
              declaration(node, key, val);
            } else {
              lval(node, key, val);
            }
          };
        }()
      },
      right: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, _utils.assertNodeType)("Statement")
      },
      await: {
        default: false
      }
    }
  });
  (0, _utils.default)("ImportDeclaration", {
    visitor: ["specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration"],
    fields: {
      assertions: {
        optional: true,
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertNodeType)("ImportAttribute"))
      },
      specifiers: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
      },
      source: {
        validate: (0, _utils.assertNodeType)("StringLiteral")
      },
      importKind: {
        validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
        optional: true
      }
    }
  });
  (0, _utils.default)("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  (0, _utils.default)("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  (0, _utils.default)("ImportSpecifier", {
    visitor: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, _utils.assertNodeType)("Identifier")
      },
      imported: {
        validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
      },
      importKind: {
        validate: (0, _utils.assertOneOf)("type", "typeof"),
        optional: true
      }
    }
  });
  (0, _utils.default)("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          let property;
          switch (val.name) {
            case "function":
              property = "sent";
              break;
            case "new":
              property = "target";
              break;
            case "import":
              property = "meta";
              break;
          }
          if (!(0, _is.default)("Identifier", node.property, {
            name: property
          })) {
            throw new TypeError("Unrecognised MetaProperty");
          }
        }, {
          oneOfNodeTypes: ["Identifier"]
        }))
      },
      property: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  var classMethodOrPropertyCommon = {
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    static: {
      default: false
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    key: {
      validate: (0, _utils.chain)(function() {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function(node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
    }
  };
  exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
  var classMethodOrDeclareMethodCommon = Object.assign({}, functionCommon, classMethodOrPropertyCommon, {
    kind: {
      validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
      default: "method"
    },
    access: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  });
  exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
  (0, _utils.default)("ClassMethod", {
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    })
  });
  (0, _utils.default)("ObjectPattern", {
    visitor: ["properties", "typeAnnotation", "decorators"],
    builder: ["properties"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon, {
      properties: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
      }
    })
  });
  (0, _utils.default)("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("Super", {
    aliases: ["Expression"]
  });
  (0, _utils.default)("TaggedTemplateExpression", {
    visitor: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: {
      tag: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      quasi: {
        validate: (0, _utils.assertNodeType)("TemplateLiteral")
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      }
    }
  });
  (0, _utils.default)("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: (0, _utils.assertShape)({
          raw: {
            validate: (0, _utils.assertValueType)("string")
          },
          cooked: {
            validate: (0, _utils.assertValueType)("string"),
            optional: true
          }
        })
      },
      tail: {
        default: false
      }
    }
  });
  (0, _utils.default)("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
      },
      expressions: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function(node, key, val) {
          if (node.quasis.length !== val.length + 1) {
            throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.
Expected ${val.length + 1} quasis but got ${node.quasis.length}`);
          }
        })
      }
    }
  });
  (0, _utils.default)("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (val && !node.argument) {
            throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
          }
        }, {
          type: "boolean"
        })),
        default: false
      },
      argument: {
        optional: true,
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("Import", {
    aliases: ["Expression"]
  });
  (0, _utils.default)("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  (0, _utils.default)("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      property: {
        validate: function() {
          const normal = (0, _utils.assertNodeType)("Identifier");
          const computed = (0, _utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier"];
          return validator;
        }()
      },
      computed: {
        default: false
      },
      optional: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
      }
    }
  });
  (0, _utils.default)("OptionalCallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: {
      callee: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      arguments: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      },
      optional: {
        validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
      },
      typeArguments: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
        optional: true
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
        optional: true
      }
    }
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/flow.js
var require_flow = __commonJS(() => {
  "use strict";
  var _utils = _interopRequireWildcard(require_utils());
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
    (0, _utils.default)(name, {
      builder: ["id", "typeParameters", "extends", "body"],
      visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)(typeParameterType),
        extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
        mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
        implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements")),
        body: (0, _utils.validateType)("ObjectTypeAnnotation")
      }
    });
  };
  (0, _utils.default)("AnyTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("ArrayTypeAnnotation", {
    visitor: ["elementType"],
    aliases: ["Flow", "FlowType"],
    fields: {
      elementType: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("BooleanTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("BooleanLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["Flow", "FlowType"],
    fields: {
      value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("NullLiteralTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("ClassImplements", {
    visitor: ["id", "typeParameters"],
    aliases: ["Flow"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  defineInterfaceishType("DeclareClass");
  (0, _utils.default)("DeclareFunction", {
    visitor: ["id"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
    }
  });
  defineInterfaceishType("DeclareInterface");
  (0, _utils.default)("DeclareModule", {
    builder: ["id", "body", "kind"],
    visitor: ["id", "body"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
      body: (0, _utils.validateType)("BlockStatement"),
      kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
    }
  });
  (0, _utils.default)("DeclareModuleExports", {
    visitor: ["typeAnnotation"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
    }
  });
  (0, _utils.default)("DeclareTypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("DeclareOpaqueType", {
    visitor: ["id", "typeParameters", "supertype"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, _utils.validateOptionalType)("FlowType")
    }
  });
  (0, _utils.default)("DeclareVariable", {
    visitor: ["id"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier")
    }
  });
  (0, _utils.default)("DeclareExportDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      declaration: (0, _utils.validateOptionalType)("Flow"),
      specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
      source: (0, _utils.validateOptionalType)("StringLiteral"),
      default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("DeclareExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      source: (0, _utils.validateType)("StringLiteral"),
      exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
    }
  });
  (0, _utils.default)("DeclaredPredicate", {
    visitor: ["value"],
    aliases: ["Flow", "FlowPredicate"],
    fields: {
      value: (0, _utils.validateType)("Flow")
    }
  });
  (0, _utils.default)("ExistsTypeAnnotation", {
    aliases: ["Flow", "FlowType"]
  });
  (0, _utils.default)("FunctionTypeAnnotation", {
    visitor: ["typeParameters", "params", "rest", "returnType"],
    aliases: ["Flow", "FlowType"],
    fields: {
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
      params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
      rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
      returnType: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("FunctionTypeParam", {
    visitor: ["name", "typeAnnotation"],
    aliases: ["Flow"],
    fields: {
      name: (0, _utils.validateOptionalType)("Identifier"),
      typeAnnotation: (0, _utils.validateType)("FlowType"),
      optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("GenericTypeAnnotation", {
    visitor: ["id", "typeParameters"],
    aliases: ["Flow", "FlowType"],
    fields: {
      id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  (0, _utils.default)("InferredPredicate", {
    aliases: ["Flow", "FlowPredicate"]
  });
  (0, _utils.default)("InterfaceExtends", {
    visitor: ["id", "typeParameters"],
    aliases: ["Flow"],
    fields: {
      id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  defineInterfaceishType("InterfaceDeclaration");
  (0, _utils.default)("InterfaceTypeAnnotation", {
    visitor: ["extends", "body"],
    aliases: ["Flow", "FlowType"],
    fields: {
      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      body: (0, _utils.validateType)("ObjectTypeAnnotation")
    }
  });
  (0, _utils.default)("IntersectionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["Flow", "FlowType"],
    fields: {
      types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
    }
  });
  (0, _utils.default)("MixedTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("EmptyTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("NullableTypeAnnotation", {
    visitor: ["typeAnnotation"],
    aliases: ["Flow", "FlowType"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("NumberLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["Flow", "FlowType"],
    fields: {
      value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
    }
  });
  (0, _utils.default)("NumberTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("ObjectTypeAnnotation", {
    visitor: ["properties", "indexers", "callProperties", "internalSlots"],
    aliases: ["Flow", "FlowType"],
    builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
    fields: {
      properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
      indexers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeIndexer")),
      callProperties: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeCallProperty")),
      internalSlots: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeInternalSlot")),
      exact: {
        validate: (0, _utils.assertValueType)("boolean"),
        default: false
      },
      inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("ObjectTypeInternalSlot", {
    visitor: ["id", "value", "optional", "static", "method"],
    aliases: ["Flow", "UserWhitespacable"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      value: (0, _utils.validateType)("FlowType"),
      optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("ObjectTypeCallProperty", {
    visitor: ["value"],
    aliases: ["Flow", "UserWhitespacable"],
    fields: {
      value: (0, _utils.validateType)("FlowType"),
      static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("ObjectTypeIndexer", {
    visitor: ["id", "key", "value", "variance"],
    aliases: ["Flow", "UserWhitespacable"],
    fields: {
      id: (0, _utils.validateOptionalType)("Identifier"),
      key: (0, _utils.validateType)("FlowType"),
      value: (0, _utils.validateType)("FlowType"),
      static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      variance: (0, _utils.validateOptionalType)("Variance")
    }
  });
  (0, _utils.default)("ObjectTypeProperty", {
    visitor: ["key", "value", "variance"],
    aliases: ["Flow", "UserWhitespacable"],
    fields: {
      key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
      value: (0, _utils.validateType)("FlowType"),
      kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
      static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      variance: (0, _utils.validateOptionalType)("Variance"),
      method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
    }
  });
  (0, _utils.default)("ObjectTypeSpreadProperty", {
    visitor: ["argument"],
    aliases: ["Flow", "UserWhitespacable"],
    fields: {
      argument: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("OpaqueType", {
    visitor: ["id", "typeParameters", "supertype", "impltype"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, _utils.validateOptionalType)("FlowType"),
      impltype: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("QualifiedTypeIdentifier", {
    visitor: ["id", "qualification"],
    aliases: ["Flow"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
    }
  });
  (0, _utils.default)("StringLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["Flow", "FlowType"],
    fields: {
      value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
    }
  });
  (0, _utils.default)("StringTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("SymbolTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("ThisTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("TupleTypeAnnotation", {
    visitor: ["types"],
    aliases: ["Flow", "FlowType"],
    fields: {
      types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
    }
  });
  (0, _utils.default)("TypeofTypeAnnotation", {
    visitor: ["argument"],
    aliases: ["Flow", "FlowType"],
    fields: {
      argument: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("TypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("TypeAnnotation", {
    aliases: ["Flow"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("FlowType")
    }
  });
  (0, _utils.default)("TypeCastExpression", {
    visitor: ["expression", "typeAnnotation"],
    aliases: ["Flow", "ExpressionWrapper", "Expression"],
    fields: {
      expression: (0, _utils.validateType)("Expression"),
      typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
    }
  });
  (0, _utils.default)("TypeParameter", {
    aliases: ["Flow"],
    visitor: ["bound", "default", "variance"],
    fields: {
      name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
      bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
      default: (0, _utils.validateOptionalType)("FlowType"),
      variance: (0, _utils.validateOptionalType)("Variance")
    }
  });
  (0, _utils.default)("TypeParameterDeclaration", {
    aliases: ["Flow"],
    visitor: ["params"],
    fields: {
      params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
    }
  });
  (0, _utils.default)("TypeParameterInstantiation", {
    aliases: ["Flow"],
    visitor: ["params"],
    fields: {
      params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
    }
  });
  (0, _utils.default)("UnionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["Flow", "FlowType"],
    fields: {
      types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
    }
  });
  (0, _utils.default)("Variance", {
    aliases: ["Flow"],
    builder: ["kind"],
    fields: {
      kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
    }
  });
  (0, _utils.default)("VoidTypeAnnotation", {
    aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
  });
  (0, _utils.default)("EnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      body: (0, _utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
    }
  });
  (0, _utils.default)("EnumBooleanBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      members: (0, _utils.validateArrayOfType)("EnumBooleanMember")
    }
  });
  (0, _utils.default)("EnumNumberBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      members: (0, _utils.validateArrayOfType)("EnumNumberMember")
    }
  });
  (0, _utils.default)("EnumStringBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
      members: (0, _utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"])
    }
  });
  (0, _utils.default)("EnumSymbolBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      members: (0, _utils.validateArrayOfType)("EnumDefaultedMember")
    }
  });
  (0, _utils.default)("EnumBooleanMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      init: (0, _utils.validateType)("BooleanLiteral")
    }
  });
  (0, _utils.default)("EnumNumberMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      init: (0, _utils.validateType)("NumericLiteral")
    }
  });
  (0, _utils.default)("EnumStringMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      init: (0, _utils.validateType)("StringLiteral")
    }
  });
  (0, _utils.default)("EnumDefaultedMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: (0, _utils.validateType)("Identifier")
    }
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/jsx.js
var require_jsx = __commonJS(() => {
  "use strict";
  var _utils = _interopRequireWildcard(require_utils());
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  (0, _utils.default)("JSXAttribute", {
    visitor: ["name", "value"],
    aliases: ["JSX", "Immutable"],
    fields: {
      name: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
      },
      value: {
        optional: true,
        validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
      }
    }
  });
  (0, _utils.default)("JSXClosingElement", {
    visitor: ["name"],
    aliases: ["JSX", "Immutable"],
    fields: {
      name: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      }
    }
  });
  (0, _utils.default)("JSXElement", {
    builder: ["openingElement", "closingElement", "children", "selfClosing"],
    visitor: ["openingElement", "children", "closingElement"],
    aliases: ["JSX", "Immutable", "Expression"],
    fields: {
      openingElement: {
        validate: (0, _utils.assertNodeType)("JSXOpeningElement")
      },
      closingElement: {
        optional: true,
        validate: (0, _utils.assertNodeType)("JSXClosingElement")
      },
      children: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      },
      selfClosing: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      }
    }
  });
  (0, _utils.default)("JSXEmptyExpression", {
    aliases: ["JSX"]
  });
  (0, _utils.default)("JSXExpressionContainer", {
    visitor: ["expression"],
    aliases: ["JSX", "Immutable"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
      }
    }
  });
  (0, _utils.default)("JSXSpreadChild", {
    visitor: ["expression"],
    aliases: ["JSX", "Immutable"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("JSXIdentifier", {
    builder: ["name"],
    aliases: ["JSX"],
    fields: {
      name: {
        validate: (0, _utils.assertValueType)("string")
      }
    }
  });
  (0, _utils.default)("JSXMemberExpression", {
    visitor: ["object", "property"],
    aliases: ["JSX"],
    fields: {
      object: {
        validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
      },
      property: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier")
      }
    }
  });
  (0, _utils.default)("JSXNamespacedName", {
    visitor: ["namespace", "name"],
    aliases: ["JSX"],
    fields: {
      namespace: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier")
      },
      name: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier")
      }
    }
  });
  (0, _utils.default)("JSXOpeningElement", {
    builder: ["name", "attributes", "selfClosing"],
    visitor: ["name", "attributes"],
    aliases: ["JSX", "Immutable"],
    fields: {
      name: {
        validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      },
      selfClosing: {
        default: false
      },
      attributes: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      }
    }
  });
  (0, _utils.default)("JSXSpreadAttribute", {
    visitor: ["argument"],
    aliases: ["JSX"],
    fields: {
      argument: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("JSXText", {
    aliases: ["JSX", "Immutable"],
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    }
  });
  (0, _utils.default)("JSXFragment", {
    builder: ["openingFragment", "closingFragment", "children"],
    visitor: ["openingFragment", "children", "closingFragment"],
    aliases: ["JSX", "Immutable", "Expression"],
    fields: {
      openingFragment: {
        validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
      },
      closingFragment: {
        validate: (0, _utils.assertNodeType)("JSXClosingFragment")
      },
      children: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      }
    }
  });
  (0, _utils.default)("JSXOpeningFragment", {
    aliases: ["JSX", "Immutable"]
  });
  (0, _utils.default)("JSXClosingFragment", {
    aliases: ["JSX", "Immutable"]
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/placeholders.js
var require_placeholders = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
  var _utils = require_utils();
  var PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
  exports.PLACEHOLDERS = PLACEHOLDERS;
  var PLACEHOLDERS_ALIAS = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;
  for (const type of PLACEHOLDERS) {
    const alias = _utils.ALIAS_KEYS[type];
    if (alias == null ? void 0 : alias.length)
      PLACEHOLDERS_ALIAS[type] = alias;
  }
  var PLACEHOLDERS_FLIPPED_ALIAS = {};
  exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
  Object.keys(PLACEHOLDERS_ALIAS).forEach((type) => {
    PLACEHOLDERS_ALIAS[type].forEach((alias) => {
      if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
        PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
      }
      PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
    });
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/misc.js
var require_misc = __commonJS(() => {
  "use strict";
  var _utils = _interopRequireWildcard(require_utils());
  var _placeholders = require_placeholders();
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  (0, _utils.default)("Noop", {
    visitor: []
  });
  (0, _utils.default)("Placeholder", {
    visitor: [],
    builder: ["expectedNode", "name"],
    fields: {
      name: {
        validate: (0, _utils.assertNodeType)("Identifier")
      },
      expectedNode: {
        validate: (0, _utils.assertOneOf)(..._placeholders.PLACEHOLDERS)
      }
    }
  });
  (0, _utils.default)("V8IntrinsicIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, _utils.assertValueType)("string")
      }
    }
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/experimental.js
var require_experimental = __commonJS(() => {
  "use strict";
  var _utils = _interopRequireWildcard(require_utils());
  var _core = require_core();
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  (0, _utils.default)("ArgumentPlaceholder", {});
  (0, _utils.default)("BindExpression", {
    visitor: ["object", "callee"],
    aliases: ["Expression"],
    fields: !process.env.BABEL_TYPES_8_BREAKING ? {
      object: {
        validate: Object.assign(() => {
        }, {
          oneOfNodeTypes: ["Expression"]
        })
      },
      callee: {
        validate: Object.assign(() => {
        }, {
          oneOfNodeTypes: ["Expression"]
        })
      }
    } : {
      object: {
        validate: (0, _utils.assertNodeType)("Expression")
      },
      callee: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("ClassProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"],
    fields: Object.assign({}, _core.classMethodOrPropertyCommon, {
      value: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      },
      definite: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      typeAnnotation: {
        validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      },
      readonly: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      declare: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      }
    })
  });
  (0, _utils.default)("PipelineTopicExpression", {
    builder: ["expression"],
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("PipelineBareFunction", {
    builder: ["callee"],
    visitor: ["callee"],
    fields: {
      callee: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("PipelinePrimaryTopicReference", {
    aliases: ["Expression"]
  });
  (0, _utils.default)("ClassPrivateProperty", {
    visitor: ["key", "value", "decorators"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: (0, _utils.assertNodeType)("PrivateName")
      },
      value: {
        validate: (0, _utils.assertNodeType)("Expression"),
        optional: true
      },
      typeAnnotation: {
        validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    }
  });
  (0, _utils.default)("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, _core.classMethodOrDeclareMethodCommon, _core.functionTypeAnnotationCommon, {
      key: {
        validate: (0, _utils.assertNodeType)("PrivateName")
      },
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    })
  });
  (0, _utils.default)("ImportAttribute", {
    visitor: ["key", "value"],
    fields: {
      key: {
        validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
      },
      value: {
        validate: (0, _utils.assertNodeType)("StringLiteral")
      }
    }
  });
  (0, _utils.default)("Decorator", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, _utils.assertNodeType)("Expression")
      }
    }
  });
  (0, _utils.default)("DoExpression", {
    visitor: ["body"],
    aliases: ["Expression"],
    fields: {
      body: {
        validate: (0, _utils.assertNodeType)("BlockStatement")
      }
    }
  });
  (0, _utils.default)("ExportDefaultSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  (0, _utils.default)("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: (0, _utils.assertNodeType)("Identifier")
      }
    }
  });
  (0, _utils.default)("RecordExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectProperty", "SpreadElement")))
      }
    }
  });
  (0, _utils.default)("TupleExpression", {
    fields: {
      elements: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement"))),
        default: []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  (0, _utils.default)("DecimalLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _utils.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _utils.default)("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/typescript.js
var require_typescript = __commonJS(() => {
  "use strict";
  var _utils = _interopRequireWildcard(require_utils());
  var _core = require_core();
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var bool = (0, _utils.assertValueType)("boolean");
  var tSFunctionTypeAnnotationCommon = {
    returnType: {
      validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
      optional: true
    }
  };
  (0, _utils.default)("TSParameterProperty", {
    aliases: ["LVal"],
    visitor: ["parameter"],
    fields: {
      accessibility: {
        validate: (0, _utils.assertOneOf)("public", "private", "protected"),
        optional: true
      },
      readonly: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      parameter: {
        validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
      }
    }
  });
  (0, _utils.default)("TSDeclareFunction", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, _core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
  });
  (0, _utils.default)("TSDeclareMethod", {
    visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, _core.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
  });
  (0, _utils.default)("TSQualifiedName", {
    aliases: ["TSEntityName"],
    visitor: ["left", "right"],
    fields: {
      left: (0, _utils.validateType)("TSEntityName"),
      right: (0, _utils.validateType)("Identifier")
    }
  });
  var signatureDeclarationCommon = {
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    parameters: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  };
  var callConstructSignatureDeclaration = {
    aliases: ["TSTypeElement"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: signatureDeclarationCommon
  };
  (0, _utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
  (0, _utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
  var namedTypeElementCommon = {
    key: (0, _utils.validateType)("Expression"),
    computed: (0, _utils.validate)(bool),
    optional: (0, _utils.validateOptional)(bool)
  };
  (0, _utils.default)("TSPropertySignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeAnnotation", "initializer"],
    fields: Object.assign({}, namedTypeElementCommon, {
      readonly: (0, _utils.validateOptional)(bool),
      typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
      initializer: (0, _utils.validateOptionalType)("Expression")
    })
  });
  (0, _utils.default)("TSMethodSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
    fields: Object.assign({}, signatureDeclarationCommon, namedTypeElementCommon)
  });
  (0, _utils.default)("TSIndexSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["parameters", "typeAnnotation"],
    fields: {
      readonly: (0, _utils.validateOptional)(bool),
      parameters: (0, _utils.validateArrayOfType)("Identifier"),
      typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
    }
  });
  var tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
  for (const type of tsKeywordTypes) {
    (0, _utils.default)(type, {
      aliases: ["TSType", "TSBaseType"],
      visitor: [],
      fields: {}
    });
  }
  (0, _utils.default)("TSThisType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
  var fnOrCtr = {
    aliases: ["TSType"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: signatureDeclarationCommon
  };
  (0, _utils.default)("TSFunctionType", fnOrCtr);
  (0, _utils.default)("TSConstructorType", fnOrCtr);
  (0, _utils.default)("TSTypeReference", {
    aliases: ["TSType"],
    visitor: ["typeName", "typeParameters"],
    fields: {
      typeName: (0, _utils.validateType)("TSEntityName"),
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  (0, _utils.default)("TSTypePredicate", {
    aliases: ["TSType"],
    visitor: ["parameterName", "typeAnnotation"],
    builder: ["parameterName", "typeAnnotation", "asserts"],
    fields: {
      parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
      typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
      asserts: (0, _utils.validateOptional)(bool)
    }
  });
  (0, _utils.default)("TSTypeQuery", {
    aliases: ["TSType"],
    visitor: ["exprName"],
    fields: {
      exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"])
    }
  });
  (0, _utils.default)("TSTypeLiteral", {
    aliases: ["TSType"],
    visitor: ["members"],
    fields: {
      members: (0, _utils.validateArrayOfType)("TSTypeElement")
    }
  });
  (0, _utils.default)("TSArrayType", {
    aliases: ["TSType"],
    visitor: ["elementType"],
    fields: {
      elementType: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSTupleType", {
    aliases: ["TSType"],
    visitor: ["elementTypes"],
    fields: {
      elementTypes: (0, _utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
    }
  });
  (0, _utils.default)("TSOptionalType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSRestType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSNamedTupleMember", {
    visitor: ["label", "elementType"],
    builder: ["label", "elementType", "optional"],
    fields: {
      label: (0, _utils.validateType)("Identifier"),
      optional: {
        validate: bool,
        default: false
      },
      elementType: (0, _utils.validateType)("TSType")
    }
  });
  var unionOrIntersection = {
    aliases: ["TSType"],
    visitor: ["types"],
    fields: {
      types: (0, _utils.validateArrayOfType)("TSType")
    }
  };
  (0, _utils.default)("TSUnionType", unionOrIntersection);
  (0, _utils.default)("TSIntersectionType", unionOrIntersection);
  (0, _utils.default)("TSConditionalType", {
    aliases: ["TSType"],
    visitor: ["checkType", "extendsType", "trueType", "falseType"],
    fields: {
      checkType: (0, _utils.validateType)("TSType"),
      extendsType: (0, _utils.validateType)("TSType"),
      trueType: (0, _utils.validateType)("TSType"),
      falseType: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSInferType", {
    aliases: ["TSType"],
    visitor: ["typeParameter"],
    fields: {
      typeParameter: (0, _utils.validateType)("TSTypeParameter")
    }
  });
  (0, _utils.default)("TSParenthesizedType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSTypeOperator", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSIndexedAccessType", {
    aliases: ["TSType"],
    visitor: ["objectType", "indexType"],
    fields: {
      objectType: (0, _utils.validateType)("TSType"),
      indexType: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSMappedType", {
    aliases: ["TSType"],
    visitor: ["typeParameter", "typeAnnotation", "nameType"],
    fields: {
      readonly: (0, _utils.validateOptional)(bool),
      typeParameter: (0, _utils.validateType)("TSTypeParameter"),
      optional: (0, _utils.validateOptional)(bool),
      typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
      nameType: (0, _utils.validateOptionalType)("TSType")
    }
  });
  (0, _utils.default)("TSLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["literal"],
    fields: {
      literal: (0, _utils.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral"])
    }
  });
  (0, _utils.default)("TSExpressionWithTypeArguments", {
    aliases: ["TSType"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, _utils.validateType)("TSEntityName"),
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  (0, _utils.default)("TSInterfaceDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "extends", "body"],
    fields: {
      declare: (0, _utils.validateOptional)(bool),
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
      body: (0, _utils.validateType)("TSInterfaceBody")
    }
  });
  (0, _utils.default)("TSInterfaceBody", {
    visitor: ["body"],
    fields: {
      body: (0, _utils.validateArrayOfType)("TSTypeElement")
    }
  });
  (0, _utils.default)("TSTypeAliasDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "typeAnnotation"],
    fields: {
      declare: (0, _utils.validateOptional)(bool),
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSAsExpression", {
    aliases: ["Expression"],
    visitor: ["expression", "typeAnnotation"],
    fields: {
      expression: (0, _utils.validateType)("Expression"),
      typeAnnotation: (0, _utils.validateType)("TSType")
    }
  });
  (0, _utils.default)("TSTypeAssertion", {
    aliases: ["Expression"],
    visitor: ["typeAnnotation", "expression"],
    fields: {
      typeAnnotation: (0, _utils.validateType)("TSType"),
      expression: (0, _utils.validateType)("Expression")
    }
  });
  (0, _utils.default)("TSEnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "members"],
    fields: {
      declare: (0, _utils.validateOptional)(bool),
      const: (0, _utils.validateOptional)(bool),
      id: (0, _utils.validateType)("Identifier"),
      members: (0, _utils.validateArrayOfType)("TSEnumMember"),
      initializer: (0, _utils.validateOptionalType)("Expression")
    }
  });
  (0, _utils.default)("TSEnumMember", {
    visitor: ["id", "initializer"],
    fields: {
      id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
      initializer: (0, _utils.validateOptionalType)("Expression")
    }
  });
  (0, _utils.default)("TSModuleDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      declare: (0, _utils.validateOptional)(bool),
      global: (0, _utils.validateOptional)(bool),
      id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
      body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
    }
  });
  (0, _utils.default)("TSModuleBlock", {
    aliases: ["Scopable", "Block", "BlockParent"],
    visitor: ["body"],
    fields: {
      body: (0, _utils.validateArrayOfType)("Statement")
    }
  });
  (0, _utils.default)("TSImportType", {
    aliases: ["TSType"],
    visitor: ["argument", "qualifier", "typeParameters"],
    fields: {
      argument: (0, _utils.validateType)("StringLiteral"),
      qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  (0, _utils.default)("TSImportEqualsDeclaration", {
    aliases: ["Statement"],
    visitor: ["id", "moduleReference"],
    fields: {
      isExport: (0, _utils.validate)(bool),
      id: (0, _utils.validateType)("Identifier"),
      moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"])
    }
  });
  (0, _utils.default)("TSExternalModuleReference", {
    visitor: ["expression"],
    fields: {
      expression: (0, _utils.validateType)("StringLiteral")
    }
  });
  (0, _utils.default)("TSNonNullExpression", {
    aliases: ["Expression"],
    visitor: ["expression"],
    fields: {
      expression: (0, _utils.validateType)("Expression")
    }
  });
  (0, _utils.default)("TSExportAssignment", {
    aliases: ["Statement"],
    visitor: ["expression"],
    fields: {
      expression: (0, _utils.validateType)("Expression")
    }
  });
  (0, _utils.default)("TSNamespaceExportDeclaration", {
    aliases: ["Statement"],
    visitor: ["id"],
    fields: {
      id: (0, _utils.validateType)("Identifier")
    }
  });
  (0, _utils.default)("TSTypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: {
        validate: (0, _utils.assertNodeType)("TSType")
      }
    }
  });
  (0, _utils.default)("TSTypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
      }
    }
  });
  (0, _utils.default)("TSTypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
      }
    }
  });
  (0, _utils.default)("TSTypeParameter", {
    builder: ["constraint", "default", "name"],
    visitor: ["constraint", "default"],
    fields: {
      name: {
        validate: (0, _utils.assertValueType)("string")
      },
      constraint: {
        validate: (0, _utils.assertNodeType)("TSType"),
        optional: true
      },
      default: {
        validate: (0, _utils.assertNodeType)("TSType"),
        optional: true
      }
    }
  });
});

// public/pkgs/@babel/types@7.12.12/lib/definitions/index.js
var require_definitions = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "VISITOR_KEYS", {
    enumerable: true,
    get: function() {
      return _utils.VISITOR_KEYS;
    }
  });
  Object.defineProperty(exports, "ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return _utils.ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return _utils.FLIPPED_ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "NODE_FIELDS", {
    enumerable: true,
    get: function() {
      return _utils.NODE_FIELDS;
    }
  });
  Object.defineProperty(exports, "BUILDER_KEYS", {
    enumerable: true,
    get: function() {
      return _utils.BUILDER_KEYS;
    }
  });
  Object.defineProperty(exports, "DEPRECATED_KEYS", {
    enumerable: true,
    get: function() {
      return _utils.DEPRECATED_KEYS;
    }
  });
  Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
    enumerable: true,
    get: function() {
      return _utils.NODE_PARENT_VALIDATIONS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS", {
    enumerable: true,
    get: function() {
      return _placeholders.PLACEHOLDERS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
    enumerable: true,
    get: function() {
      return _placeholders.PLACEHOLDERS_ALIAS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
    enumerable: true,
    get: function() {
      return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
    }
  });
  exports.TYPES = void 0;
  var _toFastProperties = _interopRequireDefault(require_to_fast_properties());
  require_core();
  require_flow();
  require_jsx();
  require_misc();
  require_experimental();
  require_typescript();
  var _utils = require_utils();
  var _placeholders = require_placeholders();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  (0, _toFastProperties.default)(_utils.VISITOR_KEYS);
  (0, _toFastProperties.default)(_utils.ALIAS_KEYS);
  (0, _toFastProperties.default)(_utils.FLIPPED_ALIAS_KEYS);
  (0, _toFastProperties.default)(_utils.NODE_FIELDS);
  (0, _toFastProperties.default)(_utils.BUILDER_KEYS);
  (0, _toFastProperties.default)(_utils.DEPRECATED_KEYS);
  (0, _toFastProperties.default)(_placeholders.PLACEHOLDERS_ALIAS);
  (0, _toFastProperties.default)(_placeholders.PLACEHOLDERS_FLIPPED_ALIAS);
  var TYPES = Object.keys(_utils.VISITOR_KEYS).concat(Object.keys(_utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(_utils.DEPRECATED_KEYS));
  exports.TYPES = TYPES;
});

// public/pkgs/@babel/types@7.12.12/lib/builders/builder.js
var require_builder = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = builder;
  var _clone = _interopRequireDefault(require_clone());
  var _definitions = require_definitions();
  var _validate = _interopRequireDefault(require_validate());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function builder(type, ...args) {
    const keys = _definitions.BUILDER_KEYS[type];
    const countArgs = args.length;
    if (countArgs > keys.length) {
      throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
    }
    const node = {
      type
    };
    let i = 0;
    keys.forEach((key) => {
      const field = _definitions.NODE_FIELDS[type][key];
      let arg;
      if (i < countArgs)
        arg = args[i];
      if (arg === void 0)
        arg = (0, _clone.default)(field.default);
      node[key] = arg;
      i++;
    });
    for (const key of Object.keys(node)) {
      (0, _validate.default)(node, key, node[key]);
    }
    return node;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/generated/index.js
var require_generated2 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.arrayExpression = arrayExpression;
  exports.assignmentExpression = assignmentExpression;
  exports.binaryExpression = binaryExpression;
  exports.interpreterDirective = interpreterDirective;
  exports.directive = directive;
  exports.directiveLiteral = directiveLiteral;
  exports.blockStatement = blockStatement;
  exports.breakStatement = breakStatement;
  exports.callExpression = callExpression;
  exports.catchClause = catchClause;
  exports.conditionalExpression = conditionalExpression;
  exports.continueStatement = continueStatement;
  exports.debuggerStatement = debuggerStatement;
  exports.doWhileStatement = doWhileStatement;
  exports.emptyStatement = emptyStatement;
  exports.expressionStatement = expressionStatement;
  exports.file = file;
  exports.forInStatement = forInStatement;
  exports.forStatement = forStatement;
  exports.functionDeclaration = functionDeclaration;
  exports.functionExpression = functionExpression;
  exports.identifier = identifier;
  exports.ifStatement = ifStatement;
  exports.labeledStatement = labeledStatement;
  exports.stringLiteral = stringLiteral;
  exports.numericLiteral = numericLiteral;
  exports.nullLiteral = nullLiteral;
  exports.booleanLiteral = booleanLiteral;
  exports.regExpLiteral = regExpLiteral;
  exports.logicalExpression = logicalExpression;
  exports.memberExpression = memberExpression;
  exports.newExpression = newExpression;
  exports.program = program;
  exports.objectExpression = objectExpression;
  exports.objectMethod = objectMethod;
  exports.objectProperty = objectProperty;
  exports.restElement = restElement;
  exports.returnStatement = returnStatement;
  exports.sequenceExpression = sequenceExpression;
  exports.parenthesizedExpression = parenthesizedExpression;
  exports.switchCase = switchCase;
  exports.switchStatement = switchStatement;
  exports.thisExpression = thisExpression;
  exports.throwStatement = throwStatement;
  exports.tryStatement = tryStatement;
  exports.unaryExpression = unaryExpression;
  exports.updateExpression = updateExpression;
  exports.variableDeclaration = variableDeclaration;
  exports.variableDeclarator = variableDeclarator;
  exports.whileStatement = whileStatement;
  exports.withStatement = withStatement;
  exports.assignmentPattern = assignmentPattern;
  exports.arrayPattern = arrayPattern;
  exports.arrowFunctionExpression = arrowFunctionExpression;
  exports.classBody = classBody;
  exports.classExpression = classExpression;
  exports.classDeclaration = classDeclaration;
  exports.exportAllDeclaration = exportAllDeclaration;
  exports.exportDefaultDeclaration = exportDefaultDeclaration;
  exports.exportNamedDeclaration = exportNamedDeclaration;
  exports.exportSpecifier = exportSpecifier;
  exports.forOfStatement = forOfStatement;
  exports.importDeclaration = importDeclaration;
  exports.importDefaultSpecifier = importDefaultSpecifier;
  exports.importNamespaceSpecifier = importNamespaceSpecifier;
  exports.importSpecifier = importSpecifier;
  exports.metaProperty = metaProperty;
  exports.classMethod = classMethod;
  exports.objectPattern = objectPattern;
  exports.spreadElement = spreadElement;
  exports.super = _super;
  exports.taggedTemplateExpression = taggedTemplateExpression;
  exports.templateElement = templateElement;
  exports.templateLiteral = templateLiteral;
  exports.yieldExpression = yieldExpression;
  exports.awaitExpression = awaitExpression;
  exports.import = _import;
  exports.bigIntLiteral = bigIntLiteral;
  exports.exportNamespaceSpecifier = exportNamespaceSpecifier;
  exports.optionalMemberExpression = optionalMemberExpression;
  exports.optionalCallExpression = optionalCallExpression;
  exports.anyTypeAnnotation = anyTypeAnnotation;
  exports.arrayTypeAnnotation = arrayTypeAnnotation;
  exports.booleanTypeAnnotation = booleanTypeAnnotation;
  exports.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
  exports.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
  exports.classImplements = classImplements;
  exports.declareClass = declareClass;
  exports.declareFunction = declareFunction;
  exports.declareInterface = declareInterface;
  exports.declareModule = declareModule;
  exports.declareModuleExports = declareModuleExports;
  exports.declareTypeAlias = declareTypeAlias;
  exports.declareOpaqueType = declareOpaqueType;
  exports.declareVariable = declareVariable;
  exports.declareExportDeclaration = declareExportDeclaration;
  exports.declareExportAllDeclaration = declareExportAllDeclaration;
  exports.declaredPredicate = declaredPredicate;
  exports.existsTypeAnnotation = existsTypeAnnotation;
  exports.functionTypeAnnotation = functionTypeAnnotation;
  exports.functionTypeParam = functionTypeParam;
  exports.genericTypeAnnotation = genericTypeAnnotation;
  exports.inferredPredicate = inferredPredicate;
  exports.interfaceExtends = interfaceExtends;
  exports.interfaceDeclaration = interfaceDeclaration;
  exports.interfaceTypeAnnotation = interfaceTypeAnnotation;
  exports.intersectionTypeAnnotation = intersectionTypeAnnotation;
  exports.mixedTypeAnnotation = mixedTypeAnnotation;
  exports.emptyTypeAnnotation = emptyTypeAnnotation;
  exports.nullableTypeAnnotation = nullableTypeAnnotation;
  exports.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
  exports.numberTypeAnnotation = numberTypeAnnotation;
  exports.objectTypeAnnotation = objectTypeAnnotation;
  exports.objectTypeInternalSlot = objectTypeInternalSlot;
  exports.objectTypeCallProperty = objectTypeCallProperty;
  exports.objectTypeIndexer = objectTypeIndexer;
  exports.objectTypeProperty = objectTypeProperty;
  exports.objectTypeSpreadProperty = objectTypeSpreadProperty;
  exports.opaqueType = opaqueType;
  exports.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
  exports.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
  exports.stringTypeAnnotation = stringTypeAnnotation;
  exports.symbolTypeAnnotation = symbolTypeAnnotation;
  exports.thisTypeAnnotation = thisTypeAnnotation;
  exports.tupleTypeAnnotation = tupleTypeAnnotation;
  exports.typeofTypeAnnotation = typeofTypeAnnotation;
  exports.typeAlias = typeAlias;
  exports.typeAnnotation = typeAnnotation;
  exports.typeCastExpression = typeCastExpression;
  exports.typeParameter = typeParameter;
  exports.typeParameterDeclaration = typeParameterDeclaration;
  exports.typeParameterInstantiation = typeParameterInstantiation;
  exports.unionTypeAnnotation = unionTypeAnnotation;
  exports.variance = variance;
  exports.voidTypeAnnotation = voidTypeAnnotation;
  exports.enumDeclaration = enumDeclaration;
  exports.enumBooleanBody = enumBooleanBody;
  exports.enumNumberBody = enumNumberBody;
  exports.enumStringBody = enumStringBody;
  exports.enumSymbolBody = enumSymbolBody;
  exports.enumBooleanMember = enumBooleanMember;
  exports.enumNumberMember = enumNumberMember;
  exports.enumStringMember = enumStringMember;
  exports.enumDefaultedMember = enumDefaultedMember;
  exports.jSXAttribute = exports.jsxAttribute = jsxAttribute;
  exports.jSXClosingElement = exports.jsxClosingElement = jsxClosingElement;
  exports.jSXElement = exports.jsxElement = jsxElement;
  exports.jSXEmptyExpression = exports.jsxEmptyExpression = jsxEmptyExpression;
  exports.jSXExpressionContainer = exports.jsxExpressionContainer = jsxExpressionContainer;
  exports.jSXSpreadChild = exports.jsxSpreadChild = jsxSpreadChild;
  exports.jSXIdentifier = exports.jsxIdentifier = jsxIdentifier;
  exports.jSXMemberExpression = exports.jsxMemberExpression = jsxMemberExpression;
  exports.jSXNamespacedName = exports.jsxNamespacedName = jsxNamespacedName;
  exports.jSXOpeningElement = exports.jsxOpeningElement = jsxOpeningElement;
  exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = jsxSpreadAttribute;
  exports.jSXText = exports.jsxText = jsxText;
  exports.jSXFragment = exports.jsxFragment = jsxFragment;
  exports.jSXOpeningFragment = exports.jsxOpeningFragment = jsxOpeningFragment;
  exports.jSXClosingFragment = exports.jsxClosingFragment = jsxClosingFragment;
  exports.noop = noop;
  exports.placeholder = placeholder;
  exports.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
  exports.argumentPlaceholder = argumentPlaceholder;
  exports.bindExpression = bindExpression;
  exports.classProperty = classProperty;
  exports.pipelineTopicExpression = pipelineTopicExpression;
  exports.pipelineBareFunction = pipelineBareFunction;
  exports.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
  exports.classPrivateProperty = classPrivateProperty;
  exports.classPrivateMethod = classPrivateMethod;
  exports.importAttribute = importAttribute;
  exports.decorator = decorator;
  exports.doExpression = doExpression;
  exports.exportDefaultSpecifier = exportDefaultSpecifier;
  exports.privateName = privateName;
  exports.recordExpression = recordExpression;
  exports.tupleExpression = tupleExpression;
  exports.decimalLiteral = decimalLiteral;
  exports.staticBlock = staticBlock;
  exports.tSParameterProperty = exports.tsParameterProperty = tsParameterProperty;
  exports.tSDeclareFunction = exports.tsDeclareFunction = tsDeclareFunction;
  exports.tSDeclareMethod = exports.tsDeclareMethod = tsDeclareMethod;
  exports.tSQualifiedName = exports.tsQualifiedName = tsQualifiedName;
  exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
  exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
  exports.tSPropertySignature = exports.tsPropertySignature = tsPropertySignature;
  exports.tSMethodSignature = exports.tsMethodSignature = tsMethodSignature;
  exports.tSIndexSignature = exports.tsIndexSignature = tsIndexSignature;
  exports.tSAnyKeyword = exports.tsAnyKeyword = tsAnyKeyword;
  exports.tSBooleanKeyword = exports.tsBooleanKeyword = tsBooleanKeyword;
  exports.tSBigIntKeyword = exports.tsBigIntKeyword = tsBigIntKeyword;
  exports.tSIntrinsicKeyword = exports.tsIntrinsicKeyword = tsIntrinsicKeyword;
  exports.tSNeverKeyword = exports.tsNeverKeyword = tsNeverKeyword;
  exports.tSNullKeyword = exports.tsNullKeyword = tsNullKeyword;
  exports.tSNumberKeyword = exports.tsNumberKeyword = tsNumberKeyword;
  exports.tSObjectKeyword = exports.tsObjectKeyword = tsObjectKeyword;
  exports.tSStringKeyword = exports.tsStringKeyword = tsStringKeyword;
  exports.tSSymbolKeyword = exports.tsSymbolKeyword = tsSymbolKeyword;
  exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = tsUndefinedKeyword;
  exports.tSUnknownKeyword = exports.tsUnknownKeyword = tsUnknownKeyword;
  exports.tSVoidKeyword = exports.tsVoidKeyword = tsVoidKeyword;
  exports.tSThisType = exports.tsThisType = tsThisType;
  exports.tSFunctionType = exports.tsFunctionType = tsFunctionType;
  exports.tSConstructorType = exports.tsConstructorType = tsConstructorType;
  exports.tSTypeReference = exports.tsTypeReference = tsTypeReference;
  exports.tSTypePredicate = exports.tsTypePredicate = tsTypePredicate;
  exports.tSTypeQuery = exports.tsTypeQuery = tsTypeQuery;
  exports.tSTypeLiteral = exports.tsTypeLiteral = tsTypeLiteral;
  exports.tSArrayType = exports.tsArrayType = tsArrayType;
  exports.tSTupleType = exports.tsTupleType = tsTupleType;
  exports.tSOptionalType = exports.tsOptionalType = tsOptionalType;
  exports.tSRestType = exports.tsRestType = tsRestType;
  exports.tSNamedTupleMember = exports.tsNamedTupleMember = tsNamedTupleMember;
  exports.tSUnionType = exports.tsUnionType = tsUnionType;
  exports.tSIntersectionType = exports.tsIntersectionType = tsIntersectionType;
  exports.tSConditionalType = exports.tsConditionalType = tsConditionalType;
  exports.tSInferType = exports.tsInferType = tsInferType;
  exports.tSParenthesizedType = exports.tsParenthesizedType = tsParenthesizedType;
  exports.tSTypeOperator = exports.tsTypeOperator = tsTypeOperator;
  exports.tSIndexedAccessType = exports.tsIndexedAccessType = tsIndexedAccessType;
  exports.tSMappedType = exports.tsMappedType = tsMappedType;
  exports.tSLiteralType = exports.tsLiteralType = tsLiteralType;
  exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
  exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = tsInterfaceDeclaration;
  exports.tSInterfaceBody = exports.tsInterfaceBody = tsInterfaceBody;
  exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
  exports.tSAsExpression = exports.tsAsExpression = tsAsExpression;
  exports.tSTypeAssertion = exports.tsTypeAssertion = tsTypeAssertion;
  exports.tSEnumDeclaration = exports.tsEnumDeclaration = tsEnumDeclaration;
  exports.tSEnumMember = exports.tsEnumMember = tsEnumMember;
  exports.tSModuleDeclaration = exports.tsModuleDeclaration = tsModuleDeclaration;
  exports.tSModuleBlock = exports.tsModuleBlock = tsModuleBlock;
  exports.tSImportType = exports.tsImportType = tsImportType;
  exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
  exports.tSExternalModuleReference = exports.tsExternalModuleReference = tsExternalModuleReference;
  exports.tSNonNullExpression = exports.tsNonNullExpression = tsNonNullExpression;
  exports.tSExportAssignment = exports.tsExportAssignment = tsExportAssignment;
  exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
  exports.tSTypeAnnotation = exports.tsTypeAnnotation = tsTypeAnnotation;
  exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
  exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
  exports.tSTypeParameter = exports.tsTypeParameter = tsTypeParameter;
  exports.numberLiteral = NumberLiteral;
  exports.regexLiteral = RegexLiteral;
  exports.restProperty = RestProperty;
  exports.spreadProperty = SpreadProperty;
  var _builder = _interopRequireDefault(require_builder());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function arrayExpression(elements) {
    return (0, _builder.default)("ArrayExpression", ...arguments);
  }
  function assignmentExpression(operator, left, right) {
    return (0, _builder.default)("AssignmentExpression", ...arguments);
  }
  function binaryExpression(operator, left, right) {
    return (0, _builder.default)("BinaryExpression", ...arguments);
  }
  function interpreterDirective(value) {
    return (0, _builder.default)("InterpreterDirective", ...arguments);
  }
  function directive(value) {
    return (0, _builder.default)("Directive", ...arguments);
  }
  function directiveLiteral(value) {
    return (0, _builder.default)("DirectiveLiteral", ...arguments);
  }
  function blockStatement(body, directives) {
    return (0, _builder.default)("BlockStatement", ...arguments);
  }
  function breakStatement(label) {
    return (0, _builder.default)("BreakStatement", ...arguments);
  }
  function callExpression(callee, _arguments) {
    return (0, _builder.default)("CallExpression", ...arguments);
  }
  function catchClause(param, body) {
    return (0, _builder.default)("CatchClause", ...arguments);
  }
  function conditionalExpression(test, consequent, alternate) {
    return (0, _builder.default)("ConditionalExpression", ...arguments);
  }
  function continueStatement(label) {
    return (0, _builder.default)("ContinueStatement", ...arguments);
  }
  function debuggerStatement() {
    return (0, _builder.default)("DebuggerStatement", ...arguments);
  }
  function doWhileStatement(test, body) {
    return (0, _builder.default)("DoWhileStatement", ...arguments);
  }
  function emptyStatement() {
    return (0, _builder.default)("EmptyStatement", ...arguments);
  }
  function expressionStatement(expression) {
    return (0, _builder.default)("ExpressionStatement", ...arguments);
  }
  function file(program2, comments, tokens) {
    return (0, _builder.default)("File", ...arguments);
  }
  function forInStatement(left, right, body) {
    return (0, _builder.default)("ForInStatement", ...arguments);
  }
  function forStatement(init, test, update, body) {
    return (0, _builder.default)("ForStatement", ...arguments);
  }
  function functionDeclaration(id, params, body, generator, async) {
    return (0, _builder.default)("FunctionDeclaration", ...arguments);
  }
  function functionExpression(id, params, body, generator, async) {
    return (0, _builder.default)("FunctionExpression", ...arguments);
  }
  function identifier(name) {
    return (0, _builder.default)("Identifier", ...arguments);
  }
  function ifStatement(test, consequent, alternate) {
    return (0, _builder.default)("IfStatement", ...arguments);
  }
  function labeledStatement(label, body) {
    return (0, _builder.default)("LabeledStatement", ...arguments);
  }
  function stringLiteral(value) {
    return (0, _builder.default)("StringLiteral", ...arguments);
  }
  function numericLiteral(value) {
    return (0, _builder.default)("NumericLiteral", ...arguments);
  }
  function nullLiteral() {
    return (0, _builder.default)("NullLiteral", ...arguments);
  }
  function booleanLiteral(value) {
    return (0, _builder.default)("BooleanLiteral", ...arguments);
  }
  function regExpLiteral(pattern, flags) {
    return (0, _builder.default)("RegExpLiteral", ...arguments);
  }
  function logicalExpression(operator, left, right) {
    return (0, _builder.default)("LogicalExpression", ...arguments);
  }
  function memberExpression(object, property, computed, optional) {
    return (0, _builder.default)("MemberExpression", ...arguments);
  }
  function newExpression(callee, _arguments) {
    return (0, _builder.default)("NewExpression", ...arguments);
  }
  function program(body, directives, sourceType, interpreter) {
    return (0, _builder.default)("Program", ...arguments);
  }
  function objectExpression(properties) {
    return (0, _builder.default)("ObjectExpression", ...arguments);
  }
  function objectMethod(kind, key, params, body, computed, generator, async) {
    return (0, _builder.default)("ObjectMethod", ...arguments);
  }
  function objectProperty(key, value, computed, shorthand, decorators) {
    return (0, _builder.default)("ObjectProperty", ...arguments);
  }
  function restElement(argument) {
    return (0, _builder.default)("RestElement", ...arguments);
  }
  function returnStatement(argument) {
    return (0, _builder.default)("ReturnStatement", ...arguments);
  }
  function sequenceExpression(expressions) {
    return (0, _builder.default)("SequenceExpression", ...arguments);
  }
  function parenthesizedExpression(expression) {
    return (0, _builder.default)("ParenthesizedExpression", ...arguments);
  }
  function switchCase(test, consequent) {
    return (0, _builder.default)("SwitchCase", ...arguments);
  }
  function switchStatement(discriminant, cases) {
    return (0, _builder.default)("SwitchStatement", ...arguments);
  }
  function thisExpression() {
    return (0, _builder.default)("ThisExpression", ...arguments);
  }
  function throwStatement(argument) {
    return (0, _builder.default)("ThrowStatement", ...arguments);
  }
  function tryStatement(block, handler, finalizer) {
    return (0, _builder.default)("TryStatement", ...arguments);
  }
  function unaryExpression(operator, argument, prefix) {
    return (0, _builder.default)("UnaryExpression", ...arguments);
  }
  function updateExpression(operator, argument, prefix) {
    return (0, _builder.default)("UpdateExpression", ...arguments);
  }
  function variableDeclaration(kind, declarations) {
    return (0, _builder.default)("VariableDeclaration", ...arguments);
  }
  function variableDeclarator(id, init) {
    return (0, _builder.default)("VariableDeclarator", ...arguments);
  }
  function whileStatement(test, body) {
    return (0, _builder.default)("WhileStatement", ...arguments);
  }
  function withStatement(object, body) {
    return (0, _builder.default)("WithStatement", ...arguments);
  }
  function assignmentPattern(left, right) {
    return (0, _builder.default)("AssignmentPattern", ...arguments);
  }
  function arrayPattern(elements) {
    return (0, _builder.default)("ArrayPattern", ...arguments);
  }
  function arrowFunctionExpression(params, body, async) {
    return (0, _builder.default)("ArrowFunctionExpression", ...arguments);
  }
  function classBody(body) {
    return (0, _builder.default)("ClassBody", ...arguments);
  }
  function classExpression(id, superClass, body, decorators) {
    return (0, _builder.default)("ClassExpression", ...arguments);
  }
  function classDeclaration(id, superClass, body, decorators) {
    return (0, _builder.default)("ClassDeclaration", ...arguments);
  }
  function exportAllDeclaration(source) {
    return (0, _builder.default)("ExportAllDeclaration", ...arguments);
  }
  function exportDefaultDeclaration(declaration) {
    return (0, _builder.default)("ExportDefaultDeclaration", ...arguments);
  }
  function exportNamedDeclaration(declaration, specifiers, source) {
    return (0, _builder.default)("ExportNamedDeclaration", ...arguments);
  }
  function exportSpecifier(local, exported) {
    return (0, _builder.default)("ExportSpecifier", ...arguments);
  }
  function forOfStatement(left, right, body, _await) {
    return (0, _builder.default)("ForOfStatement", ...arguments);
  }
  function importDeclaration(specifiers, source) {
    return (0, _builder.default)("ImportDeclaration", ...arguments);
  }
  function importDefaultSpecifier(local) {
    return (0, _builder.default)("ImportDefaultSpecifier", ...arguments);
  }
  function importNamespaceSpecifier(local) {
    return (0, _builder.default)("ImportNamespaceSpecifier", ...arguments);
  }
  function importSpecifier(local, imported) {
    return (0, _builder.default)("ImportSpecifier", ...arguments);
  }
  function metaProperty(meta, property) {
    return (0, _builder.default)("MetaProperty", ...arguments);
  }
  function classMethod(kind, key, params, body, computed, _static, generator, async) {
    return (0, _builder.default)("ClassMethod", ...arguments);
  }
  function objectPattern(properties) {
    return (0, _builder.default)("ObjectPattern", ...arguments);
  }
  function spreadElement(argument) {
    return (0, _builder.default)("SpreadElement", ...arguments);
  }
  function _super() {
    return (0, _builder.default)("Super", ...arguments);
  }
  function taggedTemplateExpression(tag, quasi) {
    return (0, _builder.default)("TaggedTemplateExpression", ...arguments);
  }
  function templateElement(value, tail) {
    return (0, _builder.default)("TemplateElement", ...arguments);
  }
  function templateLiteral(quasis, expressions) {
    return (0, _builder.default)("TemplateLiteral", ...arguments);
  }
  function yieldExpression(argument, delegate) {
    return (0, _builder.default)("YieldExpression", ...arguments);
  }
  function awaitExpression(argument) {
    return (0, _builder.default)("AwaitExpression", ...arguments);
  }
  function _import() {
    return (0, _builder.default)("Import", ...arguments);
  }
  function bigIntLiteral(value) {
    return (0, _builder.default)("BigIntLiteral", ...arguments);
  }
  function exportNamespaceSpecifier(exported) {
    return (0, _builder.default)("ExportNamespaceSpecifier", ...arguments);
  }
  function optionalMemberExpression(object, property, computed, optional) {
    return (0, _builder.default)("OptionalMemberExpression", ...arguments);
  }
  function optionalCallExpression(callee, _arguments, optional) {
    return (0, _builder.default)("OptionalCallExpression", ...arguments);
  }
  function anyTypeAnnotation() {
    return (0, _builder.default)("AnyTypeAnnotation", ...arguments);
  }
  function arrayTypeAnnotation(elementType) {
    return (0, _builder.default)("ArrayTypeAnnotation", ...arguments);
  }
  function booleanTypeAnnotation() {
    return (0, _builder.default)("BooleanTypeAnnotation", ...arguments);
  }
  function booleanLiteralTypeAnnotation(value) {
    return (0, _builder.default)("BooleanLiteralTypeAnnotation", ...arguments);
  }
  function nullLiteralTypeAnnotation() {
    return (0, _builder.default)("NullLiteralTypeAnnotation", ...arguments);
  }
  function classImplements(id, typeParameters) {
    return (0, _builder.default)("ClassImplements", ...arguments);
  }
  function declareClass(id, typeParameters, _extends, body) {
    return (0, _builder.default)("DeclareClass", ...arguments);
  }
  function declareFunction(id) {
    return (0, _builder.default)("DeclareFunction", ...arguments);
  }
  function declareInterface(id, typeParameters, _extends, body) {
    return (0, _builder.default)("DeclareInterface", ...arguments);
  }
  function declareModule(id, body, kind) {
    return (0, _builder.default)("DeclareModule", ...arguments);
  }
  function declareModuleExports(typeAnnotation2) {
    return (0, _builder.default)("DeclareModuleExports", ...arguments);
  }
  function declareTypeAlias(id, typeParameters, right) {
    return (0, _builder.default)("DeclareTypeAlias", ...arguments);
  }
  function declareOpaqueType(id, typeParameters, supertype) {
    return (0, _builder.default)("DeclareOpaqueType", ...arguments);
  }
  function declareVariable(id) {
    return (0, _builder.default)("DeclareVariable", ...arguments);
  }
  function declareExportDeclaration(declaration, specifiers, source) {
    return (0, _builder.default)("DeclareExportDeclaration", ...arguments);
  }
  function declareExportAllDeclaration(source) {
    return (0, _builder.default)("DeclareExportAllDeclaration", ...arguments);
  }
  function declaredPredicate(value) {
    return (0, _builder.default)("DeclaredPredicate", ...arguments);
  }
  function existsTypeAnnotation() {
    return (0, _builder.default)("ExistsTypeAnnotation", ...arguments);
  }
  function functionTypeAnnotation(typeParameters, params, rest, returnType) {
    return (0, _builder.default)("FunctionTypeAnnotation", ...arguments);
  }
  function functionTypeParam(name, typeAnnotation2) {
    return (0, _builder.default)("FunctionTypeParam", ...arguments);
  }
  function genericTypeAnnotation(id, typeParameters) {
    return (0, _builder.default)("GenericTypeAnnotation", ...arguments);
  }
  function inferredPredicate() {
    return (0, _builder.default)("InferredPredicate", ...arguments);
  }
  function interfaceExtends(id, typeParameters) {
    return (0, _builder.default)("InterfaceExtends", ...arguments);
  }
  function interfaceDeclaration(id, typeParameters, _extends, body) {
    return (0, _builder.default)("InterfaceDeclaration", ...arguments);
  }
  function interfaceTypeAnnotation(_extends, body) {
    return (0, _builder.default)("InterfaceTypeAnnotation", ...arguments);
  }
  function intersectionTypeAnnotation(types) {
    return (0, _builder.default)("IntersectionTypeAnnotation", ...arguments);
  }
  function mixedTypeAnnotation() {
    return (0, _builder.default)("MixedTypeAnnotation", ...arguments);
  }
  function emptyTypeAnnotation() {
    return (0, _builder.default)("EmptyTypeAnnotation", ...arguments);
  }
  function nullableTypeAnnotation(typeAnnotation2) {
    return (0, _builder.default)("NullableTypeAnnotation", ...arguments);
  }
  function numberLiteralTypeAnnotation(value) {
    return (0, _builder.default)("NumberLiteralTypeAnnotation", ...arguments);
  }
  function numberTypeAnnotation() {
    return (0, _builder.default)("NumberTypeAnnotation", ...arguments);
  }
  function objectTypeAnnotation(properties, indexers, callProperties, internalSlots, exact) {
    return (0, _builder.default)("ObjectTypeAnnotation", ...arguments);
  }
  function objectTypeInternalSlot(id, value, optional, _static, method) {
    return (0, _builder.default)("ObjectTypeInternalSlot", ...arguments);
  }
  function objectTypeCallProperty(value) {
    return (0, _builder.default)("ObjectTypeCallProperty", ...arguments);
  }
  function objectTypeIndexer(id, key, value, variance2) {
    return (0, _builder.default)("ObjectTypeIndexer", ...arguments);
  }
  function objectTypeProperty(key, value, variance2) {
    return (0, _builder.default)("ObjectTypeProperty", ...arguments);
  }
  function objectTypeSpreadProperty(argument) {
    return (0, _builder.default)("ObjectTypeSpreadProperty", ...arguments);
  }
  function opaqueType(id, typeParameters, supertype, impltype) {
    return (0, _builder.default)("OpaqueType", ...arguments);
  }
  function qualifiedTypeIdentifier(id, qualification) {
    return (0, _builder.default)("QualifiedTypeIdentifier", ...arguments);
  }
  function stringLiteralTypeAnnotation(value) {
    return (0, _builder.default)("StringLiteralTypeAnnotation", ...arguments);
  }
  function stringTypeAnnotation() {
    return (0, _builder.default)("StringTypeAnnotation", ...arguments);
  }
  function symbolTypeAnnotation() {
    return (0, _builder.default)("SymbolTypeAnnotation", ...arguments);
  }
  function thisTypeAnnotation() {
    return (0, _builder.default)("ThisTypeAnnotation", ...arguments);
  }
  function tupleTypeAnnotation(types) {
    return (0, _builder.default)("TupleTypeAnnotation", ...arguments);
  }
  function typeofTypeAnnotation(argument) {
    return (0, _builder.default)("TypeofTypeAnnotation", ...arguments);
  }
  function typeAlias(id, typeParameters, right) {
    return (0, _builder.default)("TypeAlias", ...arguments);
  }
  function typeAnnotation(typeAnnotation2) {
    return (0, _builder.default)("TypeAnnotation", ...arguments);
  }
  function typeCastExpression(expression, typeAnnotation2) {
    return (0, _builder.default)("TypeCastExpression", ...arguments);
  }
  function typeParameter(bound, _default, variance2) {
    return (0, _builder.default)("TypeParameter", ...arguments);
  }
  function typeParameterDeclaration(params) {
    return (0, _builder.default)("TypeParameterDeclaration", ...arguments);
  }
  function typeParameterInstantiation(params) {
    return (0, _builder.default)("TypeParameterInstantiation", ...arguments);
  }
  function unionTypeAnnotation(types) {
    return (0, _builder.default)("UnionTypeAnnotation", ...arguments);
  }
  function variance(kind) {
    return (0, _builder.default)("Variance", ...arguments);
  }
  function voidTypeAnnotation() {
    return (0, _builder.default)("VoidTypeAnnotation", ...arguments);
  }
  function enumDeclaration(id, body) {
    return (0, _builder.default)("EnumDeclaration", ...arguments);
  }
  function enumBooleanBody(members) {
    return (0, _builder.default)("EnumBooleanBody", ...arguments);
  }
  function enumNumberBody(members) {
    return (0, _builder.default)("EnumNumberBody", ...arguments);
  }
  function enumStringBody(members) {
    return (0, _builder.default)("EnumStringBody", ...arguments);
  }
  function enumSymbolBody(members) {
    return (0, _builder.default)("EnumSymbolBody", ...arguments);
  }
  function enumBooleanMember(id) {
    return (0, _builder.default)("EnumBooleanMember", ...arguments);
  }
  function enumNumberMember(id, init) {
    return (0, _builder.default)("EnumNumberMember", ...arguments);
  }
  function enumStringMember(id, init) {
    return (0, _builder.default)("EnumStringMember", ...arguments);
  }
  function enumDefaultedMember(id) {
    return (0, _builder.default)("EnumDefaultedMember", ...arguments);
  }
  function jsxAttribute(name, value) {
    return (0, _builder.default)("JSXAttribute", ...arguments);
  }
  function jsxClosingElement(name) {
    return (0, _builder.default)("JSXClosingElement", ...arguments);
  }
  function jsxElement(openingElement, closingElement, children, selfClosing) {
    return (0, _builder.default)("JSXElement", ...arguments);
  }
  function jsxEmptyExpression() {
    return (0, _builder.default)("JSXEmptyExpression", ...arguments);
  }
  function jsxExpressionContainer(expression) {
    return (0, _builder.default)("JSXExpressionContainer", ...arguments);
  }
  function jsxSpreadChild(expression) {
    return (0, _builder.default)("JSXSpreadChild", ...arguments);
  }
  function jsxIdentifier(name) {
    return (0, _builder.default)("JSXIdentifier", ...arguments);
  }
  function jsxMemberExpression(object, property) {
    return (0, _builder.default)("JSXMemberExpression", ...arguments);
  }
  function jsxNamespacedName(namespace, name) {
    return (0, _builder.default)("JSXNamespacedName", ...arguments);
  }
  function jsxOpeningElement(name, attributes, selfClosing) {
    return (0, _builder.default)("JSXOpeningElement", ...arguments);
  }
  function jsxSpreadAttribute(argument) {
    return (0, _builder.default)("JSXSpreadAttribute", ...arguments);
  }
  function jsxText(value) {
    return (0, _builder.default)("JSXText", ...arguments);
  }
  function jsxFragment(openingFragment, closingFragment, children) {
    return (0, _builder.default)("JSXFragment", ...arguments);
  }
  function jsxOpeningFragment() {
    return (0, _builder.default)("JSXOpeningFragment", ...arguments);
  }
  function jsxClosingFragment() {
    return (0, _builder.default)("JSXClosingFragment", ...arguments);
  }
  function noop() {
    return (0, _builder.default)("Noop", ...arguments);
  }
  function placeholder(expectedNode, name) {
    return (0, _builder.default)("Placeholder", ...arguments);
  }
  function v8IntrinsicIdentifier(name) {
    return (0, _builder.default)("V8IntrinsicIdentifier", ...arguments);
  }
  function argumentPlaceholder() {
    return (0, _builder.default)("ArgumentPlaceholder", ...arguments);
  }
  function bindExpression(object, callee) {
    return (0, _builder.default)("BindExpression", ...arguments);
  }
  function classProperty(key, value, typeAnnotation2, decorators, computed, _static) {
    return (0, _builder.default)("ClassProperty", ...arguments);
  }
  function pipelineTopicExpression(expression) {
    return (0, _builder.default)("PipelineTopicExpression", ...arguments);
  }
  function pipelineBareFunction(callee) {
    return (0, _builder.default)("PipelineBareFunction", ...arguments);
  }
  function pipelinePrimaryTopicReference() {
    return (0, _builder.default)("PipelinePrimaryTopicReference", ...arguments);
  }
  function classPrivateProperty(key, value, decorators, _static) {
    return (0, _builder.default)("ClassPrivateProperty", ...arguments);
  }
  function classPrivateMethod(kind, key, params, body, _static) {
    return (0, _builder.default)("ClassPrivateMethod", ...arguments);
  }
  function importAttribute(key, value) {
    return (0, _builder.default)("ImportAttribute", ...arguments);
  }
  function decorator(expression) {
    return (0, _builder.default)("Decorator", ...arguments);
  }
  function doExpression(body) {
    return (0, _builder.default)("DoExpression", ...arguments);
  }
  function exportDefaultSpecifier(exported) {
    return (0, _builder.default)("ExportDefaultSpecifier", ...arguments);
  }
  function privateName(id) {
    return (0, _builder.default)("PrivateName", ...arguments);
  }
  function recordExpression(properties) {
    return (0, _builder.default)("RecordExpression", ...arguments);
  }
  function tupleExpression(elements) {
    return (0, _builder.default)("TupleExpression", ...arguments);
  }
  function decimalLiteral(value) {
    return (0, _builder.default)("DecimalLiteral", ...arguments);
  }
  function staticBlock(body) {
    return (0, _builder.default)("StaticBlock", ...arguments);
  }
  function tsParameterProperty(parameter) {
    return (0, _builder.default)("TSParameterProperty", ...arguments);
  }
  function tsDeclareFunction(id, typeParameters, params, returnType) {
    return (0, _builder.default)("TSDeclareFunction", ...arguments);
  }
  function tsDeclareMethod(decorators, key, typeParameters, params, returnType) {
    return (0, _builder.default)("TSDeclareMethod", ...arguments);
  }
  function tsQualifiedName(left, right) {
    return (0, _builder.default)("TSQualifiedName", ...arguments);
  }
  function tsCallSignatureDeclaration(typeParameters, parameters, typeAnnotation2) {
    return (0, _builder.default)("TSCallSignatureDeclaration", ...arguments);
  }
  function tsConstructSignatureDeclaration(typeParameters, parameters, typeAnnotation2) {
    return (0, _builder.default)("TSConstructSignatureDeclaration", ...arguments);
  }
  function tsPropertySignature(key, typeAnnotation2, initializer) {
    return (0, _builder.default)("TSPropertySignature", ...arguments);
  }
  function tsMethodSignature(key, typeParameters, parameters, typeAnnotation2) {
    return (0, _builder.default)("TSMethodSignature", ...arguments);
  }
  function tsIndexSignature(parameters, typeAnnotation2) {
    return (0, _builder.default)("TSIndexSignature", ...arguments);
  }
  function tsAnyKeyword() {
    return (0, _builder.default)("TSAnyKeyword", ...arguments);
  }
  function tsBooleanKeyword() {
    return (0, _builder.default)("TSBooleanKeyword", ...arguments);
  }
  function tsBigIntKeyword() {
    return (0, _builder.default)("TSBigIntKeyword", ...arguments);
  }
  function tsIntrinsicKeyword() {
    return (0, _builder.default)("TSIntrinsicKeyword", ...arguments);
  }
  function tsNeverKeyword() {
    return (0, _builder.default)("TSNeverKeyword", ...arguments);
  }
  function tsNullKeyword() {
    return (0, _builder.default)("TSNullKeyword", ...arguments);
  }
  function tsNumberKeyword() {
    return (0, _builder.default)("TSNumberKeyword", ...arguments);
  }
  function tsObjectKeyword() {
    return (0, _builder.default)("TSObjectKeyword", ...arguments);
  }
  function tsStringKeyword() {
    return (0, _builder.default)("TSStringKeyword", ...arguments);
  }
  function tsSymbolKeyword() {
    return (0, _builder.default)("TSSymbolKeyword", ...arguments);
  }
  function tsUndefinedKeyword() {
    return (0, _builder.default)("TSUndefinedKeyword", ...arguments);
  }
  function tsUnknownKeyword() {
    return (0, _builder.default)("TSUnknownKeyword", ...arguments);
  }
  function tsVoidKeyword() {
    return (0, _builder.default)("TSVoidKeyword", ...arguments);
  }
  function tsThisType() {
    return (0, _builder.default)("TSThisType", ...arguments);
  }
  function tsFunctionType(typeParameters, parameters, typeAnnotation2) {
    return (0, _builder.default)("TSFunctionType", ...arguments);
  }
  function tsConstructorType(typeParameters, parameters, typeAnnotation2) {
    return (0, _builder.default)("TSConstructorType", ...arguments);
  }
  function tsTypeReference(typeName, typeParameters) {
    return (0, _builder.default)("TSTypeReference", ...arguments);
  }
  function tsTypePredicate(parameterName, typeAnnotation2, asserts) {
    return (0, _builder.default)("TSTypePredicate", ...arguments);
  }
  function tsTypeQuery(exprName) {
    return (0, _builder.default)("TSTypeQuery", ...arguments);
  }
  function tsTypeLiteral(members) {
    return (0, _builder.default)("TSTypeLiteral", ...arguments);
  }
  function tsArrayType(elementType) {
    return (0, _builder.default)("TSArrayType", ...arguments);
  }
  function tsTupleType(elementTypes) {
    return (0, _builder.default)("TSTupleType", ...arguments);
  }
  function tsOptionalType(typeAnnotation2) {
    return (0, _builder.default)("TSOptionalType", ...arguments);
  }
  function tsRestType(typeAnnotation2) {
    return (0, _builder.default)("TSRestType", ...arguments);
  }
  function tsNamedTupleMember(label, elementType, optional) {
    return (0, _builder.default)("TSNamedTupleMember", ...arguments);
  }
  function tsUnionType(types) {
    return (0, _builder.default)("TSUnionType", ...arguments);
  }
  function tsIntersectionType(types) {
    return (0, _builder.default)("TSIntersectionType", ...arguments);
  }
  function tsConditionalType(checkType, extendsType, trueType, falseType) {
    return (0, _builder.default)("TSConditionalType", ...arguments);
  }
  function tsInferType(typeParameter2) {
    return (0, _builder.default)("TSInferType", ...arguments);
  }
  function tsParenthesizedType(typeAnnotation2) {
    return (0, _builder.default)("TSParenthesizedType", ...arguments);
  }
  function tsTypeOperator(typeAnnotation2) {
    return (0, _builder.default)("TSTypeOperator", ...arguments);
  }
  function tsIndexedAccessType(objectType, indexType) {
    return (0, _builder.default)("TSIndexedAccessType", ...arguments);
  }
  function tsMappedType(typeParameter2, typeAnnotation2, nameType) {
    return (0, _builder.default)("TSMappedType", ...arguments);
  }
  function tsLiteralType(literal) {
    return (0, _builder.default)("TSLiteralType", ...arguments);
  }
  function tsExpressionWithTypeArguments(expression, typeParameters) {
    return (0, _builder.default)("TSExpressionWithTypeArguments", ...arguments);
  }
  function tsInterfaceDeclaration(id, typeParameters, _extends, body) {
    return (0, _builder.default)("TSInterfaceDeclaration", ...arguments);
  }
  function tsInterfaceBody(body) {
    return (0, _builder.default)("TSInterfaceBody", ...arguments);
  }
  function tsTypeAliasDeclaration(id, typeParameters, typeAnnotation2) {
    return (0, _builder.default)("TSTypeAliasDeclaration", ...arguments);
  }
  function tsAsExpression(expression, typeAnnotation2) {
    return (0, _builder.default)("TSAsExpression", ...arguments);
  }
  function tsTypeAssertion(typeAnnotation2, expression) {
    return (0, _builder.default)("TSTypeAssertion", ...arguments);
  }
  function tsEnumDeclaration(id, members) {
    return (0, _builder.default)("TSEnumDeclaration", ...arguments);
  }
  function tsEnumMember(id, initializer) {
    return (0, _builder.default)("TSEnumMember", ...arguments);
  }
  function tsModuleDeclaration(id, body) {
    return (0, _builder.default)("TSModuleDeclaration", ...arguments);
  }
  function tsModuleBlock(body) {
    return (0, _builder.default)("TSModuleBlock", ...arguments);
  }
  function tsImportType(argument, qualifier, typeParameters) {
    return (0, _builder.default)("TSImportType", ...arguments);
  }
  function tsImportEqualsDeclaration(id, moduleReference) {
    return (0, _builder.default)("TSImportEqualsDeclaration", ...arguments);
  }
  function tsExternalModuleReference(expression) {
    return (0, _builder.default)("TSExternalModuleReference", ...arguments);
  }
  function tsNonNullExpression(expression) {
    return (0, _builder.default)("TSNonNullExpression", ...arguments);
  }
  function tsExportAssignment(expression) {
    return (0, _builder.default)("TSExportAssignment", ...arguments);
  }
  function tsNamespaceExportDeclaration(id) {
    return (0, _builder.default)("TSNamespaceExportDeclaration", ...arguments);
  }
  function tsTypeAnnotation(typeAnnotation2) {
    return (0, _builder.default)("TSTypeAnnotation", ...arguments);
  }
  function tsTypeParameterInstantiation(params) {
    return (0, _builder.default)("TSTypeParameterInstantiation", ...arguments);
  }
  function tsTypeParameterDeclaration(params) {
    return (0, _builder.default)("TSTypeParameterDeclaration", ...arguments);
  }
  function tsTypeParameter(constraint, _default, name) {
    return (0, _builder.default)("TSTypeParameter", ...arguments);
  }
  function NumberLiteral(...args) {
    console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
    return (0, _builder.default)("NumberLiteral", ...args);
  }
  function RegexLiteral(...args) {
    console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
    return (0, _builder.default)("RegexLiteral", ...args);
  }
  function RestProperty(...args) {
    console.trace("The node type RestProperty has been renamed to RestElement");
    return (0, _builder.default)("RestProperty", ...args);
  }
  function SpreadProperty(...args) {
    console.trace("The node type SpreadProperty has been renamed to SpreadElement");
    return (0, _builder.default)("SpreadProperty", ...args);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/utils/react/cleanJSXElementLiteralChild.js
var require_cleanJSXElementLiteralChild = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cleanJSXElementLiteralChild;
  var _generated = require_generated2();
  function cleanJSXElementLiteralChild(child, args) {
    const lines = child.value.split(/\r\n|\n|\r/);
    let lastNonEmptyLine = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/[^ \t]/)) {
        lastNonEmptyLine = i;
      }
    }
    let str = "";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isFirstLine = i === 0;
      const isLastLine = i === lines.length - 1;
      const isLastNonEmptyLine = i === lastNonEmptyLine;
      let trimmedLine = line.replace(/\t/g, " ");
      if (!isFirstLine) {
        trimmedLine = trimmedLine.replace(/^[ ]+/, "");
      }
      if (!isLastLine) {
        trimmedLine = trimmedLine.replace(/[ ]+$/, "");
      }
      if (trimmedLine) {
        if (!isLastNonEmptyLine) {
          trimmedLine += " ";
        }
        str += trimmedLine;
      }
    }
    if (str)
      args.push((0, _generated.stringLiteral)(str));
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/react/buildChildren.js
var require_buildChildren = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildChildren;
  var _generated = require_generated();
  var _cleanJSXElementLiteralChild = _interopRequireDefault(require_cleanJSXElementLiteralChild());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function buildChildren(node) {
    const elements = [];
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      if ((0, _generated.isJSXText)(child)) {
        (0, _cleanJSXElementLiteralChild.default)(child, elements);
        continue;
      }
      if ((0, _generated.isJSXExpressionContainer)(child))
        child = child.expression;
      if ((0, _generated.isJSXEmptyExpression)(child))
        continue;
      elements.push(child);
    }
    return elements;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isNode.js
var require_isNode = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isNode;
  var _definitions = require_definitions();
  function isNode(node) {
    return !!(node && _definitions.VISITOR_KEYS[node.type]);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/asserts/assertNode.js
var require_assertNode = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assertNode;
  var _isNode = _interopRequireDefault(require_isNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function assertNode(node) {
    if (!(0, _isNode.default)(node)) {
      var _node$type;
      const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
      throw new TypeError(`Not a valid node of type "${type}"`);
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/asserts/generated/index.js
var require_generated3 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.assertArrayExpression = assertArrayExpression;
  exports.assertAssignmentExpression = assertAssignmentExpression;
  exports.assertBinaryExpression = assertBinaryExpression;
  exports.assertInterpreterDirective = assertInterpreterDirective;
  exports.assertDirective = assertDirective;
  exports.assertDirectiveLiteral = assertDirectiveLiteral;
  exports.assertBlockStatement = assertBlockStatement;
  exports.assertBreakStatement = assertBreakStatement;
  exports.assertCallExpression = assertCallExpression;
  exports.assertCatchClause = assertCatchClause;
  exports.assertConditionalExpression = assertConditionalExpression;
  exports.assertContinueStatement = assertContinueStatement;
  exports.assertDebuggerStatement = assertDebuggerStatement;
  exports.assertDoWhileStatement = assertDoWhileStatement;
  exports.assertEmptyStatement = assertEmptyStatement;
  exports.assertExpressionStatement = assertExpressionStatement;
  exports.assertFile = assertFile;
  exports.assertForInStatement = assertForInStatement;
  exports.assertForStatement = assertForStatement;
  exports.assertFunctionDeclaration = assertFunctionDeclaration;
  exports.assertFunctionExpression = assertFunctionExpression;
  exports.assertIdentifier = assertIdentifier;
  exports.assertIfStatement = assertIfStatement;
  exports.assertLabeledStatement = assertLabeledStatement;
  exports.assertStringLiteral = assertStringLiteral;
  exports.assertNumericLiteral = assertNumericLiteral;
  exports.assertNullLiteral = assertNullLiteral;
  exports.assertBooleanLiteral = assertBooleanLiteral;
  exports.assertRegExpLiteral = assertRegExpLiteral;
  exports.assertLogicalExpression = assertLogicalExpression;
  exports.assertMemberExpression = assertMemberExpression;
  exports.assertNewExpression = assertNewExpression;
  exports.assertProgram = assertProgram;
  exports.assertObjectExpression = assertObjectExpression;
  exports.assertObjectMethod = assertObjectMethod;
  exports.assertObjectProperty = assertObjectProperty;
  exports.assertRestElement = assertRestElement;
  exports.assertReturnStatement = assertReturnStatement;
  exports.assertSequenceExpression = assertSequenceExpression;
  exports.assertParenthesizedExpression = assertParenthesizedExpression;
  exports.assertSwitchCase = assertSwitchCase;
  exports.assertSwitchStatement = assertSwitchStatement;
  exports.assertThisExpression = assertThisExpression;
  exports.assertThrowStatement = assertThrowStatement;
  exports.assertTryStatement = assertTryStatement;
  exports.assertUnaryExpression = assertUnaryExpression;
  exports.assertUpdateExpression = assertUpdateExpression;
  exports.assertVariableDeclaration = assertVariableDeclaration;
  exports.assertVariableDeclarator = assertVariableDeclarator;
  exports.assertWhileStatement = assertWhileStatement;
  exports.assertWithStatement = assertWithStatement;
  exports.assertAssignmentPattern = assertAssignmentPattern;
  exports.assertArrayPattern = assertArrayPattern;
  exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
  exports.assertClassBody = assertClassBody;
  exports.assertClassExpression = assertClassExpression;
  exports.assertClassDeclaration = assertClassDeclaration;
  exports.assertExportAllDeclaration = assertExportAllDeclaration;
  exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
  exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
  exports.assertExportSpecifier = assertExportSpecifier;
  exports.assertForOfStatement = assertForOfStatement;
  exports.assertImportDeclaration = assertImportDeclaration;
  exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
  exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
  exports.assertImportSpecifier = assertImportSpecifier;
  exports.assertMetaProperty = assertMetaProperty;
  exports.assertClassMethod = assertClassMethod;
  exports.assertObjectPattern = assertObjectPattern;
  exports.assertSpreadElement = assertSpreadElement;
  exports.assertSuper = assertSuper;
  exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
  exports.assertTemplateElement = assertTemplateElement;
  exports.assertTemplateLiteral = assertTemplateLiteral;
  exports.assertYieldExpression = assertYieldExpression;
  exports.assertAwaitExpression = assertAwaitExpression;
  exports.assertImport = assertImport;
  exports.assertBigIntLiteral = assertBigIntLiteral;
  exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
  exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
  exports.assertOptionalCallExpression = assertOptionalCallExpression;
  exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
  exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
  exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
  exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
  exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
  exports.assertClassImplements = assertClassImplements;
  exports.assertDeclareClass = assertDeclareClass;
  exports.assertDeclareFunction = assertDeclareFunction;
  exports.assertDeclareInterface = assertDeclareInterface;
  exports.assertDeclareModule = assertDeclareModule;
  exports.assertDeclareModuleExports = assertDeclareModuleExports;
  exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
  exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
  exports.assertDeclareVariable = assertDeclareVariable;
  exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
  exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
  exports.assertDeclaredPredicate = assertDeclaredPredicate;
  exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
  exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
  exports.assertFunctionTypeParam = assertFunctionTypeParam;
  exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
  exports.assertInferredPredicate = assertInferredPredicate;
  exports.assertInterfaceExtends = assertInterfaceExtends;
  exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
  exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
  exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
  exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
  exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
  exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
  exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
  exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
  exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
  exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
  exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
  exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
  exports.assertObjectTypeProperty = assertObjectTypeProperty;
  exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
  exports.assertOpaqueType = assertOpaqueType;
  exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
  exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
  exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
  exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
  exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
  exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
  exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
  exports.assertTypeAlias = assertTypeAlias;
  exports.assertTypeAnnotation = assertTypeAnnotation;
  exports.assertTypeCastExpression = assertTypeCastExpression;
  exports.assertTypeParameter = assertTypeParameter;
  exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
  exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
  exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
  exports.assertVariance = assertVariance;
  exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
  exports.assertEnumDeclaration = assertEnumDeclaration;
  exports.assertEnumBooleanBody = assertEnumBooleanBody;
  exports.assertEnumNumberBody = assertEnumNumberBody;
  exports.assertEnumStringBody = assertEnumStringBody;
  exports.assertEnumSymbolBody = assertEnumSymbolBody;
  exports.assertEnumBooleanMember = assertEnumBooleanMember;
  exports.assertEnumNumberMember = assertEnumNumberMember;
  exports.assertEnumStringMember = assertEnumStringMember;
  exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
  exports.assertJSXAttribute = assertJSXAttribute;
  exports.assertJSXClosingElement = assertJSXClosingElement;
  exports.assertJSXElement = assertJSXElement;
  exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
  exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
  exports.assertJSXSpreadChild = assertJSXSpreadChild;
  exports.assertJSXIdentifier = assertJSXIdentifier;
  exports.assertJSXMemberExpression = assertJSXMemberExpression;
  exports.assertJSXNamespacedName = assertJSXNamespacedName;
  exports.assertJSXOpeningElement = assertJSXOpeningElement;
  exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
  exports.assertJSXText = assertJSXText;
  exports.assertJSXFragment = assertJSXFragment;
  exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
  exports.assertJSXClosingFragment = assertJSXClosingFragment;
  exports.assertNoop = assertNoop;
  exports.assertPlaceholder = assertPlaceholder;
  exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
  exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
  exports.assertBindExpression = assertBindExpression;
  exports.assertClassProperty = assertClassProperty;
  exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
  exports.assertPipelineBareFunction = assertPipelineBareFunction;
  exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
  exports.assertClassPrivateProperty = assertClassPrivateProperty;
  exports.assertClassPrivateMethod = assertClassPrivateMethod;
  exports.assertImportAttribute = assertImportAttribute;
  exports.assertDecorator = assertDecorator;
  exports.assertDoExpression = assertDoExpression;
  exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
  exports.assertPrivateName = assertPrivateName;
  exports.assertRecordExpression = assertRecordExpression;
  exports.assertTupleExpression = assertTupleExpression;
  exports.assertDecimalLiteral = assertDecimalLiteral;
  exports.assertStaticBlock = assertStaticBlock;
  exports.assertTSParameterProperty = assertTSParameterProperty;
  exports.assertTSDeclareFunction = assertTSDeclareFunction;
  exports.assertTSDeclareMethod = assertTSDeclareMethod;
  exports.assertTSQualifiedName = assertTSQualifiedName;
  exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
  exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
  exports.assertTSPropertySignature = assertTSPropertySignature;
  exports.assertTSMethodSignature = assertTSMethodSignature;
  exports.assertTSIndexSignature = assertTSIndexSignature;
  exports.assertTSAnyKeyword = assertTSAnyKeyword;
  exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
  exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
  exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
  exports.assertTSNeverKeyword = assertTSNeverKeyword;
  exports.assertTSNullKeyword = assertTSNullKeyword;
  exports.assertTSNumberKeyword = assertTSNumberKeyword;
  exports.assertTSObjectKeyword = assertTSObjectKeyword;
  exports.assertTSStringKeyword = assertTSStringKeyword;
  exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
  exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
  exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
  exports.assertTSVoidKeyword = assertTSVoidKeyword;
  exports.assertTSThisType = assertTSThisType;
  exports.assertTSFunctionType = assertTSFunctionType;
  exports.assertTSConstructorType = assertTSConstructorType;
  exports.assertTSTypeReference = assertTSTypeReference;
  exports.assertTSTypePredicate = assertTSTypePredicate;
  exports.assertTSTypeQuery = assertTSTypeQuery;
  exports.assertTSTypeLiteral = assertTSTypeLiteral;
  exports.assertTSArrayType = assertTSArrayType;
  exports.assertTSTupleType = assertTSTupleType;
  exports.assertTSOptionalType = assertTSOptionalType;
  exports.assertTSRestType = assertTSRestType;
  exports.assertTSNamedTupleMember = assertTSNamedTupleMember;
  exports.assertTSUnionType = assertTSUnionType;
  exports.assertTSIntersectionType = assertTSIntersectionType;
  exports.assertTSConditionalType = assertTSConditionalType;
  exports.assertTSInferType = assertTSInferType;
  exports.assertTSParenthesizedType = assertTSParenthesizedType;
  exports.assertTSTypeOperator = assertTSTypeOperator;
  exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
  exports.assertTSMappedType = assertTSMappedType;
  exports.assertTSLiteralType = assertTSLiteralType;
  exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
  exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
  exports.assertTSInterfaceBody = assertTSInterfaceBody;
  exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
  exports.assertTSAsExpression = assertTSAsExpression;
  exports.assertTSTypeAssertion = assertTSTypeAssertion;
  exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
  exports.assertTSEnumMember = assertTSEnumMember;
  exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
  exports.assertTSModuleBlock = assertTSModuleBlock;
  exports.assertTSImportType = assertTSImportType;
  exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
  exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
  exports.assertTSNonNullExpression = assertTSNonNullExpression;
  exports.assertTSExportAssignment = assertTSExportAssignment;
  exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
  exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
  exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
  exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
  exports.assertTSTypeParameter = assertTSTypeParameter;
  exports.assertExpression = assertExpression;
  exports.assertBinary = assertBinary;
  exports.assertScopable = assertScopable;
  exports.assertBlockParent = assertBlockParent;
  exports.assertBlock = assertBlock;
  exports.assertStatement = assertStatement;
  exports.assertTerminatorless = assertTerminatorless;
  exports.assertCompletionStatement = assertCompletionStatement;
  exports.assertConditional = assertConditional;
  exports.assertLoop = assertLoop;
  exports.assertWhile = assertWhile;
  exports.assertExpressionWrapper = assertExpressionWrapper;
  exports.assertFor = assertFor;
  exports.assertForXStatement = assertForXStatement;
  exports.assertFunction = assertFunction;
  exports.assertFunctionParent = assertFunctionParent;
  exports.assertPureish = assertPureish;
  exports.assertDeclaration = assertDeclaration;
  exports.assertPatternLike = assertPatternLike;
  exports.assertLVal = assertLVal;
  exports.assertTSEntityName = assertTSEntityName;
  exports.assertLiteral = assertLiteral;
  exports.assertImmutable = assertImmutable;
  exports.assertUserWhitespacable = assertUserWhitespacable;
  exports.assertMethod = assertMethod;
  exports.assertObjectMember = assertObjectMember;
  exports.assertProperty = assertProperty;
  exports.assertUnaryLike = assertUnaryLike;
  exports.assertPattern = assertPattern;
  exports.assertClass = assertClass;
  exports.assertModuleDeclaration = assertModuleDeclaration;
  exports.assertExportDeclaration = assertExportDeclaration;
  exports.assertModuleSpecifier = assertModuleSpecifier;
  exports.assertFlow = assertFlow;
  exports.assertFlowType = assertFlowType;
  exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
  exports.assertFlowDeclaration = assertFlowDeclaration;
  exports.assertFlowPredicate = assertFlowPredicate;
  exports.assertEnumBody = assertEnumBody;
  exports.assertEnumMember = assertEnumMember;
  exports.assertJSX = assertJSX;
  exports.assertPrivate = assertPrivate;
  exports.assertTSTypeElement = assertTSTypeElement;
  exports.assertTSType = assertTSType;
  exports.assertTSBaseType = assertTSBaseType;
  exports.assertNumberLiteral = assertNumberLiteral;
  exports.assertRegexLiteral = assertRegexLiteral;
  exports.assertRestProperty = assertRestProperty;
  exports.assertSpreadProperty = assertSpreadProperty;
  var _is = _interopRequireDefault(require_is());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function assert(type, node, opts) {
    if (!(0, _is.default)(type, node, opts)) {
      throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, but instead got "${node.type}".`);
    }
  }
  function assertArrayExpression(node, opts) {
    assert("ArrayExpression", node, opts);
  }
  function assertAssignmentExpression(node, opts) {
    assert("AssignmentExpression", node, opts);
  }
  function assertBinaryExpression(node, opts) {
    assert("BinaryExpression", node, opts);
  }
  function assertInterpreterDirective(node, opts) {
    assert("InterpreterDirective", node, opts);
  }
  function assertDirective(node, opts) {
    assert("Directive", node, opts);
  }
  function assertDirectiveLiteral(node, opts) {
    assert("DirectiveLiteral", node, opts);
  }
  function assertBlockStatement(node, opts) {
    assert("BlockStatement", node, opts);
  }
  function assertBreakStatement(node, opts) {
    assert("BreakStatement", node, opts);
  }
  function assertCallExpression(node, opts) {
    assert("CallExpression", node, opts);
  }
  function assertCatchClause(node, opts) {
    assert("CatchClause", node, opts);
  }
  function assertConditionalExpression(node, opts) {
    assert("ConditionalExpression", node, opts);
  }
  function assertContinueStatement(node, opts) {
    assert("ContinueStatement", node, opts);
  }
  function assertDebuggerStatement(node, opts) {
    assert("DebuggerStatement", node, opts);
  }
  function assertDoWhileStatement(node, opts) {
    assert("DoWhileStatement", node, opts);
  }
  function assertEmptyStatement(node, opts) {
    assert("EmptyStatement", node, opts);
  }
  function assertExpressionStatement(node, opts) {
    assert("ExpressionStatement", node, opts);
  }
  function assertFile(node, opts) {
    assert("File", node, opts);
  }
  function assertForInStatement(node, opts) {
    assert("ForInStatement", node, opts);
  }
  function assertForStatement(node, opts) {
    assert("ForStatement", node, opts);
  }
  function assertFunctionDeclaration(node, opts) {
    assert("FunctionDeclaration", node, opts);
  }
  function assertFunctionExpression(node, opts) {
    assert("FunctionExpression", node, opts);
  }
  function assertIdentifier(node, opts) {
    assert("Identifier", node, opts);
  }
  function assertIfStatement(node, opts) {
    assert("IfStatement", node, opts);
  }
  function assertLabeledStatement(node, opts) {
    assert("LabeledStatement", node, opts);
  }
  function assertStringLiteral(node, opts) {
    assert("StringLiteral", node, opts);
  }
  function assertNumericLiteral(node, opts) {
    assert("NumericLiteral", node, opts);
  }
  function assertNullLiteral(node, opts) {
    assert("NullLiteral", node, opts);
  }
  function assertBooleanLiteral(node, opts) {
    assert("BooleanLiteral", node, opts);
  }
  function assertRegExpLiteral(node, opts) {
    assert("RegExpLiteral", node, opts);
  }
  function assertLogicalExpression(node, opts) {
    assert("LogicalExpression", node, opts);
  }
  function assertMemberExpression(node, opts) {
    assert("MemberExpression", node, opts);
  }
  function assertNewExpression(node, opts) {
    assert("NewExpression", node, opts);
  }
  function assertProgram(node, opts) {
    assert("Program", node, opts);
  }
  function assertObjectExpression(node, opts) {
    assert("ObjectExpression", node, opts);
  }
  function assertObjectMethod(node, opts) {
    assert("ObjectMethod", node, opts);
  }
  function assertObjectProperty(node, opts) {
    assert("ObjectProperty", node, opts);
  }
  function assertRestElement(node, opts) {
    assert("RestElement", node, opts);
  }
  function assertReturnStatement(node, opts) {
    assert("ReturnStatement", node, opts);
  }
  function assertSequenceExpression(node, opts) {
    assert("SequenceExpression", node, opts);
  }
  function assertParenthesizedExpression(node, opts) {
    assert("ParenthesizedExpression", node, opts);
  }
  function assertSwitchCase(node, opts) {
    assert("SwitchCase", node, opts);
  }
  function assertSwitchStatement(node, opts) {
    assert("SwitchStatement", node, opts);
  }
  function assertThisExpression(node, opts) {
    assert("ThisExpression", node, opts);
  }
  function assertThrowStatement(node, opts) {
    assert("ThrowStatement", node, opts);
  }
  function assertTryStatement(node, opts) {
    assert("TryStatement", node, opts);
  }
  function assertUnaryExpression(node, opts) {
    assert("UnaryExpression", node, opts);
  }
  function assertUpdateExpression(node, opts) {
    assert("UpdateExpression", node, opts);
  }
  function assertVariableDeclaration(node, opts) {
    assert("VariableDeclaration", node, opts);
  }
  function assertVariableDeclarator(node, opts) {
    assert("VariableDeclarator", node, opts);
  }
  function assertWhileStatement(node, opts) {
    assert("WhileStatement", node, opts);
  }
  function assertWithStatement(node, opts) {
    assert("WithStatement", node, opts);
  }
  function assertAssignmentPattern(node, opts) {
    assert("AssignmentPattern", node, opts);
  }
  function assertArrayPattern(node, opts) {
    assert("ArrayPattern", node, opts);
  }
  function assertArrowFunctionExpression(node, opts) {
    assert("ArrowFunctionExpression", node, opts);
  }
  function assertClassBody(node, opts) {
    assert("ClassBody", node, opts);
  }
  function assertClassExpression(node, opts) {
    assert("ClassExpression", node, opts);
  }
  function assertClassDeclaration(node, opts) {
    assert("ClassDeclaration", node, opts);
  }
  function assertExportAllDeclaration(node, opts) {
    assert("ExportAllDeclaration", node, opts);
  }
  function assertExportDefaultDeclaration(node, opts) {
    assert("ExportDefaultDeclaration", node, opts);
  }
  function assertExportNamedDeclaration(node, opts) {
    assert("ExportNamedDeclaration", node, opts);
  }
  function assertExportSpecifier(node, opts) {
    assert("ExportSpecifier", node, opts);
  }
  function assertForOfStatement(node, opts) {
    assert("ForOfStatement", node, opts);
  }
  function assertImportDeclaration(node, opts) {
    assert("ImportDeclaration", node, opts);
  }
  function assertImportDefaultSpecifier(node, opts) {
    assert("ImportDefaultSpecifier", node, opts);
  }
  function assertImportNamespaceSpecifier(node, opts) {
    assert("ImportNamespaceSpecifier", node, opts);
  }
  function assertImportSpecifier(node, opts) {
    assert("ImportSpecifier", node, opts);
  }
  function assertMetaProperty(node, opts) {
    assert("MetaProperty", node, opts);
  }
  function assertClassMethod(node, opts) {
    assert("ClassMethod", node, opts);
  }
  function assertObjectPattern(node, opts) {
    assert("ObjectPattern", node, opts);
  }
  function assertSpreadElement(node, opts) {
    assert("SpreadElement", node, opts);
  }
  function assertSuper(node, opts) {
    assert("Super", node, opts);
  }
  function assertTaggedTemplateExpression(node, opts) {
    assert("TaggedTemplateExpression", node, opts);
  }
  function assertTemplateElement(node, opts) {
    assert("TemplateElement", node, opts);
  }
  function assertTemplateLiteral(node, opts) {
    assert("TemplateLiteral", node, opts);
  }
  function assertYieldExpression(node, opts) {
    assert("YieldExpression", node, opts);
  }
  function assertAwaitExpression(node, opts) {
    assert("AwaitExpression", node, opts);
  }
  function assertImport(node, opts) {
    assert("Import", node, opts);
  }
  function assertBigIntLiteral(node, opts) {
    assert("BigIntLiteral", node, opts);
  }
  function assertExportNamespaceSpecifier(node, opts) {
    assert("ExportNamespaceSpecifier", node, opts);
  }
  function assertOptionalMemberExpression(node, opts) {
    assert("OptionalMemberExpression", node, opts);
  }
  function assertOptionalCallExpression(node, opts) {
    assert("OptionalCallExpression", node, opts);
  }
  function assertAnyTypeAnnotation(node, opts) {
    assert("AnyTypeAnnotation", node, opts);
  }
  function assertArrayTypeAnnotation(node, opts) {
    assert("ArrayTypeAnnotation", node, opts);
  }
  function assertBooleanTypeAnnotation(node, opts) {
    assert("BooleanTypeAnnotation", node, opts);
  }
  function assertBooleanLiteralTypeAnnotation(node, opts) {
    assert("BooleanLiteralTypeAnnotation", node, opts);
  }
  function assertNullLiteralTypeAnnotation(node, opts) {
    assert("NullLiteralTypeAnnotation", node, opts);
  }
  function assertClassImplements(node, opts) {
    assert("ClassImplements", node, opts);
  }
  function assertDeclareClass(node, opts) {
    assert("DeclareClass", node, opts);
  }
  function assertDeclareFunction(node, opts) {
    assert("DeclareFunction", node, opts);
  }
  function assertDeclareInterface(node, opts) {
    assert("DeclareInterface", node, opts);
  }
  function assertDeclareModule(node, opts) {
    assert("DeclareModule", node, opts);
  }
  function assertDeclareModuleExports(node, opts) {
    assert("DeclareModuleExports", node, opts);
  }
  function assertDeclareTypeAlias(node, opts) {
    assert("DeclareTypeAlias", node, opts);
  }
  function assertDeclareOpaqueType(node, opts) {
    assert("DeclareOpaqueType", node, opts);
  }
  function assertDeclareVariable(node, opts) {
    assert("DeclareVariable", node, opts);
  }
  function assertDeclareExportDeclaration(node, opts) {
    assert("DeclareExportDeclaration", node, opts);
  }
  function assertDeclareExportAllDeclaration(node, opts) {
    assert("DeclareExportAllDeclaration", node, opts);
  }
  function assertDeclaredPredicate(node, opts) {
    assert("DeclaredPredicate", node, opts);
  }
  function assertExistsTypeAnnotation(node, opts) {
    assert("ExistsTypeAnnotation", node, opts);
  }
  function assertFunctionTypeAnnotation(node, opts) {
    assert("FunctionTypeAnnotation", node, opts);
  }
  function assertFunctionTypeParam(node, opts) {
    assert("FunctionTypeParam", node, opts);
  }
  function assertGenericTypeAnnotation(node, opts) {
    assert("GenericTypeAnnotation", node, opts);
  }
  function assertInferredPredicate(node, opts) {
    assert("InferredPredicate", node, opts);
  }
  function assertInterfaceExtends(node, opts) {
    assert("InterfaceExtends", node, opts);
  }
  function assertInterfaceDeclaration(node, opts) {
    assert("InterfaceDeclaration", node, opts);
  }
  function assertInterfaceTypeAnnotation(node, opts) {
    assert("InterfaceTypeAnnotation", node, opts);
  }
  function assertIntersectionTypeAnnotation(node, opts) {
    assert("IntersectionTypeAnnotation", node, opts);
  }
  function assertMixedTypeAnnotation(node, opts) {
    assert("MixedTypeAnnotation", node, opts);
  }
  function assertEmptyTypeAnnotation(node, opts) {
    assert("EmptyTypeAnnotation", node, opts);
  }
  function assertNullableTypeAnnotation(node, opts) {
    assert("NullableTypeAnnotation", node, opts);
  }
  function assertNumberLiteralTypeAnnotation(node, opts) {
    assert("NumberLiteralTypeAnnotation", node, opts);
  }
  function assertNumberTypeAnnotation(node, opts) {
    assert("NumberTypeAnnotation", node, opts);
  }
  function assertObjectTypeAnnotation(node, opts) {
    assert("ObjectTypeAnnotation", node, opts);
  }
  function assertObjectTypeInternalSlot(node, opts) {
    assert("ObjectTypeInternalSlot", node, opts);
  }
  function assertObjectTypeCallProperty(node, opts) {
    assert("ObjectTypeCallProperty", node, opts);
  }
  function assertObjectTypeIndexer(node, opts) {
    assert("ObjectTypeIndexer", node, opts);
  }
  function assertObjectTypeProperty(node, opts) {
    assert("ObjectTypeProperty", node, opts);
  }
  function assertObjectTypeSpreadProperty(node, opts) {
    assert("ObjectTypeSpreadProperty", node, opts);
  }
  function assertOpaqueType(node, opts) {
    assert("OpaqueType", node, opts);
  }
  function assertQualifiedTypeIdentifier(node, opts) {
    assert("QualifiedTypeIdentifier", node, opts);
  }
  function assertStringLiteralTypeAnnotation(node, opts) {
    assert("StringLiteralTypeAnnotation", node, opts);
  }
  function assertStringTypeAnnotation(node, opts) {
    assert("StringTypeAnnotation", node, opts);
  }
  function assertSymbolTypeAnnotation(node, opts) {
    assert("SymbolTypeAnnotation", node, opts);
  }
  function assertThisTypeAnnotation(node, opts) {
    assert("ThisTypeAnnotation", node, opts);
  }
  function assertTupleTypeAnnotation(node, opts) {
    assert("TupleTypeAnnotation", node, opts);
  }
  function assertTypeofTypeAnnotation(node, opts) {
    assert("TypeofTypeAnnotation", node, opts);
  }
  function assertTypeAlias(node, opts) {
    assert("TypeAlias", node, opts);
  }
  function assertTypeAnnotation(node, opts) {
    assert("TypeAnnotation", node, opts);
  }
  function assertTypeCastExpression(node, opts) {
    assert("TypeCastExpression", node, opts);
  }
  function assertTypeParameter(node, opts) {
    assert("TypeParameter", node, opts);
  }
  function assertTypeParameterDeclaration(node, opts) {
    assert("TypeParameterDeclaration", node, opts);
  }
  function assertTypeParameterInstantiation(node, opts) {
    assert("TypeParameterInstantiation", node, opts);
  }
  function assertUnionTypeAnnotation(node, opts) {
    assert("UnionTypeAnnotation", node, opts);
  }
  function assertVariance(node, opts) {
    assert("Variance", node, opts);
  }
  function assertVoidTypeAnnotation(node, opts) {
    assert("VoidTypeAnnotation", node, opts);
  }
  function assertEnumDeclaration(node, opts) {
    assert("EnumDeclaration", node, opts);
  }
  function assertEnumBooleanBody(node, opts) {
    assert("EnumBooleanBody", node, opts);
  }
  function assertEnumNumberBody(node, opts) {
    assert("EnumNumberBody", node, opts);
  }
  function assertEnumStringBody(node, opts) {
    assert("EnumStringBody", node, opts);
  }
  function assertEnumSymbolBody(node, opts) {
    assert("EnumSymbolBody", node, opts);
  }
  function assertEnumBooleanMember(node, opts) {
    assert("EnumBooleanMember", node, opts);
  }
  function assertEnumNumberMember(node, opts) {
    assert("EnumNumberMember", node, opts);
  }
  function assertEnumStringMember(node, opts) {
    assert("EnumStringMember", node, opts);
  }
  function assertEnumDefaultedMember(node, opts) {
    assert("EnumDefaultedMember", node, opts);
  }
  function assertJSXAttribute(node, opts) {
    assert("JSXAttribute", node, opts);
  }
  function assertJSXClosingElement(node, opts) {
    assert("JSXClosingElement", node, opts);
  }
  function assertJSXElement(node, opts) {
    assert("JSXElement", node, opts);
  }
  function assertJSXEmptyExpression(node, opts) {
    assert("JSXEmptyExpression", node, opts);
  }
  function assertJSXExpressionContainer(node, opts) {
    assert("JSXExpressionContainer", node, opts);
  }
  function assertJSXSpreadChild(node, opts) {
    assert("JSXSpreadChild", node, opts);
  }
  function assertJSXIdentifier(node, opts) {
    assert("JSXIdentifier", node, opts);
  }
  function assertJSXMemberExpression(node, opts) {
    assert("JSXMemberExpression", node, opts);
  }
  function assertJSXNamespacedName(node, opts) {
    assert("JSXNamespacedName", node, opts);
  }
  function assertJSXOpeningElement(node, opts) {
    assert("JSXOpeningElement", node, opts);
  }
  function assertJSXSpreadAttribute(node, opts) {
    assert("JSXSpreadAttribute", node, opts);
  }
  function assertJSXText(node, opts) {
    assert("JSXText", node, opts);
  }
  function assertJSXFragment(node, opts) {
    assert("JSXFragment", node, opts);
  }
  function assertJSXOpeningFragment(node, opts) {
    assert("JSXOpeningFragment", node, opts);
  }
  function assertJSXClosingFragment(node, opts) {
    assert("JSXClosingFragment", node, opts);
  }
  function assertNoop(node, opts) {
    assert("Noop", node, opts);
  }
  function assertPlaceholder(node, opts) {
    assert("Placeholder", node, opts);
  }
  function assertV8IntrinsicIdentifier(node, opts) {
    assert("V8IntrinsicIdentifier", node, opts);
  }
  function assertArgumentPlaceholder(node, opts) {
    assert("ArgumentPlaceholder", node, opts);
  }
  function assertBindExpression(node, opts) {
    assert("BindExpression", node, opts);
  }
  function assertClassProperty(node, opts) {
    assert("ClassProperty", node, opts);
  }
  function assertPipelineTopicExpression(node, opts) {
    assert("PipelineTopicExpression", node, opts);
  }
  function assertPipelineBareFunction(node, opts) {
    assert("PipelineBareFunction", node, opts);
  }
  function assertPipelinePrimaryTopicReference(node, opts) {
    assert("PipelinePrimaryTopicReference", node, opts);
  }
  function assertClassPrivateProperty(node, opts) {
    assert("ClassPrivateProperty", node, opts);
  }
  function assertClassPrivateMethod(node, opts) {
    assert("ClassPrivateMethod", node, opts);
  }
  function assertImportAttribute(node, opts) {
    assert("ImportAttribute", node, opts);
  }
  function assertDecorator(node, opts) {
    assert("Decorator", node, opts);
  }
  function assertDoExpression(node, opts) {
    assert("DoExpression", node, opts);
  }
  function assertExportDefaultSpecifier(node, opts) {
    assert("ExportDefaultSpecifier", node, opts);
  }
  function assertPrivateName(node, opts) {
    assert("PrivateName", node, opts);
  }
  function assertRecordExpression(node, opts) {
    assert("RecordExpression", node, opts);
  }
  function assertTupleExpression(node, opts) {
    assert("TupleExpression", node, opts);
  }
  function assertDecimalLiteral(node, opts) {
    assert("DecimalLiteral", node, opts);
  }
  function assertStaticBlock(node, opts) {
    assert("StaticBlock", node, opts);
  }
  function assertTSParameterProperty(node, opts) {
    assert("TSParameterProperty", node, opts);
  }
  function assertTSDeclareFunction(node, opts) {
    assert("TSDeclareFunction", node, opts);
  }
  function assertTSDeclareMethod(node, opts) {
    assert("TSDeclareMethod", node, opts);
  }
  function assertTSQualifiedName(node, opts) {
    assert("TSQualifiedName", node, opts);
  }
  function assertTSCallSignatureDeclaration(node, opts) {
    assert("TSCallSignatureDeclaration", node, opts);
  }
  function assertTSConstructSignatureDeclaration(node, opts) {
    assert("TSConstructSignatureDeclaration", node, opts);
  }
  function assertTSPropertySignature(node, opts) {
    assert("TSPropertySignature", node, opts);
  }
  function assertTSMethodSignature(node, opts) {
    assert("TSMethodSignature", node, opts);
  }
  function assertTSIndexSignature(node, opts) {
    assert("TSIndexSignature", node, opts);
  }
  function assertTSAnyKeyword(node, opts) {
    assert("TSAnyKeyword", node, opts);
  }
  function assertTSBooleanKeyword(node, opts) {
    assert("TSBooleanKeyword", node, opts);
  }
  function assertTSBigIntKeyword(node, opts) {
    assert("TSBigIntKeyword", node, opts);
  }
  function assertTSIntrinsicKeyword(node, opts) {
    assert("TSIntrinsicKeyword", node, opts);
  }
  function assertTSNeverKeyword(node, opts) {
    assert("TSNeverKeyword", node, opts);
  }
  function assertTSNullKeyword(node, opts) {
    assert("TSNullKeyword", node, opts);
  }
  function assertTSNumberKeyword(node, opts) {
    assert("TSNumberKeyword", node, opts);
  }
  function assertTSObjectKeyword(node, opts) {
    assert("TSObjectKeyword", node, opts);
  }
  function assertTSStringKeyword(node, opts) {
    assert("TSStringKeyword", node, opts);
  }
  function assertTSSymbolKeyword(node, opts) {
    assert("TSSymbolKeyword", node, opts);
  }
  function assertTSUndefinedKeyword(node, opts) {
    assert("TSUndefinedKeyword", node, opts);
  }
  function assertTSUnknownKeyword(node, opts) {
    assert("TSUnknownKeyword", node, opts);
  }
  function assertTSVoidKeyword(node, opts) {
    assert("TSVoidKeyword", node, opts);
  }
  function assertTSThisType(node, opts) {
    assert("TSThisType", node, opts);
  }
  function assertTSFunctionType(node, opts) {
    assert("TSFunctionType", node, opts);
  }
  function assertTSConstructorType(node, opts) {
    assert("TSConstructorType", node, opts);
  }
  function assertTSTypeReference(node, opts) {
    assert("TSTypeReference", node, opts);
  }
  function assertTSTypePredicate(node, opts) {
    assert("TSTypePredicate", node, opts);
  }
  function assertTSTypeQuery(node, opts) {
    assert("TSTypeQuery", node, opts);
  }
  function assertTSTypeLiteral(node, opts) {
    assert("TSTypeLiteral", node, opts);
  }
  function assertTSArrayType(node, opts) {
    assert("TSArrayType", node, opts);
  }
  function assertTSTupleType(node, opts) {
    assert("TSTupleType", node, opts);
  }
  function assertTSOptionalType(node, opts) {
    assert("TSOptionalType", node, opts);
  }
  function assertTSRestType(node, opts) {
    assert("TSRestType", node, opts);
  }
  function assertTSNamedTupleMember(node, opts) {
    assert("TSNamedTupleMember", node, opts);
  }
  function assertTSUnionType(node, opts) {
    assert("TSUnionType", node, opts);
  }
  function assertTSIntersectionType(node, opts) {
    assert("TSIntersectionType", node, opts);
  }
  function assertTSConditionalType(node, opts) {
    assert("TSConditionalType", node, opts);
  }
  function assertTSInferType(node, opts) {
    assert("TSInferType", node, opts);
  }
  function assertTSParenthesizedType(node, opts) {
    assert("TSParenthesizedType", node, opts);
  }
  function assertTSTypeOperator(node, opts) {
    assert("TSTypeOperator", node, opts);
  }
  function assertTSIndexedAccessType(node, opts) {
    assert("TSIndexedAccessType", node, opts);
  }
  function assertTSMappedType(node, opts) {
    assert("TSMappedType", node, opts);
  }
  function assertTSLiteralType(node, opts) {
    assert("TSLiteralType", node, opts);
  }
  function assertTSExpressionWithTypeArguments(node, opts) {
    assert("TSExpressionWithTypeArguments", node, opts);
  }
  function assertTSInterfaceDeclaration(node, opts) {
    assert("TSInterfaceDeclaration", node, opts);
  }
  function assertTSInterfaceBody(node, opts) {
    assert("TSInterfaceBody", node, opts);
  }
  function assertTSTypeAliasDeclaration(node, opts) {
    assert("TSTypeAliasDeclaration", node, opts);
  }
  function assertTSAsExpression(node, opts) {
    assert("TSAsExpression", node, opts);
  }
  function assertTSTypeAssertion(node, opts) {
    assert("TSTypeAssertion", node, opts);
  }
  function assertTSEnumDeclaration(node, opts) {
    assert("TSEnumDeclaration", node, opts);
  }
  function assertTSEnumMember(node, opts) {
    assert("TSEnumMember", node, opts);
  }
  function assertTSModuleDeclaration(node, opts) {
    assert("TSModuleDeclaration", node, opts);
  }
  function assertTSModuleBlock(node, opts) {
    assert("TSModuleBlock", node, opts);
  }
  function assertTSImportType(node, opts) {
    assert("TSImportType", node, opts);
  }
  function assertTSImportEqualsDeclaration(node, opts) {
    assert("TSImportEqualsDeclaration", node, opts);
  }
  function assertTSExternalModuleReference(node, opts) {
    assert("TSExternalModuleReference", node, opts);
  }
  function assertTSNonNullExpression(node, opts) {
    assert("TSNonNullExpression", node, opts);
  }
  function assertTSExportAssignment(node, opts) {
    assert("TSExportAssignment", node, opts);
  }
  function assertTSNamespaceExportDeclaration(node, opts) {
    assert("TSNamespaceExportDeclaration", node, opts);
  }
  function assertTSTypeAnnotation(node, opts) {
    assert("TSTypeAnnotation", node, opts);
  }
  function assertTSTypeParameterInstantiation(node, opts) {
    assert("TSTypeParameterInstantiation", node, opts);
  }
  function assertTSTypeParameterDeclaration(node, opts) {
    assert("TSTypeParameterDeclaration", node, opts);
  }
  function assertTSTypeParameter(node, opts) {
    assert("TSTypeParameter", node, opts);
  }
  function assertExpression(node, opts) {
    assert("Expression", node, opts);
  }
  function assertBinary(node, opts) {
    assert("Binary", node, opts);
  }
  function assertScopable(node, opts) {
    assert("Scopable", node, opts);
  }
  function assertBlockParent(node, opts) {
    assert("BlockParent", node, opts);
  }
  function assertBlock(node, opts) {
    assert("Block", node, opts);
  }
  function assertStatement(node, opts) {
    assert("Statement", node, opts);
  }
  function assertTerminatorless(node, opts) {
    assert("Terminatorless", node, opts);
  }
  function assertCompletionStatement(node, opts) {
    assert("CompletionStatement", node, opts);
  }
  function assertConditional(node, opts) {
    assert("Conditional", node, opts);
  }
  function assertLoop(node, opts) {
    assert("Loop", node, opts);
  }
  function assertWhile(node, opts) {
    assert("While", node, opts);
  }
  function assertExpressionWrapper(node, opts) {
    assert("ExpressionWrapper", node, opts);
  }
  function assertFor(node, opts) {
    assert("For", node, opts);
  }
  function assertForXStatement(node, opts) {
    assert("ForXStatement", node, opts);
  }
  function assertFunction(node, opts) {
    assert("Function", node, opts);
  }
  function assertFunctionParent(node, opts) {
    assert("FunctionParent", node, opts);
  }
  function assertPureish(node, opts) {
    assert("Pureish", node, opts);
  }
  function assertDeclaration(node, opts) {
    assert("Declaration", node, opts);
  }
  function assertPatternLike(node, opts) {
    assert("PatternLike", node, opts);
  }
  function assertLVal(node, opts) {
    assert("LVal", node, opts);
  }
  function assertTSEntityName(node, opts) {
    assert("TSEntityName", node, opts);
  }
  function assertLiteral(node, opts) {
    assert("Literal", node, opts);
  }
  function assertImmutable(node, opts) {
    assert("Immutable", node, opts);
  }
  function assertUserWhitespacable(node, opts) {
    assert("UserWhitespacable", node, opts);
  }
  function assertMethod(node, opts) {
    assert("Method", node, opts);
  }
  function assertObjectMember(node, opts) {
    assert("ObjectMember", node, opts);
  }
  function assertProperty(node, opts) {
    assert("Property", node, opts);
  }
  function assertUnaryLike(node, opts) {
    assert("UnaryLike", node, opts);
  }
  function assertPattern(node, opts) {
    assert("Pattern", node, opts);
  }
  function assertClass(node, opts) {
    assert("Class", node, opts);
  }
  function assertModuleDeclaration(node, opts) {
    assert("ModuleDeclaration", node, opts);
  }
  function assertExportDeclaration(node, opts) {
    assert("ExportDeclaration", node, opts);
  }
  function assertModuleSpecifier(node, opts) {
    assert("ModuleSpecifier", node, opts);
  }
  function assertFlow(node, opts) {
    assert("Flow", node, opts);
  }
  function assertFlowType(node, opts) {
    assert("FlowType", node, opts);
  }
  function assertFlowBaseAnnotation(node, opts) {
    assert("FlowBaseAnnotation", node, opts);
  }
  function assertFlowDeclaration(node, opts) {
    assert("FlowDeclaration", node, opts);
  }
  function assertFlowPredicate(node, opts) {
    assert("FlowPredicate", node, opts);
  }
  function assertEnumBody(node, opts) {
    assert("EnumBody", node, opts);
  }
  function assertEnumMember(node, opts) {
    assert("EnumMember", node, opts);
  }
  function assertJSX(node, opts) {
    assert("JSX", node, opts);
  }
  function assertPrivate(node, opts) {
    assert("Private", node, opts);
  }
  function assertTSTypeElement(node, opts) {
    assert("TSTypeElement", node, opts);
  }
  function assertTSType(node, opts) {
    assert("TSType", node, opts);
  }
  function assertTSBaseType(node, opts) {
    assert("TSBaseType", node, opts);
  }
  function assertNumberLiteral(node, opts) {
    console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
    assert("NumberLiteral", node, opts);
  }
  function assertRegexLiteral(node, opts) {
    console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
    assert("RegexLiteral", node, opts);
  }
  function assertRestProperty(node, opts) {
    console.trace("The node type RestProperty has been renamed to RestElement");
    assert("RestProperty", node, opts);
  }
  function assertSpreadProperty(node, opts) {
    console.trace("The node type SpreadProperty has been renamed to SpreadElement");
    assert("SpreadProperty", node, opts);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js
var require_createTypeAnnotationBasedOnTypeof = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createTypeAnnotationBasedOnTypeof;
  var _generated = require_generated2();
  function createTypeAnnotationBasedOnTypeof(type) {
    if (type === "string") {
      return (0, _generated.stringTypeAnnotation)();
    } else if (type === "number") {
      return (0, _generated.numberTypeAnnotation)();
    } else if (type === "undefined") {
      return (0, _generated.voidTypeAnnotation)();
    } else if (type === "boolean") {
      return (0, _generated.booleanTypeAnnotation)();
    } else if (type === "function") {
      return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Function"));
    } else if (type === "object") {
      return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Object"));
    } else if (type === "symbol") {
      return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Symbol"));
    } else {
      throw new Error("Invalid typeof value");
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/flow/removeTypeDuplicates.js
var require_removeTypeDuplicates = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeTypeDuplicates;
  var _generated = require_generated();
  function getQualifiedName(node) {
    return (0, _generated.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
  }
  function removeTypeDuplicates(nodes) {
    const generics = {};
    const bases = {};
    const typeGroups = [];
    const types = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node)
        continue;
      if (types.indexOf(node) >= 0) {
        continue;
      }
      if ((0, _generated.isAnyTypeAnnotation)(node)) {
        return [node];
      }
      if ((0, _generated.isFlowBaseAnnotation)(node)) {
        bases[node.type] = node;
        continue;
      }
      if ((0, _generated.isUnionTypeAnnotation)(node)) {
        if (typeGroups.indexOf(node.types) < 0) {
          nodes = nodes.concat(node.types);
          typeGroups.push(node.types);
        }
        continue;
      }
      if ((0, _generated.isGenericTypeAnnotation)(node)) {
        const name = getQualifiedName(node.id);
        if (generics[name]) {
          let existing = generics[name];
          if (existing.typeParameters) {
            if (node.typeParameters) {
              existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
            }
          } else {
            existing = node.typeParameters;
          }
        } else {
          generics[name] = node;
        }
        continue;
      }
      types.push(node);
    }
    for (const type of Object.keys(bases)) {
      types.push(bases[type]);
    }
    for (const name of Object.keys(generics)) {
      types.push(generics[name]);
    }
    return types;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/flow/createFlowUnionType.js
var require_createFlowUnionType = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createFlowUnionType;
  var _generated = require_generated2();
  var _removeTypeDuplicates = _interopRequireDefault(require_removeTypeDuplicates());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function createFlowUnionType(types) {
    const flattened = (0, _removeTypeDuplicates.default)(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return (0, _generated.unionTypeAnnotation)(flattened);
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/typescript/removeTypeDuplicates.js
var require_removeTypeDuplicates2 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeTypeDuplicates;
  var _generated = require_generated();
  function removeTypeDuplicates(nodes) {
    const generics = {};
    const bases = {};
    const typeGroups = [];
    const types = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node)
        continue;
      if (types.indexOf(node) >= 0) {
        continue;
      }
      if ((0, _generated.isTSAnyKeyword)(node)) {
        return [node];
      }
      if ((0, _generated.isTSBaseType)(node)) {
        bases[node.type] = node;
        continue;
      }
      if ((0, _generated.isTSUnionType)(node)) {
        if (typeGroups.indexOf(node.types) < 0) {
          nodes = nodes.concat(node.types);
          typeGroups.push(node.types);
        }
        continue;
      }
      types.push(node);
    }
    for (const type of Object.keys(bases)) {
      types.push(bases[type]);
    }
    for (const name of Object.keys(generics)) {
      types.push(generics[name]);
    }
    return types;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/typescript/createTSUnionType.js
var require_createTSUnionType = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createTSUnionType;
  var _generated = require_generated2();
  var _removeTypeDuplicates = _interopRequireDefault(require_removeTypeDuplicates2());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function createTSUnionType(typeAnnotations) {
    const types = typeAnnotations.map((type) => type.typeAnnotation);
    const flattened = (0, _removeTypeDuplicates.default)(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return (0, _generated.tsUnionType)(flattened);
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/builders/generated/uppercase.js
var require_uppercase = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ArrayExpression", {
    enumerable: true,
    get: function() {
      return _index.arrayExpression;
    }
  });
  Object.defineProperty(exports, "AssignmentExpression", {
    enumerable: true,
    get: function() {
      return _index.assignmentExpression;
    }
  });
  Object.defineProperty(exports, "BinaryExpression", {
    enumerable: true,
    get: function() {
      return _index.binaryExpression;
    }
  });
  Object.defineProperty(exports, "InterpreterDirective", {
    enumerable: true,
    get: function() {
      return _index.interpreterDirective;
    }
  });
  Object.defineProperty(exports, "Directive", {
    enumerable: true,
    get: function() {
      return _index.directive;
    }
  });
  Object.defineProperty(exports, "DirectiveLiteral", {
    enumerable: true,
    get: function() {
      return _index.directiveLiteral;
    }
  });
  Object.defineProperty(exports, "BlockStatement", {
    enumerable: true,
    get: function() {
      return _index.blockStatement;
    }
  });
  Object.defineProperty(exports, "BreakStatement", {
    enumerable: true,
    get: function() {
      return _index.breakStatement;
    }
  });
  Object.defineProperty(exports, "CallExpression", {
    enumerable: true,
    get: function() {
      return _index.callExpression;
    }
  });
  Object.defineProperty(exports, "CatchClause", {
    enumerable: true,
    get: function() {
      return _index.catchClause;
    }
  });
  Object.defineProperty(exports, "ConditionalExpression", {
    enumerable: true,
    get: function() {
      return _index.conditionalExpression;
    }
  });
  Object.defineProperty(exports, "ContinueStatement", {
    enumerable: true,
    get: function() {
      return _index.continueStatement;
    }
  });
  Object.defineProperty(exports, "DebuggerStatement", {
    enumerable: true,
    get: function() {
      return _index.debuggerStatement;
    }
  });
  Object.defineProperty(exports, "DoWhileStatement", {
    enumerable: true,
    get: function() {
      return _index.doWhileStatement;
    }
  });
  Object.defineProperty(exports, "EmptyStatement", {
    enumerable: true,
    get: function() {
      return _index.emptyStatement;
    }
  });
  Object.defineProperty(exports, "ExpressionStatement", {
    enumerable: true,
    get: function() {
      return _index.expressionStatement;
    }
  });
  Object.defineProperty(exports, "File", {
    enumerable: true,
    get: function() {
      return _index.file;
    }
  });
  Object.defineProperty(exports, "ForInStatement", {
    enumerable: true,
    get: function() {
      return _index.forInStatement;
    }
  });
  Object.defineProperty(exports, "ForStatement", {
    enumerable: true,
    get: function() {
      return _index.forStatement;
    }
  });
  Object.defineProperty(exports, "FunctionDeclaration", {
    enumerable: true,
    get: function() {
      return _index.functionDeclaration;
    }
  });
  Object.defineProperty(exports, "FunctionExpression", {
    enumerable: true,
    get: function() {
      return _index.functionExpression;
    }
  });
  Object.defineProperty(exports, "Identifier", {
    enumerable: true,
    get: function() {
      return _index.identifier;
    }
  });
  Object.defineProperty(exports, "IfStatement", {
    enumerable: true,
    get: function() {
      return _index.ifStatement;
    }
  });
  Object.defineProperty(exports, "LabeledStatement", {
    enumerable: true,
    get: function() {
      return _index.labeledStatement;
    }
  });
  Object.defineProperty(exports, "StringLiteral", {
    enumerable: true,
    get: function() {
      return _index.stringLiteral;
    }
  });
  Object.defineProperty(exports, "NumericLiteral", {
    enumerable: true,
    get: function() {
      return _index.numericLiteral;
    }
  });
  Object.defineProperty(exports, "NullLiteral", {
    enumerable: true,
    get: function() {
      return _index.nullLiteral;
    }
  });
  Object.defineProperty(exports, "BooleanLiteral", {
    enumerable: true,
    get: function() {
      return _index.booleanLiteral;
    }
  });
  Object.defineProperty(exports, "RegExpLiteral", {
    enumerable: true,
    get: function() {
      return _index.regExpLiteral;
    }
  });
  Object.defineProperty(exports, "LogicalExpression", {
    enumerable: true,
    get: function() {
      return _index.logicalExpression;
    }
  });
  Object.defineProperty(exports, "MemberExpression", {
    enumerable: true,
    get: function() {
      return _index.memberExpression;
    }
  });
  Object.defineProperty(exports, "NewExpression", {
    enumerable: true,
    get: function() {
      return _index.newExpression;
    }
  });
  Object.defineProperty(exports, "Program", {
    enumerable: true,
    get: function() {
      return _index.program;
    }
  });
  Object.defineProperty(exports, "ObjectExpression", {
    enumerable: true,
    get: function() {
      return _index.objectExpression;
    }
  });
  Object.defineProperty(exports, "ObjectMethod", {
    enumerable: true,
    get: function() {
      return _index.objectMethod;
    }
  });
  Object.defineProperty(exports, "ObjectProperty", {
    enumerable: true,
    get: function() {
      return _index.objectProperty;
    }
  });
  Object.defineProperty(exports, "RestElement", {
    enumerable: true,
    get: function() {
      return _index.restElement;
    }
  });
  Object.defineProperty(exports, "ReturnStatement", {
    enumerable: true,
    get: function() {
      return _index.returnStatement;
    }
  });
  Object.defineProperty(exports, "SequenceExpression", {
    enumerable: true,
    get: function() {
      return _index.sequenceExpression;
    }
  });
  Object.defineProperty(exports, "ParenthesizedExpression", {
    enumerable: true,
    get: function() {
      return _index.parenthesizedExpression;
    }
  });
  Object.defineProperty(exports, "SwitchCase", {
    enumerable: true,
    get: function() {
      return _index.switchCase;
    }
  });
  Object.defineProperty(exports, "SwitchStatement", {
    enumerable: true,
    get: function() {
      return _index.switchStatement;
    }
  });
  Object.defineProperty(exports, "ThisExpression", {
    enumerable: true,
    get: function() {
      return _index.thisExpression;
    }
  });
  Object.defineProperty(exports, "ThrowStatement", {
    enumerable: true,
    get: function() {
      return _index.throwStatement;
    }
  });
  Object.defineProperty(exports, "TryStatement", {
    enumerable: true,
    get: function() {
      return _index.tryStatement;
    }
  });
  Object.defineProperty(exports, "UnaryExpression", {
    enumerable: true,
    get: function() {
      return _index.unaryExpression;
    }
  });
  Object.defineProperty(exports, "UpdateExpression", {
    enumerable: true,
    get: function() {
      return _index.updateExpression;
    }
  });
  Object.defineProperty(exports, "VariableDeclaration", {
    enumerable: true,
    get: function() {
      return _index.variableDeclaration;
    }
  });
  Object.defineProperty(exports, "VariableDeclarator", {
    enumerable: true,
    get: function() {
      return _index.variableDeclarator;
    }
  });
  Object.defineProperty(exports, "WhileStatement", {
    enumerable: true,
    get: function() {
      return _index.whileStatement;
    }
  });
  Object.defineProperty(exports, "WithStatement", {
    enumerable: true,
    get: function() {
      return _index.withStatement;
    }
  });
  Object.defineProperty(exports, "AssignmentPattern", {
    enumerable: true,
    get: function() {
      return _index.assignmentPattern;
    }
  });
  Object.defineProperty(exports, "ArrayPattern", {
    enumerable: true,
    get: function() {
      return _index.arrayPattern;
    }
  });
  Object.defineProperty(exports, "ArrowFunctionExpression", {
    enumerable: true,
    get: function() {
      return _index.arrowFunctionExpression;
    }
  });
  Object.defineProperty(exports, "ClassBody", {
    enumerable: true,
    get: function() {
      return _index.classBody;
    }
  });
  Object.defineProperty(exports, "ClassExpression", {
    enumerable: true,
    get: function() {
      return _index.classExpression;
    }
  });
  Object.defineProperty(exports, "ClassDeclaration", {
    enumerable: true,
    get: function() {
      return _index.classDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return _index.exportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportDefaultDeclaration", {
    enumerable: true,
    get: function() {
      return _index.exportDefaultDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportNamedDeclaration", {
    enumerable: true,
    get: function() {
      return _index.exportNamedDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportSpecifier", {
    enumerable: true,
    get: function() {
      return _index.exportSpecifier;
    }
  });
  Object.defineProperty(exports, "ForOfStatement", {
    enumerable: true,
    get: function() {
      return _index.forOfStatement;
    }
  });
  Object.defineProperty(exports, "ImportDeclaration", {
    enumerable: true,
    get: function() {
      return _index.importDeclaration;
    }
  });
  Object.defineProperty(exports, "ImportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return _index.importDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return _index.importNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportSpecifier", {
    enumerable: true,
    get: function() {
      return _index.importSpecifier;
    }
  });
  Object.defineProperty(exports, "MetaProperty", {
    enumerable: true,
    get: function() {
      return _index.metaProperty;
    }
  });
  Object.defineProperty(exports, "ClassMethod", {
    enumerable: true,
    get: function() {
      return _index.classMethod;
    }
  });
  Object.defineProperty(exports, "ObjectPattern", {
    enumerable: true,
    get: function() {
      return _index.objectPattern;
    }
  });
  Object.defineProperty(exports, "SpreadElement", {
    enumerable: true,
    get: function() {
      return _index.spreadElement;
    }
  });
  Object.defineProperty(exports, "Super", {
    enumerable: true,
    get: function() {
      return _index.super;
    }
  });
  Object.defineProperty(exports, "TaggedTemplateExpression", {
    enumerable: true,
    get: function() {
      return _index.taggedTemplateExpression;
    }
  });
  Object.defineProperty(exports, "TemplateElement", {
    enumerable: true,
    get: function() {
      return _index.templateElement;
    }
  });
  Object.defineProperty(exports, "TemplateLiteral", {
    enumerable: true,
    get: function() {
      return _index.templateLiteral;
    }
  });
  Object.defineProperty(exports, "YieldExpression", {
    enumerable: true,
    get: function() {
      return _index.yieldExpression;
    }
  });
  Object.defineProperty(exports, "AwaitExpression", {
    enumerable: true,
    get: function() {
      return _index.awaitExpression;
    }
  });
  Object.defineProperty(exports, "Import", {
    enumerable: true,
    get: function() {
      return _index.import;
    }
  });
  Object.defineProperty(exports, "BigIntLiteral", {
    enumerable: true,
    get: function() {
      return _index.bigIntLiteral;
    }
  });
  Object.defineProperty(exports, "ExportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return _index.exportNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "OptionalMemberExpression", {
    enumerable: true,
    get: function() {
      return _index.optionalMemberExpression;
    }
  });
  Object.defineProperty(exports, "OptionalCallExpression", {
    enumerable: true,
    get: function() {
      return _index.optionalCallExpression;
    }
  });
  Object.defineProperty(exports, "AnyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.anyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ArrayTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.arrayTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BooleanTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.booleanTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.booleanLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.nullLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ClassImplements", {
    enumerable: true,
    get: function() {
      return _index.classImplements;
    }
  });
  Object.defineProperty(exports, "DeclareClass", {
    enumerable: true,
    get: function() {
      return _index.declareClass;
    }
  });
  Object.defineProperty(exports, "DeclareFunction", {
    enumerable: true,
    get: function() {
      return _index.declareFunction;
    }
  });
  Object.defineProperty(exports, "DeclareInterface", {
    enumerable: true,
    get: function() {
      return _index.declareInterface;
    }
  });
  Object.defineProperty(exports, "DeclareModule", {
    enumerable: true,
    get: function() {
      return _index.declareModule;
    }
  });
  Object.defineProperty(exports, "DeclareModuleExports", {
    enumerable: true,
    get: function() {
      return _index.declareModuleExports;
    }
  });
  Object.defineProperty(exports, "DeclareTypeAlias", {
    enumerable: true,
    get: function() {
      return _index.declareTypeAlias;
    }
  });
  Object.defineProperty(exports, "DeclareOpaqueType", {
    enumerable: true,
    get: function() {
      return _index.declareOpaqueType;
    }
  });
  Object.defineProperty(exports, "DeclareVariable", {
    enumerable: true,
    get: function() {
      return _index.declareVariable;
    }
  });
  Object.defineProperty(exports, "DeclareExportDeclaration", {
    enumerable: true,
    get: function() {
      return _index.declareExportDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclareExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return _index.declareExportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclaredPredicate", {
    enumerable: true,
    get: function() {
      return _index.declaredPredicate;
    }
  });
  Object.defineProperty(exports, "ExistsTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.existsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "FunctionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.functionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "FunctionTypeParam", {
    enumerable: true,
    get: function() {
      return _index.functionTypeParam;
    }
  });
  Object.defineProperty(exports, "GenericTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.genericTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "InferredPredicate", {
    enumerable: true,
    get: function() {
      return _index.inferredPredicate;
    }
  });
  Object.defineProperty(exports, "InterfaceExtends", {
    enumerable: true,
    get: function() {
      return _index.interfaceExtends;
    }
  });
  Object.defineProperty(exports, "InterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return _index.interfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "InterfaceTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.interfaceTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "IntersectionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.intersectionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "MixedTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.mixedTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "EmptyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.emptyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NullableTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.nullableTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.numberLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.numberTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ObjectTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.objectTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ObjectTypeInternalSlot", {
    enumerable: true,
    get: function() {
      return _index.objectTypeInternalSlot;
    }
  });
  Object.defineProperty(exports, "ObjectTypeCallProperty", {
    enumerable: true,
    get: function() {
      return _index.objectTypeCallProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeIndexer", {
    enumerable: true,
    get: function() {
      return _index.objectTypeIndexer;
    }
  });
  Object.defineProperty(exports, "ObjectTypeProperty", {
    enumerable: true,
    get: function() {
      return _index.objectTypeProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
    enumerable: true,
    get: function() {
      return _index.objectTypeSpreadProperty;
    }
  });
  Object.defineProperty(exports, "OpaqueType", {
    enumerable: true,
    get: function() {
      return _index.opaqueType;
    }
  });
  Object.defineProperty(exports, "QualifiedTypeIdentifier", {
    enumerable: true,
    get: function() {
      return _index.qualifiedTypeIdentifier;
    }
  });
  Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.stringLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "StringTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.stringTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "SymbolTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.symbolTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ThisTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.thisTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TupleTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.tupleTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeofTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.typeofTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeAlias", {
    enumerable: true,
    get: function() {
      return _index.typeAlias;
    }
  });
  Object.defineProperty(exports, "TypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.typeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeCastExpression", {
    enumerable: true,
    get: function() {
      return _index.typeCastExpression;
    }
  });
  Object.defineProperty(exports, "TypeParameter", {
    enumerable: true,
    get: function() {
      return _index.typeParameter;
    }
  });
  Object.defineProperty(exports, "TypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return _index.typeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return _index.typeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "UnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.unionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "Variance", {
    enumerable: true,
    get: function() {
      return _index.variance;
    }
  });
  Object.defineProperty(exports, "VoidTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.voidTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "EnumDeclaration", {
    enumerable: true,
    get: function() {
      return _index.enumDeclaration;
    }
  });
  Object.defineProperty(exports, "EnumBooleanBody", {
    enumerable: true,
    get: function() {
      return _index.enumBooleanBody;
    }
  });
  Object.defineProperty(exports, "EnumNumberBody", {
    enumerable: true,
    get: function() {
      return _index.enumNumberBody;
    }
  });
  Object.defineProperty(exports, "EnumStringBody", {
    enumerable: true,
    get: function() {
      return _index.enumStringBody;
    }
  });
  Object.defineProperty(exports, "EnumSymbolBody", {
    enumerable: true,
    get: function() {
      return _index.enumSymbolBody;
    }
  });
  Object.defineProperty(exports, "EnumBooleanMember", {
    enumerable: true,
    get: function() {
      return _index.enumBooleanMember;
    }
  });
  Object.defineProperty(exports, "EnumNumberMember", {
    enumerable: true,
    get: function() {
      return _index.enumNumberMember;
    }
  });
  Object.defineProperty(exports, "EnumStringMember", {
    enumerable: true,
    get: function() {
      return _index.enumStringMember;
    }
  });
  Object.defineProperty(exports, "EnumDefaultedMember", {
    enumerable: true,
    get: function() {
      return _index.enumDefaultedMember;
    }
  });
  Object.defineProperty(exports, "JSXAttribute", {
    enumerable: true,
    get: function() {
      return _index.jsxAttribute;
    }
  });
  Object.defineProperty(exports, "JSXClosingElement", {
    enumerable: true,
    get: function() {
      return _index.jsxClosingElement;
    }
  });
  Object.defineProperty(exports, "JSXElement", {
    enumerable: true,
    get: function() {
      return _index.jsxElement;
    }
  });
  Object.defineProperty(exports, "JSXEmptyExpression", {
    enumerable: true,
    get: function() {
      return _index.jsxEmptyExpression;
    }
  });
  Object.defineProperty(exports, "JSXExpressionContainer", {
    enumerable: true,
    get: function() {
      return _index.jsxExpressionContainer;
    }
  });
  Object.defineProperty(exports, "JSXSpreadChild", {
    enumerable: true,
    get: function() {
      return _index.jsxSpreadChild;
    }
  });
  Object.defineProperty(exports, "JSXIdentifier", {
    enumerable: true,
    get: function() {
      return _index.jsxIdentifier;
    }
  });
  Object.defineProperty(exports, "JSXMemberExpression", {
    enumerable: true,
    get: function() {
      return _index.jsxMemberExpression;
    }
  });
  Object.defineProperty(exports, "JSXNamespacedName", {
    enumerable: true,
    get: function() {
      return _index.jsxNamespacedName;
    }
  });
  Object.defineProperty(exports, "JSXOpeningElement", {
    enumerable: true,
    get: function() {
      return _index.jsxOpeningElement;
    }
  });
  Object.defineProperty(exports, "JSXSpreadAttribute", {
    enumerable: true,
    get: function() {
      return _index.jsxSpreadAttribute;
    }
  });
  Object.defineProperty(exports, "JSXText", {
    enumerable: true,
    get: function() {
      return _index.jsxText;
    }
  });
  Object.defineProperty(exports, "JSXFragment", {
    enumerable: true,
    get: function() {
      return _index.jsxFragment;
    }
  });
  Object.defineProperty(exports, "JSXOpeningFragment", {
    enumerable: true,
    get: function() {
      return _index.jsxOpeningFragment;
    }
  });
  Object.defineProperty(exports, "JSXClosingFragment", {
    enumerable: true,
    get: function() {
      return _index.jsxClosingFragment;
    }
  });
  Object.defineProperty(exports, "Noop", {
    enumerable: true,
    get: function() {
      return _index.noop;
    }
  });
  Object.defineProperty(exports, "Placeholder", {
    enumerable: true,
    get: function() {
      return _index.placeholder;
    }
  });
  Object.defineProperty(exports, "V8IntrinsicIdentifier", {
    enumerable: true,
    get: function() {
      return _index.v8IntrinsicIdentifier;
    }
  });
  Object.defineProperty(exports, "ArgumentPlaceholder", {
    enumerable: true,
    get: function() {
      return _index.argumentPlaceholder;
    }
  });
  Object.defineProperty(exports, "BindExpression", {
    enumerable: true,
    get: function() {
      return _index.bindExpression;
    }
  });
  Object.defineProperty(exports, "ClassProperty", {
    enumerable: true,
    get: function() {
      return _index.classProperty;
    }
  });
  Object.defineProperty(exports, "PipelineTopicExpression", {
    enumerable: true,
    get: function() {
      return _index.pipelineTopicExpression;
    }
  });
  Object.defineProperty(exports, "PipelineBareFunction", {
    enumerable: true,
    get: function() {
      return _index.pipelineBareFunction;
    }
  });
  Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
    enumerable: true,
    get: function() {
      return _index.pipelinePrimaryTopicReference;
    }
  });
  Object.defineProperty(exports, "ClassPrivateProperty", {
    enumerable: true,
    get: function() {
      return _index.classPrivateProperty;
    }
  });
  Object.defineProperty(exports, "ClassPrivateMethod", {
    enumerable: true,
    get: function() {
      return _index.classPrivateMethod;
    }
  });
  Object.defineProperty(exports, "ImportAttribute", {
    enumerable: true,
    get: function() {
      return _index.importAttribute;
    }
  });
  Object.defineProperty(exports, "Decorator", {
    enumerable: true,
    get: function() {
      return _index.decorator;
    }
  });
  Object.defineProperty(exports, "DoExpression", {
    enumerable: true,
    get: function() {
      return _index.doExpression;
    }
  });
  Object.defineProperty(exports, "ExportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return _index.exportDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "PrivateName", {
    enumerable: true,
    get: function() {
      return _index.privateName;
    }
  });
  Object.defineProperty(exports, "RecordExpression", {
    enumerable: true,
    get: function() {
      return _index.recordExpression;
    }
  });
  Object.defineProperty(exports, "TupleExpression", {
    enumerable: true,
    get: function() {
      return _index.tupleExpression;
    }
  });
  Object.defineProperty(exports, "DecimalLiteral", {
    enumerable: true,
    get: function() {
      return _index.decimalLiteral;
    }
  });
  Object.defineProperty(exports, "StaticBlock", {
    enumerable: true,
    get: function() {
      return _index.staticBlock;
    }
  });
  Object.defineProperty(exports, "TSParameterProperty", {
    enumerable: true,
    get: function() {
      return _index.tsParameterProperty;
    }
  });
  Object.defineProperty(exports, "TSDeclareFunction", {
    enumerable: true,
    get: function() {
      return _index.tsDeclareFunction;
    }
  });
  Object.defineProperty(exports, "TSDeclareMethod", {
    enumerable: true,
    get: function() {
      return _index.tsDeclareMethod;
    }
  });
  Object.defineProperty(exports, "TSQualifiedName", {
    enumerable: true,
    get: function() {
      return _index.tsQualifiedName;
    }
  });
  Object.defineProperty(exports, "TSCallSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsCallSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsConstructSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSPropertySignature", {
    enumerable: true,
    get: function() {
      return _index.tsPropertySignature;
    }
  });
  Object.defineProperty(exports, "TSMethodSignature", {
    enumerable: true,
    get: function() {
      return _index.tsMethodSignature;
    }
  });
  Object.defineProperty(exports, "TSIndexSignature", {
    enumerable: true,
    get: function() {
      return _index.tsIndexSignature;
    }
  });
  Object.defineProperty(exports, "TSAnyKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsAnyKeyword;
    }
  });
  Object.defineProperty(exports, "TSBooleanKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsBooleanKeyword;
    }
  });
  Object.defineProperty(exports, "TSBigIntKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsBigIntKeyword;
    }
  });
  Object.defineProperty(exports, "TSIntrinsicKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsIntrinsicKeyword;
    }
  });
  Object.defineProperty(exports, "TSNeverKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsNeverKeyword;
    }
  });
  Object.defineProperty(exports, "TSNullKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsNullKeyword;
    }
  });
  Object.defineProperty(exports, "TSNumberKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsNumberKeyword;
    }
  });
  Object.defineProperty(exports, "TSObjectKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsObjectKeyword;
    }
  });
  Object.defineProperty(exports, "TSStringKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsStringKeyword;
    }
  });
  Object.defineProperty(exports, "TSSymbolKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsSymbolKeyword;
    }
  });
  Object.defineProperty(exports, "TSUndefinedKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsUndefinedKeyword;
    }
  });
  Object.defineProperty(exports, "TSUnknownKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsUnknownKeyword;
    }
  });
  Object.defineProperty(exports, "TSVoidKeyword", {
    enumerable: true,
    get: function() {
      return _index.tsVoidKeyword;
    }
  });
  Object.defineProperty(exports, "TSThisType", {
    enumerable: true,
    get: function() {
      return _index.tsThisType;
    }
  });
  Object.defineProperty(exports, "TSFunctionType", {
    enumerable: true,
    get: function() {
      return _index.tsFunctionType;
    }
  });
  Object.defineProperty(exports, "TSConstructorType", {
    enumerable: true,
    get: function() {
      return _index.tsConstructorType;
    }
  });
  Object.defineProperty(exports, "TSTypeReference", {
    enumerable: true,
    get: function() {
      return _index.tsTypeReference;
    }
  });
  Object.defineProperty(exports, "TSTypePredicate", {
    enumerable: true,
    get: function() {
      return _index.tsTypePredicate;
    }
  });
  Object.defineProperty(exports, "TSTypeQuery", {
    enumerable: true,
    get: function() {
      return _index.tsTypeQuery;
    }
  });
  Object.defineProperty(exports, "TSTypeLiteral", {
    enumerable: true,
    get: function() {
      return _index.tsTypeLiteral;
    }
  });
  Object.defineProperty(exports, "TSArrayType", {
    enumerable: true,
    get: function() {
      return _index.tsArrayType;
    }
  });
  Object.defineProperty(exports, "TSTupleType", {
    enumerable: true,
    get: function() {
      return _index.tsTupleType;
    }
  });
  Object.defineProperty(exports, "TSOptionalType", {
    enumerable: true,
    get: function() {
      return _index.tsOptionalType;
    }
  });
  Object.defineProperty(exports, "TSRestType", {
    enumerable: true,
    get: function() {
      return _index.tsRestType;
    }
  });
  Object.defineProperty(exports, "TSNamedTupleMember", {
    enumerable: true,
    get: function() {
      return _index.tsNamedTupleMember;
    }
  });
  Object.defineProperty(exports, "TSUnionType", {
    enumerable: true,
    get: function() {
      return _index.tsUnionType;
    }
  });
  Object.defineProperty(exports, "TSIntersectionType", {
    enumerable: true,
    get: function() {
      return _index.tsIntersectionType;
    }
  });
  Object.defineProperty(exports, "TSConditionalType", {
    enumerable: true,
    get: function() {
      return _index.tsConditionalType;
    }
  });
  Object.defineProperty(exports, "TSInferType", {
    enumerable: true,
    get: function() {
      return _index.tsInferType;
    }
  });
  Object.defineProperty(exports, "TSParenthesizedType", {
    enumerable: true,
    get: function() {
      return _index.tsParenthesizedType;
    }
  });
  Object.defineProperty(exports, "TSTypeOperator", {
    enumerable: true,
    get: function() {
      return _index.tsTypeOperator;
    }
  });
  Object.defineProperty(exports, "TSIndexedAccessType", {
    enumerable: true,
    get: function() {
      return _index.tsIndexedAccessType;
    }
  });
  Object.defineProperty(exports, "TSMappedType", {
    enumerable: true,
    get: function() {
      return _index.tsMappedType;
    }
  });
  Object.defineProperty(exports, "TSLiteralType", {
    enumerable: true,
    get: function() {
      return _index.tsLiteralType;
    }
  });
  Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
    enumerable: true,
    get: function() {
      return _index.tsExpressionWithTypeArguments;
    }
  });
  Object.defineProperty(exports, "TSInterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsInterfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "TSInterfaceBody", {
    enumerable: true,
    get: function() {
      return _index.tsInterfaceBody;
    }
  });
  Object.defineProperty(exports, "TSTypeAliasDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsTypeAliasDeclaration;
    }
  });
  Object.defineProperty(exports, "TSAsExpression", {
    enumerable: true,
    get: function() {
      return _index.tsAsExpression;
    }
  });
  Object.defineProperty(exports, "TSTypeAssertion", {
    enumerable: true,
    get: function() {
      return _index.tsTypeAssertion;
    }
  });
  Object.defineProperty(exports, "TSEnumDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsEnumDeclaration;
    }
  });
  Object.defineProperty(exports, "TSEnumMember", {
    enumerable: true,
    get: function() {
      return _index.tsEnumMember;
    }
  });
  Object.defineProperty(exports, "TSModuleDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsModuleDeclaration;
    }
  });
  Object.defineProperty(exports, "TSModuleBlock", {
    enumerable: true,
    get: function() {
      return _index.tsModuleBlock;
    }
  });
  Object.defineProperty(exports, "TSImportType", {
    enumerable: true,
    get: function() {
      return _index.tsImportType;
    }
  });
  Object.defineProperty(exports, "TSImportEqualsDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsImportEqualsDeclaration;
    }
  });
  Object.defineProperty(exports, "TSExternalModuleReference", {
    enumerable: true,
    get: function() {
      return _index.tsExternalModuleReference;
    }
  });
  Object.defineProperty(exports, "TSNonNullExpression", {
    enumerable: true,
    get: function() {
      return _index.tsNonNullExpression;
    }
  });
  Object.defineProperty(exports, "TSExportAssignment", {
    enumerable: true,
    get: function() {
      return _index.tsExportAssignment;
    }
  });
  Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsNamespaceExportDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index.tsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return _index.tsTypeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return _index.tsTypeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeParameter", {
    enumerable: true,
    get: function() {
      return _index.tsTypeParameter;
    }
  });
  Object.defineProperty(exports, "NumberLiteral", {
    enumerable: true,
    get: function() {
      return _index.numberLiteral;
    }
  });
  Object.defineProperty(exports, "RegexLiteral", {
    enumerable: true,
    get: function() {
      return _index.regexLiteral;
    }
  });
  Object.defineProperty(exports, "RestProperty", {
    enumerable: true,
    get: function() {
      return _index.restProperty;
    }
  });
  Object.defineProperty(exports, "SpreadProperty", {
    enumerable: true,
    get: function() {
      return _index.spreadProperty;
    }
  });
  var _index = require_generated2();
});

// public/pkgs/@babel/types@7.12.12/lib/clone/cloneNode.js
var require_cloneNode = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneNode;
  var _definitions = require_definitions();
  var _generated = require_generated();
  var has = Function.call.bind(Object.prototype.hasOwnProperty);
  function cloneIfNode(obj, deep, withoutLoc) {
    if (obj && typeof obj.type === "string") {
      return cloneNode(obj, deep, withoutLoc);
    }
    return obj;
  }
  function cloneIfNodeOrArray(obj, deep, withoutLoc) {
    if (Array.isArray(obj)) {
      return obj.map((node) => cloneIfNode(node, deep, withoutLoc));
    }
    return cloneIfNode(obj, deep, withoutLoc);
  }
  function cloneNode(node, deep = true, withoutLoc = false) {
    if (!node)
      return node;
    const {
      type
    } = node;
    const newNode = {
      type: node.type
    };
    if ((0, _generated.isIdentifier)(node)) {
      newNode.name = node.name;
      if (has(node, "optional") && typeof node.optional === "boolean") {
        newNode.optional = node.optional;
      }
      if (has(node, "typeAnnotation")) {
        newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc) : node.typeAnnotation;
      }
    } else if (!has(_definitions.NODE_FIELDS, type)) {
      throw new Error(`Unknown node type: "${type}"`);
    } else {
      for (const field of Object.keys(_definitions.NODE_FIELDS[type])) {
        if (has(node, field)) {
          if (deep) {
            newNode[field] = (0, _generated.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc) : cloneIfNodeOrArray(node[field], true, withoutLoc);
          } else {
            newNode[field] = node[field];
          }
        }
      }
    }
    if (has(node, "loc")) {
      if (withoutLoc) {
        newNode.loc = null;
      } else {
        newNode.loc = node.loc;
      }
    }
    if (has(node, "leadingComments")) {
      newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc);
    }
    if (has(node, "innerComments")) {
      newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc);
    }
    if (has(node, "trailingComments")) {
      newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc);
    }
    if (has(node, "extra")) {
      newNode.extra = Object.assign({}, node.extra);
    }
    return newNode;
  }
  function cloneCommentsWithoutLoc(comments) {
    return comments.map(({
      type,
      value
    }) => ({
      type,
      value,
      loc: null
    }));
  }
  function maybeCloneComments(comments, deep, withoutLoc) {
    return deep && withoutLoc ? cloneCommentsWithoutLoc(comments) : comments;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/clone/clone.js
var require_clone2 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = clone;
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function clone(node) {
    return (0, _cloneNode.default)(node, false);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/clone/cloneDeep.js
var require_cloneDeep = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneDeep;
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function cloneDeep(node) {
    return (0, _cloneNode.default)(node);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/clone/cloneDeepWithoutLoc.js
var require_cloneDeepWithoutLoc = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneDeepWithoutLoc;
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function cloneDeepWithoutLoc(node) {
    return (0, _cloneNode.default)(node, true, true);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/clone/cloneWithoutLoc.js
var require_cloneWithoutLoc = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneWithoutLoc;
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function cloneWithoutLoc(node) {
    return (0, _cloneNode.default)(node, false, true);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/addComments.js
var require_addComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addComments;
  function addComments(node, type, comments) {
    if (!comments || !node)
      return node;
    const key = `${type}Comments`;
    if (node[key]) {
      if (type === "leading") {
        node[key] = comments.concat(node[key]);
      } else {
        node[key] = node[key].concat(comments);
      }
    } else {
      node[key] = comments;
    }
    return node;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/addComment.js
var require_addComment = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addComment;
  var _addComments = _interopRequireDefault(require_addComments());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function addComment(node, type, content, line) {
    return (0, _addComments.default)(node, type, [{
      type: line ? "CommentLine" : "CommentBlock",
      value: content
    }]);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/utils/inherit.js
var require_inherit = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inherit;
  function inherit(key, child, parent) {
    if (child && parent) {
      child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/inheritInnerComments.js
var require_inheritInnerComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritInnerComments;
  var _inherit = _interopRequireDefault(require_inherit());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function inheritInnerComments(child, parent) {
    (0, _inherit.default)("innerComments", child, parent);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/inheritLeadingComments.js
var require_inheritLeadingComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritLeadingComments;
  var _inherit = _interopRequireDefault(require_inherit());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function inheritLeadingComments(child, parent) {
    (0, _inherit.default)("leadingComments", child, parent);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/inheritTrailingComments.js
var require_inheritTrailingComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritTrailingComments;
  var _inherit = _interopRequireDefault(require_inherit());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function inheritTrailingComments(child, parent) {
    (0, _inherit.default)("trailingComments", child, parent);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/inheritsComments.js
var require_inheritsComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritsComments;
  var _inheritTrailingComments = _interopRequireDefault(require_inheritTrailingComments());
  var _inheritLeadingComments = _interopRequireDefault(require_inheritLeadingComments());
  var _inheritInnerComments = _interopRequireDefault(require_inheritInnerComments());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function inheritsComments(child, parent) {
    (0, _inheritTrailingComments.default)(child, parent);
    (0, _inheritLeadingComments.default)(child, parent);
    (0, _inheritInnerComments.default)(child, parent);
    return child;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/comments/removeComments.js
var require_removeComments = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeComments;
  var _constants = require_constants();
  function removeComments(node) {
    _constants.COMMENT_KEYS.forEach((key) => {
      node[key] = null;
    });
    return node;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/constants/generated/index.js
var require_generated4 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TSBASETYPE_TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.PRIVATE_TYPES = exports.JSX_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;
  var _definitions = require_definitions();
  var EXPRESSION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Expression"];
  exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
  var BINARY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Binary"];
  exports.BINARY_TYPES = BINARY_TYPES;
  var SCOPABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Scopable"];
  exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
  var BLOCKPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
  exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
  var BLOCK_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Block"];
  exports.BLOCK_TYPES = BLOCK_TYPES;
  var STATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Statement"];
  exports.STATEMENT_TYPES = STATEMENT_TYPES;
  var TERMINATORLESS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
  exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
  var COMPLETIONSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
  exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
  var CONDITIONAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Conditional"];
  exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
  var LOOP_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Loop"];
  exports.LOOP_TYPES = LOOP_TYPES;
  var WHILE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["While"];
  exports.WHILE_TYPES = WHILE_TYPES;
  var EXPRESSIONWRAPPER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
  exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
  var FOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["For"];
  exports.FOR_TYPES = FOR_TYPES;
  var FORXSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
  exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
  var FUNCTION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Function"];
  exports.FUNCTION_TYPES = FUNCTION_TYPES;
  var FUNCTIONPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
  exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
  var PUREISH_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pureish"];
  exports.PUREISH_TYPES = PUREISH_TYPES;
  var DECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Declaration"];
  exports.DECLARATION_TYPES = DECLARATION_TYPES;
  var PATTERNLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
  exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
  var LVAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["LVal"];
  exports.LVAL_TYPES = LVAL_TYPES;
  var TSENTITYNAME_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
  exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
  var LITERAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Literal"];
  exports.LITERAL_TYPES = LITERAL_TYPES;
  var IMMUTABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Immutable"];
  exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
  var USERWHITESPACABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
  exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
  var METHOD_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Method"];
  exports.METHOD_TYPES = METHOD_TYPES;
  var OBJECTMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
  exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
  var PROPERTY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Property"];
  exports.PROPERTY_TYPES = PROPERTY_TYPES;
  var UNARYLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
  exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
  var PATTERN_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pattern"];
  exports.PATTERN_TYPES = PATTERN_TYPES;
  var CLASS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Class"];
  exports.CLASS_TYPES = CLASS_TYPES;
  var MODULEDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
  exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
  var EXPORTDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
  exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
  var MODULESPECIFIER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
  exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
  var FLOW_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Flow"];
  exports.FLOW_TYPES = FLOW_TYPES;
  var FLOWTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowType"];
  exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
  var FLOWBASEANNOTATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
  exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
  var FLOWDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
  exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
  var FLOWPREDICATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
  exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
  var ENUMBODY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
  exports.ENUMBODY_TYPES = ENUMBODY_TYPES;
  var ENUMMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
  exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
  var JSX_TYPES = _definitions.FLIPPED_ALIAS_KEYS["JSX"];
  exports.JSX_TYPES = JSX_TYPES;
  var PRIVATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Private"];
  exports.PRIVATE_TYPES = PRIVATE_TYPES;
  var TSTYPEELEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
  exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
  var TSTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSType"];
  exports.TSTYPE_TYPES = TSTYPE_TYPES;
  var TSBASETYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSBaseType"];
  exports.TSBASETYPE_TYPES = TSBASETYPE_TYPES;
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toBlock.js
var require_toBlock = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toBlock;
  var _generated = require_generated();
  var _generated2 = require_generated2();
  function toBlock(node, parent) {
    if ((0, _generated.isBlockStatement)(node)) {
      return node;
    }
    let blockNodes = [];
    if ((0, _generated.isEmptyStatement)(node)) {
      blockNodes = [];
    } else {
      if (!(0, _generated.isStatement)(node)) {
        if ((0, _generated.isFunction)(parent)) {
          node = (0, _generated2.returnStatement)(node);
        } else {
          node = (0, _generated2.expressionStatement)(node);
        }
      }
      blockNodes = [node];
    }
    return (0, _generated2.blockStatement)(blockNodes);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/ensureBlock.js
var require_ensureBlock = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ensureBlock;
  var _toBlock = _interopRequireDefault(require_toBlock());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function ensureBlock(node, key = "body") {
    return node[key] = (0, _toBlock.default)(node[key], node);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toIdentifier.js
var require_toIdentifier = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toIdentifier;
  var _isValidIdentifier = _interopRequireDefault(require_isValidIdentifier());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function toIdentifier(name) {
    name = name + "";
    name = name.replace(/[^a-zA-Z0-9$_]/g, "-");
    name = name.replace(/^[-0-9]+/, "");
    name = name.replace(/[-\s]+(.)?/g, function(match, c) {
      return c ? c.toUpperCase() : "";
    });
    if (!(0, _isValidIdentifier.default)(name)) {
      name = `_${name}`;
    }
    return name || "_";
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toBindingIdentifierName.js
var require_toBindingIdentifierName = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toBindingIdentifierName;
  var _toIdentifier = _interopRequireDefault(require_toIdentifier());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function toBindingIdentifierName(name) {
    name = (0, _toIdentifier.default)(name);
    if (name === "eval" || name === "arguments")
      name = "_" + name;
    return name;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toComputedKey.js
var require_toComputedKey = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toComputedKey;
  var _generated = require_generated();
  var _generated2 = require_generated2();
  function toComputedKey(node, key = node.key || node.property) {
    if (!node.computed && (0, _generated.isIdentifier)(key))
      key = (0, _generated2.stringLiteral)(key.name);
    return key;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toExpression.js
var require_toExpression = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _generated = require_generated();
  var _default = toExpression;
  exports.default = _default;
  function toExpression(node) {
    if ((0, _generated.isExpressionStatement)(node)) {
      node = node.expression;
    }
    if ((0, _generated.isExpression)(node)) {
      return node;
    }
    if ((0, _generated.isClass)(node)) {
      node.type = "ClassExpression";
    } else if ((0, _generated.isFunction)(node)) {
      node.type = "FunctionExpression";
    }
    if (!(0, _generated.isExpression)(node)) {
      throw new Error(`cannot turn ${node.type} to an expression`);
    }
    return node;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/traverse/traverseFast.js
var require_traverseFast = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = traverseFast;
  var _definitions = require_definitions();
  function traverseFast(node, enter, opts) {
    if (!node)
      return;
    const keys = _definitions.VISITOR_KEYS[node.type];
    if (!keys)
      return;
    opts = opts || {};
    enter(node, opts);
    for (const key of keys) {
      const subNode = node[key];
      if (Array.isArray(subNode)) {
        for (const node2 of subNode) {
          traverseFast(node2, enter, opts);
        }
      } else {
        traverseFast(subNode, enter, opts);
      }
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/removeProperties.js
var require_removeProperties = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeProperties;
  var _constants = require_constants();
  var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
  var CLEAR_KEYS_PLUS_COMMENTS = _constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);
  function removeProperties(node, opts = {}) {
    const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
    for (const key of map) {
      if (node[key] != null)
        node[key] = void 0;
    }
    for (const key of Object.keys(node)) {
      if (key[0] === "_" && node[key] != null)
        node[key] = void 0;
    }
    const symbols = Object.getOwnPropertySymbols(node);
    for (const sym of symbols) {
      node[sym] = null;
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/removePropertiesDeep.js
var require_removePropertiesDeep = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removePropertiesDeep;
  var _traverseFast = _interopRequireDefault(require_traverseFast());
  var _removeProperties = _interopRequireDefault(require_removeProperties());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function removePropertiesDeep(tree, opts) {
    (0, _traverseFast.default)(tree, _removeProperties.default, opts);
    return tree;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toKeyAlias.js
var require_toKeyAlias = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toKeyAlias;
  var _generated = require_generated();
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  var _removePropertiesDeep = _interopRequireDefault(require_removePropertiesDeep());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function toKeyAlias(node, key = node.key) {
    let alias;
    if (node.kind === "method") {
      return toKeyAlias.increment() + "";
    } else if ((0, _generated.isIdentifier)(key)) {
      alias = key.name;
    } else if ((0, _generated.isStringLiteral)(key)) {
      alias = JSON.stringify(key.value);
    } else {
      alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
    }
    if (node.computed) {
      alias = `[${alias}]`;
    }
    if (node.static) {
      alias = `static:${alias}`;
    }
    return alias;
  }
  toKeyAlias.uid = 0;
  toKeyAlias.increment = function() {
    if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
      return toKeyAlias.uid = 0;
    } else {
      return toKeyAlias.uid++;
    }
  };
});

// public/pkgs/@babel/types@7.12.12/lib/retrievers/getBindingIdentifiers.js
var require_getBindingIdentifiers = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getBindingIdentifiers;
  var _generated = require_generated();
  function getBindingIdentifiers(node, duplicates, outerOnly) {
    let search = [].concat(node);
    const ids = Object.create(null);
    while (search.length) {
      const id = search.shift();
      if (!id)
        continue;
      const keys = getBindingIdentifiers.keys[id.type];
      if ((0, _generated.isIdentifier)(id)) {
        if (duplicates) {
          const _ids = ids[id.name] = ids[id.name] || [];
          _ids.push(id);
        } else {
          ids[id.name] = id;
        }
        continue;
      }
      if ((0, _generated.isExportDeclaration)(id) && !(0, _generated.isExportAllDeclaration)(id)) {
        if ((0, _generated.isDeclaration)(id.declaration)) {
          search.push(id.declaration);
        }
        continue;
      }
      if (outerOnly) {
        if ((0, _generated.isFunctionDeclaration)(id)) {
          search.push(id.id);
          continue;
        }
        if ((0, _generated.isFunctionExpression)(id)) {
          continue;
        }
      }
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (id[key]) {
            search = search.concat(id[key]);
          }
        }
      }
    }
    return ids;
  }
  getBindingIdentifiers.keys = {
    DeclareClass: ["id"],
    DeclareFunction: ["id"],
    DeclareModule: ["id"],
    DeclareVariable: ["id"],
    DeclareInterface: ["id"],
    DeclareTypeAlias: ["id"],
    DeclareOpaqueType: ["id"],
    InterfaceDeclaration: ["id"],
    TypeAlias: ["id"],
    OpaqueType: ["id"],
    CatchClause: ["param"],
    LabeledStatement: ["label"],
    UnaryExpression: ["argument"],
    AssignmentExpression: ["left"],
    ImportSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportDefaultSpecifier: ["local"],
    ImportDeclaration: ["specifiers"],
    ExportSpecifier: ["exported"],
    ExportNamespaceSpecifier: ["exported"],
    ExportDefaultSpecifier: ["exported"],
    FunctionDeclaration: ["id", "params"],
    FunctionExpression: ["id", "params"],
    ArrowFunctionExpression: ["params"],
    ObjectMethod: ["params"],
    ClassMethod: ["params"],
    ForInStatement: ["left"],
    ForOfStatement: ["left"],
    ClassDeclaration: ["id"],
    ClassExpression: ["id"],
    RestElement: ["argument"],
    UpdateExpression: ["argument"],
    ObjectProperty: ["value"],
    AssignmentPattern: ["left"],
    ArrayPattern: ["elements"],
    ObjectPattern: ["properties"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id"]
  };
});

// public/pkgs/@babel/types@7.12.12/lib/converters/gatherSequenceExpressions.js
var require_gatherSequenceExpressions = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gatherSequenceExpressions;
  var _getBindingIdentifiers = _interopRequireDefault(require_getBindingIdentifiers());
  var _generated = require_generated();
  var _generated2 = require_generated2();
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function gatherSequenceExpressions(nodes, scope, declars) {
    const exprs = [];
    let ensureLastUndefined = true;
    for (const node of nodes) {
      if (!(0, _generated.isEmptyStatement)(node)) {
        ensureLastUndefined = false;
      }
      if ((0, _generated.isExpression)(node)) {
        exprs.push(node);
      } else if ((0, _generated.isExpressionStatement)(node)) {
        exprs.push(node.expression);
      } else if ((0, _generated.isVariableDeclaration)(node)) {
        if (node.kind !== "var")
          return;
        for (const declar of node.declarations) {
          const bindings = (0, _getBindingIdentifiers.default)(declar);
          for (const key of Object.keys(bindings)) {
            declars.push({
              kind: node.kind,
              id: (0, _cloneNode.default)(bindings[key])
            });
          }
          if (declar.init) {
            exprs.push((0, _generated2.assignmentExpression)("=", declar.id, declar.init));
          }
        }
        ensureLastUndefined = true;
      } else if ((0, _generated.isIfStatement)(node)) {
        const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
        const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
        if (!consequent || !alternate)
          return;
        exprs.push((0, _generated2.conditionalExpression)(node.test, consequent, alternate));
      } else if ((0, _generated.isBlockStatement)(node)) {
        const body = gatherSequenceExpressions(node.body, scope, declars);
        if (!body)
          return;
        exprs.push(body);
      } else if ((0, _generated.isEmptyStatement)(node)) {
        if (nodes.indexOf(node) === 0) {
          ensureLastUndefined = true;
        }
      } else {
        return;
      }
    }
    if (ensureLastUndefined) {
      exprs.push(scope.buildUndefinedNode());
    }
    if (exprs.length === 1) {
      return exprs[0];
    } else {
      return (0, _generated2.sequenceExpression)(exprs);
    }
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toSequenceExpression.js
var require_toSequenceExpression = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toSequenceExpression;
  var _gatherSequenceExpressions = _interopRequireDefault(require_gatherSequenceExpressions());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function toSequenceExpression(nodes, scope) {
    if (!(nodes == null ? void 0 : nodes.length))
      return;
    const declars = [];
    const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
    if (!result)
      return;
    for (const declar of declars) {
      scope.push(declar);
    }
    return result;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/converters/toStatement.js
var require_toStatement = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _generated = require_generated();
  var _generated2 = require_generated2();
  var _default = toStatement;
  exports.default = _default;
  function toStatement(node, ignore) {
    if ((0, _generated.isStatement)(node)) {
      return node;
    }
    let mustHaveId = false;
    let newType;
    if ((0, _generated.isClass)(node)) {
      mustHaveId = true;
      newType = "ClassDeclaration";
    } else if ((0, _generated.isFunction)(node)) {
      mustHaveId = true;
      newType = "FunctionDeclaration";
    } else if ((0, _generated.isAssignmentExpression)(node)) {
      return (0, _generated2.expressionStatement)(node);
    }
    if (mustHaveId && !node.id) {
      newType = false;
    }
    if (!newType) {
      if (ignore) {
        return false;
      } else {
        throw new Error(`cannot turn ${node.type} to a statement`);
      }
    }
    node.type = newType;
    return node;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS((exports, module) => {
  var baseGetTag = require_baseGetTag();
  var getPrototype = require_getPrototype();
  var isObjectLike = require_isObjectLike();
  var objectTag = "[object Object]";
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  module.exports = isPlainObject;
});

// node_modules/lodash/_baseIsRegExp.js
var require_baseIsRegExp = __commonJS((exports, module) => {
  var baseGetTag = require_baseGetTag();
  var isObjectLike = require_isObjectLike();
  var regexpTag = "[object RegExp]";
  function baseIsRegExp(value) {
    return isObjectLike(value) && baseGetTag(value) == regexpTag;
  }
  module.exports = baseIsRegExp;
});

// node_modules/lodash/isRegExp.js
var require_isRegExp = __commonJS((exports, module) => {
  var baseIsRegExp = require_baseIsRegExp();
  var baseUnary = require_baseUnary();
  var nodeUtil = require_nodeUtil();
  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
  module.exports = isRegExp;
});

// public/pkgs/@babel/types@7.12.12/lib/converters/valueToNode.js
var require_valueToNode = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _isPlainObject = _interopRequireDefault(require_isPlainObject());
  var _isRegExp = _interopRequireDefault(require_isRegExp());
  var _isValidIdentifier = _interopRequireDefault(require_isValidIdentifier());
  var _generated = require_generated2();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var _default = valueToNode;
  exports.default = _default;
  function valueToNode(value) {
    if (value === void 0) {
      return (0, _generated.identifier)("undefined");
    }
    if (value === true || value === false) {
      return (0, _generated.booleanLiteral)(value);
    }
    if (value === null) {
      return (0, _generated.nullLiteral)();
    }
    if (typeof value === "string") {
      return (0, _generated.stringLiteral)(value);
    }
    if (typeof value === "number") {
      let result;
      if (Number.isFinite(value)) {
        result = (0, _generated.numericLiteral)(Math.abs(value));
      } else {
        let numerator;
        if (Number.isNaN(value)) {
          numerator = (0, _generated.numericLiteral)(0);
        } else {
          numerator = (0, _generated.numericLiteral)(1);
        }
        result = (0, _generated.binaryExpression)("/", numerator, (0, _generated.numericLiteral)(0));
      }
      if (value < 0 || Object.is(value, -0)) {
        result = (0, _generated.unaryExpression)("-", result);
      }
      return result;
    }
    if ((0, _isRegExp.default)(value)) {
      const pattern = value.source;
      const flags = value.toString().match(/\/([a-z]+|)$/)[1];
      return (0, _generated.regExpLiteral)(pattern, flags);
    }
    if (Array.isArray(value)) {
      return (0, _generated.arrayExpression)(value.map(valueToNode));
    }
    if ((0, _isPlainObject.default)(value)) {
      const props = [];
      for (const key of Object.keys(value)) {
        let nodeKey;
        if ((0, _isValidIdentifier.default)(key)) {
          nodeKey = (0, _generated.identifier)(key);
        } else {
          nodeKey = (0, _generated.stringLiteral)(key);
        }
        props.push((0, _generated.objectProperty)(nodeKey, valueToNode(value[key])));
      }
      return (0, _generated.objectExpression)(props);
    }
    throw new Error("don't know how to turn this value into a node");
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/appendToMemberExpression.js
var require_appendToMemberExpression = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = appendToMemberExpression;
  var _generated = require_generated2();
  function appendToMemberExpression(member, append, computed = false) {
    member.object = (0, _generated.memberExpression)(member.object, member.property, member.computed);
    member.property = append;
    member.computed = !!computed;
    return member;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/inherits.js
var require_inherits = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inherits;
  var _constants = require_constants();
  var _inheritsComments = _interopRequireDefault(require_inheritsComments());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function inherits(child, parent) {
    if (!child || !parent)
      return child;
    for (const key of _constants.INHERIT_KEYS.optional) {
      if (child[key] == null) {
        child[key] = parent[key];
      }
    }
    for (const key of Object.keys(parent)) {
      if (key[0] === "_" && key !== "__clone")
        child[key] = parent[key];
    }
    for (const key of _constants.INHERIT_KEYS.force) {
      child[key] = parent[key];
    }
    (0, _inheritsComments.default)(child, parent);
    return child;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/modifications/prependToMemberExpression.js
var require_prependToMemberExpression = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prependToMemberExpression;
  var _generated = require_generated2();
  function prependToMemberExpression(member, prepend) {
    member.object = (0, _generated.memberExpression)(prepend, member.object);
    return member;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/retrievers/getOuterBindingIdentifiers.js
var require_getOuterBindingIdentifiers = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _getBindingIdentifiers = _interopRequireDefault(require_getBindingIdentifiers());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var _default = getOuterBindingIdentifiers;
  exports.default = _default;
  function getOuterBindingIdentifiers(node, duplicates) {
    return (0, _getBindingIdentifiers.default)(node, duplicates, true);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/traverse/traverse.js
var require_traverse = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = traverse;
  var _definitions = require_definitions();
  function traverse(node, handlers, state) {
    if (typeof handlers === "function") {
      handlers = {
        enter: handlers
      };
    }
    const {
      enter,
      exit
    } = handlers;
    traverseSimpleImpl(node, enter, exit, state, []);
  }
  function traverseSimpleImpl(node, enter, exit, state, ancestors) {
    const keys = _definitions.VISITOR_KEYS[node.type];
    if (!keys)
      return;
    if (enter)
      enter(node, ancestors, state);
    for (const key of keys) {
      const subNode = node[key];
      if (Array.isArray(subNode)) {
        for (let i = 0; i < subNode.length; i++) {
          const child = subNode[i];
          if (!child)
            continue;
          ancestors.push({
            node,
            key,
            index: i
          });
          traverseSimpleImpl(child, enter, exit, state, ancestors);
          ancestors.pop();
        }
      } else if (subNode) {
        ancestors.push({
          node,
          key
        });
        traverseSimpleImpl(subNode, enter, exit, state, ancestors);
        ancestors.pop();
      }
    }
    if (exit)
      exit(node, ancestors, state);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isBinding.js
var require_isBinding = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBinding;
  var _getBindingIdentifiers = _interopRequireDefault(require_getBindingIdentifiers());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function isBinding(node, parent, grandparent) {
    if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
      return false;
    }
    const keys = _getBindingIdentifiers.default.keys[parent.type];
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const val = parent[key];
        if (Array.isArray(val)) {
          if (val.indexOf(node) >= 0)
            return true;
        } else {
          if (val === node)
            return true;
        }
      }
    }
    return false;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isLet.js
var require_isLet = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLet;
  var _generated = require_generated();
  var _constants = require_constants();
  function isLet(node) {
    return (0, _generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isBlockScoped.js
var require_isBlockScoped = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBlockScoped;
  var _generated = require_generated();
  var _isLet = _interopRequireDefault(require_isLet());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function isBlockScoped(node) {
    return (0, _generated.isFunctionDeclaration)(node) || (0, _generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isImmutable.js
var require_isImmutable = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isImmutable;
  var _isType = _interopRequireDefault(require_isType());
  var _generated = require_generated();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function isImmutable(node) {
    if ((0, _isType.default)(node.type, "Immutable"))
      return true;
    if ((0, _generated.isIdentifier)(node)) {
      if (node.name === "undefined") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isNodesEquivalent.js
var require_isNodesEquivalent = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isNodesEquivalent;
  var _definitions = require_definitions();
  function isNodesEquivalent(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
      return a === b;
    }
    if (a.type !== b.type) {
      return false;
    }
    const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
    const visitorKeys = _definitions.VISITOR_KEYS[a.type];
    for (const field of fields) {
      if (typeof a[field] !== typeof b[field]) {
        return false;
      }
      if (a[field] == null && b[field] == null) {
        continue;
      } else if (a[field] == null || b[field] == null) {
        return false;
      }
      if (Array.isArray(a[field])) {
        if (!Array.isArray(b[field])) {
          return false;
        }
        if (a[field].length !== b[field].length) {
          return false;
        }
        for (let i = 0; i < a[field].length; i++) {
          if (!isNodesEquivalent(a[field][i], b[field][i])) {
            return false;
          }
        }
        continue;
      }
      if (typeof a[field] === "object" && !(visitorKeys == null ? void 0 : visitorKeys.includes(field))) {
        for (const key of Object.keys(a[field])) {
          if (a[field][key] !== b[field][key]) {
            return false;
          }
        }
        continue;
      }
      if (!isNodesEquivalent(a[field], b[field])) {
        return false;
      }
    }
    return true;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isReferenced.js
var require_isReferenced = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isReferenced;
  function isReferenced(node, parent, grandparent) {
    switch (parent.type) {
      case "MemberExpression":
      case "JSXMemberExpression":
      case "OptionalMemberExpression":
        if (parent.property === node) {
          return !!parent.computed;
        }
        return parent.object === node;
      case "VariableDeclarator":
        return parent.init === node;
      case "ArrowFunctionExpression":
        return parent.body === node;
      case "PrivateName":
        return false;
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "ObjectMethod":
        if (parent.params.includes(node)) {
          return false;
        }
      case "ObjectProperty":
      case "ClassProperty":
      case "ClassPrivateProperty":
        if (parent.key === node) {
          return !!parent.computed;
        }
        if (parent.value === node) {
          return !grandparent || grandparent.type !== "ObjectPattern";
        }
        return true;
      case "ClassDeclaration":
      case "ClassExpression":
        return parent.superClass === node;
      case "AssignmentExpression":
        return parent.right === node;
      case "AssignmentPattern":
        return parent.right === node;
      case "LabeledStatement":
        return false;
      case "CatchClause":
        return false;
      case "RestElement":
        return false;
      case "BreakStatement":
      case "ContinueStatement":
        return false;
      case "FunctionDeclaration":
      case "FunctionExpression":
        return false;
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        return false;
      case "ExportSpecifier":
        if (grandparent == null ? void 0 : grandparent.source) {
          return false;
        }
        return parent.local === node;
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return false;
      case "JSXAttribute":
        return false;
      case "ObjectPattern":
      case "ArrayPattern":
        return false;
      case "MetaProperty":
        return false;
      case "ObjectTypeProperty":
        return parent.key !== node;
      case "TSEnumMember":
        return parent.id !== node;
      case "TSPropertySignature":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return true;
    }
    return true;
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isScope.js
var require_isScope = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isScope;
  var _generated = require_generated();
  function isScope(node, parent) {
    if ((0, _generated.isBlockStatement)(node) && ((0, _generated.isFunction)(parent) || (0, _generated.isCatchClause)(parent))) {
      return false;
    }
    if ((0, _generated.isPattern)(node) && ((0, _generated.isFunction)(parent) || (0, _generated.isCatchClause)(parent))) {
      return true;
    }
    return (0, _generated.isScopable)(node);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isSpecifierDefault.js
var require_isSpecifierDefault = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isSpecifierDefault;
  var _generated = require_generated();
  function isSpecifierDefault(specifier) {
    return (0, _generated.isImportDefaultSpecifier)(specifier) || (0, _generated.isIdentifier)(specifier.imported || specifier.exported, {
      name: "default"
    });
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isValidES3Identifier.js
var require_isValidES3Identifier = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValidES3Identifier;
  var _isValidIdentifier = _interopRequireDefault(require_isValidIdentifier());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
  function isValidES3Identifier(name) {
    return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
  }
});

// public/pkgs/@babel/types@7.12.12/lib/validators/isVar.js
var require_isVar = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isVar;
  var _generated = require_generated();
  var _constants = require_constants();
  function isVar(node) {
    return (0, _generated.isVariableDeclaration)(node, {
      kind: "var"
    }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
  }
});

// public/pkgs/@babel/types@7.12.12/lib/ast-types/generated/index.js
var require_generated5 = __commonJS(() => {
});

// public/pkgs/@babel/types@7.12.12/lib/index.js
var require_lib2 = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    react: true,
    assertNode: true,
    createTypeAnnotationBasedOnTypeof: true,
    createUnionTypeAnnotation: true,
    createFlowUnionType: true,
    createTSUnionType: true,
    cloneNode: true,
    clone: true,
    cloneDeep: true,
    cloneDeepWithoutLoc: true,
    cloneWithoutLoc: true,
    addComment: true,
    addComments: true,
    inheritInnerComments: true,
    inheritLeadingComments: true,
    inheritsComments: true,
    inheritTrailingComments: true,
    removeComments: true,
    ensureBlock: true,
    toBindingIdentifierName: true,
    toBlock: true,
    toComputedKey: true,
    toExpression: true,
    toIdentifier: true,
    toKeyAlias: true,
    toSequenceExpression: true,
    toStatement: true,
    valueToNode: true,
    appendToMemberExpression: true,
    inherits: true,
    prependToMemberExpression: true,
    removeProperties: true,
    removePropertiesDeep: true,
    removeTypeDuplicates: true,
    getBindingIdentifiers: true,
    getOuterBindingIdentifiers: true,
    traverse: true,
    traverseFast: true,
    shallowEqual: true,
    is: true,
    isBinding: true,
    isBlockScoped: true,
    isImmutable: true,
    isLet: true,
    isNode: true,
    isNodesEquivalent: true,
    isPlaceholderType: true,
    isReferenced: true,
    isScope: true,
    isSpecifierDefault: true,
    isType: true,
    isValidES3Identifier: true,
    isValidIdentifier: true,
    isVar: true,
    matchesPattern: true,
    validate: true,
    buildMatchMemberExpression: true
  };
  Object.defineProperty(exports, "assertNode", {
    enumerable: true,
    get: function() {
      return _assertNode.default;
    }
  });
  Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
    enumerable: true,
    get: function() {
      return _createTypeAnnotationBasedOnTypeof.default;
    }
  });
  Object.defineProperty(exports, "createUnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _createFlowUnionType.default;
    }
  });
  Object.defineProperty(exports, "createFlowUnionType", {
    enumerable: true,
    get: function() {
      return _createFlowUnionType.default;
    }
  });
  Object.defineProperty(exports, "createTSUnionType", {
    enumerable: true,
    get: function() {
      return _createTSUnionType.default;
    }
  });
  Object.defineProperty(exports, "cloneNode", {
    enumerable: true,
    get: function() {
      return _cloneNode.default;
    }
  });
  Object.defineProperty(exports, "clone", {
    enumerable: true,
    get: function() {
      return _clone.default;
    }
  });
  Object.defineProperty(exports, "cloneDeep", {
    enumerable: true,
    get: function() {
      return _cloneDeep.default;
    }
  });
  Object.defineProperty(exports, "cloneDeepWithoutLoc", {
    enumerable: true,
    get: function() {
      return _cloneDeepWithoutLoc.default;
    }
  });
  Object.defineProperty(exports, "cloneWithoutLoc", {
    enumerable: true,
    get: function() {
      return _cloneWithoutLoc.default;
    }
  });
  Object.defineProperty(exports, "addComment", {
    enumerable: true,
    get: function() {
      return _addComment.default;
    }
  });
  Object.defineProperty(exports, "addComments", {
    enumerable: true,
    get: function() {
      return _addComments.default;
    }
  });
  Object.defineProperty(exports, "inheritInnerComments", {
    enumerable: true,
    get: function() {
      return _inheritInnerComments.default;
    }
  });
  Object.defineProperty(exports, "inheritLeadingComments", {
    enumerable: true,
    get: function() {
      return _inheritLeadingComments.default;
    }
  });
  Object.defineProperty(exports, "inheritsComments", {
    enumerable: true,
    get: function() {
      return _inheritsComments.default;
    }
  });
  Object.defineProperty(exports, "inheritTrailingComments", {
    enumerable: true,
    get: function() {
      return _inheritTrailingComments.default;
    }
  });
  Object.defineProperty(exports, "removeComments", {
    enumerable: true,
    get: function() {
      return _removeComments.default;
    }
  });
  Object.defineProperty(exports, "ensureBlock", {
    enumerable: true,
    get: function() {
      return _ensureBlock.default;
    }
  });
  Object.defineProperty(exports, "toBindingIdentifierName", {
    enumerable: true,
    get: function() {
      return _toBindingIdentifierName.default;
    }
  });
  Object.defineProperty(exports, "toBlock", {
    enumerable: true,
    get: function() {
      return _toBlock.default;
    }
  });
  Object.defineProperty(exports, "toComputedKey", {
    enumerable: true,
    get: function() {
      return _toComputedKey.default;
    }
  });
  Object.defineProperty(exports, "toExpression", {
    enumerable: true,
    get: function() {
      return _toExpression.default;
    }
  });
  Object.defineProperty(exports, "toIdentifier", {
    enumerable: true,
    get: function() {
      return _toIdentifier.default;
    }
  });
  Object.defineProperty(exports, "toKeyAlias", {
    enumerable: true,
    get: function() {
      return _toKeyAlias.default;
    }
  });
  Object.defineProperty(exports, "toSequenceExpression", {
    enumerable: true,
    get: function() {
      return _toSequenceExpression.default;
    }
  });
  Object.defineProperty(exports, "toStatement", {
    enumerable: true,
    get: function() {
      return _toStatement.default;
    }
  });
  Object.defineProperty(exports, "valueToNode", {
    enumerable: true,
    get: function() {
      return _valueToNode.default;
    }
  });
  Object.defineProperty(exports, "appendToMemberExpression", {
    enumerable: true,
    get: function() {
      return _appendToMemberExpression.default;
    }
  });
  Object.defineProperty(exports, "inherits", {
    enumerable: true,
    get: function() {
      return _inherits.default;
    }
  });
  Object.defineProperty(exports, "prependToMemberExpression", {
    enumerable: true,
    get: function() {
      return _prependToMemberExpression.default;
    }
  });
  Object.defineProperty(exports, "removeProperties", {
    enumerable: true,
    get: function() {
      return _removeProperties.default;
    }
  });
  Object.defineProperty(exports, "removePropertiesDeep", {
    enumerable: true,
    get: function() {
      return _removePropertiesDeep.default;
    }
  });
  Object.defineProperty(exports, "removeTypeDuplicates", {
    enumerable: true,
    get: function() {
      return _removeTypeDuplicates.default;
    }
  });
  Object.defineProperty(exports, "getBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return _getBindingIdentifiers.default;
    }
  });
  Object.defineProperty(exports, "getOuterBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return _getOuterBindingIdentifiers.default;
    }
  });
  Object.defineProperty(exports, "traverse", {
    enumerable: true,
    get: function() {
      return _traverse.default;
    }
  });
  Object.defineProperty(exports, "traverseFast", {
    enumerable: true,
    get: function() {
      return _traverseFast.default;
    }
  });
  Object.defineProperty(exports, "shallowEqual", {
    enumerable: true,
    get: function() {
      return _shallowEqual.default;
    }
  });
  Object.defineProperty(exports, "is", {
    enumerable: true,
    get: function() {
      return _is.default;
    }
  });
  Object.defineProperty(exports, "isBinding", {
    enumerable: true,
    get: function() {
      return _isBinding.default;
    }
  });
  Object.defineProperty(exports, "isBlockScoped", {
    enumerable: true,
    get: function() {
      return _isBlockScoped.default;
    }
  });
  Object.defineProperty(exports, "isImmutable", {
    enumerable: true,
    get: function() {
      return _isImmutable.default;
    }
  });
  Object.defineProperty(exports, "isLet", {
    enumerable: true,
    get: function() {
      return _isLet.default;
    }
  });
  Object.defineProperty(exports, "isNode", {
    enumerable: true,
    get: function() {
      return _isNode.default;
    }
  });
  Object.defineProperty(exports, "isNodesEquivalent", {
    enumerable: true,
    get: function() {
      return _isNodesEquivalent.default;
    }
  });
  Object.defineProperty(exports, "isPlaceholderType", {
    enumerable: true,
    get: function() {
      return _isPlaceholderType.default;
    }
  });
  Object.defineProperty(exports, "isReferenced", {
    enumerable: true,
    get: function() {
      return _isReferenced.default;
    }
  });
  Object.defineProperty(exports, "isScope", {
    enumerable: true,
    get: function() {
      return _isScope.default;
    }
  });
  Object.defineProperty(exports, "isSpecifierDefault", {
    enumerable: true,
    get: function() {
      return _isSpecifierDefault.default;
    }
  });
  Object.defineProperty(exports, "isType", {
    enumerable: true,
    get: function() {
      return _isType.default;
    }
  });
  Object.defineProperty(exports, "isValidES3Identifier", {
    enumerable: true,
    get: function() {
      return _isValidES3Identifier.default;
    }
  });
  Object.defineProperty(exports, "isValidIdentifier", {
    enumerable: true,
    get: function() {
      return _isValidIdentifier.default;
    }
  });
  Object.defineProperty(exports, "isVar", {
    enumerable: true,
    get: function() {
      return _isVar.default;
    }
  });
  Object.defineProperty(exports, "matchesPattern", {
    enumerable: true,
    get: function() {
      return _matchesPattern.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function() {
      return _validate.default;
    }
  });
  Object.defineProperty(exports, "buildMatchMemberExpression", {
    enumerable: true,
    get: function() {
      return _buildMatchMemberExpression.default;
    }
  });
  exports.react = void 0;
  var _isReactComponent = _interopRequireDefault(require_isReactComponent());
  var _isCompatTag = _interopRequireDefault(require_isCompatTag());
  var _buildChildren = _interopRequireDefault(require_buildChildren());
  var _assertNode = _interopRequireDefault(require_assertNode());
  var _generated = require_generated3();
  Object.keys(_generated).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated[key];
      }
    });
  });
  var _createTypeAnnotationBasedOnTypeof = _interopRequireDefault(require_createTypeAnnotationBasedOnTypeof());
  var _createFlowUnionType = _interopRequireDefault(require_createFlowUnionType());
  var _createTSUnionType = _interopRequireDefault(require_createTSUnionType());
  var _generated2 = require_generated2();
  Object.keys(_generated2).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated2[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated2[key];
      }
    });
  });
  var _uppercase = require_uppercase();
  Object.keys(_uppercase).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _uppercase[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _uppercase[key];
      }
    });
  });
  var _cloneNode = _interopRequireDefault(require_cloneNode());
  var _clone = _interopRequireDefault(require_clone2());
  var _cloneDeep = _interopRequireDefault(require_cloneDeep());
  var _cloneDeepWithoutLoc = _interopRequireDefault(require_cloneDeepWithoutLoc());
  var _cloneWithoutLoc = _interopRequireDefault(require_cloneWithoutLoc());
  var _addComment = _interopRequireDefault(require_addComment());
  var _addComments = _interopRequireDefault(require_addComments());
  var _inheritInnerComments = _interopRequireDefault(require_inheritInnerComments());
  var _inheritLeadingComments = _interopRequireDefault(require_inheritLeadingComments());
  var _inheritsComments = _interopRequireDefault(require_inheritsComments());
  var _inheritTrailingComments = _interopRequireDefault(require_inheritTrailingComments());
  var _removeComments = _interopRequireDefault(require_removeComments());
  var _generated3 = require_generated4();
  Object.keys(_generated3).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated3[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated3[key];
      }
    });
  });
  var _constants = require_constants();
  Object.keys(_constants).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _constants[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _constants[key];
      }
    });
  });
  var _ensureBlock = _interopRequireDefault(require_ensureBlock());
  var _toBindingIdentifierName = _interopRequireDefault(require_toBindingIdentifierName());
  var _toBlock = _interopRequireDefault(require_toBlock());
  var _toComputedKey = _interopRequireDefault(require_toComputedKey());
  var _toExpression = _interopRequireDefault(require_toExpression());
  var _toIdentifier = _interopRequireDefault(require_toIdentifier());
  var _toKeyAlias = _interopRequireDefault(require_toKeyAlias());
  var _toSequenceExpression = _interopRequireDefault(require_toSequenceExpression());
  var _toStatement = _interopRequireDefault(require_toStatement());
  var _valueToNode = _interopRequireDefault(require_valueToNode());
  var _definitions = require_definitions();
  Object.keys(_definitions).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _definitions[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _definitions[key];
      }
    });
  });
  var _appendToMemberExpression = _interopRequireDefault(require_appendToMemberExpression());
  var _inherits = _interopRequireDefault(require_inherits());
  var _prependToMemberExpression = _interopRequireDefault(require_prependToMemberExpression());
  var _removeProperties = _interopRequireDefault(require_removeProperties());
  var _removePropertiesDeep = _interopRequireDefault(require_removePropertiesDeep());
  var _removeTypeDuplicates = _interopRequireDefault(require_removeTypeDuplicates());
  var _getBindingIdentifiers = _interopRequireDefault(require_getBindingIdentifiers());
  var _getOuterBindingIdentifiers = _interopRequireDefault(require_getOuterBindingIdentifiers());
  var _traverse = _interopRequireWildcard(require_traverse());
  Object.keys(_traverse).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _traverse[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _traverse[key];
      }
    });
  });
  var _traverseFast = _interopRequireDefault(require_traverseFast());
  var _shallowEqual = _interopRequireDefault(require_shallowEqual());
  var _is = _interopRequireDefault(require_is());
  var _isBinding = _interopRequireDefault(require_isBinding());
  var _isBlockScoped = _interopRequireDefault(require_isBlockScoped());
  var _isImmutable = _interopRequireDefault(require_isImmutable());
  var _isLet = _interopRequireDefault(require_isLet());
  var _isNode = _interopRequireDefault(require_isNode());
  var _isNodesEquivalent = _interopRequireDefault(require_isNodesEquivalent());
  var _isPlaceholderType = _interopRequireDefault(require_isPlaceholderType());
  var _isReferenced = _interopRequireDefault(require_isReferenced());
  var _isScope = _interopRequireDefault(require_isScope());
  var _isSpecifierDefault = _interopRequireDefault(require_isSpecifierDefault());
  var _isType = _interopRequireDefault(require_isType());
  var _isValidES3Identifier = _interopRequireDefault(require_isValidES3Identifier());
  var _isValidIdentifier = _interopRequireDefault(require_isValidIdentifier());
  var _isVar = _interopRequireDefault(require_isVar());
  var _matchesPattern = _interopRequireDefault(require_matchesPattern());
  var _validate = _interopRequireDefault(require_validate());
  var _buildMatchMemberExpression = _interopRequireDefault(require_buildMatchMemberExpression());
  var _generated4 = require_generated();
  Object.keys(_generated4).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated4[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated4[key];
      }
    });
  });
  var _generated5 = require_generated5();
  Object.keys(_generated5).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated5[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated5[key];
      }
    });
  });
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var react = {
    isReactComponent: _isReactComponent.default,
    isCompatTag: _isCompatTag.default,
    buildChildren: _buildChildren.default
  };
  exports.react = react;
});
export default require_lib2();
