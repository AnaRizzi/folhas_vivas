(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pag 06_atlas_", frames: [[0,0,3857,2171],[0,2173,1087,964]]}
];


// symbols:



(lib.fundocena2 = function() {
	this.initialize(ss["pag 06_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.txtcena06 = function() {
	this.initialize(ss["pag 06_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.txtcena06();
	this.instance.parent = this;
	this.instance.setTransform(23,12,0.3284,0.3284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fundo
	this.instance = new lib.fundocena2();
	this.instance.parent = this;
	this.instance.setTransform(-20,-182,0.3869,0.3869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.mc_lagrima_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5ECEF").s().p("Ag4ADQgMgeA/gCQAegBAiAGQgsArgaAJQgHACgGAAQgVAAgLgbg");
	this.shape.setTransform(-9.421,-32.0629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5ECEF").s().p("AgaAeQghgDABglQACghA5AYQAdAMAdASQgzATgbAAIgHAAg");
	this.shape_1.setTransform(5.7467,-65.8582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#94C4C6").p("Ah/gUIAqgKQAtgKAQAHQAMAEAJAhQAIAfATABQAjACBFgM");
	this.shape_2.setTransform(16.6322,-12.4427);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#94C4C6").p("Ah/gUIAqgKQAtgKAQAHQAMAEAJAhQAIAfATABQAjACBFgL");
	this.shape_3.setTransform(29.4305,-41.1922);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5ECEF").s().p("AihJkIgIiCQgaBfgeAQQg8AigWmFQgNjzBJjMQA3icBmh8QAyg9A3gvQAcgXASgLQgtgCgbgLQg2gVBXgrQBZgrBsASQA2AIAlARQg1BZhBByQiCDkg+B9QhBCEAQDEQAJBhAVBJIAtCRQAmCSguAAQgsAAgmhrIgchsQAeCfACA6QAFBiguACIgCABQgpAAgRiAg");
	this.shape_4.setTransform(30.7762,-1.6497);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5ECEF").s().p("AgoAhQgZgVA3geIA7gbQgSA6gUAVQgLAMgMAAQgNAAgPgNg");
	this.shape_5.setTransform(-56.6789,9.8003);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5ECEF").s().p("AgzAPQgSgbA9gOQAegHAigCQgiAzgXAOQgKAGgJAAQgRAAgOgVg");
	this.shape_6.setTransform(-30.1288,-54.2193);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#94C4C6").p("Ah+grIAtgEQAvgDAQAKQAKAGAFAlQADAiATAFQAkAIBIgC");
	this.shape_7.setTransform(-3.8449,5.3608);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#94C4C6").p("AhrgnIAeACQAgAEAOAIQAJAGAKAaQAJAYAQAEQAfAHBAgC");
	this.shape_8.setTransform(32.916,-57.8272);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#94C4C6").p("Ah+grIAtgEQAvgDAPAKQALAGAFAlQADAjATAEQAkAIBIgC");
	this.shape_9.setTransform(10.4551,-30.5892);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5ECEF").s().p("Aj2MHQgsgEACiOIALiNQgoBhghANQhCAaAlmlQAYkGBpjQQBRifB6h0QA7g5BAgpIA0geQgtgJgagQQg1ggBhggQBgggBsAkQA2ASAiAYQhDBXhTBwQioDghRB8QhXCDgODVQgGBqAKBRIAZCkQAQCigugIQgugHgWh5IgNh3QAGCwgGA9QgKBmgsAAIgDAAg");
	this.shape_10.setTransform(18.6207,-0.5206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.dinoazulcena04ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pag_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2E").s().p("AggAkQgOgOAAgWQAAgUAOgPQAOgPASAAQATAAAOAPQAOAPAAAUQAAAWgOAOQgOAPgTAAQgSAAgOgPg");
	this.shape.setTransform(50.85,92.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#373535").p("ABsAAQAAAwggAjQgfAigtAAQgrAAgggiQgfgjAAgwQAAgvAfgiQAggjArAAQAtAAAfAjQAgAiAAAvg");
	this.shape_1.setTransform(54.6,95.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBTQgfgjgBgwQABgvAfgiQAggiArAAQAtAAAfAiQAfAiAAAvQAAAwgfAjQgfAigtAAQgrAAgggig");
	this.shape_2.setTransform(54.6,95.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ABABAB").p("ABRAKQgDAYgNAVQgZAsgsgLQgtgKgUhSIgKhQIBDAtQBHAsAWAFg");
	this.shape_3.setTransform(61.0559,49.4423);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7D7D7").s().p("AgFBVQgtgKgThSIgLhQIBEAtQBHAsAWAFQgEAYgMAVQgUAkgiAAQgIAAgIgDg");
	this.shape_4.setTransform(61.125,49.7021);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#433F78").p("ACxBSIjfAtQgbACgcgIQg5gSgKg3QgGgjAGgLIAOAJQAQAIALgCQAqgJBDgcQBDgdAkgZQAKgMgBgPQAAgPgRgL");
	this.shape_5.setTransform(31.7987,137.7534);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#69A7D7").s().p("AhoB5Qg4gSgLg3QgFgjAFgLIAPAJQAQAIALgCQApgJBEgcQBCgdAlgZQAHgJABgJIgQgjQAQALAAAPIAAAJIBTCuIjeAtIgNABQgUAAgXgHg");
	this.shape_6.setTransform(32,137.7534);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#433F78").p("ACxhTQgLgTgWgUQgsgog0gIQg0AKg5AVQhxApgQA3QgQA2AmBTQATAqAWAfIAeg3QA1AAA/gGQCAgMA0gZ");
	this.shape_7.setTransform(20.0834,117.9384);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#69A7D7").s().p("AiqBgQglhTAPg2QAQg3BygpQA4gVA1gKQA0AIAsAoQAVAUAMATIAVCYQg0AZiAAMQg+AGg2AAIgeA3QgWgfgTgqg");
	this.shape_8.setTransform(20.2233,117.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD4874").s().p("Ah4AyQgOgNABgQQAAgIAZgJQApgOAXgNQAhgTAxgLQAagFASgCIAaAGQAaAIAAAJQAAAJhUAnQhSAogmAIQgKACgIAAQgUAAgMgLg");
	this.shape_9.setTransform(28.5741,136.5793);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#433F78").p("AH1nkQhTg2h7glQj1hKjIBWQgLAEgYANQgdAPgSAMQhLA0hABEQh8CFgCB6IARB0QAZB9ApA0QAqA0AnCRQATBIALA+IASAQQAYAUAhARQBoA5CSAPQCyASBxgtQB1gtA3hx");
	this.shape_10.setTransform(65.2365,91.3676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#69A7D7").s().p("AAVJdQiSgPhpg5QgggRgYgUIgSgQQgLg+gUhIQgmiRgqg0Qgpg0gZh9IgSh0QADh6B8iFQA/hEBMg0QASgMAdgPIAjgRQDIhWD1BKQB7AlBSA2IgQOIQg3Bxh0AtQhRAghxAAQguAAgzgFg");
	this.shape_11.setTransform(65.35,91.3676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#433F78").p("AieKmIBQA3QBbA3BAABQAIgMALgYQAVgvAKg+IA+AQQBKAMBBgMQgGgmgLgqQgVhVgXgaIBcgJQBjgOAkgaQgKgsgQg1QgfhpggguIBMhLQBKhVgEgwQgYgdgjgeQhEg+gygKQAUgpASgzQAlhngKg0QgqgLgugIQhdgSgUAJQgPgwgXg6QguhzgmgxQgnAHgsALQhYAVgZAUQgqgegwghQhghAgcgHIhVCZQgeAEglAIQhJAQgeASIAKBJQAOBPATAc");
	this.shape_12.setTransform(108.1418,79.3385);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#69A7D7").s().p("AhPLcIhQg2Ilbw+QgTgdgOhOIgLhJQAfgTBJgPQAkgIAfgEIBUiZQAdAHBgBAQAwAgAqAfQAZgUBXgWQAsgKAngHQAnAxAtBzQAXA6APAvQAUgIBdARQAuAJArAKQAJA1gkBmQgSA0gUAoQAxAKBFA+QAiAfAYAdQAFAwhLBVIhLBLQAfAtAgBqQAQA1AJAsQgkAZhjAPIhcAJQAXAZAWBVQALArAGAlQhBANhLgNIg9gPQgLA9gVAwQgKAYgJALQg/gBhcg3g");
	this.shape_13.setTransform(108.1628,79.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#433F78").p("AinieIg2DiIALANQAPAPAYAMQBNAqCFAGQAeggAmgzQBMhjAnhb");
	this.shape_14.setTransform(96.1277,151.0971);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#69A7D7").s().p("AirBuQgZgNgPgPIgKgMIA2jiIGFApQgnBahMBkQgmAygeAhQiGgHhMgpg");
	this.shape_15.setTransform(96.15,150.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#433F78").p("An/prID+AUQESAhBnA+QAPAJBdA2QA3AfAgAYQBSA+BOCDQBKB+AFETQACCLgMBxQgbAUgxASQhjAlhugIIh/j1IgIB6QgNB+gWAbQg4AchLATQiXAlhhgxQgOhMgohQQhRiiiEgb");
	this.shape_16.setTransform(184.4956,112.9217);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#69A7D7").s().p("AkgJQQgOhMgohQQhRiiiEgbIAutiID+AUQESAhBnA+IBsA/QA3AfAgAYQBSA+BOCDQBKB+AFETQACCLgMBxQgbAUgxASQhjAlhugIIh/j1IgIB6QgNB+gWAbQg4AchLATQhBAQg3AAQhJAAg3gcg");
	this.shape_17.setTransform(184.2958,112.9209);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#433F78").p("AjagXIAogUQAxgcArglQCKh0AgifIAXAHQAcANAWAdQBHBdgODhQgNDghVBvQgbAjgfATIgZAM");
	this.shape_18.setTransform(221.3695,68.3635);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#69A7D7").s().p("AjZgYIAogUQAxgcAsgkQCKh1AfifIAYAHQAcANAWAdQBGBdgNDhQgNDhhWBuQgbAjgeATIgaANg");
	this.shape_19.setTransform(221.2335,68.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#433F78").p("AAnhBQgtAQgtARQhaAiADAKQAEAPAUAmIDGggIA5go");
	this.shape_20.setTransform(28.7673,136.8253);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#69A7D7").s().p("AiLAMQgDgKBaghQAtgSAtgQIBmA6Ig5AoIjGAhQgUgngEgPg");
	this.shape_21.setTransform(28.8702,136.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#ABABAB").p("ABWgBQgBAXgLAXQgVAugugHQgtgGgbhPIgShPIBIAmQBLAmAWADg");
	this.shape_22.setTransform(35.2607,41.1673);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D7D7D7").s().p("AAGBSQgtgGgbhPIgShPIBIAmQBLAmAWADQgBAXgLAXQgSAogmAAIgLgBg");
	this.shape_23.setTransform(35.375,41.3906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,244.5,176.3);


(lib.Clip_Group_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D5B39").p("AC/jVQgPgCgTAKQgWAOgMAHQgqAagggcQgjgggqAWQgdAQgWAgQgPAXgbAIQgeAKg3gEQg1gEgiA6QgdAzAGAuQAGAtAfAsQAkAxAnABQANAAA3gHQAggFAXALQATAJAgAXQAdAOAlgbQAfgVAnggQAcgWASABQAPABBBAIQA6gBAEgrQAEgtABgNQACgRAJgyQANhJgHgkQgJgugrgBQgjAAgIgHQgKgKgUgDg");
	this.shape.setTransform(32.2826,21.9474);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_4, null, null);


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BD3654").p("AEKiEQglgFg1ACQhpAFhJAlQgwgDg7AIQh2AQg7A5Qg7A5AcA1QAKARARAOQAPALAGAAQEmgNAFgGQADgECShRQCRhQADAAQAEAAhBhVg");
	this.shape.setTransform(34.8975,37.7964);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4B5C2").s().p("AkiB+QgRgOgKgRQgcg1A7g5QA7g5B2gQQA7gIAwADQBJglBpgFQA1gCAlAFQBBBVgEAAQgDAAiRBQQiSBRgDAEQgFAGkmANQgGAAgPgLg");
	this.shape_1.setTransform(34.8975,37.7964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.Clip_Group_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D3D4B").s().p("AgeDSQgggXgTgJQgXgLggAFQg3AHgNAAQgngBgkgxQgfgsgGgtQgGguAdgzQAig6A1AEQA3AEAegKQAbgIAPgXQAWggAdgQQAqgWAjAgQAgAcAqgaIAigVQATgKAPACQAUADAKAKQAIAHAjAAQArABAJAuQAHAkgNBJQgJAygCARIgFA6QgEArg6ABIhQgJQgSgBgcAWQgnAggfAVQgZASgUAAQgLAAgKgFg");
	this.shape.setTransform(32.2826,21.9474);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_1, null, null);


(lib.Scene_1_dino_azul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_azul
	this.instance = new lib.dinoazulcena04ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(306.9,583.9,0.6026,0.6026,0,0,0,121.8,87.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.mclagrima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.mc_lagrima_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(23.2,-1.7,1,1,0,0,0,23.2,-1.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-78,123.3,155);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4_obj_
	this.Layer_4 = new lib.Clip_Group_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(32,22.4,1,1,0,0,0,32,22.4);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 0
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeDSQgggXgTgJQgXgLggAFQg3AHgNAAQgngBgkgxQgfgsgGgtQgGguAdgzQAig6A1AEQA3AEAegKQAbgIAPgXQAWggAdgQQAqgWAjAgQAgAcAqgaIAigVQATgKAPACQAUADAKAKQAIAHAjAAQArABAJAuQAHAkgNBJQgJAygCARIgFA6QgEArg6ABIhQgJQgSgBgcAWQgnAggfAVQgZASgUAAQgLAAgKgFg");
	mask.setTransform(32.2826,21.9474);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(34.9,38.3,1,1,0,0,0,34.9,38.3);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 1
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(32.3,21.9,1,1,0,0,0,32.3,21.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 2
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.5,-0.5,65.6,45.4), null);


(lib.chorandocompenaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chorando_com_pena
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(361.5,167.5,1,1,0,0,0,33.8,26.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81353F").s().p("AgbG9IgOgVQgDgdgCgmQgEhLAFgtQABgaAEgkQAIhGARgvQARg0AOhSQANhLABguQACg8gBgRQgFg/gagxIgfg8QADgCAQAVQAMAQAIAPQAOAVAHAXQAIAbAHAyQAKBGgLBUQgDAbgNAwQgPA5gEAVQgOBKgOBdQgHAwADBZQACBUAEgCIgDAaQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(215.6815,368.6167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#81353E").p("Ag+F0QgKgFgOgJQgdgTgSgYQgSgYgEglQgCgngBgMQgBgJAXhIQAWhDgIgRIAdAUQAgAaAPAeQAEgCgGgPQgLgcgzg5QANgZAKgpQAVhRgOhKIAcAHIgcglQgGgTgEgaQgIg1AOgiIAigBQAsAIAyAvQAzAuAVAwQAKAYABAOIgBAPQgGASgZAVQgbAWgOAEIAigHQAugXAOgRIAJBNQAGBVgOAwIgIAUQgJAWgJAIQguAmgQABIAZABQAfgEAbgVIgMAiQgPAogMAXQgRAhguAzQgzA6geALg");
	this.shape_1.setTransform(217.4608,357.3264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D23887").s().p("Ag+F0QgKgFgOgJQgdgTgSgYQgSgYgEglIgDgzQgBgJAXhIQAWhDgIgRIAdAUQAgAaAPAeQAEgCgGgPQgLgcgzg5QANgZAKgpQAVhRgOhKIAcAHIgcglQgGgTgEgaQgIg1AOgiIAigBQAsAIAyAvQAzAuAVAwQAKAYABAOIgBAPQgGASgZAVQgbAWgOAEIAigHQAugXAOgRIAJBNQAGBVgOAwIgIAUQgJAWgJAIQguAmgQABIAZABQAfgEAbgVIgMAiQgPAogMAXQgRAhguAzQgzA6geALg");
	this.shape_2.setTransform(217.4608,357.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3A241").s().p("Am1BZQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIASgSIBAgSQBJgSAugEIA9gHQBHgFAxAHQA2AIBUgCQBMgCAtgIQA6gJASgFQA9gQArgiIA1grQADACgSAUIgaAaQgTASgVAMQgZAMgwARQhDAXhUAEQgbACgygCQg9gEgSgBQhSABhYAEQgwAChYATQhSATADAEIgaABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(226.127,98.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3A241").p("AluAEQADgKAGgQQAOgfATgWQAUgXAkgLQAUgHAegGQAJgDBLAKQBFAIAPgLQgEAPgKASQgTAkgbAUIARgFQAZgQAug+IBFALQBUAFBGgcIgCAdIAfgjIArgTQAygSAlAIIAHAhQAAAtgkA7QgjA6grAdIgkASQgFADgJgBQgTgCgagUQgagWgHgNIANAgIASAVQAVAXALAGQgfANgqALQhTAXgxgFQgngEgPgMQgugmgEgPIAEAZQAKAdAaAXQg/gIgogMQgkgLg7gjQhDgogRgcg");
	this.shape_4.setTransform(237.0197,101.7541);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFDE47").s().p("Ai4CNQgkgLg7gjQhDgogRgcIgDgWQADgKAGgQQAOgfATgWQAUgXAkgLQAUgHAegGQAJgDBLAKQBFAIAPgLQgEAPgKASQgTAkgbAUIARgFQAZgQAug+IBFALQBUAFBGgcIgCAdIAfgjIArgTQAygSAlAIIAHAhQAAAtgkA7QgjA6grAdIgkASQgFADgJgBQgTgCgagUQgagWgHgNIANAgIASAVQAVAXALAGQgfANgqALQhTAXgxgFQgngEgPgMQgugmgEgPIAEAZQAKAdAaAXQg/gIgogMg");
	this.shape_5.setTransform(237.025,101.6519);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#368084").s().p("AB+AuQgbgBgxgKIhPgOQhRgLhXgHQgwgEhaAIQhTAHACAEIgagBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAVgOIBCgKQBLgJAtACIA+ACQBHAEAvANQA1AOBUAJQBKAJAugCQA8gCASgCQA+gJAwgcIA6gkQAEAFgzAnQgWANgVAJQgbAKgyAKQgwALg2AAQgZAAgagDg");
	this.shape_6.setTransform(312.0368,184.5506);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#358084").p("Al0gsIANgaQASgdAWgTQAXgUAlgHQAUgEAfgCQAIgBBKASQBEASAQgJQgGAOgMARQgYAhgdAQIARgCQAbgNA2g3IBDAUQBTAPBIgSIgFAcIAjgeIAtgNQA0gLAjAMIADAiQgGAsgrA1QgrA2guAYIgmANQgFACgJgCQgTgFgWgYQgYgZgFgOIAJAiIAPAXQASAaAKAIQggAIgrAGQhWALgwgLQgmgJgNgOQgpgrgCgQIABAZQAFAeAXAaQg9gQgmgRQgigPg2grQg9gxgNgcg");
	this.shape_7.setTransform(323.2502,187.3349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C1D3").s().p("AgtCTQgmgJgNgOQgpgrgCgQIABAZQAGAeAXAaQg+gQgmgRQgigPg2grQg9gxgNgcIAAgWIAMgaQASgdAXgTQAWgUAlgHQAUgEAfgCQAIgBBKASQBFASAPgJQgGAOgMARQgXAhgdAQIAQgCQAcgNA1g3IBEAUQBSAPBIgSIgEAcIAjgeIAsgNQA0gLAjAMIAEAiQgHAsgrA1QgrA2guAYIgmANQgFACgJgCQgTgFgWgYQgXgZgGgOIAKAiIAOAXQASAaAKAIQggAIgrAGQgrAFgiAAQggAAgZgFg");
	this.shape_8.setTransform(323.25,187.3349);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#368084").s().p("AB+AuQgbgCgxgJIhOgOQhGgKhjgJQgxgDhZAIQhTAHACAEIgagBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAVgOIBCgKQBLgJAuACIA9ACQBHAEAvANQA1AOBUAJQBLAIAugBQA9gCAQgCQA+gJAwgcIA6gkQACADgUARIgdAXQgVAOgWAJQgbAKgyAKQgvALg3AAQgZAAgagDg");
	this.shape_9.setTransform(284.0326,67.9006);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#358084").p("AlzgsIANgaQARgdAXgTQAWgUAlgHQAUgEAfgCQAJgCBJATQBFASAQgJQgGAOgMARQgYAhgdAQIARgCQAbgOA2g2IBDATQBSAQBJgSIgFAcIAjgeIAsgNQA0gLAkAMIADAiQgGAsgrA1QgrA1gvAYIglANQgFADgKgCQgTgFgWgYQgXgZgGgOIAKAiIAPAXQARAaALAIQghAIgrAGQhVALgxgLQglgJgNgOQgpgrgDgQIABAZQAGAeAXAaQg9gQgngRQghgPg3grQg8gxgNgcg");
	this.shape_10.setTransform(295.2488,70.682);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34C1D3").s().p("AgtCTQglgJgOgOQgpgrgCgQIABAZQAGAeAXAaQg+gQgmgRQgigPg2grQg8gxgNgcIgBgWIAMgaQASgdAXgTQAWgUAlgHQAUgEAfgCQAJgCBJATQBFASAPgJQgFAOgNARQgXAhgeAQIARgCQAcgOA1g2IBEATQBSAQBIgSIgEAcIAigeIAtgNQA0gLAjAMIADAiQgGAsgqA1QgrA1gvAYIglANQgGADgJgCQgTgFgWgYQgYgZgFgOIAKAiIAOAXQASAaAKAIQggAIgrAGQgrAFgiAAQggAAgZgFg");
	this.shape_11.setTransform(295.25,70.682);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#368084").s().p("AB+AuQgbgCgxgJQg8gMgSgCQhIgKhhgJQgxgDhYAIQhUAHACAEIgagBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAVgOIBCgKQBLgJAuACIA9ACQBHAEAwANQA1AOBTAJQBLAIAugBQA+gCAQgCQA+gJAvgcIA6gkQACADgUARQgQAOgNAJQgVAOgWAJQgaAKgyAKQgxALg2AAQgZAAgagDg");
	this.shape_12.setTransform(279.8326,136.9006);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#358084").p("Al0gsIANgaQARgdAXgTQAWgUAlgHQAVgEAfgCQAIgBBJASQBFASAQgJQgGAOgMARQgYAhgdAQIARgCQAbgOA2g2IBDATQBTAQBIgSIgFAcIAjgeIAsgNQA0gLAkAMIADAiQgGAsgrA1QgrA1guAYIgmANQgFADgJgCQgTgFgWgYQgYgZgFgOIAJAiIAPAXQARAaALAIQggAIgrAGQhWALgwgLQgmgJgNgOQgpgrgCgQIABAZQAFAeAXAaQg9gQgmgRQgigPg3grQg8gxgNgcg");
	this.shape_13.setTransform(291.1002,139.6849);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34C1D3").s().p("AgtCTQglgJgOgOQgogrgDgQIABAZQAFAeAYAaQg+gQgmgRQgigPg2grQg9gxgNgcIAAgWIAMgaQARgdAXgTQAXgUAkgHQAVgEAfgCQAIgBBKASQBEASAQgJQgGAOgMARQgYAhgdAQIARgCQAcgOA1g2IBEATQBSAQBJgSIgGAcIAjgeIAsgNQA0gLAkAMIADAiQgFAsgrA1QgrA1gvAYIgmANQgFADgJgCQgTgFgWgYQgYgZgFgOIAJAiIAPAXQARAaALAIQggAIgrAGQgrAFgiAAQggAAgZgFg");
	this.shape_14.setTransform(291.1,139.6849);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#81353F").s().p("Al4DvQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIALgXIA1goQA+gsApgTIA3gcQBBgeAwgLQA0gMBPgeQBFgdApgXQA0geAOgKQAzgmAcgwIAig6QADABgJAYIgPAjQgMAXgPASQgTAVgnAhQg0AshPAkQgZAKgvAPIhMAZQhLAchSAkQgtAThKAxQhGAvADACIgXALIgBAAIgCAAg");
	this.shape_15.setTransform(242.0409,55.445);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#81353E").p("AlDCuQgBgLABgRQABgiALgcQAKgcAegYQAQgMAagRQAHgFBJgSQBFgRAKgPIgCAjQgFAogSAcIANgKQASgYAWhJIBEgPQBQgaA4gyIAIAbIARgrIAhghQAogiAmgGIASAdQAQApgNBEQgMBDgeArIgbAdQgDAFgJACQgTAFgfgLQghgLgLgJIAZAZIAYANQAbAOANACQgZAXgjAZQhFAzgxAOQglAKgSgHQg4gSgKgNIANAWQATAYAhAMQg+AOgqAEQglAChEgMQhMgOgagTg");
	this.shape_16.setTransform(251.4964,50.224);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D23887").s().p("AjSDjQhMgOgagTIgLgUQgBgLABgRQABgiALgcQAKgcAegYQAQgMAagRQAHgFBJgSQBFgRAKgPIgCAjQgFAogSAcIANgKQASgYAWhJIBEgPQBQgaA4gyIAIAbIARgrIAhghQAogiAmgGIASAdQAQApgNBEQgMBDgeArIgbAdQgDAFgJACQgTAFgfgLQghgLgLgJIAZAZIAYANQAbAOANACQgZAXgjAZQhFAzgxAOQglAKgSgHQg4gSgKgNIANAWQATAYAhAMQg+AOgqAEIgOAAQgjAAg4gKg");
	this.shape_17.setTransform(251.4964,50.2466);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#81353F").s().p("AiYGlIgHgZIARhAQAUhJAUgpQAJgYAQggQAfhAAegnQAhgrAphKQAkhCARgrQAWg9ADgMQAQg9gJg3IgKhDQADgBAJAZQAGATAEARQAFAZAAAYQgBAcgKAyQgMBDgnBOQgMAYgbApQgiAxgKATQgmBBgrBTQgWArgbBWQgYBQAEAAIgLAXQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_18.setTransform(184.9771,254.1208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#81353E").p("AieFgQgJgIgKgOQgUgbgKgcQgJgdAHgkQALgmADgMQACgJAug8QAqg5gBgSIAVAcQAWAjADAiQAFgBAAgQQgCgegehGQAVgUAXgjQAthHALhKIAYAQIgPgsQAAgUAFgaQAKg0AZgcIAhAKQAmAWAhA9QAhA8AFA0QACAagFAOIgFANQgLAQgfALQggAMgPAAIAiAEQAzgHATgLIgQBLQgXBTgdApQgXAfgSAHQg3AVgQgEIAYAJQAeAHAhgMIgXAdQgbAggTASQgbAag8AhQhEAmggABg");
	this.shape_19.setTransform(190.0234,242.9154);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D23887").s().p("AidFgQgJgJgKgNQgUgbgKgdQgJgcAHglIAOgxQACgJAug8QAqg5gBgSIAVAcQAWAjADAhQAFgBAAgPQgCgegehGQAVgVAXgjQAthGALhKIAYAQIgPgsQAAgVAFgZQAKg1AZgbIAhAJQAmAXAhA8QAhA9AFA0QACAagFANIgFAOQgLAPgfAMQggAMgPAAIAiADQAzgGATgLIgQBLQgXBTgdApQgXAfgSAHQg3AVgQgEIAYAJQAeAHAhgMIgXAcQgbAhgTASQgbAZg8AiQhEAmggABg");
	this.shape_20.setTransform(189.9096,242.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#81353F").s().p("AiVGoQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgHgZIARhBQAUhJAUgpQAJgYAQggQAfhAAegnQAhgrAphJQAkhCARgrQAWg9ADgNQAQg9gJg3IgKhDQADgBAJAZIAKAkQAFAaAAAXQgBAdgKAxQgNBGgmBLQgMAYgcAqQghAxgKASQgqBKgnBLQgWArgbBVQgZBQAFAAIgLAXQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape_21.setTransform(264.1771,204.9258);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#81353E").p("AieFgQgJgIgKgNQgVgcgJgcQgJgcAHglQALgmADgMQACgJAug8QAqg4gBgSIAVAcQAWAjADAhQAFgBgBgPQgCgfgdhFIAsg4QAthGALhKIAYAPIgPgrQAAgVAFgaQAKg0AZgcIAhAKQAmAWAhA9QAhA8AEA0QADAagFAOQABAGgGAIQgLAPgfALQggANgPgBIAiAEIAcgFQAegGALgHIgQBLQgWBTgdApQgXAfgSAHQg3AVgQgDIAYAJQAeAGAhgLQgnAygeAdQgbAZg8AiQhEAlggABg");
	this.shape_22.setTransform(269.2001,193.7386);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D23887").s().p("AidFgQgIgIgLgOQgUgbgJgcQgKgdAIglIAOgxQACgJAtg8QArg5gCgSIAVAcQAWAjAEAiQAFgBgBgQQgCgegehGIAsg3QAuhHAKhKIAYAQIgOgsQAAgUAFgaQAJg0AagdIAgALQAnAWAhA8QAhA9AEA0QACAagEAOQAAAFgGAIQgLAQgeALQghAMgPAAIAjAEIAbgFQAegGAMgHIgQBLQgWBSgeAqQgWAfgSAHQg4AVgQgEIAYAJQAeAHAhgMQgmAygfAdQgaAag8AhQhEAmggABg");
	this.shape_23.setTransform(269.0846,193.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#81353F").s().p("AiWGoQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgGgaIARhAQAUhJAUgpQAJgYAQggQAfhAAegnQAhgrAphJQAkhDAQgqQAVg3AFgTQAQg9gJg3IgKhDQADgBAIAZQAHAUADAQQAGAagBAXQAAAcgKAyQgOBHglBKQgMAYgcAqIgrBDQgmBCgrBTQgXArgaBVQgZBQAFAAIgLAXQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(205.8521,293.9258);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#81353E").p("AieFgQgJgIgKgNQgUgcgKgcQgJgdAIgkQALgmADgMQACgJAtg8QAqg4gBgSIAVAcQAWAjADAhQAFgBAAgPQgCgfgehFQAVgVAXgjQAthGALhKIAYAPIgOgrQAAgVAFgaQAJg0AagcIAgAKQAnAWAhA9QAhA8AEA0QACAagFAOIgFAOQgLAPgfALQggANgPgBIAjAEQAygHATgLIgQBLQgWBTgeApQgWAfgTAHQg3AVgQgDIAYAIQAeAHAhgMIgXAdQgbAhgTASQgbAZg8AiQhDAlggABg");
	this.shape_25.setTransform(210.8934,282.7384);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D23887").s().p("AidFgQgJgIgKgOQgUgbgKgdQgJgcAIglIAOgxQACgJAtg8QAqg5gBgSIAVAcQAWAjADAhQAFgBAAgPQgCgegehGQAVgUAXgjQAthHALhKIAYAQIgOgsQAAgUAFgaQAJg1AagcIAgALQAnAWAhA8QAhA9AEA0QACAagFAOIgFANQgLAQgfALQggAMgPAAIAjAEQAygHATgLIgQBLQgWBSgeAqQgWAfgTAHQg3AVgQgEIAYAJQAeAGAhgLIgXAdQgbAggTASQgbAag8AhQhDAmggABg");
	this.shape_26.setTransform(210.7796,282.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81353F").s().p("AmRDCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAOgWIA5ghQBDgkArgPIA5gWQBEgWAxgFQA1gGBSgXQBIgTArgTQA4gZAOgIQA3gfAhgtIAog2QAEACgMAXIgTAgQgOAWgRAQQgVATgrAcQg7AnhQAZQgaAIgxAKIhOAQQhVAVhOAZQgvAOhQApQhKAmADADIgYAIIgBABQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_27.setTransform(306.6445,123.355);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#81353E").p("AlUB+QAAgLACgRQAGgiANgbQAOgaAggTQARgLAcgOQAHgFBLgJQBGgJAMgOIgFAiQgKAngVAaIAOgIQAVgWAdhGIBGgIQBTgQA8gsIAGAcIAVgpIAkgdQAsgdAmgCIAQAfQALArgUBCQgVBBgiAnIgeAaQgDAEgKACQgTADgegOQgfgPgKgLIAVAcIAXAQQAZARANAEQgbATgmAWQhKAqgzAIQgJABgMABQgWABgMgGQg1gZgJgNIALAXQAQAaAfAPQg/AIgqgCQgkgBhDgUQhKgWgXgWg");
	this.shape_28.setTransform(316.6452,120.2543);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D23887").s().p("AiDDUQgkgBhDgUQhKgWgXgWIgJgVQAAgLACgRQAGgiANgbQAOgaAggTQARgLAcgOQAHgFBLgJQBGgJAMgOIgFAiQgKAngVAaIAOgIQAVgWAdhGIBGgIQBTgQA8gsIAGAcIAVgpIAkgdQAsgdAmgCIAQAfQALArgUBCQgVBBgiAnIgeAaQgDAEgKACQgTADgegOQgfgPgKgLIAVAcIAXAQQAZARANAEQgbATgmAWQhKAqgzAIIgVACQgWABgMgGQg1gZgJgNIALAXQAQAaAfAPQg0AHgmAAIgPgBg");
	this.shape_29.setTransform(316.6452,120.2625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81353F").s().p("AiWGoQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgGgZIARhAQAUhJATgpQAKgYAPggQAfhAAfgnQAhgrAphJQAkhCAQgsQAVg3AFgSQAQg9gJg3IgKhDQADgBAIAZQAHAVADAPQAGAZgBAYQgBAcgJAyQgNBDgmBOQgMAYgcAqQghAwgKATQgfA1gyBgQgWAqgbBWQgZBQAEAAIgLAXQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_30.setTransform(190.6021,164.1258);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#81353E").p("AieFgQgJgIgKgOQgUgbgKgcQgJgdAHgkQALgmADgMQACgJAug8QAqg4gBgSIAVAcQAWAjADAhQAFgBAAgQQgCgegehGQAVgUAXgjQAthGALhKIAYAPIgOgsQAAgUAFgaQAJg0AZgcIAhAKQAmAWAhA9QAhA8AFA0QACAagFAOQABAGgGAHQgLAQgfALQggAMgPAAIAjAEIAbgFQAegGAMgHIgQBLQgXBTgdApQgWAfgTAHQg3AVgQgEIAYAJQAeAHAhgMQgnAzgeAcQgbAag8AiQhEAlggABg");
	this.shape_31.setTransform(195.6251,152.9146);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D23887").s().p("AidFfQgJgIgKgNQgUgbgKgdQgJgcAHglIAOgxQACgJAug8QAqg5gBgRIAVAcQAWAiADAhQAFgBAAgPQgCgegehGQAVgVAXgjQAthFALhLIAYAQIgOgsQAAgVAFgZQAJg1AZgbIAhAJQAmAXAhA8QAhA9AFA0QACAagFAOQABAGgGAHQgLAPgfAMQggAMgPAAIAjADIAbgEQAegGAMgHIgQBLQgXBTgdApQgWAfgTAHQg3AVgQgEIAYAJQAeAHAhgMQgnAygeAdQgbAZg8AjQhEAlggABg");
	this.shape_32.setTransform(195.5096,152.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#81353F").s().p("AiVGoQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgHgZIARhBQAUhJAUgpQAJgYAQggQAfhAAegnQAhgrAphJQAkhCARgrQAWg9ADgNQAQg9gJg3IgKhDQADgBAJAZIAKAkQAFAaAAAXQgBAdgKAxQgMBEgnBNQgMAYgbAqIgsBDQgqBKgnBLQgWAqgbBWQgYBQAEAAIgLAXQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape_33.setTransform(152.0271,273.6758);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#81353E").p("AieFgQgJgIgKgNQgVgcgJgcQgJgcAHglQALgmADgMQACgJAug8QAqg4gBgSIAVAcQAWAjADAhQAFgBgBgPQgCgfgdhFQAVgVAXgjQAthGALhKIAYAPIgPgrQAAgVAFgaQAKg0AZgcIAhAKQAmAWAhA9QAhA8AEA0QADAagFAOIgFAOQgLAPgfALQggANgPgBIAiAEQAzgHASgLIgQBLQgWBTgdApQgXAfgSAHQg3AVgQgDIAYAJQAeAGAhgLIgXAcQgbAhgTASQgbAZg8AiQhEAlggABg");
	this.shape_34.setTransform(157.0504,262.4881);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D23887").s().p("AidFgQgIgIgLgOQgUgbgJgcQgKgdAIglIAOgxQACgJAtg8QArg5gCgSIAVAcQAWAjAEAiQAFgBgBgQQgCgegehGQAVgUAXgjQAuhHAKhKIAYAQIgOgsQAAgUAFgaQAKg0AZgdIAgALQAnAWAhA8QAhA9AEA0QACAagEAOIgGANQgLAQgeALQghAMgPAAIAjAEQAzgHASgLIgQBLQgWBSgeAqQgWAfgSAHQg4AVgQgEIAYAJQAeAHAhgMIgXAdQgbAggTASQgaAag8AhQhEAmggABg");
	this.shape_35.setTransform(156.9346,262.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#81353F").s().p("AkZFbQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIADgaIAmg2QAtg9AgggQASgTAZgZQA0gxAqgZQAugdBAg2QA5gxAfgjQArgzAHgJQAkgzALg3IANhCQAEAAgBAaQgBAUgCASQgEAZgJAWQgKAbgbArQglA9g9A4QgUATgoAdQgxAjgQANQhDA3g9A3QgkAhg2BHQg0BCAEABIgSASIgCAAIgCAAg");
	this.shape_36.setTransform(261.01,310.995);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#81353E").p("Aj9EdQgFgLgEgQQgKghABgdQABgeAUggQAYgfAHgLQAFgHA/gpQA8gmAFgQIAKAhQAIAogJAgQAGABAEgPQAJgdgDhLQAbgMAigZQBDgxAkhCIARAXIACguQAHgTANgXQAcgtAhgSIAbAVQAdAjAJBEQAKBEgOAyQgIAZgJAMQgBAFgIAFQgQALghAAQgjAAgNgFIAfAOIAbAGQAfAEANgCQgRAdgYAjQgyBHgrAcQggAWgTAAQgPAAgQgBQgggDgJgFIASAQQAaARAjABQg2AiglAQQgjAOhEALQhNALgegKg");
	this.shape_37.setTransform(268.5373,301.4776);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D23887").s().p("AjsErIgRgPQgFgKgEgQQgKghABgeQABgeAUggIAfgpQAFgHA/gpQA8gmAFgRIAKAhQAIAogJAhQAGABAEgPQAJgdgDhMQAbgLAigZQBDgyAkhBIARAXIACguQAHgTANgXQAcgtAhgSIAbAVQAdAiAJBEQAKBEgOAzQgIAZgJALQgBAGgIAFQgQAKghAAQgjAAgNgFIAfAPIAbAFQAfAFANgDQgRAegYAjQgyBGgrAdQggAVgTAAIgfgBQgggCgJgGIASARQAaARAjAAQg2AiglARQgjAOhEAKQgoAGgcAAQgZAAgOgFg");
	this.shape_38.setTransform(268.5373,301.5256);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#81353F").s().p("AkZFbQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIADgaIAmg2QAtg9AgggQASgTAZgZQA0gxAqgZQAugdBAg3QA5gwAfgjQArgyAHgKQAkg0ALg2IANhDQAEABgBAaQgBAUgCARQgEAagJAVQgKAbgbArQgjA7g/A7QgUASgoAeQgxAjgQAMQg+AzhCA8QgkAhg3BHQgzBCAEABIgSASIgCABIgCgBg");
	this.shape_39.setTransform(295.26,322.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#81353E").p("Aj9EdQgFgLgFgQQgJghABgdQABgeAUggQAYgfAHgLQAFgHA/gpQA8gmAEgQIAKAhQAJAogJAgQAGABAEgPQAJgdgDhLQAbgMAigZQBDgxAkhCIARAXIABguQAHgTAOgXQAcgtAhgSIAbAVQAdAjAJBEQAKBEgOAyQgIAZgJAMQgBAFgIAGQgQAKghAAQgjAAgNgFIAfAOIAbAGQAfAEANgCQgRAdgZAjQgyBHgqAcQggAWgTAAQgPAAgRgBQgggDgIgFIASAQQAaARAjABQg2AiglAQQgjAPhEAKQhNALgegKg");
	this.shape_40.setTransform(302.7623,312.8776);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D23887").s().p("AjsErIgRgPQgFgKgFgQQgJghABgeQABgeAUggIAfgpQAFgHA/gpQA8gmAEgRIAKAhQAJApgJAgQAGABAEgPQAJgdgDhMQAbgLAigZQBDgyAkhBIARAXIABguQAHgTAOgXQAcgtAhgSIAbAVQAdAiAJBEQAKBEgOAzQgIAZgJALQgBAGgIAFQgQALghAAQgjAAgNgGIAfAPIAbAFQAfAFANgDQgRAegZAjQgyBGgqAdQggAVgTAAIgggBQgggCgIgGIASARQAaARAjABQg2AhglARQgjAOhEAKQgoAGgcAAQgZAAgOgFg");
	this.shape_41.setTransform(302.7623,312.9256);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3A241").s().p("ACvGIQgUgKgNgJQgWgOgQgRQgTgUgdgqQgmg4gbhTQgJgagJgwQgNg9gFgSQgThIgchbQgOgugqhPQgnhKgDADIgIgYQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIAXANIAiA6QAkBBAQArIAWA6QAXBDAGAxQAGA1AYBSQAUBIASAqQAcA8AGAKQAgA3AtAgIA3AoIgCABQgFAAgSgJg");
	this.shape_42.setTransform(316.4938,236.8945);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B3A241").p("AiBlTIAcACQAiAFAaANQAbAOAUAfQALARAOAcQAEAIALBLQAKBGAOALQgPAAgUgFQgngJgagVIAIAOQAWAVBHAdIAIBFQARBTAsA8IgbAGIApAUIAdAlQAeArACAmQgJAKgVAGQgrALhCgTQhCgUgnghIgbgeQgEgEgBgJQgDgUANgdIAJgRQAKgSAGgHIgbAWQgHAKgJANQgRAZgDANQgUgbgWglQgrhLgIgyQgCgKAAgLQgCgXAFgLIAOgcQAQgdAJgFQgKACgNAIQgaARgPAfQgJg/ABgqQACglAThCQAVhLAWgXg");
	this.shape_43.setTransform(319.7246,246.8096);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFDE47").s().p("ABMFIQhCgUgnghIgbgeQgEgEgBgJQgDgUANgdIAJgRQAKgSAGgHIgbAWIgQAXQgRAZgDANQgUgbgWglQgrhLgIgyIgCgVQgCgXAFgLIAOgcQAQgdAJgFQgKACgNAIQgaARgPAfQgJg/ABgqQACglAThCQAVhLAWgXIAVgJIAcACQAiAFAaANQAbAOAUAfQALARAOAcQAEAIALBLQAKBGAOALQgPAAgUgFQgngJgagVIAIAOQAWAVBHAdIAIBFQARBTAsA8IgbAGIApAUIAdAlQAeArACAmQgJAKgVAGQgQAEgTAAQghAAgpgMg");
	this.shape_44.setTransform(319.7197,246.8133);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3A241").s().p("AlZEbQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAIgYQAUgVAcgZQA4gzAngYQAVgQAegTQA8glAvgRQAygSBLgoQBBgkAlgcQAzgnAKgKQAugqAWg0IAbg+QADABgGAZQgFAVgGAPQgIAYgOAUQgPAXgjAmQgvAyhKAtQgWAOguATIhIAjQhJAmhMAsQgqAYhEA7QhAA2AEACIgVAOIgCAAIgCAAg");
	this.shape_45.setTransform(283.7063,361.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B3A241").p("AkrDeQgDgLgCgRQgCgiAHgdQAHgdAagbQAdgaAJgJQAGgGBHgaQBCgYAIgRIADAiQAAApgPAfQAFACAIgOQAPgbAMhKIBCgYQBNgjAwg4IAMAaIALgtQALgRASgUQAkgnAlgKIAVAaQAVAngEBFQgFBFgYAuQgMAWgLAKQgCAFgJADQgSAHgggHQgigHgMgIIAbAWIAaALQAcAKAOABIg2A3Qg/A6gvAUQgkAOgTgEQg5gMgLgLIAPAUQAWAVAhAIQg6AWgqAJQgkAHhFgEQhNgFgcgQg");
	this.shape_46.setTransform(292.4818,354.0872);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFDE47").s().p("Ai1EEQhNgEgcgQIgNgSQgDgLgCgRQgCgiAHgdQAHgdAagbIAmgjQAGgGBHgbQBCgYAIgQIADAiQAAApgPAeQAFACAIgNQAPgbAMhLIBCgXQBNgjAwg5IAMAaIALgtQALgRASgTQAkgnAlgLIAVAaQAVAogEBEQgFBFgYAvQgMAWgLAJQgCAFgJAEQgSAHgggHQgigHgMgIIAbAWIAaAKQAcALAOAAIg2A3Qg/A7gvATQgkAPgTgEQg5gMgLgMIAPAUQAWAWAhAIQg6AWgqAIQgXAFgkAAIgugCg");
	this.shape_47.setTransform(292.4818,354.1227);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B3A241").s().p("AmvBvQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIASgTIA/gVQBIgWAtgGIA9gKQBGgJAxAFQA2AFBVgGQBLgGAtgKQA9gMAOgFQA8gUApglIAzguQADADgRAUQgNARgMALQgSATgUAMQgYAPgvASQhDAbhSAJQgbADgygBQg8AAgUABQhVAEhUAIQgwAFhXAYQhQAXACADIgZAEQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_48.setTransform(247.0981,251.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B3A241").p("AlqAeQACgLAGgQQAMgfASgXQATgXAjgOQATgIAegIQAIgCBMAFQBGAFAPgMIgMAhQgSAmgaAVQAEADAMgJQAZgSArg/IBFAHQBVAABEgfIgBAdIAdgkIAqgWQAxgUAlAGIAJAhQADAtghA8QghA8gpAfIgjAUQgEAEgKgBQgTgBgagTQgcgVgIgNIAQAgIATAUQAVAWAMAGQgeAOgpANQhSAbgygCQgngCgPgMQgwgjgGgPIAGAZQALAdAbAVQg/gFgpgKQgkgIg9ghQhEglgSgag");
	this.shape_49.setTransform(257.8277,253.2638);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFDE47").s().p("AiuCdQgkgJg9ghQhEgkgSgaIgFgWQACgMAGgQQAMgfASgXQATgXAjgOQATgHAegIQAIgDBMAFQBGAFAPgLIgMAhQgSAlgaAVQAEAEAMgJQAZgSArhAIBFAHQBVABBEgfIgBAcIAdgkIAqgVQAxgUAlAGIAJAgQADAtghA9QghA7gpAgIgjAUQgEADgKAAQgTgBgagUQgcgVgIgMIAQAfIATAVQAVAVAMAGQgeAOgpAOQhSAagygCQgngCgPgLQgwgjgGgPIAGAYQALAdAbAVQg/gEgpgKg");
	this.shape_50.setTransform(257.8338,253.2058);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3A241").s().p("ADrFnQgUgHgQgGQgXgKgTgPQgXgRgiglQgwgzgohLQgMgYgRgvQgVg5gIgRQgbg8guheQgWgrg2hHQgyhDgCADIgNgWQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAYAKIArAzQAvA7AWAoIAfA1QAiA/ANAvQAPA0AkBNQAgBEAZAmQAiAzALANQAoAxAxAZIA9AeQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgGAAgRgFg");
	this.shape_51.setTransform(248.3667,370.5733);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B3A241").p("AjFk4IAdgDQAiAAAcAJQAdAJAZAcQAOAPASAZQAGAGAVBJQAVBDAQAJQgPACgUgBQgogDgdgQIAKANQAaAQBKARIATBEQAeBOA1A0IgaALIAsAOIAiAfQAlAmAIAlQgHALgUAJQgpAThEgJQhEgIgtgbIgegaQgFgDgDgJQgGgSAJggQAJghAJgMIgYAaIgMAZQgMAcgCANQgYgXgbgiQg2hCgRgxQgMgkAFgTQAEgNAGgQQAKgfAIgHIgVAOQgXAVgKAgQgSg7gGgqQgFglAIhFQAKhMASgbg");
	this.shape_52.setTransform(254.5725,379.7325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFDE47").s().p("ABxE5QhEgIgtgbIgegaQgFgDgDgJQgGgSAJggQAJghAJgMIgYAaIgMAZQgMAcgCANQgYgXgbgiQg2hCgRgxQgMgkAFgTIAKgdQAKgfAIgHIgVAOQgXAVgKAgQgSg7gGgqQgFglAIhFQAKhMASgbIASgMIAdgDQAiAAAcAJQAdAJAZAcQAOAPASAZQAGAGAVBJQAVBDAQAJQgPACgUgBQgogDgdgQIAKANQAaAQBKARIATBEQAeBOA1A0IgaALIAsAOIAiAfQAlAmAIAlQgHALgUAJQgcANgpAAQgTAAgVgDg");
	this.shape_53.setTransform(254.5574,379.7325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3A241").s().p("AjsF8QAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgZQAMgaASghQAlhDAcgjQAOgWAXgbQAtg4AngfQApgiA5g+QAyg5AZgmQAigxAIgQQAdg4AFg3IAEhEQAEAAADAaIABAlQAAAagHAXQgHAcgUAuQgcBAg3BBQgRAVgkAiQgrAogPAQQg4A8g5BCQgfAlgtBNQgqBJAEAAIgQAUIgDACIgBgBg");
	this.shape_54.setTransform(177.75,388.1058);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#B3A241").p("AjbE7QgHgKgGgQQgOgfgDgdQgDgeAQgiQATgiAGgMQAEgHA6gxQA2gtACgSIAOAgQAOAngEAhQAFAAADgPQAFgegNhKQAZgPAegdQA8g7AchFIATAUIgEgtQAFgUAKgYQAWgxAfgWIAdASQAhAeASBCQATBDgIAzQgEAagHANIgIALQgPANggAEQgjAFgOgEIAhAMIAcABQAeABANgEIghBEQgoBNgmAhQgdAagTACQg7AIgPgHIAVAOQAcANAjgEIgdAXQghAZgXAOQgfAShDATQhKAVgggGg");
	this.shape_55.setTransform(184.3345,377.718);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EFDE47").s().p("AjJFHIgSgNQgHgJgGgQQgOgfgDgeQgDgeAQgiIAZgtQAEgIA6gwQA2gtACgSIAOAfQAOAngEAiQAFAAADgPQAFgegNhLQAZgPAegdQA8g6AchGIATAVIgEguQAFgUAKgYQAWgwAfgWIAdARQAhAfASBCQATBCgIA0QgEAagHAMIgIAMQgPAMggAFQgjAEgOgDIAhALIAcACQAeAAANgEIghBFQgoBMgmAiQgdAZgTADQg7AHgPgHIAVAOQAcAOAjgEIgdAWQghAagXANQgfAThDATQg6AQggAAIgQgBg");
	this.shape_56.setTransform(184.3345,377.7667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3A241").s().p("AmvBvQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIASgTIA/gVQBIgWAtgHIA9gJQBGgJAxAFQA2AFBVgHQBMgFAsgKQA4gLATgGQA8gUApglIAzguQADADgRAUQgNARgMALQgSASgUANQgYAPgvASQhAAahVAKQgbADgygBQg7AAgVABQhVAEhUAIQgwAFhXAYQhQAXACADIgZAEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_57.setTransform(134.1981,330.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#B3A241").p("AlqAeQACgLAGgQQAMgfASgYQATgXAjgOQATgHAegIQAJgDBLAGQBGAFAOgMIgMAhQgRAmgaAVQAEADAMgJQAZgSArg/IBFAHQBUAABEgfIAAAcIAdgjIAqgWQAxgUAlAGIAJAhQADAsghA9QghA7gpAgQgVAQgOAEQgFAEgJgBQgTgBgagUQgcgUgIgNIAPAfIATAVQAWAWAMAGQgfAOgpANQhRAbgygCQgngCgPgMQgwgjgGgPIAGAZQALAdAbAVQg/gFgpgKQgkgJg9ggQhFglgSgag");
	this.shape_58.setTransform(144.9293,331.9721);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EFDE47").s().p("AiuCdQgkgJg9ghQhFgkgSgbIgEgVQACgMAGgQQAMgfASgXQATgYAjgNQATgHAegIQAJgDBLAFQBGAFAOgLIgMAhQgRAlgaAVQAEAEAMgJQAZgSArhAIBFAHQBUABBEggIAAAdIAdgkIAqgVQAxgUAlAGIAJAgQADAtghA8QghA8gpAgQgVAQgOAEQgFADgJAAQgTgCgagTQgcgVgIgMIAPAfIATAUQAWAWAMAGQgfAOgpAOQhRAagygCQgngCgPgLQgwgjgGgQIAGAZQALAdAbAVQg/gFgpgJg");
	this.shape_59.setTransform(144.9338,331.9058);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3A241").s().p("AmwBvQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIARgTQAbgKAlgLQBIgWAtgHIA8gJQBHgJAxAEQA2AFBUgGQBLgFAtgKQA5gLATgGQA8gUApgmIAygtQAEADgRAUQgMAPgNANQgSATgUAMQgYAPgvASQhBAahUAJQgbADgyAAQg8gBgUABQhWAFhUAIQgwAFhWAYQhRAXADADIgaAEQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_60.setTransform(62.8106,361.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#B3A241").p("AlqAeQACgMAGgQQALgfATgXQATgXAjgOQATgHAegIQAIgDBLAFQBHAFAOgLIgMAhQgRAlgaAVQAEAEAMgJQAYgSArg/IBGAHQBUAABEgfIAAAcIAdgkIApgVQAygUAlAGIAJAgQACAtggA9QghA7gpAgQgVAQgOAEQgFAEgJgBQgTgBgbgUQgcgUgHgNIAPAfIATAVQAWAWAMAGQgfAOgpANQhSAbgygCQgmgCgQgMQgwgjgFgPIAFAZQAMAdAbAVQg/gFgpgKQgkgJg9ggQhFglgSgag");
	this.shape_61.setTransform(73.5545,362.956);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EFDE47").s().p("AiuCdQgkgJg9ggQhFglgSgaIgEgWQACgMAGgQQALgfATgXQATgXAjgOQATgHAegIQAIgDBLAFQBHAFAOgLIgMAhQgRAlgaAVQAEAEAMgJQAYgSArg/IBGAHQBUAABEgfIAAAcIAdgkIApgVQAygUAlAGIAJAgQACAtggA9QghA7gpAgQgVAQgOAEQgFAEgJgBQgTgBgbgUQgcgUgHgNIAPAfIATAVQAWAWAMAGQgfAOgpANQhSAbgygCQgmgCgQgMQgwgjgFgPIAFAZQAMAdAbAVQg/gFgpgKg");
	this.shape_62.setTransform(73.5589,362.8907);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#368084").s().p("AkZFbQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIADgaIAmg2QAtg9AgggQASgTAZgZQA0gxAqgZQAugdBAg2QA5gyAfgiQAogvAKgNQAkgzALg3IANhCQAEAAgBAaQgBAUgCASQgEAZgJAWQgKAbgbArQglA9g9A4QgUATgoAdIhBAvQg/A0hBA7QgkAhg3BHQgzBCAEABIgSASIgCAAIgCAAg");
	this.shape_63.setTransform(234.16,305.145);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#358084").p("Aj9EdQgFgLgFgQQgJghABgdQABgeAUggQAYgfAHgLQAFgHA/gpQA8gmAFgQIAKAhQAIAogJAgQAGABAEgPQAJgdgDhLQAbgMAigZQBDgxAkhCIARAXIACguQAHgTANgXQAcgtAhgSIAbAVQAdAjAJBEQAKBEgOAyQgIAZgJAMIgJAKQgQALghAAQgjAAgNgFIAfAOIAbAGQAfAEANgCIgqBAQgyBHgqAcQggAWgTAAQgPAAgQgBQgggDgJgFIASAQQAaARAjABQg2AhglARQgjAOhEALQhNALgegKg");
	this.shape_64.setTransform(241.6623,295.6288);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#34C1D3").s().p("AjsErIgRgPQgFgKgFgRQgJggABgeQABgeAUggIAfgpQAFgHA/gpQA8gmAFgRIAKAhQAIAogJAhQAGABAEgPQAJgdgDhMQAbgLAigZQBDgyAkhBIARAXIACguQAHgTANgXQAcguAhgRIAbAVQAdAiAJBEQAKBEgOAzQgIAZgJALIgJALQgQAKghAAQgjAAgNgFIAfAPIAbAFQAfAFANgDIgqBBQgyBGgqAdQggAVgTAAIgfgBQgggCgJgGIASARQAaARAjAAQg2AiglAQQgjAPhEAKQgoAGgcAAQgZAAgOgFg");
	this.shape_65.setTransform(241.6623,295.6756);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#368084").s().p("AlnDpQAHgUAGgPQAKgYAPgSQARgXAlgiQAxguBOgpQAYgMAvgRQA4gVASgIQBKggBQgoQArgWBIg1QBDgygDgDIAWgMQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgKAYIgzArQg8AugoAWIg1AfQg+AhgwANQg0APhNAjQhEAggmAZQgzAhgOALQgwAogaAyIgeA8QgEgBAIgZg");
	this.shape_66.setTransform(122.553,378.0083);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#358084").p("AE6jDIACAdQABAigJAcQgJAcgcAaQgPANgaATQgGAFhJAVQhDAVgKAPQgCgOACgVQADgoARgdIgNALQgRAagSBJQgdAEgmAPQhPAeg0A1IgKgbIgOAsIggAjQgmAkglAIQgLgHgJgUQgSgpAJhEQAJhFAbgrIAZgfIAMgIQATgFAfAIIASAGQAUAHAHAFIgagXQgsgYgWgCQAYgYAhgbQBDg3AxgQIAUgFQAXgFAMADIAdAKQAfALAHAHQgEgJgKgMQgVgXgggKIAigKQApgKAagDQAlgFBFAJQBNAJAaASg");
	this.shape_67.setTransform(113.3763,384.1758);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#34C1D3").s().p("AkvDdQgSgpAJhEQAJhFAbgrIAZgfIAMgIQATgFAfAIIASAGQAUAHAHAFIgagXQgsgYgWgCQAYgYAhgbQBDg3AxgQIAUgFQAXgFAMADIAdAKQAfALAHAHQgEgJgKgMQgVgXgggKIAigKQApgKAagDQAlgFBFAJQBNAJAaASIAMATIACAdQABAigJAcQgJAcgcAaQgPANgaATQgGAFhJAVQhDAVgKAPQgCgOACgVQADgoARgdIgNALQgRAagSBJQgdAEgmAPQhPAeg0A1IgKgbIgOAsIggAjQgmAkglAIQgLgHgJgUg");
	this.shape_68.setTransform(113.3763,384.1607);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#368084").s().p("AkZFbQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIADgaIAmg2QAtg9AhggQARgTAagZQAzgxAqgZQAugdBAg2QA5gyAfgiQApgvAJgNQAkgzALg3IANhCQAEAAgBAaQgBAUgCASQgDAZgJAWQgLAagbArQglA9g9A5QgUATgoAdIhBAvQhFA6g7A1QgjAgg3BHQg0BDAEABIgSASIgCAAIgCAAg");
	this.shape_69.setTransform(151.06,380.345);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#358084").p("Aj9EdQgFgLgEgQQgKghABgeQABgeAUgfQAYgfAHgLQAFgHA/gpQA8gmAFgQIAKAhQAIAogJAgQAGABAEgPQAJgdgDhLQAbgMAigZQBDgyAkhBIARAXIACguQAHgTANgXQAcgtAhgSIAbAVQAdAjAJBEQAKBEgOAyQgIAZgJAMIgJAKQgQALghAAQgjAAgNgGIAfAPIAbAFQAfAFANgCIgpBAQgyBHgrAcQggAVgTAAQgPAAgQgBQgggCgJgFIASAQQAbARAiABQg2AhglARQgiAOhFAKQhMAMgfgLg");
	this.shape_70.setTransform(158.5873,370.8038);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#34C1D3").s().p("AjsErIgRgPQgFgKgEgRQgKghABgdQABgeAUggIAfgpQAFgIA/goQA8gmAFgRIAKAhQAIAogJAhQAGABAEgPQAJgdgDhMQAbgLAigZQBDgyAkhCIARAXIACguQAHgTANgWQAcguAhgRIAbAVQAdAiAJBEQAKBEgOAzQgIAZgJALIgJALQgQAKghAAQgjAAgNgFIAfAPIAbAFQAfAEANgCIgpBBQgyBGgrAdQggAVgTAAIgfgBQgggCgJgGIASARQAbAQAiABQg2AiglAQQgiAPhFAKQgoAGgbAAQgZAAgPgFg");
	this.shape_71.setTransform(158.5873,370.8506);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#368084").s().p("AgeGpQgLgSgHgPQgMgXgFgXQgGgcgCgyQgEhIAThRQAGgbARguQAVg6AFgSQAXhPAUhVQAMgvAFhZQAFhUgEABIAFgZQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAMAXIgBBDQgCBLgJAtIgLA8QgPBGgUAtQgWAxgWBSQgTBIgGAuIgIBNQAAA/AVA0IAaA+IgBAAQgEAAgMgUg");
	this.shape_72.setTransform(233.9478,146.2282);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#358084").p("ABYlyIAXARQAbAVAQAZQAQAaABAlQABAVgDAfQAAAJgdBFQgcBBAFARQgMgIgPgOQgdgdgMgfIAAARQAJAdAuA9IgeBAQgcBPAHBKIgbgJIAZAnIAGAuQADA1gSAiQgMAEgWgHQgqgMgugzQgugzgRgxIgHgoQgCgFAEgJQAHgSAbgSIAQgKQASgLAJgCIgjAFQgvASgPAPQgDghABgrQABhVATgwIAJgTQALgUAKgHIAbgRQAcgRAKAAQgJgDgQAAQgfABgdATQAHgPAJgTQASgmAOgWQAUgfA0gvQA3g0AfgJg");
	this.shape_73.setTransform(231.4018,157.6474);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#34C1D3").s().p("AAIFyQgqgNgugyQgugzgRgyIgHgnQgCgFAEgJQAHgSAbgSIAQgLQASgKAJgCIgjAEQgvATgPAPQgDgiABgrQABhVATgvIAJgTQALgVAKgHIAbgRQAcgRAKAAQgJgDgQABQgfABgdASIAQghQASgmAOgWQAUgfA0gvQA3g1AfgIIAWACIAXARQAbAWAQAZQAQAZABAmQABAUgDAfQAAAJgdBFQgcBBAFASQgMgIgPgPQgdgcgMggIAAARQAJAdAuA+IgeA/QgcBPAHBLIgbgKIAZAoIAGAuQADA1gSAhQgEACgGAAQgKAAgOgEg");
	this.shape_74.setTransform(231.4018,157.6512);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#368084").s().p("AkZFbQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIADgaIAng3QAsg9AhgfQARgUAagYQAzgxAqgaQAugcBBg3QA5gxAegiQAmgrAMgRQAkgzALg3IAOhCQADAAgBAaIgDAlQgDAZgJAWQgLAbgaArQgkA7g/A7QgUASgoAeQgwAigRANQg2AthKBCQgkAgg2BHQg0BCAEACIgSASIgCAAIgCAAg");
	this.shape_75.setTransform(223.8611,212.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#358084").p("Aj8EdQgFgLgFgQQgKghABgdQACgeAUggQAXgfAHgLQAFgHA/goQA8gmAFgRIAKAhQAIAogIAgQAFABAEgPQAJgdgDhLIA9glQBDgxAkhCIARAXIACguIAUgqQAcgtAhgSIAbAVQAdAjAJBEQAKBEgOAyQgHAZgJAMQgCAFgIAGQgQAKghAAQgiAAgOgFIAfAOIAcAGQAeAEANgCQgRAdgYAjQgyBHgqAcQggAWgUAAQgPAAgQgBQgggCgJgGIASARQAbAQAiABQg1AigmAQQgiAPhFAKQhMALgfgKg");
	this.shape_76.setTransform(231.3873,202.5276);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#34C1D3").s().p("AjsErIgQgPQgFgKgFgQQgKghABgeQACgeAUgfIAegqQAFgHA/gpQA8gmAFgQIAKAgQAIApgIAgQAFABAEgPQAJgdgDhMIA9gkQBDgyAkhBIARAXIACguIAUgqQAcgtAhgSIAbAVQAdAiAJBEQAKBEgOAzQgHAZgJALQgCAGgIAFQgQALghAAQgiAAgOgGIAfAPIAcAFQAeAFANgDQgRAegYAjQgyBGgqAdQggAVgUAAIgfgBQgggCgJgFIASAQQAbARAiABQg1AhgmARQgiAOhFAKQgoAGgbAAQgZAAgPgFg");
	this.shape_77.setTransform(231.3873,202.5756);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#773B2F").s().p("EgD8Ag3QoegDpWi6Qkrhci/hcIhUgaQAGgXAIhbIAIhXQAPAbBeAUQAvAKAsAFQgHgpAnhrIAohiQBWAHCPAlQgNg5AZheIAahTQAeAgBzgCQA5gCAzgIQgPhxAZhrIAchUQAwAKCIgmQBEgTA7gVQgNg8AFigIAIiTQBZgPB/g+QA/gfAtgcQAAgkgvhzIgwhsQAJgrCVhRQBLgoBIggIislKQAYgwB/hkQA/gyA6goQgog3gwiDIgoh4QAYgYBshBQA2ghAygcQgehjAMitIASiZQBKAIBmAQQAQgXAPgSQgKgqgBg8QgBh5AwhfQAOACCDAIQBNAEAhAUIAlhGQAxhVA9hHICWDXQAuhFA7g6QBNhNAmANQA/BLAxDbQCVAqBfBLQBoBSAXBwQANA/ATA5QgZgagjADQg7AbhTAfQilA/h2AXQiIAag1BaQgyBWAyBXQArBLDegYQC1gTCOg2QBmgnAvhLQAshGgfgzIgEgIQAcAnAgAUQAWAOAPACQDeAWBECwQA1CGgUE0QgODNlPCnQjOBmkZBFQATAnASAtQAmAPA4AdQBgA0CgByQBPA6A9AvIAFAFIAKAPQAbACAjAPQA8AYA1A1Ig/APQgJAEgRAAQggAAgjgRIgBAGQAuAXBLBdQgZAEghgBQhBgDgmgYQAlAyApA6Qg9AGgjgGQgzgJgfgmQgOAEgNACIgLABQh4gkhwg9QAWDggMD/QgHCngUCZIgEAXIAFgCIABAAQAHgjATgYQAZgfAkAHIgIAfQgJAlgFAdQAfgZAhgNIgKAVQgMAcgIAiQgJAogJAUIABANQAPgKAUgJIARgHQgdBbgbAtQgOCTgtA2QgWAbgUgDIkhgsQkBDHmSA/QhPANhUAGQg7AvhOAHIgeABQhgAAhzg3gAY7usIAEAeQAFAgAHAKQARAYAagiQAKgOgEgnIgGglQgIgNgMgEIgEgBQgUAAgPAugAbLwGQgJAMAIARQADAHALAPIAXAWQAbAVAVgFQAYgFgBgTQgBgSgWgVQgWgVgZgJQgLgEgIAAQgMAAgGAIg");
	this.shape_78.setTransform(197.1509,216.4985);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#3D5B39").p("AhogtIA6gHQBEgCA3AbQAfAPgKADIgQAAQgbAFghAKQhAAVgXAc");
	this.shape_79.setTransform(287.9185,109.7768);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A9D274").s().p("AhlguIA6gHQBDgCA4AbQAeAPgKADIgPAAQgcAFggAKQhAAVgXAcg");
	this.shape_80.setTransform(287.6985,109.8681);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#3D5B39").p("AAwg+QgTADgaANQgyAcgeA0QgQAcALABQACABAmgJQAdgHAjgDQAlgEAcAC");
	this.shape_81.setTransform(339.3009,88.9763);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A9D274").s().p("AhSA/QgLgBAQgcQAeg0AygcQAagNATgDIAnBpQgcgCglAEQgjADgdAHQgkAIgEAAIAAAAg");
	this.shape_82.setTransform(339.3009,88.9763);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#5E3563").p("AFXjlQgmgNhNBMQg7A7gtBFIiWjXQg9BHgxBVIglBGQgggUhOgEQiCgIgOgCQgwBeABB4QAAA9AKApQAVgLBihYQBohVBHgMQBQgOBegEQAkgCBLAAQAhAMCTAeQCMAjAmAqQgLhIgVhVQgsiog2g+g");
	this.shape_83.setTransform(258.244,26.2401);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8655A1").s().p("AnZCZQgBh5AwhdQAOACCCAHQBOAFAgATIAlhGQAxhUA9hIICWDYQAthFA7g7QBNhMAmANQA2A+AsCoQAVBUALBIQgmgpiMgjQiTgfghgLQhLAAgkABQheAEhQAOQhHAMhoBWQhiBYgVALQgKgqAAg8g");
	this.shape_84.setTransform(258.124,26.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#475938").s().p("AAVAxQgVgFgUgSQgWgRgIgTQgJgUAJgLQAJgLAVAFQAUAEAWASQAVARAJATQAIAUgJALQgGAIgMAAIgMgBg");
	this.shape_85.setTransform(377.0814,117.5872);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#475938").s().p("AgXAvQgKgUAAgbQAAgaAKgUQAKgTANAAQAPAAAJATQAKATAAAbQAAAbgKAUQgKATgOAAQgNAAgKgTg");
	this.shape_86.setTransform(360.95,124.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#3D5B39").p("ACDOyICKghQClgtCMg5QG9i3AQjwQAUk0g1iEQhEiwjegXQgogEgvg5QhMhcgmi6QgbiCiHhaQh5hQi4giQitggixARQi0ASh2A+QjsB9h7GAQgyCdgSCjQgQCaARBuQAtEgAMCo");
	this.shape_87.setTransform(289.7945,122.8866);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A9D274").s().p("AvNKyQgMiogtkgQgRhuAQiaQASijAyidQB7mADsh9QB2g+C0gSQCxgRCtAgQC4AiB5BQQCHBaAbCCQAmC6BMBcQAvA5AoAEQDeAXBECwQA1CEgUE0QgQDwm9C3QiMA5ilAtIiKAhg");
	this.shape_88.setTransform(289.7945,122.8938);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#ABABAB").p("Ag2hYIAYgIQAigCA4AeIgKAyQgOA8gMAzQgxgtgSghQgagwAPg3g");
	this.shape_89.setTransform(253.8869,311.3331);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FEF0F0").s().p("AgrARQgagwAPg3IAYgIQAigCA4AeIgKAyIgaBvQgxgtgSghg");
	this.shape_90.setTransform(253.8539,311.1154);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#ABABAB").p("Agyg/QAGgMAOgJQAdgTApAMIAJAjQAGA2gQBfQgYgUgVgdQgug6ACgxg");
	this.shape_91.setTransform(264.1736,312.0952);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FEF0F0").s().p("AgGAuQgug6ACgxQAGgMAOgJQAdgTApAMIAJAjQAGA2gQBfQgYgUgVgdg");
	this.shape_92.setTransform(264.1736,311.877);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#ABABAB").p("AAGhiIAbAxQAZBAgEBRIg1gkQgJgFgMgOQgXgbgJgpQgJgqAhgTg");
	this.shape_93.setTransform(274.3623,306.1572);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEF0F0").s().p("AABA9QgJgFgMgOQgXgbgJgoQgJgqAhgTIAigKIAbAwQAZBAgEBRg");
	this.shape_94.setTransform(274.3623,306);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#3D5B39").p("AjGlLIgHA2QgHBGADBNQAKD0BnDjIAPAMQATAPAWALQBEAhBEgXQBFgXAdg3QAKgRAEgSIACgOQgEhNgKhhQgUjDgZhqQgZhrgdgyIgXgd");
	this.shape_95.setTransform(255.3539,266.3649);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A9D274").s().p("AgoF8QgWgLgTgPIgPgMQhnjjgKj0QgDhNAHhGIAHg2IEQhEIAXAdQAdAyAZBrQAZBqAUDDQAKBhAEBNIgCAOQgEASgKARQgdA3hFAXQgbAJgdAAQgoAAgogTg");
	this.shape_96.setTransform(255.3526,266.2723);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#ABABAB").p("AAABSQgEACgJAAQgTABgYgNQgMgGAIgfQAJgeATgVQAXgZAjgVIAggQIgKAVQgMAcgIAhQgPA7gNATg");
	this.shape_97.setTransform(234.3759,391.0057);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEF0F0").s().p("Ag1BFQgMgGAIgfQAJgeATgVQAXgZAjgVIAggQIgKAVQgMAcgIAhQgPA7gOATQgDACgJAAIgCABQgSAAgXgNg");
	this.shape_98.setTransform(234.0738,391.3009);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#ABABAB").p("AgqBWIAMgDQANgFAJgNQAdgtAjhlIggAOQgiARgPASIgOATQgPAXgDAcQgDAcAJANQAEAGAFABg");
	this.shape_99.setTransform(233.7419,407.8782);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEF0F0").s().p("AgyBNQgJgNAEgcQADgcAOgXIAOgTQAPgSAigRIAggOQgiBlgeAtQgIANgOAFIgLADQgFgBgFgGg");
	this.shape_100.setTransform(233.576,408.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#ABABAB").p("AACBDQgMgDgNgHQgZgPAEgWQAGgiAUgZQAZgiAmAIIgKAlQgLAqgHAfQgCANgBADQgEAIgIgCg");
	this.shape_101.setTransform(235.5396,374.7689);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEF0F0").s().p("AADBDQgMgDgNgHQgZgPADgWQAGgiAUgZQAagiAlAIIgKAlQgLAqgGAfIgEAQQgDAHgGAAIgCgBg");
	this.shape_102.setTransform(235.4785,374.7689);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#3D5B39").p("AmrjVQAUg2A5g0QByhqC3AEIAsAHQA2AMAzATQCjA+A/B0IAmADQAqAHAaAMIgMDbQgSDjghAcIifAWQgiA8hRAfQigA+joiQ");
	this.shape_103.setTransform(194.0339,390.3274);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#A9D274").s().p("AktFCIh+oXQAUg2A5g0QByhqC3AEIAsAHQA2AMAzATQCjA+A/B0IAmADQAqAHAaAMIgMDbQgSDjghAcIifAWQgiA8hRAfQgwASg2AAQiAAAiihkg");
	this.shape_104.setTransform(194.025,390.3274);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C7DAA7").s().p("ArqQOIE+nIQAxggBch6QBZh5BdicQDfl8AWjFQAUivBzi5QA5hcA1g6IBLg9QBUg7AqAQQCGETAWGlQAPEXgiEsQgHA6gWBLQgTBBgOAZQjwGwpfB2Qi+AkjMABg");
	this.shape_105.setTransform(251.1546,323.1877);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#3D5B39").p("AD+ypIgXBxQggCNgwCKQiYG6j6D1QizDakADiQn+HDl+AeQDGBfE1BfQJqC9IqgGICvAGQDWgBDFgpQJ3iDDfnaQAEgIAGgYQAHgcADgZQAnkogJknQgOnoiVkw");
	this.shape_106.setTransform(166.8174,308.5264);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A9D274").s().p("ABeSiQoqAGpqi9Qk1hfjGhfQF+geH+nDQEAjiCzjaQD6j1CYm6QAwiKAgiNIAXhxISWEMQCVEwAOHoQAJEngnEoQgDAZgHAcQgGAYgEAIQjfHap3CDQjFApjWABg");
	this.shape_107.setTransform(167.5094,308.325);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#3D5B39").p("Al3g7IAjAqQAwAxA8AxQC+CbDtBJIATgDQAYgFAWgJQBHgeAchCQAchCgVg7QgHgSgKgPIgKgMQg8guhQg5QifhzhggzQhgg0g5gMIglgB");
	this.shape_108.setTransform(328.4269,253.355);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A9D274").s().p("AjoBSQg8gxgvgyIgkgpICBj6IAmABQA4AMBhA0QBfA0CgByQBPA6A9AtIAJAMQALAPAGASQAWA7gcBCQgcBDhHAeQgWAIgYAGIgUACQjthJi+iag");
	this.shape_109.setTransform(328.3669,253.35);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#ABABAB").p("AhfAFIAJgWQAWgcA8gWIAdApQAlAxAeArQhCAHgkgIQg2gMgfgwg");
	this.shape_110.setTransform(360.2261,281.5878);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FEF0F0").s().p("AgIBBQg2gNgfgvIAJgWQAWgcA8gXIAdAqIBDBcQgfADgYAAQgdAAgSgEg");
	this.shape_111.setTransform(360.025,281.6383);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#ABABAB").p("AhYAXQgFgMACgQQAFghAlgXIAhAPQAsAfA8BLQgeAEglgCQhJgEgkgjg");
	this.shape_112.setTransform(368.9883,273.8212);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FEF0F0").s().p("AAXA+QhJgFgkgiQgFgMACgQQAFgiAlgXIAhAQQAsAfA8BKQgUAEgZAAIgWgBg");
	this.shape_113.setTransform(368.7714,273.8558);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#ABABAB").p("AhSg3IA2AMQBBAZA6A4Ig/APQgKAEgSAAQgjAAglgVQglgVAIglg");
	this.shape_114.setTransform(371.8809,263.6356);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FEF0F0").s().p("AhBAjQglgVAHgkIAQgiIA2ANQBAAYA6A4Ig+AQQgLAEgRAAQgjgBglgVg");
	this.shape_115.setTransform(371.6368,263.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#ABABAB").p("AAABSQgDACgJABQgSAAgZgMQgMgHAIgeQAIgeATgVQAWgaAkgWQASgKAOgGIgLAWQgLAcgIAhQgMA3gQAXg");
	this.shape_116.setTransform(330.3019,362.0465);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FEF0F0").s().p("Ag0BGQgMgGAIgeQAIgeATgWQAWgaAkgVQASgLAOgFIgLAVQgLAcgIAhQgMA4gQAWQgDADgJAAQgSAAgZgMg");
	this.shape_117.setTransform(330.04,362.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#ABABAB").p("AgpBWIAMgDQANgFAJgNQAcgsAihmIggAOQgiASgOASIgOATQgOAXgDAcQgDAdAJAMQAEAGAFAAg");
	this.shape_118.setTransform(331.1245,375.3219);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FEF0F0").s().p("AgxBOQgJgMADgdQADgcAOgXIAOgTQAPgSAhgSIAggOQgiBmgcAsQgIANgOAFIgLADQgFAAgFgGg");
	this.shape_119.setTransform(330.9625,375.525);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#ABABAB").p("AAEBEQgNgDgMgHQgagOAEgWQAFgjAUgaQAYgiAmAIIgKAlQgKAqgGAfQgCAOgBADQgDAHgIgBg");
	this.shape_120.setTransform(327.5366,354.8447);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FEF0F0").s().p("AAEBEQgMgDgNgHQgZgOADgWQAGgjATgaQAZgiAlAIIgJAlQgLAqgFAfIgEARQgCAGgGAAIgDAAg");
	this.shape_121.setTransform(327.4789,354.8447);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#3D5B39").p("AlnkFQAIgHAQgJQAggQAngHQB9gWCVBWIDPCKQAGgNALgOQAUgcAXgIIAPgBQATACAOAPQAtAwgNCeQgNCfguA7QgXAdgUgCImTg+");
	this.shape_122.setTransform(295.4194,372.6938);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A9D274").s().p("AD/EyImTg+IjTn5QAIgHAQgJQAggQAngHQB9gWCVBWIDPCKQAGgNALgOQAUgcAXgIIAPgBQATACAOAPQAtAwgNCeQgNCfguA7QgVAbgTAAIgDAAg");
	this.shape_123.setTransform(295.4194,372.6938);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#5E3563").p("AXj1vQAAgqgEg2QgJhtgTg+QgyAOg5AaQhyA1ghA7Qg5g3hEg3QiIhvg2gDQgeAYghAhQhABCgLAwQj2goh8gPIgSCaQgMCtAdBjQgxAcg2AhQhtBBgYAYIAoB4QAwCDApA3Qg7Aog/AyQh+BkgYAwICsFKQhJAghLAoQiUBRgJArIAwBsQAwBzAAAkQguAcg/AfQh+A+haAOIgHCUQgGCfANA9Qg6AVhEATQiIAmgwgKIgcBUQgZBrAPBxQg0AIg5ACQhzACgdggIgbBTQgYBeANA5QiQglhWgHIgoBiQgnBrAIApQgsgFgvgKQhfgVgPgaIgHBXQgJBbgFAXQgFAXDTgfQBpgQBqgUIN6oTIIduwIJa0fg");
	this.shape_124.setTransform(151.2211,214.91);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8655A1").s().p("A3ia5QAFgXAJhbIAHhXQAPAaBfAVQAvAKAsAFQgIgpAnhrIAohiQBWAHCQAlQgNg5AYheIAbhTQAdAgBzgCQA5gCA0gIQgPhxAZhrIAchUQAwAKCIgmQBEgTA6gVQgNg9AGifIAHiUQBagOB+g+QA/gfAugcQAAgkgwhzIgwhsQAJgrCUhRQBLgoBJggIislKQAYgwB+hkQA/gyA7goQgpg3gwiDIgoh4QAYgYBthBQA2ghAxgcQgdhjAMitIASiaQB8APD2AoQALgwBAhCQAhghAegYQA2ADCIBvQBEA3A5A3QAhg7Byg1QA5gaAygOQATA+AJBtQAEA2AAAqIozEaIpaUfIodOwIt6ITQhqAUhpAQQh5ASgyAAQglAAACgKg");
	this.shape_125.setTransform(151.2192,214.9148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.2,396.8,433.8);


(lib.Scene_1_lagrimas_d_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lagrimas_d_copy
	this.instance = new lib.mclagrima();
	this.instance.parent = this;
	this.instance.setTransform(270.25,295.6,1,1,0,-23.4834,156.5166,61.8,-75.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lagrimas_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lagrimas_d
	this.instance = new lib.mclagrima();
	this.instance.parent = this;
	this.instance.setTransform(159.95,387.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_dino_lama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_lama
	this.instance = new lib.chorandocompenaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.7,395.5,0.7861,0.7861,0,0,0,197.4,216.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#773B2F").s().p("AzWPAQqNgsm5iaQjIhGkGgOQi4gLk/AQQmkAWh9ABQlCAEkIgmQn6hIgbmzQgJiIApibIAqiAQApAHAsgFQBYgIAQg5QASg+KogyQJJgsHpgsQHqgsg3iaQg3iaFLgbQFLgcMSgpQMRgqG2C8QhFEkD+hJQCMgoChAEQCAADCuAhQBmAUDQAtQC9AnC3jXQC3jWFcAmQFbAmCiA9ID4BeQBXAhCCg4QCCg4CdCEQFhiGEQBvQEPBuhGAGQhHAGCGBMQCHBNDNC7QCrCcBQAuQDMB5jgDVQi8C0mNCrQkdB7wEArQkXAMp8APQpdAQkjANQo+Aal/g5QiKgUg7ACQhgADiVAtQjjBEl8AAQiqAAjIgOg");
	this.shape.setTransform(119.3264,507.3583,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(73));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pag06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_72 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// txt_obj_
	this.txt = new lib.Scene_1_txt();
	this.txt.name = "txt";
	this.txt.parent = this;
	this.txt.setTransform(201.5,170.3,1,1,0,0,0,201.5,170.3);
	this.txt.depth = 0;
	this.txt.isAttachedToCamera = 0
	this.txt.isAttachedToMask = 0
	this.txt.layerDepth = 0
	this.txt.layerIndex = 0
	this.txt.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(73));

	// dino_azul_obj_
	this.dino_azul = new lib.Scene_1_dino_azul();
	this.dino_azul.name = "dino_azul";
	this.dino_azul.parent = this;
	this.dino_azul.setTransform(306.9,583.9,1,1,0,0,0,306.9,583.9);
	this.dino_azul.depth = 0;
	this.dino_azul.isAttachedToCamera = 0
	this.dino_azul.isAttachedToMask = 0
	this.dino_azul.layerDepth = 0
	this.dino_azul.layerIndex = 1
	this.dino_azul.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_azul).wait(73));

	// lagrimas_d_copy_obj_
	this.lagrimas_d_copy = new lib.Scene_1_lagrimas_d_copy();
	this.lagrimas_d_copy.name = "lagrimas_d_copy";
	this.lagrimas_d_copy.parent = this;
	this.lagrimas_d_copy.setTransform(335.2,348,1,1,0,0,0,335.2,348);
	this.lagrimas_d_copy.depth = 0;
	this.lagrimas_d_copy.isAttachedToCamera = 0
	this.lagrimas_d_copy.isAttachedToMask = 0
	this.lagrimas_d_copy.layerDepth = 0
	this.lagrimas_d_copy.layerIndex = 2
	this.lagrimas_d_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lagrimas_d_copy).wait(73));

	// lagrimas_d_obj_
	this.lagrimas_d = new lib.Scene_1_lagrimas_d();
	this.lagrimas_d.name = "lagrimas_d";
	this.lagrimas_d.parent = this;
	this.lagrimas_d.setTransform(183.2,385.9,1,1,0,0,0,183.2,385.9);
	this.lagrimas_d.depth = 0;
	this.lagrimas_d.isAttachedToCamera = 0
	this.lagrimas_d.isAttachedToMask = 0
	this.lagrimas_d.layerDepth = 0
	this.lagrimas_d.layerIndex = 3
	this.lagrimas_d.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lagrimas_d).wait(73));

	// dino_lama_obj_
	this.dino_lama = new lib.Scene_1_dino_lama();
	this.dino_lama.name = "dino_lama";
	this.dino_lama.parent = this;
	this.dino_lama.setTransform(119.3,402.4,1,1,0,0,0,119.3,402.4);
	this.dino_lama.depth = 0;
	this.dino_lama.isAttachedToCamera = 0
	this.dino_lama.isAttachedToMask = 0
	this.dino_lama.layerDepth = 0
	this.dino_lama.layerIndex = 4
	this.dino_lama.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_lama).wait(73));

	// fundo_obj_
	this.fundo = new lib.Scene_1_fundo();
	this.fundo.name = "fundo";
	this.fundo.parent = this;
	this.fundo.setTransform(726.1,238,1,1,0,0,0,726.1,238);
	this.fundo.depth = 0;
	this.fundo.isAttachedToCamera = 0
	this.fundo.isAttachedToMask = 0
	this.fundo.layerDepth = 0
	this.fundo.layerIndex = 5
	this.fundo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fundo).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,147,1520.8,511);
// library properties:
lib.properties = {
	id: '497B5CD87945F345B1D0112E2D0D892C',
	width: 400,
	height: 658,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pag 06_atlas_.png?1599352226141", id:"pag 06_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['497B5CD87945F345B1D0112E2D0D892C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;