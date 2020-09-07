(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pag 07_atlas_", frames: [[0,0,3857,2171],[0,2173,1143,433],[1145,2173,1058,167]]}
];


// symbols:



(lib.fundocena2 = function() {
	this.initialize(ss["pag 07_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.txtcenafinal = function() {
	this.initialize(ss["pag 07_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.txtcena07 = function() {
	this.initialize(ss["pag 07_atlas_"]);
	this.gotoAndStop(2);
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
	this.instance = new lib.txtcena07();
	this.instance.parent = this;
	this.instance.setTransform(21,22,0.3421,0.3421);

	this.instance_1 = new lib.txtcenafinal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,14,0.3192,0.3192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},117).to({state:[{t:this.instance_1}]},127).to({state:[{t:this.instance_1}]},48).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fundo
	this.instance = new lib.fundocena2();
	this.instance.parent = this;
	this.instance.setTransform(-20,-182,0.3869,0.3869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344));

}).prototype = p = new cjs.MovieClip();


(lib.determinadocompenaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// determinado_com_pena
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81353F").s().p("AgiI9IgSgcQgEglgDgwQgGhhAGg6QACgiAFgtQALhbAVg8QAXhDAShqQAQhgACg7QADhMgCgYQgGhQgig/IgohNQAEgEAUAbQAQAWAKASQASAcAJAdQALAjAJBBQANBbgPBqQgEAjgQA+QgUBLgFAZQgVBvgPBoQgJA+AEBzQADBsAFgDIgEAhQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape.setTransform(257.6328,478.7349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#81353E").p("AhPHgQgOgGgSgNQglgYgXgfQgXgegGgwQgCgygCgQQgBgLAehdQAchWgKgWIAmAaQApAhASAnQAGgEgHgSQgPgkhChJQARghANg0QAbhpgShfIAkAJIgkgvQgIgZgFgiQgKhDATgtIALgCQAOgCASADQA4ALBBA8QBBA7AbA+QAOAfAAASIgBATQgHAXggAbQgjAcgSAGIAsgKQA7gdARgVIAMBiQAJBtgTA/IgKAaQgMAcgMAJQg6AxgVACIAgABQAogFAjgbIgQAsQgTAzgQAeQgWAqg8BDQhBBJgnAPg");
	this.shape_1.setTransform(259.9298,464.1152);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D23887").s().p("AhPHgQgOgGgSgNQglgYgXgfQgXgegGgwIgEhCQgBgLAehdQAchWgKgWIAmAaQApAhASAnQAGgEgHgSQgPgkhChJQARghANg0QAbhpgShfIAkAJIgkgvQgIgZgFgiQgKhDATgtIALgCQAOgCASADQA4ALBBA8QBBA7AbA+QAOAfAAASIgBATQgHAXggAbQgjAcgSAGIAsgKQA7gdARgVIAMBiQAJBtgTA/IgKAaQgMAcgMAJQg6AxgVACIAgABQAogFAjgbIgQAsQgTAzgQAeQgWAqg8BDQhBBJgnAPg");
	this.shape_2.setTransform(259.9298,464.1136);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3A241").s().p("AoyByQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAZgXIBSgXQBegYA6gFIBPgIQBbgIA/AKQBGAKBsgDQBhgCA6gJQBNgMAWgHQBNgUA4guIBEg3QADAEgWAZQgTAUgPAOQgYAXgbAOQggARg+AVQhTAdhvAIQgiAChBgFQhKgEgcAAQhwAAhrAFQg+AChwAaQhpAYADAFIghACQgDAAgBgCg");
	this.shape_3.setTransform(271.0536,132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3A241").p("AnXAGQAEgOAIgUQARgoAagdQAZgcAugQQAZgIAogIQAKgDBhALQBaALATgNQgGASgMAXQgZAvgiAaIAEABQAGAAALgHQAggVA8hPIBZANQBsAGBagjIgCAkIAngsIA3gYQBAgXAwAKIAEAKQAFAOAAASQAAA6guBLQguBLg3AmIguAXQgGAEgMgBQgZgDgggaQgjgdgJgQIASApIAXAbQAaAeAQAIQgpAQg1APQhrAdhAgGQgygFgTgQQg7gwgGgUIAFAgQANAmAhAdQhQgLg0gPQgugNhMguQhWg0gVgjg");
	this.shape_4.setTransform(285.0953,135.5645);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFDE47").s().p("AjtC1QgugNhNguQhVg0gWgjIgEgcQAEgOAIgUQARgoAagdQAZgcAugQQAZgIAngIQALgDBhALQBaALASgNQgFASgMAXQgZAvgjAaIAFABQAGAAALgHQAggVA7hPIBaANQBsAGBZgjIgBAkIAmgsIA3gYQBBgXAwAKIAEAKQAFAOAAASQAAA6guBLQguBLg3AmIguAXQgGAEgMgBQgZgDgggaQgjgdgJgQIASApIAXAbQAaAeAPAIQgoAQg1APQhsAdg/gGQgygFgTgQQg7gwgGgUIAFAgQANAmAhAdQhQgLg0gPg");
	this.shape_5.setTransform(285.1,135.459);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#368084").s().p("ACiA8QgjgDg+gMQhNgPgZgDQhdgNh8gLQg+gEhzAKQhrAKACAFIghgCQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQABAAAAgBIAbgSIBVgMQBggMA7ADIBPABQBbAGA9ARQBEASBrAMQBhAKA7gCQBLgCAZgDQBQgLA9glIBKgtQAGAGhCAxQgbASgcALQgjANhAANQg9ANhJAAQgfAAgggCg");
	this.shape_6.setTransform(381.5448,242.0603);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#358084").p("Aneg5IAQghQAXgmAcgYQAegZAvgKQAagFAogDQALgCBeAZQBYAXAVgLQgIARgPAWQgfArgmAUIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgXIgGAkIAtgnIA5gRQBDgOAuAQIADALQADAOgDASQgHA5g3BEQg4BFg8AfIgwARQgGADgMgDQgYgGgdgeQgfghgHgSIANArIATAfQAWAgAOALQgqAKg3AIQhuAOg/gOQgwgLgRgTQg0g3gEgVIACAhQAHAnAeAhQhPgVgygWQgrgThGg4QhOg+gRgkg");
	this.shape_7.setTransform(396.0308,245.63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C1D3").s().p("Ag7C9QgwgLgRgTQg0g3gEgVIACAhQAHAnAeAhQhPgVgygWQgrgThGg4QhOg+gRgkIAAgdIAQghQAXgmAcgYQAegZAvgKQAagFAogDQALgCBeAZQBYAXAVgLQgIARgPAWQgfArgmAUIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgXIgGAkIAtgnIA5gRQBDgOAuAQIADALQADAOgDASQgHA5g3BEQg4BFg8AfIgwARQgGADgMgDQgYgGgdgeQgfghgHgSIANArIATAfQAWAgAOALQgqAKg3AIQg3AHgrAAQgrAAgggHg");
	this.shape_8.setTransform(396.0318,245.63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#368084").s().p("ACiA8QgjgCg+gMQhNgPgZgEQh0gPhlgIQg+gFhzAKQhrAKACAFIghgCQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAbgTIBVgMQBggMA7ADIBPACQBbAFA9ARQBEASBrAMQBgAKA8gBQBQgDAUgDQBQgLA9gkIBKguQAEADgaAWQgUARgSANQgbASgdALQgiANhAAOQg9AMhJAAQgeAAghgCg");
	this.shape_9.setTransform(348.8791,49.9853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#358084").p("Anfg5IARghQAXgmAcgZQAdgZAwgJQAagFAogDQALgBBeAYQBYAWAUgLQgHASgQAVQgeArgmAVIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgYIgGAkIAsgmIA6gRQBDgOAuAQIADALQADAOgDASQgHA5g4BEQg3BFg8AfIgwARQgHADgMgDQgYgGgcgfQgfgggHgSIANArIATAfQAWAgAOAKQgqALg3AHQhuAPg/gOQgwgMgRgSQg0g4gEgUIACAhQAHAnAdAhQhOgVgygWQgrgThGg4QhOg+gRgkg");
	this.shape_10.setTransform(363.3547,53.5769);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34C1D3").s().p("Ag7C9QgwgMgRgSQg0g4gEgUIACAhQAHAnAdAhQhOgVgygWQgrgThGg4QhOg+gRgkIgBgdIARghQAXgmAcgZQAdgZAwgJQAagFAogDQALgBBeAYQBYAWAUgLQgHASgQAVQgeArgmAVIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgYIgGAkIAsgmIA6gRQBDgOAuAQIADALQADAOgDASQgHA5g4BEQg3BFg8AfIgwARQgHADgMgDQgYgGgcgfQgfgggHgSIANArIATAfQAWAgAOAKQgqALg3AHQg4AIgsAAQgpAAgggHg");
	this.shape_11.setTransform(363.3568,53.5769);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#368084").s().p("ACiA8QgjgDg/gMQhMgPgZgDQhfgNh6gLQg+gEhzAKQhrAKACAFIghgCQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIAbgSIBVgMQBggMA6ADIBPABQBcAGA9ARQBEASBrAMQBhAKA7gCQBLgCAZgDQBQgLA9glIBKgtQADADgaAWQgVASgRAMQgbASgcALQgiANhAANQg/ANhHAAQgeAAghgCg");
	this.shape_12.setTransform(317.4541,186.9208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#358084").p("Anfg5IARghQAWgmAdgYQAdgZAwgKQAagFAogDQALgCBeAZQBYAXAUgLQgHARgQAWQgeArgmAUIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgXIgHAkIAtgnIA6gRQBDgOAuAQIADALQADAOgDASQgHA5g4BEQg3BFg8AfIgwARQgHADgMgDQgYgGgcgeQgfghgHgSIANArIATAfQAWAgAOALQgqAKg3AIQhuAOg/gOQgwgLgRgTQg0g3gEgVIABAhQAIAnAdAhQhOgVgygWQgrgThGg4QhOg+gRgkg");
	this.shape_13.setTransform(331.9547,190.48);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34C1D3").s().p("Ag7C9QgwgLgRgTQg0g3gEgVIABAhQAIAnAdAhQhOgVgygWQgrgThGg4QhOg+gRgkIgBgdIARghQAWgmAdgYQAdgZAwgKQAagFAogDQALgCBeAZQBYAXAUgLQgHARgQAWQgeArgmAUIAEACQAHABALgGQAjgRBFhGIBXAZQBqAUBdgXIgHAkIAtgnIA6gRQBDgOAuAQIADALQADAOgDASQgHA5g4BEQg3BFg8AfIgwARQgHADgMgDQgYgGgcgeQgfghgHgSIANArIATAfQAWAgAOALQgqAKg3AIQg3AHgrAAQgrAAgggHg");
	this.shape_14.setTransform(331.9568,190.48);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#81353F").s().p("AnkEyQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIAOgeIBFgzQBPg4A1gZIBGgkQBTgmA+gOQBEgQBlgoQBagkAzgeQBJgrANgJQBBgwAkg+IAshLQAEABgMAgQgJAZgKATQgPAegUAXQgYAcgyApQhEA6hkAtQggANg9AUQhJAWgZAKQhaAihxAwQg4AZhgBAQhaA7AEADIgeAPIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_15.setTransform(291.5447,76.0143);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#81353E").p("AmgDgQgCgPABgWQACgsAOgjQANgkAmgfQAUgQAigWQAJgGBegXQBZgWANgTIgCAtQgHA0gXAkIAEgBQAGgCAHgKQAXggAcheIBYgTQBnghBHhBIALAjIAWg3IAqgqQA0gsAwgIIAIAIQAKAMAGARQAVA1gRBXQgQBXgmA3IgjAmQgEAGgMADQgYAGgngOQgrgOgOgMIAfAgIAgASQAjASARACQggAdgtAhQhaBBg/ARQgwANgXgIQhIgYgNgQIARAcQAZAfAqAPQhQATg1AEQgwAEhYgQQhigSgggZg");
	this.shape_16.setTransform(303.7012,69.3148);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D23887").s().p("AkPEkQhigSgggZIgPgZQgCgPABgWQACgsAOgjQANgkAmgfQAUgQAigWQAJgGBegXQBZgWANgTIgCAtQgHA0gXAkIAEgBQAGgCAHgKQAXggAcheIBYgTQBnghBHhBIALAjIAWg3IAqgqQA0gsAwgIIAIAIQAKAMAGARQAVA1gRBXQgQBXgmA3IgjAmQgEAGgMADQgYAGgngOQgrgOgOgMIAfAgIAgASQAjASARACQggAdgtAhQhaBBg/ARQgwANgXgIQhIgYgNgQIARAcQAZAfAqAPQhQATg1AEIgSABQgtAAhJgNg");
	this.shape_17.setTransform(303.7012,69.3314);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#81353F").s().p("AjBIhQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgIghQAIgkANgvQAahdAZg1QAMgfAUgpQAohTAngxQArg3A1hfQAuhVAVg4QAchKAFgUQAVhOgMhHIgNhWQAEgCALAgQAIAbAFAUQAHAggBAeQgBAlgMBAQgRBZgxBhQgPAfgkA2QgrBAgNAWQgzBZg1BnQgdA3giBuQggBnAGAAIgOAeQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_18.setTransform(218.1809,331.5008);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#81353E").p("AjLHEQgLgKgNgRQgbgjgMglQgMgkAKgwQAOgwAEgPQADgMA6hNQA3hJgCgXIAbAkQAcAtAEArQAHgCgBgTQgCgngnhaQAbgaAeguQA7haANhfIAfAUIgSg4QAAgaAGgiQANhDAggkIALABQAPADAPAJQAyAdArBNQAqBOAGBDQACAhgFASIgHARQgPAUgnAPQgqAQgTgBIAtAFQBBgJAXgOIgUBhQgdBqgmA1QgcAogYAJQhHAbgUgEIAeALQAnAIAqgOIgdAlQgjApgZAXQgiAhhNArQhXAwgqACg");
	this.shape_19.setTransform(224.5861,317.1417);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D23887").s().p("AjKHEQgLgKgNgRQgbgjgMglQgMglAKgvIAShAQADgLA6hNQA3hJgCgXIAbAkQAcAtAEAqQAHgBgBgUQgCgngnhZQAbgaAeguQA7haANhgIAfAUIgSg4QAAgaAGghQANhDAgglIALABQAPAEAPAJQAyAcArBOQAqBOAGBCQACAigFASIgHARQgPAUgnAPQgqAPgTAAIAtAFQBBgJAXgOIgUBgQgdBrgmA1QgcAogYAJQhHAbgUgFIAeALQAnAJAqgOIgdAlQgjApgZAXQgiAhhNArQhXAwgqACg");
	this.shape_20.setTransform(224.4727,317.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#81353F").s().p("AjAIhQgDgBgBgCIgIggQAIgkANgvQAaheAZg1QAMgfAUgpQAohSAogyQAqg3A1hfQAuhVAVg4QAchKAGgUQAUhOgLhHIgOhWQAEgCALAhQAIAaAFAUQAHAggBAfQgBAkgMBAQgSBagwBgQgPAfgkA2QgqA/gOAYQgzBZg1BmQgcA3gjBuQggBnAGAAIgOAeQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAg");
	this.shape_21.setTransform(316.0309,260.8734);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#81353E").p("AjMHFQgKgLgOgRQgagjgMglQgMgkAKgwQAOgwAEgPQACgLA7hOQA3hIgDgYIAbAlQAdAsAEArQAHgCgBgTQgDgngmhaIA5hIQA6haAOhfIAfAUIgTg4QAAgaAHgiQAMhDAhgkIALABQAPADAPAJQAyAdAqBNQArBOAFBDQADAhgGASQABAHgIAKQgOAVgnAOQgqAQgTgBIAsAFIAkgGQAmgIAPgJIgUBhQgdBqgmA1QgdApgXAIQhIAbgUgEIAfALQAnAIAqgOQgyBAgnAlQgiAhhOAsQhXAwgpABg");
	this.shape_22.setTransform(322.4866,246.4912);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D23887").s().p("AjLHFQgKgLgOgRQgagjgMglQgMglAKgvIAShAQACgLA7hNQA3hIgDgYIAbAlQAdAsAEAqQAHgBgBgUQgDgngmhZIA5hIQA6haAOhgIAfAVIgTg5QAAgaAHghQAMhDAhglIALABQAPAEAPAJQAyAcAqBOQArBOAFBCQADAigGASQABAHgIAKQgOAVgnAOQgqAPgTAAIAsAFIAkgGQAmgIAPgJIgUBgQgdBrgmA1QgdAogXAJQhIAbgUgFIAfALQAnAJAqgOQgyBAgnAlQgiAhhOArQhXAxgpABg");
	this.shape_23.setTransform(322.3727,246.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#81353F").s().p("AjBIhQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgIggQAIgkANgvQAaheAZg1QAMgfAUgpQAohSAngyQArg4A0heQAvhWAVg3QAbhFAGgZQAUhOgLhHIgNhWQAEgCALAhQAHAXAGAXQAHAhgBAeQgBAlgMA/QgRBZgxBhQgQAggjA1QgrBBgNAWQg0Bag0BlQgdA3giBuQggBnAGAAIgPAeQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(245.0267,382.7234);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#81353E").p("AjLHFQgLgLgNgRQgbgjgMglQgMgkAKgwQAOgwAEgPQADgMA6hNQA3hJgCgXIAbAlQAcAsAEArQAHgBgBgUQgCgngnhaQAbgaAegtQA6hbAOhfIAfAUIgSg4QAAgaAGgiQANhDAggkIALABQAPADAPAJQAyAdArBNQAqBOAFBDQADAhgGASIgGARQgPAVgnAOQgqAQgTgBIAtAFQBBgIAXgOIgUBgQgdBqgmA1QgcApgYAIQhHAbgUgEIAeALQAnAIAqgOIgdAlQgjApgZAYQgiAghNAsQhYAwgpABg");
	this.shape_25.setTransform(251.4361,368.3411);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D23887").s().p("AjKHFQgLgLgNgSQgbgigMglQgMglAKgvIAShAQADgLA6hNQA3hJgCgXIAbAlQAcAsAEArQAHgBgBgUQgCgngnhaQAbgaAegtQA6hbAOhfIAfAUIgSg5QAAgaAGghQANhDAggkIALAAQAPAEAPAJQAyAcArBOQAqBOAFBCQADAigGASIgGARQgPAVgnAOQgqAPgTAAIAtAFQBBgIAXgPIgUBhQgdBqgmA1QgcAogYAJQhHAbgUgEIAeALQAnAIAqgPIgdAmQgjApgZAYQgiAghNArQhYAxgpABg");
	this.shape_26.setTransform(251.3227,368.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81353F").s().p("AoED6QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIASgcIBKgrQBVgvA4gTIBKgbQBWgdA/gHQBGgIBpgdQBdgZA2gYQBHgeAUgMQBGgoArg6IA0hGQAEADgPAeQgNAXgMASQgSAcgWAVQgbAZg2AjQhKAxhpAiQghAKg/AMQhNAPgYAGQhrAchoAfQg7AShnA1QhgAxAFAEIggAKIgBABQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_27.setTransform(439.6556,159.2143);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#81353E").p("Am2CiQAAgPADgVQAGgsASgiQASgiApgZQAWgOAkgSQAKgGBggMQBagLAPgSIgHAsQgNAzgbAhIAFAAQAGgCAIgJQAbgcAmhbIBZgJQBqgVBOg4IAHAkIAcg1IAvglQA5gmAwgCIAHAJQAIAMAFASQAOA3gaBVQgaBUgsAyIgnAiQgEAGgNABQgYAEgmgSQgogTgNgOIAbAjIAdAVQAhAWARAFQgjAZgxAcQhgA2hBAKQgMACgPABQgdABgPgHQhFgggLgSIAOAeQAVAiAoATQhRAKg2gCQgvgBhWgaQhfgdgegcg");
	this.shape_28.setTransform(452.5096,155.2866);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D23887").s().p("AipERQgvgBhWgaQhfgdgegcIgLgbQAAgPADgVQAGgsASgiQASgiApgZQAWgOAkgSQAKgGBggMQBagLAPgSIgHAsQgNAzgbAhIAFAAQAGgCAIgJQAbgcAmhbIBZgJQBqgVBOg4IAHAkIAcg1IAvglQA5gmAwgCIAHAJQAIAMAFASQAOA3gaBVQgaBUgsAyIgnAiQgEAGgNABQgYAEgmgSQgogTgNgOIAbAjIAdAVQAhAWARAFQgjAZgxAcQhgA2hBAKQgMACgPABQgdABgPgHQhFgggLgSIAOAeQAVAiAoATQhDAIgxAAIgTAAg");
	this.shape_29.setTransform(452.5096,155.2917);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81353F").s().p("AjEIeIgIggQAIgkANgvQAaheAZg1QAMgfAUgpQAohSAngyQArg3A1hfQAuhVAVg4QAchKAFgUQAVhOgMhHIgNhWQAEgBALAgQAJAaAEAUQAHAggBAfQgBAkgMBAQgRBZgxBhQgPAggkA1QgqBAgOAXQguBRg6BuQgcA3gjBuQggBnAGAAIgOAeQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_30.setTransform(225.3809,215.7966);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#81353E").p("AjMHFQgKgLgOgRQgagjgMglQgMgkAKgwQAOgwAEgPQACgLA7hOQA3hIgDgYIAbAlQAdAsAEArQAHgBgBgUQgDgngmhaQAbgaAegtQA6hbAOhfIAfAUIgTg4QAAgaAHgiQAMhDAhgkIALABQAPADAPAJQAyAdAqBNQArBOAFBDQADAhgGASQABAHgIAKQgOAVgnAOQgqAQgTgBIAsAFIAkgGQAmgHAPgJIgUBgQgdBqgmA1QgdApgXAIQhIAbgUgEIAfALQAnAIAqgOQgyBAgnAmQgjAhhNArQhXAwgpABg");
	this.shape_31.setTransform(231.8167,201.3912);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D23887").s().p("AjLHFQgKgLgOgSQgagigMglQgMglAKgvQAOgwAEgQQACgKA7hOQA3hJgDgXIAbAlQAdAsAEArQAHgBgBgUQgDgngmhaQAbgaAegtQA6hbAOhfIAfAUIgTg5QAAgaAHghQAMhDAhgkIALAAQAPAEAPAJQAyAcAqBOQArBOAFBCQADAigGASQABAHgIAKQgOAVgnAOQgqAPgTAAIAsAFIAkgGQAmgIAPgJIgUBhQgdBqgmA1QgdAogXAJQhIAbgUgEIAfALQAnAIAqgPQgyBBgnAmQgjAghNArQhXAxgpABg");
	this.shape_32.setTransform(231.7028,201.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#81353F").s().p("AjEIeIgIggQAIgkANgvQAaheAZg1QAMgfAUgpQAohSAogyQArg4A0heQAvhVAUg3QAchKAGgVQAUhOgLhHIgOhWQAEgBALAgQAIAaAFAUQAHAggBAfQgBAkgMBAQgRBZgxBiQgPAfgkA1QgrBAgNAXQguBRg6BuQgcA3gjBuQggBnAGAAIgOAeQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_33.setTransform(175.7809,356.6966);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#81353E").p("AjMHEQgKgKgOgRQgagjgMglQgMgkAKgwQAOgwAEgQQACgKA7hOQA3hJgDgXIAbAkQAdAtAEArQAHgCgBgTQgDgngmhaQAbgaAeguQA6haAOhfIAfAUIgTg4QAAgaAHgiQAMhDAhgkIALABQAPADAPAJQAyAcAqBOQArBOAFBDQADAhgGASIgHARQgOAUgnAPQgqAPgTAAIAsAFQBBgJAYgOIgUBhQgdBqgmA1QgdAogXAJQhIAbgUgFIAfAMQAnAIAqgPIgeAlQgiAqgZAXQgiAhhOArQhWAwgqACg");
	this.shape_34.setTransform(182.2346,342.3418);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D23887").s().p("AjLHEQgKgKgOgRQgagjgMglQgMglAKgvQAOgwAEgQQACgLA7hOQA3hIgDgXIAbAkQAdAtAEAqQAHgBgBgUQgDgngmhZQAbgaAeguQA6haAOhgIAfAUIgTg4QAAgaAHghQAMhDAhgkIALAAQAPAEAPAIQAyAdAqBOQArBOAFBCQADAigGASIgHARQgOAUgnAPQgqAPgTAAIAsAFQBBgJAYgOIgUBgQgdBrgmA1QgdAogXAJQhIAbgUgFIAfALQAnAJAqgPIgeAlQgiAqgZAXQgiAhhOArQhWAwgqACg");
	this.shape_35.setTransform(182.1227,342.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#81353F").s().p("AlpG+QgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIAEghQAVgfAcgnQA5hPAqgoQAXgZAhggQBCg/A2ghQA8gkBShGQBKhAAngsQA0g9AMgQQAuhCAPhGIARhWQAFAAgCAiQgBAagDAWQgEAhgMAcQgNAigiA4QgvBMhQBLQgaAYg0AlQg+AtgVARQhYBJhMBFQguAqhHBbQhCBVAFACIgYAXIgCABIgCgBg");
	this.shape_36.setTransform(315.9173,404.6821);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#81353E").p("AlFFuQgGgNgGgVQgNgrABgmQACgmAagpQAegoAJgNQAGgKBSg0QBNgxAGgVIAMAqQALA0gKAqQAGABAGgTQAMgmgFhhQAjgPAsggQBWhAAuhUIAWAdIADg7QAJgYARgeQAkg6ArgXIAKAFQANAIALAOQAlAtAMBXQAMBYgSBBQgJAggMAPIgMANQgUAOgqAAQgtAAgSgHIAoATIAkAHQAmAGARgDIg1BTQhABag2AlQgpAbgZAAQgTAAgWgBQgpgDgLgHIAYAVQAhAWAtABQhFArgxAVQgsAThYANQhjAPgngOg");
	this.shape_37.setTransform(325.5863,392.4383);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D23887").s().p("AkwGBIgVgTQgGgOgGgVQgNgqABgmQACgnAagoIAng2QAGgJBSg0QBNgxAGgWIAMArQALAzgKAqQAGABAGgTQAMglgFhiQAjgPAsggQBWhAAuhUIAWAeIADg7QAJgZARgdQAkg6ArgXIAKAFQANAIALAOQAlAsAMBYQAMBXgSBBQgJAggMAPIgMAOQgUANgqAAQgtAAgSgHIAoAUIAkAGQAmAGARgDIg1BTQhABbg2AkQgpAcgZAAIgpgBQgpgDgLgHIAYAVQAhAVAtABQhFAsgxAVQgsAShYANQg0AIgkAAQgfAAgTgGg");
	this.shape_38.setTransform(325.5863,392.4697);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#81353F").s().p("AlpG+QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAEghQAUgfAdgnQA5hOAqgpQAXgZAhggQBCg/A2ghQA8gkBShGQBKhAAmgsQAzg5AOgUQAuhCAOhGIAShWQAFAAgCAiQgBAcgDAUQgFAhgLAcQgOAigiA4QgtBLhRBMQgaAYg0AlQg+AtgVARQhIA8hdBSQguAqhGBbQhCBVAFACIgYAXIgCABIgCgBg");
	this.shape_39.setTransform(359.9673,419.3321);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#81353E").p("AlFFuQgHgOgGgVQgMgqABgmQACgmAagpQAegoAJgOQAGgJBSg0QBNgxAGgWIAMArQALAzgLAqQAHABAGgSQALgmgEhiQAjgPArggQBXg/AuhVIAWAeIACg7QAJgZASgdQAjg6ArgXIAKAFQANAIAMAOQAkAsANBYQAMBYgSBAQgJAhgMAOQgCAHgKAHQgVANgqAAQgsAAgSgHIAoAUIAkAGQAmAGARgDQgVAmggAtQhABbg2AlQgpAbgZAAQgTAAgWgBQgpgDgLgHIAXAVQAiAWAtABQhFArgxAVQgrAShZAOQhiAOgogNg");
	this.shape_40.setTransform(369.6231,407.1196);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D23887").s().p("AkwGAIgVgTQgHgNgGgVQgMgqABgmQACgnAagpIAng1QAGgKBSg0QBNgxAGgVIAMAqQALA0gLAqQAHABAGgTQALglgEhiQAjgPArggQBXhAAuhUIAWAdIACg7QAJgYASgdQAjg7ArgWIAKAFQANAIAMAOQAkAsANBXQAMBYgSBBQgJAggMAPQgCAHgKAGQgVAOgqAAQgsAAgSgHIAoATIAkAHQAmAGARgDQgVAmggAtQhABag2AlQgpAcgZAAIgpgCQgpgDgLgHIAXAWQAiAVAtABQhFAsgxAUQgrAThZANQgzAIgjAAQghAAgTgHg");
	this.shape_41.setTransform(369.6231,407.1505);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3A241").s().p("ADhH3QgXgLgTgMQgcgSgVgWQgZgbglg2QgzhNgghlQgLghgNg/QgPhMgHgZQgahjgjhuQgTg8g1hmQgyhfgEAEIgLgfQgBgBAAAAQABgBAAAAQAAgBAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAdARIArBKQAwBVATA3IAdBJQAeBXAHA/QAIBFAeBpQAbBdAYA2QAhBJAKARQApBGA6AqIBGAzIgDABQgGAAgXgMg");
	this.shape_42.setTransform(387.2458,309.3556);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B3A241").p("Aimm0IAkADQAsAGAiARQAiASAaAoQAOAWASAkQAGAKANBgQANBaASAOQgTAAgagGQgygMgigbIAAAFQACAGAJAIQAcAaBcAlIAKBaQAWBqA5BNIgkAIIA1AaIAmAvQAmA4ACAxQgKAMgcAIQg4APhVgZQhUgZgzgsIgigmQgFgFgCgMQgEgZASgmIALgWQAMgXAJgIIgjAbQgKANgLARQgWAhgEAQQgZgjgcgwQg4hggLhAQgCgMAAgPQgCgdAHgPIASgkQAUglALgHQgNADgRALQghAVgUAoQgKhRABg2QACgvAYhWQAchfAcgfg");
	this.shape_43.setTransform(391.4454,322.127);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFDE47").s().p("ABhGmQhUgZgzgsIgigmQgFgFgCgMQgEgZASgmIALgWQAMgXAJgIIgjAbIgVAeQgWAhgEAQQgZgjgcgwQg4hggLhAQgCgMAAgPQgCgdAHgPIASgkQAUglALgHQgNADgRALQghAVgUAoQgKhRABg2QACgvAYhWQAchfAcgfIAbgLIAkADQAsAGAiARQAiASAaAoQAOAWASAkQAGAKANBgQANBaASAOQgTAAgagGQgygMgigbIAAAFQACAGAJAIQAcAaBcAlIAKBaQAWBqA5BNIgkAIIA1AaIAmAvQAmA4ACAxQgKAMgcAIQgVAFgZAAQgqAAg1gPg");
	this.shape_44.setTransform(391.4406,322.1313);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3A241").s().p("Am8FrQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAKggQAagaAkghQBIhBAygfQAbgUAmgYQBOgxA8gVQBCgXBfg0QBVgwAvgjQA8gtASgRQA7g3AchCIAjhQQAEABgIAhQgHAagHAUQgLAfgRAZQgUAegtAwQg9BChdA4QgeATg7AZQhIAggVAMQhlA1haA1Qg2AfhXBLQhSBGAFADIgcASIgCAAIgDgBg");
	this.shape_45.setTransform(345.126,469.47);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B3A241").p("AmBEdQgEgOgCgWQgDgsAJglQAJglAigjQAmghALgMQAIgHBbgjQBVgfAKgVIAEAsQAAA1gTAnQAHACAJgRQATgjAQhgIBVgeQBigtA/hJIAPAiIAPg6QAOgWAXgZQAugyAvgNIAJAHQAKAKAJAQQAbAzgGBYQgFBYgfA8QgQAdgOAMQgDAGgMAFQgXAJgpgJQgsgJgQgKIAjAcIAiANQAlAOARABIhFBGQhRBMg9AZQguASgYgFQhKgPgPgPIAUAaQAdAcAqAKQhLAcg1ALQgvAJhZgFQhkgGgjgVg");
	this.shape_46.setTransform(356.3994,460.1136);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFDE47").s().p("AjpFPQhkgGgjgVIgRgXQgEgOgCgWQgDgsAJglQAJglAigjQAmghALgMQAIgHBbgjQBVgfAKgVIAEAsQAAA1gTAnQAHACAJgRQATgjAQhgIBVgeQBigtA/hJIAPAiIAPg6QAOgWAXgZQAugyAvgNIAJAHQAKAKAJAQQAbAzgGBYQgFBYgfA8QgQAdgOAMQgEAGgLAFQgXAJgpgJQgsgJgQgKIAjAcIAiANQAlAOARABIhFBGQhRBMg9AZQguASgYgFQhKgPgPgPIAUAaQAdAcAqAKQhMAcg0ALQgeAFgwAAQgbAAgfgBg");
	this.shape_47.setTransform(356.3994,460.1393);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B3A241").s().p("AosCPQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAXgYIBRgcQBdgcA6gJIBOgMQBagLA/AFQBGAHBtgIQBggHA6gNQBQgRARgFQBNgaA1gwIBBg6QAEADgVAaQgRAWgPAOQgXAYgaAQQggATg8AXQhVAjhrALQgjAFhAgBQhOgBgZACQhnAEhyAMQg+AFhvAgQhoAdADAFIghAEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_48.setTransform(298.0614,328.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B3A241").p("AnSAnQADgPAHgUQAPgpAYgdQAYgeAtgSQAZgJAngLQAKgDBhAGQBaAHATgPIgQArQgWAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsABBYgoIAAAkIAlguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBOQgqBNg2ApQgaAUgSAFQgGAFgMgBQgZgCgigZQgjgagKgQIAUAoIAYAaQAcAcAPAIQgnASg1ARQhpAjhBgDQgxgDgUgPQg+gtgHgTIAHAfQAOAmAkAbQhRgGg1gNQgugLhPgqQhYgvgXgig");
	this.shape_49.setTransform(311.8545,330.4112);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFDE47").s().p("AjgDJQgugKhPgqQhYgvgXgiIgGgdQADgOAHgUQAPgpAYgdQAYgfAtgRQAZgKAngKQAKgDBhAGQBaAGATgOIgQArQgWAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsABBYgoIAAAkIAlguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBNQgqBOg2ApQgaAUgSAFQgGAFgMgBQgZgCgigZQgjgbgKgPIAUAoIAYAaQAcAcAPAIQgnASg1AQQhpAkhBgDQgxgDgUgPQg+gtgHgTIAHAfQAOAmAkAbQhRgGg1gOg");
	this.shape_50.setTransform(311.86,330.3496);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3A241").s().p("AEuHNQgYgHgWgJQgegNgYgTQgdgWgtgwQg9hBgzhhQgQgfgWg8QgbhJgLgXQgthmgxhfQgcg3hFhdQhAhWgDAFIgQgdQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQACgCADABIAfAMIA3BCQA8BNAcAzIAoBEQAsBQARA9QATBDAuBjQAqBXAgAyQAqA/APATQA0A+BAAhIBNAnQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgHAAgWgHg");
	this.shape_51.setTransform(299.655,481.2757);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B3A241").p("Aj9mSIAkgDQAsgBAlAMQAkALAhAkQASATAXAhQAIAIAbBdQAbBXAUAMQgTACgagBQg0gEglgVIABAEQACAGALAGQAhAWBfAWIAZBXQAmBlBFBDIgiANIA4ASIAtAoQAvAxAKAwQgIAOgbAMQg0AYhYgMQhYgLg5gjIgnggQgGgEgEgMQgIgXALgpQAMgrALgPIgeAhIgQAhQgQAkgBARQgfgfgjgqQhGhWgVg+QgEgMgDgPQgHgdAFgPQAFgSAHgUQAOgoAJgJIgbATQgdAagNAqQgYhNgHg2QgGguALhZQAMhjAXgig");
	this.shape_52.setTransform(307.6951,493.0602);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFDE47").s().p("ACRGSQhYgLg5gjIgnggQgGgEgEgMQgIgXALgpQAMgrALgPIgeAhIgQAhQgQAkgBARQgfgfgjgqQhGhWgVg+QgEgMgDgPQgHgdAFgPIAMgmQAOgoAJgJIgbATQgdAagNAqQgYhNgHg2QgGguALhZQAMhjAXgiIAYgQIAkgDQAsgBAlAMQAkALAhAkQASATAXAhQAIAIAbBdQAbBXAUAMQgTACgagBQg0gEglgVIABAEQACAGALAGQAhAWBfAWIAZBXQAmBlBFBDIgiANIA4ASIAtAoQAvAxAKAwQgIAOgbAMQgjAQg0AAQgZAAgcgEg");
	this.shape_53.setTransform(307.6793,493.0602);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3A241").s().p("AkvHpQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAIAAgiQAPghAYgrQAvhVAkguQATgbAdgkQA5hHAygoQA1grBKhRQBAhIAhgxQAthDAJgSQAmhHAEhIIAGhXQAFAAADAiQACAZAAAXQAAAhgIAdQgIAkgbA7QglBUhFBSQgXAbguAsQg6A2gQASQhKBPhIBUQgoAvg6BjQg3BdAGABIgUAaIgDACIgCgBg");
	this.shape_54.setTransform(208.85,503.8163);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#B3A241").p("AkaGVQgIgNgJgUQgSgogDgmQgEgmAVgsQAZgsAHgOQAFgLBKg+QBGg6ADgXIASApQARAygFArQAHAAADgTQAHgngRhgQAggUAoglQBNhLAjhZIAaAbIgGg7QAGgaAOgfQAcg/AngcIALAEQANAGAOANQAqAnAXBVQAYBWgKBCQgFAhgJAQIgLAPQgTAQgpAGQgsAGgTgFIAqAPIAkACQAoABAQgFIgqBYQg0BigxArQglAhgZADQhMAKgSgJIAbASQAkARAsgFIglAdQgrAhgdARQgoAYhWAZQhgAbgogIg");
	this.shape_55.setTransform(217.2965,490.4956);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EFDE47").s().p("AkCGkIgYgQQgIgMgJgUQgSgpgDgmQgEgmAVgsQAZgrAHgPQAFgKBKg+QBGg7ADgWIASApQARAygFAqQAHAAADgTQAHgngRhgQAggTAoglQBNhLAjhaIAaAbIgGg7QAGgZAOggQAcg+AngcIALAEQANAGAOAMQAqAnAXBWQAYBVgKBCQgFAigJAQIgLAPQgTAQgpAFQgsAGgTgFIAqAPIAkACQAoACAQgGIgqBYQg0BigxAsQglAggZAEQhMAKgSgJIAbASQAkAQAsgEIglAdQgrAhgdARQgoAYhWAYQhJAVgpAAQgNAAgJgCg");
	this.shape_56.setTransform(217.2965,490.5254);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3A241").s().p("AorCOQgBgCABgCIAXgYIBRgcQBdgdA6gHIBOgNQBbgMA/AHQBFAGBtgIQBhgHA6gNQBLgPAWgHQBNgaA1gvIBAg7QAEADgVAaQgQAUgQARQgXAXgaAQQgfATg8AYQhVAhhrANQgjADhAAAQhPAAgYAAQhmAFh0ALQg+AHhvAeQhoAeAEAEIghAFQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_57.setTransform(152.837,429.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#B3A241").p("AnSAnQADgPAHgUQAPgpAYgdQAYgeAtgSQAZgJAmgLQALgDBhAGQBaAHATgPIgQArQgWAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsAABYgoIgBAlIAmguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBOQgqBNg2AoQgaAVgSAFQgGAEgMAAQgZgCgigZQgkgagJgQIAUAoIAYAaQAcAcAPAIQgnASg1ARQhpAihBgDQgxgCgUgPQg+gtgHgTIAHAfQAOAlAkAcQhRgGg1gNQgugLhPgqQhYgvgXgig");
	this.shape_58.setTransform(166.6545,431.6017);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EFDE47").s().p("AjgDKQgugLhPgqQhYgvgXgiIgGgcQADgPAHgUQAPgpAYgdQAYgeAtgSQAZgJAmgLQALgDBhAGQBaAHATgPIgQArQgWAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsAABYgoIgBAlIAmguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBOQgqBNg2AoQgaAVgSAFQgGAEgMAAQgZgCgigZQgkgagJgQIAUAoIAYAaQAcAcAPAIQgnASg1ARQhpAihBgDQgxgCgUgPQg+gtgHgTIAHAfQAOAlAkAcQhRgGg1gNg");
	this.shape_59.setTransform(166.66,431.541);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3A241").s().p("AorCPQgCgDACgDIAXgXQAjgOAugOQBdgdA6gHIBOgNQBagMBAAHQBFAGBtgIQBhgIA5gMQBLgPAWgHQBNgaA1gwIBBg6QAEADgVAaQgQAUgQAQQgXAYgaAQQgfATg9AYQhVAhhrANQgiAEhBgBQhLgBgcABQhnAFhyAMQg+AFhvAfQhoAeADAFIggAEQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_60.setTransform(61.0689,469.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#B3A241").p("AnSAnQADgPAHgUQAPgpAYgdQAYgeAtgSQAZgJAngLQAKgDBhAGQBbAHASgPIgPArQgXAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsAABYgoIAAAlIAlguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBOQgqBNg1AoQgbAVgSAFQgGAEgMAAQgZgCghgZQgkgagKgQIAUAoIAYAaQAcAcAPAIQgnASg1ARQhpAihBgDQgxgCgUgPQg+gtgHgTIAIAfQAOAlAjAcQhRgGg1gNQgugLhPgqQhYgvgXgig");
	this.shape_61.setTransform(74.8545,471.4509);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EFDE47").s().p("AjgDKQgugLhPgqQhYgvgXgiIgGgcQADgPAHgUQAPgpAYgdQAYgeAtgSQAZgJAngLQAKgDBhAGQBbAHASgPIgPArQgXAwghAbQAFAFAPgMQAggXA3hSIBaAJQBsAABYgoIAAAlIAlguIA1gbQA/gaAwAHIAFAKQAGAOABASQADA6gqBOQgqBNg1AoQgbAVgSAFQgGAEgMAAQgZgCghgZQgkgagKgQIAUAoIAYAaQAcAcAPAIQgnASg1ARQhpAihBgDQgxgCgUgPQg+gtgHgTIAIAfQAOAlAjAcQhRgGg1gNg");
	this.shape_62.setTransform(74.86,471.391);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#368084").s().p("AlpG+QgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAEghQAVgfAcgnQA6hOAqgpQAWgZAhggQBCg/A2ghQA8gkBShGQBKhAAngsQAyg5AOgUQAuhCAPhGIARhWQAFAAgBAiQgCAcgDAUQgEAhgMAcQgNAigiA4QgwBNhPBKQgZAYg1AlQg9AsgWASQhCA3hiBXQguAqhHBbQhCBVAFACIgXAXIgDABIgCgBg");
	this.shape_63.setTransform(281.3923,397.1321);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#358084").p("AlFFuQgHgOgGgVQgMgqABgmQACgmAagpQAegoAJgOQAGgJBSg0QBNgxAGgWIAMArQALAzgLAqQAHABAGgSQALgmgEhiQAjgPArggQBXg/AuhVIAWAeIACg7QAJgZASgdQAjg6ArgXIAKAFQANAIAMAOQAkAsANBYQAMBYgSBAQgJAhgMAOIgMAOQgVANgqAAQgsAAgSgHIAoAUIAjAGQAnAGARgDIg1BTQhABbg2AlQgqAbgZAAQgTAAgVgBQgpgDgLgHIAXAVQAiAWAsABQhEArgxAVQgsAThZANQhiAOgngNg");
	this.shape_64.setTransform(291.0731,384.9196);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#34C1D3").s().p("AkwGAIgVgTQgHgNgGgVQgMgqABgmQACgnAagpIAng1QAGgKBSg0QBNgxAGgVIAMAqQALA0gLAqQAHABAGgTQALglgEhiQAjgPArggQBXhAAuhUIAWAdIACg7QAJgYASgdQAjg7ArgWIAKAFQANAIAMAOQAkAsANBXQAMBYgSBBQgJAggMAPIgMANQgVAOgqAAQgsAAgSgHIAoATIAjAHQAnAGARgDIg1BTQhABag2AlQgqAcgZAAIgogCQgpgDgLgHIAXAWQAiAVAsABQhEArgxAVQgsAThZANQgyAIgjAAQghAAgTgHg");
	this.shape_65.setTransform(291.0731,384.9505);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#368084").s().p("AnNEsQAIgaAJgUQANgeASgYQAWgdAwgsQBEg/BfgxQAfgPA8gWQBJgbAXgLQBXgmBvg3QA4gcBchEQBWhBgEgDIAdgPQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABABABQAAAAAAABQAAAAAAABIgNAfIhCA2QhMA8g0AcIhEAoQhRArg9ARQhDAThjAtQhXApgyAhQhBAqgSAPQg+AzghBAIgnBNQgFgBALggg");
	this.shape_66.setTransform(137.8968,490.855);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#358084").p("AGUj7IADAlQABAsgMAkQgMAkgkAhQgTASghAXQgIAHhdAbQhXAbgMAUQgDgTACgaQAEg0AVglIgEAAQgGADgGAKQgWAhgWBfQglAGgyATQhmAmhDBEIgNgiIgSA4IgoAtQgyAugvALQgOgJgMgaQgYg1AMhYQALhXAjg4IAhgoIAQgKQAXgHApALIAXAHQAZAJAKAHIghgeQg6gfgcgDQAfgfArgjQBWhGA+gUIAbgHQAdgGAPAEIAmAMQAoAOAIAKQgEgMgOgPQgagegqgNIAtgMQA0gOAigEQAvgGBZALQBiAMAiAYg");
	this.shape_67.setTransform(126.0871,498.7849);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#34C1D3").s().p("AmGEcQgYg1AMhYQALhXAjg4IAhgoIAQgKQAXgHApALIAXAHQAZAJAKAHIghgeQg6gfgcgDQAfgfArgjQBWhGA+gUIAbgHQAdgGAPAEIAmAMQAoAOAIAKQgEgMgOgPQgagegqgNIAtgMQA0gOAigEQAvgGBZALQBiAMAiAYIAQAYIADAlQABAsgMAkQgMAkgkAhQgTASghAXQgIAHhdAbQhXAbgMAUQgDgTACgaQAEg0AVglIgEAAQgGADgGAKQgWAhgWBfQglAGgyATQhmAmhDBEIgNgiIgSA4IgoAtQgyAugvALQgOgJgMgag");
	this.shape_68.setTransform(126.0871,498.7691);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#368084").s().p("AlpG+QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAEghQAVgfAcgnQA6hOAqgpQAWgZAhggQBCg/A2ghQA8gkBShGQBKhAAngsQA1g9ALgQQAuhCAPhGIARhWQAFAAgCAiQgBAagDAWQgEAhgMAcQgNAigiA4QgwBOhPBJQgaAYg0AlQg+AtgVARQhCA3hiBXQguAqhHBbQhCBVAFACIgXAXIgDABIgCgBg");
	this.shape_69.setTransform(174.5188,493.8321);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#358084").p("AlFFuQgHgOgGgVQgMgqABgmQACgmAZgpQAegoAJgOQAHgJBSg0QBMgxAGgWIANArQALAzgLAqQAHABAGgSQALgmgEhiQAjgPArggQBXg/AuhVIAWAeIACg7QAJgZASgdQAjg6ArgXIAKAFQANAIAMAOQAkAsANBYQAMBYgSBAQgJAhgMAOIgMAOQgVANgqAAQgtAAgRgHIAoAUIAjAGQAnAGARgDIg1BTQhABbg3AkQgpAcgZAAQgTAAgVgBQgqgDgKgHIAXAVQAiAWAsABQhEArgxAVQgsAThZANQhiAOgngNg");
	this.shape_70.setTransform(184.2231,481.6196);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#34C1D3").s().p("AkwGAIgVgTQgHgNgGgVQgMgqABgmQACgnAZgpIAng1QAHgJBSg1QBMgwAGgWIANAqQALA0gLAqQAHABAGgTQALglgEhiQAjgPArggQBXhAAuhUIAWAdIACg7QAJgYASgdQAjg7ArgWIAKAFQANAIAMAOQAkAsANBXQAMBYgSBBQgJAggMAPIgMANQgVAOgqAAQgtAAgRgHIAoATIAjAHQAnAGARgDIg1BTQhABag3AlQgpAbgZAAIgogBQgqgDgKgHIAXAWQAiAVAsABQhEArgxAVQgsAThZANQgyAIgjAAQghAAgTgHg");
	this.shape_71.setTransform(184.2231,481.6505);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#368084").s().p("Ag/H4QgOgegGgdQgIgkgEhBQgEhcAYhoQAIgiAWg9QAahIAHgZQAbhfAdh0QAOg8AHh0QAHhrgFACIAGghQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAIAPAeIgBBVQgDBigLA5IgOBOQgTBZgbA6QgcBAgcBoQgZBegHA7QgKBPAAAUQgBBRAbBCIAiBQIgBABQgJAAgkhFg");
	this.shape_72.setTransform(281.1214,192.7619);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#358084").p("AByncIAeAVQAiAcAUAgQAVAhABAwQABAbgDAoQAAALgmBZQgkBUAIAWQgQgLgTgSQgmglgPgoIgCAEQgCAGAEAMQAMAlA6BPIgmBSQgkBmAJBgIgjgNIAgAzIAIA7QAEBEgXArQgQAFgcgIQg2gQg8hBQg7hCgWg/IgJgzQgCgGAFgMQAJgXAjgXIAVgNQAXgOALgDIgsAGQg9AYgUATQgEgrABg3QAChuAYg9IAMgYQAOgbANgJIAigVQAlgWANAAQgMgEgUAAQgoABglAYQAIgSAMgZQAXgwASgdQAagoBCg8QBIhEAogLg");
	this.shape_73.setTransform(277.8275,207.442);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#34C1D3").s().p("AALHcQg2gQg8hBQg7hCgWg/IgJgzQgCgGAFgMQAJgXAjgXIAVgNQAXgOALgDIgsAGQg9AYgUATQgEgrABg3QAChuAYg9IAMgYQAOgbANgJIAigVQAlgWANAAQgMgEgUAAQgoABglAYIAUgrQAXgwASgdQAagoBCg8QBIhEAogLIAcAEIAeAVQAiAcAUAgQAVAhABAwQABAbgDAoQAAALgmBZQgkBUAIAWQgQgLgTgSQgmglgPgoIgCAEQgCAGAEAMQAMAlA6BPIgmBSQgkBmAJBgIgjgNIAgAzIAIA7QAEBEgXArQgGACgIAAQgNAAgRgFg");
	this.shape_74.setTransform(277.8275,207.4462);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#368084").s().p("AlpG+QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAEghQAVgfAcgnQA5hOAqgpQAXgZAhggQBCg/A2ghQA8gkBShGQBKhAAngsQA1g9ALgQQAuhCAPhGIARhWQAFAAgCAiQgBAagDAWQgEAhgMAcQgNAigiA4QgwBNhPBKQgZAYg1AlQg9AsgWASQhOBAhWBOQguAqhHBbQhCBVAFACIgYAXIgCABIgCgBg");
	this.shape_75.setTransform(268.1673,277.4321);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#358084").p("AlFFuQgGgOgGgVQgNgqABgmQACgmAagpQAegoAJgOQAGgJBSg0QBMgxAHgWIAMArQALAzgKAqQAGABAGgSQAMgmgFhiQAjgPAsggQBWg/AuhVIAWAeIADg7IAag2QAkg6ArgXIAKAFQANAIALAOQAlAsAMBYQAMBYgSBAQgJAhgMAOQgCAHgKAHQgUANgqAAQgtAAgSgHIAoAUIAkAGQAmAGARgDQgVAmggAtQhABbg2AlQgpAbgZAAQgTAAgWgBQgpgDgLgHIAYAVQAhAWAtABQhFArgxAVQgrAThZANQhjAOgngNg");
	this.shape_76.setTransform(277.8363,265.2196);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#34C1D3").s().p("AkwGAIgVgTQgGgNgGgVQgNgqABgmQACgnAagpIAng1QAGgJBSg1QBMgwAHgWIAMAqQALA0gKAqQAGABAGgTQAMglgFhiQAjgPAsggQBWhAAuhUIAWAdIADg7IAag1QAkg7ArgWIAKAFQANAIALAOQAlAsAMBXQAMBYgSBBQgJAggMAPQgCAHgKAGQgUAOgqAAQgtAAgSgHIAoATIAkAHQAmAGARgDQgVAmggAtQhABag2AlQgpAbgZAAIgpgBQgpgDgLgHIAYAWQAhAVAtABQhFArgxAVQgrAThZANQgzAIgjAAQghAAgTgHg");
	this.shape_77.setTransform(277.8363,265.2505);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#514630").s().p("AABh3IACAAIAADqIgFAFQAHiMgEhjg");
	this.shape_78.setTransform(496.625,190.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#773B2F").s().p("EgFyAqQQqSgErWjWQmMh1kuiLQgfABACgLQAHgdgDicIgEiXQATAjBZAxQAsAZApASQgKg1AyiIIA0h/QBFAGB3AaQA8ANAuAMQgQhJAfh5IAihqQAnApCTgEQBKgCBCgKQgUiRAhiKQAKgqAOglIAMgdQA9ANCvgxQBYgYBLgbQgQhOAGjNIAKi+QBzgTCjhPQBRgoA6gkQAAgvg9iUIg+iLQAMg3DAhoQBgg0BdgpIjdmoQAfg9CjiBQBRhABLg1Qg0hFg+ipIg0iaQAfgfCMhVICFhOQgmh/AQjeIAXjGQAxAGBlgIQBqgHAKgNQgNg1gBhOQgBibA+h6QASADCnAKQBkAGAqAZIAvhbQBAhsBOhcIDCEVQA6hZBMhLQBjhiAxAQQAuA3AqB4QAfBYAZBzQCWArBsBFQB1BKA5BjQihACh+AlQibAshfBdQgdAcgngBQi+gHiNAaQjoAtgLB+QgIBZAoB0QApB3BJBiQBQBrBfAwQBsA2BsgiQFdhsC2hJQEuh6AGhOQADgiAXhFQAaAXAYANQATAJAMABQDbAWBlCHQBXB1ANDmIAACJIgmAoQgqArgvAZQg1AehYAcQg5AThrAcQiCAih9AEQhvADhkgUQhUgRghhcIgUhDQgLghgPgIQgVgMgcAAIgXAEIAIA2QAPBAAcA2QBaCrDCgFQDDgFDGguQBvgZBpgsQBIgfAmgYQAhgVAZgbQANgOAGgKIgEBSQgREImvDWQkICDlqBZQAcA4AWA6QAYAsARBIQAfBkAZB4QAZAVCFBBIANAJQAPALANAPQAmgHAvAEQBRAIBTArIhHArQgLAJgWAHQgsANg1gMIgBAAIACAIQAZADAoAQQA7AZBQA2QgdAPgpALQhSAWg3gQICJBnQhPAigwAEQhHAGg4gtQgOAIgOAHIgLAFQgQAAgOgCQAMDzgQEHQgLCxgVCfIgEAeIAGgDIACAAQAJgtAZgfQAggnAuAJIgKAoQgMAvgHAlQAoggAqgRIgNAbQgPAkgKAsQgLAxgMAdIABAQQAUgNAagLIAVgJQgnB3ghA4QgTC8g5BGQgdAjgZgDIl0g6QlLEBoEBQQhpARhpAIQhLA8hlAKQgTACgUAAQh7AAiUhIg");
	this.shape_79.setTransform(248.4533,278.5189);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3D5B39").p("AoihsIAIAoQAOAwAWAnQBICACIAAQCVAACzgkQCFgaClgyQBwghA/hNQAfgmAJgg");
	this.shape_80.setTransform(442.1305,205.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A9D274").s().p("An2ATQgWgngOgxIgIgnIRFglQgJAfgfAnQg/BNhwAhQilAyiFAaQizAjiVAAQiIAAhIh/g");
	this.shape_81.setTransform(442.125,205.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A9D274").s().p("AjHg0IGPiKIlEF9g");
	this.shape_82.setTransform(409.125,105.35);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A9D274").s().p("Aj0ANIGRiEIBYDvg");
	this.shape_83.setTransform(343.325,109.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgMAhQgNgHgFgPQgFgOAGgOQAFgNANgFQALgEANAHQANAHAFAPQAFAOgFAOQgGANgMAFQgGABgFAAQgGAAgIgEg");
	this.shape_84.setTransform(422.1435,121.3787);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWA7QgXgNgJgbQgKgZAKgZQAJgYAXgIQAWgIAXANQAXANAJAaQAKAagKAYQgJAZgXAIQgJADgJAAQgNAAgOgIg");
	this.shape_85.setTransform(420.425,103.3618);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#343434").s().p("AgcCTQgvgogahHQgZhHAMg8QAMg9AqgPQAqgPAuAoQAwAoAZBHQAaBGgMA9QgMA9gqAPQgMAEgLAAQggAAgigdg");
	this.shape_86.setTransform(421.9108,110.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgPApQgQgJgHgSQgGgSAHgRQAGgSAQgFQAPgGAQAKQAQAIAHATQAHASgHARQgHARgQAGQgGACgGAAQgJAAgKgGg");
	this.shape_87.setTransform(348.1935,144.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgcBLQgdgRgMghQgMghAMgfQAMgfAdgKQAcgKAdAQQAdARAMAhQALAhgLAfQgMAfgdAKQgLAEgMAAQgQAAgSgKg");
	this.shape_88.setTransform(346.0125,121.6155);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#343434").s().p("AgjC6Qg8gzgghaQgghZAPhNQAPhNA1gSQA1gTA7AyQA8AyAgBaQAgBagPBNQgPBNg1ASQgPAFgPAAQgoAAgqgkg");
	this.shape_89.setTransform(347.9117,131.2231);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5E3563").p("AG6knQgygRhiBjQhMBLg7BZIjBkVQhOBbg/BtIgwBaQgpgZhkgFQimgKgTgDQg+B5ABCbQABBOANA1QAagOB+hxQCFhuBcgQQBngSB5gFQAggBBvgBQArAPC9AoQCzAsAyA2QgOhdgchsQg4jZhFhQg");
	this.shape_90.setTransform(322.4681,33.5379);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8655A1").s().p("AphDFQgBicA+h4QAUACClAKQBlAGApAZIAvhbQBAhsBOhcIDBEVQA6hZBMhLQBjhiAxARQBFBQA4DYQAcBtAOBcQgxg1izgtQi+gogqgPQhvABggACQh5AFhoASQhbAPiGBuQh9BygbAOQgNg2gBhNg");
	this.shape_91.setTransform(322.3492,33.575);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#475938").s().p("AAbA+QgbgGgbgWQgbgXgLgZQgLgZALgOQAMgOAbAGQAaAGAcAWQAbAXALAZQAMAZgMAOQgIAKgQAAQgHAAgIgCg");
	this.shape_92.setTransform(475.3436,150.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#475938").s().p("AgeA8QgNgZAAgjQAAgjANgYQANgZARAAQASAAANAZQANAYAAAjQAAAjgNAZQgNAagSAAQgRAAgNgag");
	this.shape_93.setTransform(454.6,159.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#3D5B39").p("ACoTBICxgrQDVg6CzhKQI9jrAUk0QAamMhDirQhYjikegdQgygFg9hKQhih2gxjwQgjinithzQichnjtgsQjfgpjkAWQjmAXiYBQQieBTh8C4QhtCjhHDhQhBDJgWDSQgVDGAWCOQAkDoAXDIQALBkAEA2");
	this.shape_94.setTransform(363.0637,157.8224);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A9D274").s().p("AzjN3QgEg2gLhkQgXjIgkjoQgWiOAVjGQAWjSBBjJQBHjhBtijQB8i4CehTQCYhQDmgXQDkgWDfApQDtAsCcBnQCtBzAjCnQAxDwBiB2QA9BKAyAFQEeAdBYDiQBDCrgaGMQgUE0o9DrQizBKjVA6IixArg");
	this.shape_95.setTransform(363.0637,157.8295);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#ABABAB").p("Ah/AhQgEgMAJgUQAUgoBGgsIAwAsQA7A0AyAuQhSAbgvgBQhHgBg0gzg");
	this.shape_96.setTransform(363.4224,376.4385);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEF0F0").s().p("AgCBUQhHgBg0gzQgEgMAKgUQAUgoBFgsIAxAsIBsBiQhQAbgvAAIgCgBg");
	this.shape_97.setTransform(363.1907,376.5005);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#ABABAB").p("AhwAvQgKgOgBgVQgDgrAognIALABQAOACAUAIQBAAbBgBOQgkAOgwAHQhdAOg2gig");
	this.shape_98.setTransform(372.2561,364.9493);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FEF0F0").s().p("AhuAvQgJgOgCgWQgDgqApgnIAKAAQAPACAUAJQA/AbBhBOQglAOgvAHQgcAEgXAAQg6AAgngYg");
	this.shape_99.setTransform(372.0147,364.9542);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#ABABAB").p("Ah5g7IATgCQAZgBAbAEQBYANBZA3IhLAkQgMAIgWAFQgsAJg0gRQg1gQAAgwQAAgQAFgRg");
	this.shape_100.setTransform(372.6844,351.9738);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEF0F0").s().p("AhMAzQg0gQAAgwQgBgQAGgRIAFgNIATgCQAYgBAcAEQBYANBYA3IhKAkQgMAIgXAFQgQADgPAAQgfAAgigLg");
	this.shape_101.setTransform(372.4229,351.9738);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#3D5B39").p("AldlsIgOCMQgHCxAjC1QAQBQDHB1QC+BwByAKQAlgKApgdQBRg4ARhbQAShbgqhEQgNgVgSgRIgPgMQgjgVglgYQhKgvgGgMQgOhGgFgmQgCgOgJhQQgQiMgvguQgPgOgQgEIgNAA");
	this.shape_102.setTransform(328.2419,336.1531);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A9D274").s().p("Ah4FLQjHh1gQhQQgji1AHiwIAOiNIFehYIANAAQAQAEAPAOQAvAuAQCMIALBeQAFAmAOBGQAGAMBKAvIBIAuIAPALQASARANAVQAqBEgSBbQgRBbhRA5QgpAcglAKQhygKi+hwg");
	this.shape_103.setTransform(328.2419,336.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#ABABAB").p("AAABoQgFAEgMAAQgXAAgggRQgPgIALgnQALgmAYgbQAdghAugbIAqgUIgOAbQgPAkgLAqQgQBIgUAcg");
	this.shape_104.setTransform(291.7228,502.7069);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FEF0F0").s().p("AhFBYQgPgHALgoQALgmAYgbQAdghAugbIAqgUIgOAbQgPAkgLArQgQBIgVAcQgEADgMAAQgXAAgggRg");
	this.shape_105.setTransform(291.4217,503);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#ABABAB").p("Ag2BtIAPgDQASgHALgRQAmg6AsiBIgpASQgsAWgTAXIgSAYQgTAegEAkQgEAlALAQQAGAIAGAAg");
	this.shape_106.setTransform(290.9416,524.3523);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FEF0F0").s().p("AhABjQgMgQAEgkQAEglATgdIASgYQATgYAsgWIAqgRQgtCAgmA7QgLAQgRAHIgPAEQgHgBgFgIg");
	this.shape_107.setTransform(290.7734,524.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#ABABAB").p("AADBXQgQgEgQgJQgggTAEgcQAIgtAaghQAggrAwAKIgNAwQgOA2gIAoQgDARgBAEQgFAKgKgCg");
	this.shape_108.setTransform(293.2836,481.6981);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FEF0F0").s().p("AAEBXQgQgEgRgJQgggTAFgcQAHgtAaghQAhgrAwAKIgNAwQgOA2gIAoIgFAVQgDAIgIAAIgDAAg");
	this.shape_109.setTransform(293.2223,481.6981);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#3D5B39").p("AomkTQAahEBKhEQCSiHDrAEIA5AKQBFAPBCAZQDRBPBSCVIAwAFQA3AHAiAQIgQEbQgYEjgqAlIjMAcQgsBMhnAoQjPBPkqi4");
	this.shape_110.setTransform(239.9339,501.7035);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A9D274").s().p("AmDGeIijqxQAahEBKhEQCSiHDrAEIA5AKQBFAPBCAZQDRBPBSCVIAwAFQA3AHAiAQIgQEbQgYEjgqAlIjMAcQgsBMhnAoQg+AYhGAAQikAAjRiBg");
	this.shape_111.setTransform(239.925,501.7035);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C7DAA7").s().p("AuGU7Ig6gEIGZpLQBAgpB2ieQBziaB3jKQEfnoAdj9QAZjhCTjuQBKh3BEhKIBhhPQBshLA2AUQCsFhAdIeQATFmgsGCQgIBLgdBhQgZBUgSAfQk1IssNCXQj0AvkGABIgRAAQhJAAhCgEg");
	this.shape_112.setTransform(313.3744,415.4252);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#3D5B39").p("AFF3/IgdCSQgqC2g9CxQjEI4lCE7QjmEZlJEiQqQJEnsAmQD/B7GOB6QMbDzLIgHIA9AEQBOAFBWgBQETgCD+g0QMripEfpiQAFgLAHgdQAJgkAFggQAyl/gMl6QgSp0i/mG");
	this.shape_113.setTransform(205.1152,396.5038);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A9D274").s().p("AC2X5Ig9gEQrIAHsbjzQmOh6j/h7QHsgmKQpEQFJkiDmkZQFCk7DEo4QA9ixAqi2IAdiSIXmFaQC/GGASJ0QAMF6gyF/QgFAggJAkQgHAdgFALQkfJisrCpQj+A0kTACIgRABQhMAAhHgFg");
	this.shape_114.setTransform(205.8075,396.3025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#ABABAB").p("AABBpQgFADgLAAQgYABgfgQQgQgIAKgnQALgnAYgbQAdgiAugbIApgVIgNAcQgPAkgLAqQgPBHgUAeg");
	this.shape_115.setTransform(415.1021,465.3537);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FEF0F0").s().p("AhDBaQgQgIAKgnQALgnAYgbQAdgiAugbIApgVIgNAcQgPAkgLAqQgPBHgUAeQgFADgLAAIgCABQgXAAgegQg");
	this.shape_116.setTransform(414.817,465.6508);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#ABABAB").p("Ag0BvIAPgEQARgHALgRQAlg6AriCIgpASQgsAXgTAYIgRAYQgSAegEAkQgEAlAMAPQAFAIAHABg");
	this.shape_117.setTransform(416.1979,482.4953);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FEF0F0").s().p("Ag/BkQgLgQADgkQAEgkASgeIASgYQATgZAsgWIApgSQgsCCglA6QgLARgRAHIgPAEQgGgBgGgIg");
	this.shape_118.setTransform(416.0342,482.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#ABABAB").p("AAEBXQgQgEgQgJQghgSAFgdQAHgsAZgiQAggrAwAJIgMAwQgOA2gHApQgDARgBAEQgEAJgLgBg");
	this.shape_119.setTransform(411.6047,456.1001);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FEF0F0").s().p("AAFBXQgQgEgQgIQghgTAFgdQAHgsAZghQAggsAwAKIgMAvQgOA2gHApIgEAVQgEAIgIAAIgDAAg");
	this.shape_120.setTransform(411.5476,456.1001);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#3D5B39").p("AnOlRQAKgJAVgKQApgWAygJQChgbDABtIELCyQAHgQAOgSQAagkAdgKIAUgCQAYADASATQA6A9gQDMQgQDMg8BMQgeAmgagDIoHhQ");
	this.shape_121.setTransform(370.2815,479.0601);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A9D274").s().p("AFIGJIoHhQIkPqKQAKgJAVgKQApgWAygJQChgbDABtIELCyQAHgQAOgSQAagkAdgKIAUgCQAYADASATQA6A9gQDMQgQDMg8BMQgcAjgYAAIgEAAg");
	this.shape_122.setTransform(370.2815,479.0601);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#5E3563").p("Add8JQgBg1gFhGQgLiMgYhRQhBAThJAhQiTBEgrBNQhJhHhYhHQiviPhFgEQgnAfgpArQhTBVgOA9Qk9gzifgTIgXDGQgQDeAnB/QhAAkhGAqQiMBVgeAeIAzCbQA+CpA0BFQhLA0hRBBQijCBgeA9IDcGoQhdAphgA0Qi/BogLA3IA9CLQA9CUAAAvQg6AkhRAoQijBPhzATIgKC+QgGDNAQBNQhLAbhYAZQivAxg9gNIgMAdQgOAkgKArQggCJATCSQhCAKhKACQiTAEgmgqIgjBrQgfB5AQBJQgugMg8gNQh3gbhFgFIg0B+QgyCJAKA1QglgLgogTQhRglgUgiIAECIQADCNgHAdQgGAeDZg1QBsgbBuggIR4qrIK5y+IMF6XIJHkgg");
	this.shape_123.setTransform(190.2468,277.3224);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8655A1").s().p("EgdbAizQAHgdgDiNIgEiIQATAiBRAlQApATAkALQgJg1AxiJIA0h+QBFAFB4AbQA8ANAuAMQgQhJAfh5IAihrQAmAqCUgEQBJgCBCgKQgTiSAgiJQAKgrAOgkIAMgdQA+ANCvgxQBXgZBLgbQgQhNAHjNIAJi+QB0gTCihPQBSgoA6gkQAAgvg9iUIg+iLQAMg3C+hoQBgg0BegpIjcmoQAeg9CiiBQBShBBLg0Qg0hFg+ipIg0ibQAfgeCMhVQBGgqA/gkQgmh/APjeIAXjGQCgATE9AzQANg9BThVQAqgrAngfQBFAECvCPQBXBHBKBHQAqhNCThEQBJghBBgTQAYBRALCMQAGBGAAA1IiNBKIpHEgIsGaXIq4S+Ix4KrQhuAghtAbQiLAigvAAQgaAAACgLg");
	this.shape_124.setTransform(190.2656,277.3274);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#ABABAB").p("AiAArQgFgLAIgVQAQgqBBgyIA0AnQBAAuA2ApQhPAigvAEQhHAGg5gug");
	this.shape_125.setTransform(428.9195,365.0968);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FEF0F0").s().p("Ah9AqQgFgLAIgVQAPgqBBgyIA1AnIB1BXQhPAigwAEIgPABQg9AAgygpg");
	this.shape_126.setTransform(428.6789,365.1596);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#ABABAB").p("AhtA0QgLgNgEgVQgHgqAlgrIAuAHQBBAVBoBEQgjASgvALQhcAXg4gdg");
	this.shape_127.setTransform(436.4574,353.1907);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FEF0F0").s().p("AhrA0QgLgNgDgWQgIgpAlgrIAuAHQBCAUBnBFQgjARguAMQgpAKghAAQgrAAgggQg");
	this.shape_128.setTransform(436.2118,353.2087);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#ABABAB").p("Ah9g0IBHgGQBYAEBeAwIhHAqQgLAJgWAHQgrANg2gMQg1gLgFgwQgCgPAEgRg");
	this.shape_129.setTransform(435.3884,340.1695);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FEF0F0").s().p("AhGA1Qg2gLgFgwQgBgPADgRIAEgOIBHgGQBZAEBdAwIhGAqQgLAJgWAHQgYAHgZAAQgXAAgZgGg");
	this.shape_130.setTransform(435.1275,340.1699);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#3D5B39").p("Al9lAIgDAmQgBAwADA3QAJCxA0CxQAXBODSBhQDIBeBygBIAXgLQAbgPAYgUQBLhAAJhcQAJhcgwg/QgPgUgTgPIgQgKQgmgTgngUQhOgogGgLQgVhFgJglQgEgRgQhLQgdiKgzgpQgQgNgQgCIgNAB");
	this.shape_131.setTransform(389.6711,327.1994);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A9D274").s().p("AhYFeQjShigXhOQg0ixgJiwQgDg3ABgxIADglIFUh5IANgBQAQACAQANQAzApAdCKIAUBdQAJAkAVBGQAGAKBOAoIBNAnIAQALQATAOAPAUQAwA/gJBdQgJBchLBAQgYAUgbAPIgXAKIgDABQhxgBjGhcg");
	this.shape_132.setTransform(389.6711,327.2005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,497.9,557.2);


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E5").s().p("AgPAPQgHgHAAgIQAAgHAHgHQAHgGAIAAQAKAAAGAGQAHAHAAAHQAAAIgHAHQgGAGgKAAQgIAAgHgGg");
	this.shape.setTransform(13.25,15.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E5").s().p("AgPAPQgHgGAAgJQAAgHAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAHQAAAJgHAGQgHAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(19.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3D45").s().p("AhUBPQgkghAAguQAAgtAkghQAjggAxAAQAyAAAjAgQAkAhAAAtQAAAugkAhQgjAggyAAQgxAAgjggg");
	this.shape_2.setTransform(12.075,11.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E9E8").s().p("Ah6ByQgzgwAAhCQAAhBAzgwQAzguBHgBQBIABAzAuQAzAwAABBQAABCgzAwQgzAuhIABQhHgBgzgug");
	this.shape_3.setTransform(20.875,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.Clip_Group_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815144").s().p("AgZA3QADgcAOgeQAIgWAEgGQALgPAKgIIABAAQgCAFgMAXIgNAaQgIANgFANQgHARgDAMg");
	this.shape.setTransform(39.55,20.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AAAC").s().p("AgQAXQAOgnAbgmIgxBtQACgMAGgUg");
	this.shape_1.setTransform(39.55,20.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#815144").p("AD+j9QgOgIgXAAQgtgBgvAoQgIgEgRACQgiADguAeQgMAIgIAJQgmAvghAxQgaAngxBCQgUAdgvAtQgRAQgeAcQgWAUgBAIQgGAdAJAfQAKAkAXgIQAYgIBggjQBegiAIgEQAJgECUimQCXinADgOQACgNgRgkg");
	this.shape_2.setTransform(29.058,37.3401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AAAC").s().p("AkYDpQgJgfAGgdQABgIAWgUIAvgsQAvgtAUgdQAxhCAagnQAhgxAmgvQAIgJAMgIQAugeAigDQARgCAIAEQAvgoAtABQAXAAAOAIIARAhQARAkgCANQgDAOiXCnQiUCmgJAEIhmAmIh4ArIgIABQgRAAgIgdg");
	this.shape_3.setTransform(29.058,37.3401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);


(lib.Clip_Group_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C3337").s().p("AjyEcQgXgFgGgIQgTgYACgWQADgiAxgsQAtgoBWh0QAsg6AigzIhghMIDjhcQAiABCTBhQARALg6BcQgzBQg4BAQgkArhlBHQhsBNhMAeQgRAHgSAAQgLAAgMgDg");
	this.shape.setTransform(29.0579,28.7111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_1, null, null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_dino_lama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_lama
	this.instance = new lib.determinadocompenaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.75,396.75,0.6183,0.6183,0,0,0,248.5,278.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#773B2F").s().p("AzWPAQqNgsm5iaQjIhGkGgOQi4gLk/AQQmkAWh9ABQlCAEkIgmQn6hIgbmzQgJiIApibIAqiAQApAHAsgFQBYgIAQg5QASg+KogyQJJgsHpgsQHqgsg3iaQg3iaFLgbQFLgcMSgpQMRgqG2C8QhFEkD+hJQCMgoChAEQCAADCuAhQBmAUDQAtQC9AnC3jXQC3jWFcAmQFbAmCiA9ID4BeQBXAhCCg4QCCg4CdCEQFhiGEQBvQEPBuhGAGQhHAGCGBMQCHBNDNC7QCrCcBQAuQDMB5jgDVQi8C0mNCrQkdB7wEArQkXAMp8APQpdAQkjANQo+Aal/g5QiKgUg7ACQhgADiVAtQjjBEl8AAQiqAAjIgOg");
	this.shape.setTransform(119.3264,507.3583,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},244).to({state:[{t:this.shape},{t:this.instance}]},48).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjyEcQgXgFgGgIQgTgYACgWQADgiAxgsQAtgoBWh0QAsg6AigzIhghMIDjhcQAiABCTBhQARALg6BcQgzBQg4BAQgkArhlBHQhsBNhMAeQgRAHgSAAQgLAAgMgDg");
	mask.setTransform(29.0579,28.7111);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(29,38.1,1,1,0,0,0,29,38.1);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(29.1,28.7,1,1,0,0,0,29.1,28.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.2,0,57.8,57.4), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah6BxQgzgvAAhCQAAhCAzguQAzgvBHAAQBIAAAzAvQAzAuAABCQAABCgzAvQgzAvhIAAQhHAAgzgvg");
	mask.setTransform(20.725,19.425);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(19.2,17.7,1,1,0,0,0,19.2,17.7);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.3,3.4,34.900000000000006,32), null);


(lib.amigosfelizescenafinalai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_verde
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ACB59").s().p("AgdAQQgGgEgHgRIgGgQIASAAQAWADARAHQASAHANANQAGAHACAFIgeABQgnAAgIgGg");
	this.shape.setTransform(543.25,284.4063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9ACB59").s().p("AgZASQgHgEgKgPIgJgPIASgCQAWgCASAEQATAEAPALQAHAFAEAFQgxAKgSAAQgHAAgDgBg");
	this.shape_1.setTransform(526.075,281.1531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_2.setTransform(541.95,281.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AgPAPQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_3.setTransform(525.1,277.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#525252").p("AA1AAQAAAWgPAQQgQAQgWAAQgVAAgQgQQgQgQAAgWQAAgVAQgQQAQgPAVAAQAWAAAQAPQAPAQAAAVg");
	this.shape_4.setTransform(526.95,276.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F0F0").s().p("AglAmQgPgQAAgWQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape_5.setTransform(526.95,276.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#525252").p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");
	this.shape_6.setTransform(544.75,279.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F0F0").s().p("AgpArQgSgSAAgZQAAgYASgSQARgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgRgRg");
	this.shape_7.setTransform(544.75,279.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AAIAOIgKgGIgYgRQAGgJAMgCQAKgBAKAGQAKAHADAIQAEALgEAKIgRgHg");
	this.shape_8.setTransform(484.1441,309.81);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AAAAOIgdgGQACgKAKgHQAKgGAJACQAMABAHAIQAIAGABAMIgTABIgLgBg");
	this.shape_9.setTransform(498.925,314.435);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7EA54C").p("AhqjrIg0DBQgyDGAMAgIAQARQAVARAXADQAmAEBYAMIATgbQAYgrAThTQAUhUBCiDIA+h0");
	this.shape_10.setTransform(680.2869,466.8495);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9ACB59").s().p("AiIDiQgYgDgVgQIgQgSQgLggAxjGIA0jAIEzgJIg+B0QhDCDgTBUQgUBTgYAsIgTAaQhYgLglgFg");
	this.shape_11.setTransform(680.3166,466.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7EA54C").p("Ah0i6IgcEgQADAnArAjQArAjA5AMQAdAFAUgBIAXgGQAZgQAKgtQAJgsAHhMIAUkP");
	this.shape_12.setTransform(736.2732,477.8144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9ACB59").s().p("AACDhQg5gMgrgjQgrgjgDgnIAckgIEFgtIgUEPQgHBMgJAtQgKAsgZAQIgXAHIgGAAQgTAAgYgFg");
	this.shape_13.setTransform(736.275,477.5827);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7EA54C").p("AdLSUQBXgMBkgoQAygTAggSQg3gChSgNQilgbiLg7QhRgjhIgmQhug5iOhXQiPhYi6jEIiei0QgSggg8g5Qh5hwjVh1QjwiFkKApQhUAMhMAdIg7AaQjkAWhMgfQglgPgxgoQhAg4gwgoQhzhfgwj1QgHgggYidQgQhngRgsQgXhPgxhRQhjijiDgNQiDgNhWAhQgbAKgTAOIgOAMQgKAIgKATQgVAlgBA2QgBAygeApQgeAogwARQivA/hNA0QhWA5gPBgQgNBaA1A9QA0A8BMAUQBQAWA7gnQA7gmBGgnQBpg8BSgjICQg9QArgRArgxQAXgZAggoQAQAogYBjQgaBug4BCQh0CKhuAzQhPAlgwgRQgQgFgFgWQgDgZgBgGQgBgHgCAAQgEACgDABIgHAYQgCAeAcAZQAOANAlACQAoACAsgNQA7gRBNgpQA4gdArgdQBGgvAggNQA0gWARAZQARAXAIAvQAFAZAGAkQAZBUAlBKQA4BuBJBBQBdBTBwChQA3BRAlA/QBFBoBQBbQAoAtAbAZQCdDKDbBBQCqA0C2gmQCDgbFQBHQCwAlGaBuQCmAtCEgSQAngFBBgQQBDgQAhgFg");
	this.shape_14.setTransform(691.3421,374.5734);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9ACB59").s().p("AVcSjQmbhuivglQlQhHiEAbQi1Amirg0QjahBiejKQgagZgogtQhQhbhFhoQglg/g4hRQhvihhehTQhJhBg3huQglhKgahUIgKg9QgJgvgQgXQgSgZgzAWQggANhGAvQgrAdg5AdQhNApg7ARQgsANgogCQgkgCgPgNQgcgZACgeIAHgYIAHgDQACAAACAHIADAfQAFAWAQAFQAxARBPglQBtgzB1iKQA3hCAbhuQAYhjgRgoQggAogWAZQgrAxgsARIiQA9QhSAjhpA8QhFAng7AmQg8AnhQgWQhLgUg1g8Qg1g9AOhaQAOhgBXg5QBNg0Cvg/QAvgRAegoQAegpABgyQACg2AUglQAKgTAKgIIAOgMQATgOAbgKQBWghCDANQCEANBiCjQAyBRAXBPQAQAsAQBnQAZCdAGAgQAwD1B0BfQAvAoBBA4QAwAoAmAPQBMAfDjgWIA8gaQBMgdBTgMQELgpDvCFQDVB1B5BwQA9A5ARAgICeC0QC7DECPBYQCNBXBuA5QBJAmBRAjQCKA7ClAbQBTANA3ACQghASgyATQhkAohXAMQghAFhDAQQhBAQgmAFQgmAFgoAAQhmAAh2ggg");
	this.shape_15.setTransform(690.663,374.5734);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B2B2B2").p("AD/i0QgOgLgXgCQgvgFgqAuQhXBfglAmQhNBQghAUQgmAYgJAEQgKAFgIgGQgIgHAqg8QAegpAageQgCgGgEgEQgIgHgKAKQgkAggcAYQg3AxgHAQQgBAEgKAMQgJAMgCAIQgEAQADARQADAQAHADQADACANAJQAPAIAQADQAxAHA7g1QBdhTD6j1g");
	this.shape_16.setTransform(545.8683,332.7211);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9F9FA").s().p("AjEDCQgQgDgPgIIgQgLQgHgDgDgQQgDgRAEgQQACgIAJgMQAKgMABgEQAHgQA3gxIBAg4QAKgKAIAHQAEAEACAGQgaAegeApQgqA8AIAHQAIAGAKgFQAJgEAmgYQAhgUBNhQQAlgmBXhfQAqguAvAFQAXACAOALQj6D1hdBTQg0AvgsAAIgMgBg");
	this.shape_17.setTransform(545.8683,332.7211);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B2B2B2").p("AEsi2IAOAuQABACgEAGQgIAMgYAVQgxAqiaBuQi0CEgtARQgwASghgBQgcgBgKgNQgHgKgTgdIgRgbIJTlqg");
	this.shape_18.setTransform(521.2883,317.9912);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9F9FA").s().p("AjnDdQgcgBgKgNIgagmIgRgbIJTlrIAQAlIAOAuQABACgEAGQgIANgYAUQgxAqiaBvQi0CDgtARQgtASghAAIgDgBg");
	this.shape_19.setTransform(521.385,318.1026);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(548.6,326.95,1,1,0,0,0,29,32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7EA54C").p("Ah2jtIgdGoIALAJQATALAqAGICHAUIAMgBQAOgKAOgvQAOgvAThyIAPho");
	this.shape_20.setTransform(658.1398,461.2598);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9ACB59").s().p("AhLDYQgqgGgUgLIgKgKIAdmoIEKCUIgQBnQgSBygOAvQgOAvgPALIgLABg");
	this.shape_21.setTransform(658.15,461.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#7EA54C").p("Ah2iYIgDEzIAMAHQAVAHAqgBICIgGIAMgDQAMgNAFgxQAFgxgDhyIgEhq");
	this.shape_22.setTransform(721.0796,476.2538);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9ACB59").s().p("AhtClIgMgIIADkyIDrgVIAEBqQADBzgFAwQgFAxgMANIgMADIiIAGIgOABQggAAgRgGg");
	this.shape_23.setTransform(721.0813,476.0132);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3A4030").p("AsUiNQAMgvAVgxQAqhiAugIQAtAgAiA9QARAeAIAYIBzi3QBKBUArArICMiBIA9BvIAug2QA1g1AhAIIAeAuQAgA6ALA3IA0gmQA4gnAXABIAXA4QAWA+AAAgIA0gRQA9gSAsgFIAIBNQAIBSgDAWIBFgJQBKgIAcAKIAVA7QAUBJgDA9IAxABQA8gBAygIIgBBYQgCBcgCAW");
	this.shape_24.setTransform(713.9784,386.7741);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#475435").s().p("AsUiPQAMgvAVgxQAqhiAugIQAtAgAiA9QARAfAIAYIBzi3QBKBTArAsICMiCIA9BwIAug3QA1g0AhAIIAeAuQAgA5ALA4IA0gnQA4gmAXAAIAXA4QAWA+AAAhIA0gRQA9gTAsgFIAIBNQAIBSgDAXIBFgJQBKgIAcAJIAVA8QAUBJgDA8IAxABQA8AAAygIIgBBXQgCBcgCAXg");
	this.shape_25.setTransform(713.975,386.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{y:386.925}},{t:this.shape_24,p:{y:386.7741}},{t:this.shape_23,p:{y:476.0132}},{t:this.shape_22,p:{y:476.2538}},{t:this.shape_21,p:{y:461.025}},{t:this.shape_20,p:{y:461.2598}},{t:this.instance,p:{y:326.95}},{t:this.shape_19,p:{y:318.1026}},{t:this.shape_18,p:{y:317.9912}},{t:this.shape_17,p:{y:332.7211}},{t:this.shape_16,p:{y:332.7211}},{t:this.shape_15,p:{y:374.5734}},{t:this.shape_14,p:{y:374.5734}},{t:this.shape_13,p:{y:477.5827}},{t:this.shape_12,p:{y:477.8144}},{t:this.shape_11,p:{y:466.7}},{t:this.shape_10,p:{y:466.8495}},{t:this.shape_9,p:{y:314.435}},{t:this.shape_8,p:{y:309.81}},{t:this.shape_7,p:{y:279.6}},{t:this.shape_6,p:{y:279.6}},{t:this.shape_5,p:{y:276.3}},{t:this.shape_4,p:{y:276.3}},{t:this.shape_3,p:{y:277.75}},{t:this.shape_2,p:{y:281.125}},{t:this.shape_1,p:{y:281.1531}},{t:this.shape,p:{y:284.4063}}]}).to({state:[{t:this.shape_25,p:{y:319.075}},{t:this.shape_24,p:{y:318.9241}},{t:this.shape_23,p:{y:408.1632}},{t:this.shape_22,p:{y:408.4038}},{t:this.shape_21,p:{y:393.175}},{t:this.shape_20,p:{y:393.4098}},{t:this.instance,p:{y:259.1}},{t:this.shape_19,p:{y:250.2526}},{t:this.shape_18,p:{y:250.1412}},{t:this.shape_17,p:{y:264.8711}},{t:this.shape_16,p:{y:264.8711}},{t:this.shape_15,p:{y:306.7234}},{t:this.shape_14,p:{y:306.7234}},{t:this.shape_13,p:{y:409.7327}},{t:this.shape_12,p:{y:409.9644}},{t:this.shape_11,p:{y:398.85}},{t:this.shape_10,p:{y:398.9995}},{t:this.shape_9,p:{y:246.585}},{t:this.shape_8,p:{y:241.96}},{t:this.shape_7,p:{y:211.75}},{t:this.shape_6,p:{y:211.75}},{t:this.shape_5,p:{y:208.45}},{t:this.shape_4,p:{y:208.45}},{t:this.shape_3,p:{y:209.9}},{t:this.shape_2,p:{y:213.275}},{t:this.shape_1,p:{y:213.3031}},{t:this.shape,p:{y:216.5563}}]},4).to({state:[{t:this.shape_25,p:{y:386.925}},{t:this.shape_24,p:{y:386.7741}},{t:this.shape_23,p:{y:476.0132}},{t:this.shape_22,p:{y:476.2538}},{t:this.shape_21,p:{y:461.025}},{t:this.shape_20,p:{y:461.2598}},{t:this.instance,p:{y:326.95}},{t:this.shape_19,p:{y:318.1026}},{t:this.shape_18,p:{y:317.9912}},{t:this.shape_17,p:{y:332.7211}},{t:this.shape_16,p:{y:332.7211}},{t:this.shape_15,p:{y:374.5734}},{t:this.shape_14,p:{y:374.5734}},{t:this.shape_13,p:{y:477.5827}},{t:this.shape_12,p:{y:477.8144}},{t:this.shape_11,p:{y:466.7}},{t:this.shape_10,p:{y:466.8495}},{t:this.shape_9,p:{y:314.435}},{t:this.shape_8,p:{y:309.81}},{t:this.shape_7,p:{y:279.6}},{t:this.shape_6,p:{y:279.6}},{t:this.shape_5,p:{y:276.3}},{t:this.shape_4,p:{y:276.3}},{t:this.shape_3,p:{y:277.75}},{t:this.shape_2,p:{y:281.125}},{t:this.shape_1,p:{y:281.1531}},{t:this.shape,p:{y:284.4063}}]},4).to({state:[{t:this.shape_25,p:{y:319.075}},{t:this.shape_24,p:{y:318.9241}},{t:this.shape_23,p:{y:408.1632}},{t:this.shape_22,p:{y:408.4038}},{t:this.shape_21,p:{y:393.175}},{t:this.shape_20,p:{y:393.4098}},{t:this.instance,p:{y:259.1}},{t:this.shape_19,p:{y:250.2526}},{t:this.shape_18,p:{y:250.1412}},{t:this.shape_17,p:{y:264.8711}},{t:this.shape_16,p:{y:264.8711}},{t:this.shape_15,p:{y:306.7234}},{t:this.shape_14,p:{y:306.7234}},{t:this.shape_13,p:{y:409.7327}},{t:this.shape_12,p:{y:409.9644}},{t:this.shape_11,p:{y:398.85}},{t:this.shape_10,p:{y:398.9995}},{t:this.shape_9,p:{y:246.585}},{t:this.shape_8,p:{y:241.96}},{t:this.shape_7,p:{y:211.75}},{t:this.shape_6,p:{y:211.75}},{t:this.shape_5,p:{y:208.45}},{t:this.shape_4,p:{y:208.45}},{t:this.shape_3,p:{y:209.9}},{t:this.shape_2,p:{y:213.275}},{t:this.shape_1,p:{y:213.3031}},{t:this.shape,p:{y:216.5563}}]},4).to({state:[{t:this.shape_25,p:{y:386.925}},{t:this.shape_24,p:{y:386.7741}},{t:this.shape_23,p:{y:476.0132}},{t:this.shape_22,p:{y:476.2538}},{t:this.shape_21,p:{y:461.025}},{t:this.shape_20,p:{y:461.2598}},{t:this.instance,p:{y:326.95}},{t:this.shape_19,p:{y:318.1026}},{t:this.shape_18,p:{y:317.9912}},{t:this.shape_17,p:{y:332.7211}},{t:this.shape_16,p:{y:332.7211}},{t:this.shape_15,p:{y:374.5734}},{t:this.shape_14,p:{y:374.5734}},{t:this.shape_13,p:{y:477.5827}},{t:this.shape_12,p:{y:477.8144}},{t:this.shape_11,p:{y:466.7}},{t:this.shape_10,p:{y:466.8495}},{t:this.shape_9,p:{y:314.435}},{t:this.shape_8,p:{y:309.81}},{t:this.shape_7,p:{y:279.6}},{t:this.shape_6,p:{y:279.6}},{t:this.shape_5,p:{y:276.3}},{t:this.shape_4,p:{y:276.3}},{t:this.shape_3,p:{y:277.75}},{t:this.shape_2,p:{y:281.125}},{t:this.shape_1,p:{y:281.1531}},{t:this.shape,p:{y:284.4063}}]},4).to({state:[{t:this.shape_25,p:{y:319.075}},{t:this.shape_24,p:{y:318.9241}},{t:this.shape_23,p:{y:408.1632}},{t:this.shape_22,p:{y:408.4038}},{t:this.shape_21,p:{y:393.175}},{t:this.shape_20,p:{y:393.4098}},{t:this.instance,p:{y:259.1}},{t:this.shape_19,p:{y:250.2526}},{t:this.shape_18,p:{y:250.1412}},{t:this.shape_17,p:{y:264.8711}},{t:this.shape_16,p:{y:264.8711}},{t:this.shape_15,p:{y:306.7234}},{t:this.shape_14,p:{y:306.7234}},{t:this.shape_13,p:{y:409.7327}},{t:this.shape_12,p:{y:409.9644}},{t:this.shape_11,p:{y:398.85}},{t:this.shape_10,p:{y:398.9995}},{t:this.shape_9,p:{y:246.585}},{t:this.shape_8,p:{y:241.96}},{t:this.shape_7,p:{y:211.75}},{t:this.shape_6,p:{y:211.75}},{t:this.shape_5,p:{y:208.45}},{t:this.shape_4,p:{y:208.45}},{t:this.shape_3,p:{y:209.9}},{t:this.shape_2,p:{y:213.275}},{t:this.shape_1,p:{y:213.3031}},{t:this.shape,p:{y:216.5563}}]},4).wait(4));

	// dino_azul
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E8BB2").s().p("AgBALQgXgLAFgIQAGgKALAAQAEAAAEABIAFADQAGAIAEAZQgMgDgKgFg");
	this.shape_26.setTransform(230.3969,710.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B2B2B").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_27.setTransform(195.25,694.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").p("AheAAQAAAnAcAcQAcAcAmAAQAnAAAcgcQAcgcAAgnQAAgmgcgcQgcgcgnAAQgmAAgcAcQgcAcAAAmg");
	this.shape_28.setTransform(190.425,696.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4F4F5").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape_29.setTransform(190.425,696.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#ABABAB").p("AhUACIANAuQAXAuAtgIQAtgIAZhQIAPhPQiDBOgjAFg");
	this.shape_30.setTransform(184.8519,652.9115);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D7D7D7").s().p("AhGAuIgMguQAigGCDhOIgPBQQgZBPgsAIIgOACQgjAAgUgng");
	this.shape_31.setTransform(184.75,653.1598);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#433F78").p("Ah4BdIAxAIQA5ALAqAMQAeAAAegOQA9gdADhIQhHADhKgPQiSgfgNhd");
	this.shape_32.setTransform(213.1611,731.1419);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#69A7D7").s().p("AhHBlIgxgIIgfjYQAPBaCPAeQBKAPBHgDQgDBIg9AdQgeAOgeAAQgqgMg5gLg");
	this.shape_33.setTransform(213.1875,731.1375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#433F78").p("AizhNQAIgUASgYQAkgvAxgRIBxAKQB3AUAaAzQAZAzgmB7QgTA+gYA0IhYg+QgoAAgygFQhmgLg4gc");
	this.shape_34.setTransform(223.8204,719.8228);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#69A7D7").s().p("AAvB7QgoAAgygFQhmgLg3gcIAXibQAIgUARgYQAkgvAygRIBxAKQB3AUAZAzQAaA0gnB6QgTA+gYA0g");
	this.shape_35.setTransform(223.683,719.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#433F78").p("AnSnqIA6gcQBKgfBPgSQD6g6DBBiQAMAGAXANQAcARAQANQBEA0A/BMQBzCNgFB6IgYByQghB9gtAxQgtAxg2B7QgbA+gSAzQgVAYgzAYQhmAxiSAGQirAGh0gwQhsgtg3hY");
	this.shape_36.setTransform(177.5975,691.7054);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#69A7D7").s().p("AlZIjQhsgtg3hYIAquIIA6gcQBKgfBPgSQD6g6DBBiIAjATQAcARAQANQBEA0A/BMQBzCNgFB6IgYByQghB9gtAxQgtAxg2B7QgbA+gSAzQgVAYgzAYQhmAxiSAGIgmABQiSAAhngrg");
	this.shape_37.setTransform(177.5604,691.7054);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#433F78").p("ABhKoQgjAZgwAYQhfAxhAgDQgIgMgJgYQgSgygGg+QgZAIgmAEQhLAIhAgRQAJglANgqQAbhTAZgYQgqgFgxgKQhigUgjgcQANgrATg0QAmhoAigrQgkgjgigtQhFhYAHgxQAagbAlgdQBIg5AygHQgRgqgPg0QgehpANg0IBZgNQBegMAUAKQASguAag4QA1hwApgvIBSAXQBWAbAYAWQAsgcAygdQBkg7AcgFIBLCeIBCAQQBIAUAdAVIgPBIQgTBOgVAb");
	this.shape_38.setTransform(137.641,680.2294);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#69A7D7").s().p("AiRMHQgIgMgJgZQgSgxgGg+QgZAHgmAEQhLAIhAgQQAJglANgqQAbhUAZgYQgqgEgxgLQhigUgjgcQANgrATg0QAmhnAigsQgkgjgigsQhFhYAHgxQAagcAlgcQBIg6AygGQgRgqgPg1QgehpANgzIBZgOQBegMAUALQASgvAag4QA1hwApguIBSAWQBWAbAYAWQAsgcAygdQBkg6AcgFIBLCeIBCAQQBIAUAdAVIgPBIQgTBNgVAbImfQmQgjAZgwAZQhaAug+AAIgHAAg");
	this.shape_39.setTransform(137.6132,680.2587);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#433F78").p("AC/hVIgYDnQgRAPgrAHQhWANiAgnQgSgogTg8Qgmh3gIhi");
	this.shape_40.setTransform(137.5986,750.8546);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#69A7D7").s().p("AhrCRQgSgogTg8Qgnh3gHhjIF9BbIgZDnQgRAOgqAHQgXAEgZAAQhHAAhfgdg");
	this.shape_41.setTransform(137.6,750.6236);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#433F78").p("AI1peQh1gDiKAHQkVAPhqA3QgSAKheAuQg5AcghAVQhWA5hWB+QhSB5gWETQgLCKAFBxQAaAWAvAVQBgArBvgBICPjsIAAB5QAECAAVAcIAkATQAuAVAtAPQCVAvBjgrQAThKAuhOQBbicCFgT");
	this.shape_42.setTransform(55.9794,710.2939);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#69A7D7").s().p("AAQJIQgtgPgugVIglgTQgUgcgFiAIAAh5IiPDsQhuABhggrQgwgVgagWQgFhxALiKQAXkTBSh5QBWh+BWg5QAhgVA5gcIBwg4QBqg3EUgPQCLgHB0ADIgKNjQiFAThbCcQgtBOgTBKQgwAUg6AAQhBAAhNgYg");
	this.shape_43.setTransform(56.2219,710.2939);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#433F78").p("ADagFQg9gfhCg/QiCh9gWigQgJAAgPAFQgcALgYAcQhMBYgBDiQgBDgBOB0QAnA6AnAN");
	this.shape_44.setTransform(23.6112,661.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#69A7D7").s().p("AiKE6QhOh0ABjgQABjiBMhYQAYgcAcgLQAPgFAJAAQAWCgCCB9QBCA/A9AfIkVGGQgngNgng6g");
	this.shape_45.setTransform(23.7494,661.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#ABABAB").p("AhXgJIAIAvQASAvAugDQAugEAghOIAXhMQiKBBgjACg");
	this.shape_46.setTransform(211.1482,646.2991);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7D7D7").s().p("AhNAkIgJgvQAjgDCKhBIgXBOQggBNgtADIgHABQgpAAgQgsg");
	this.shape_47.setTransform(211,646.5121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47,p:{y:646.5121}},{t:this.shape_46,p:{y:646.2991}},{t:this.shape_45,p:{y:661.025}},{t:this.shape_44,p:{y:661.025}},{t:this.shape_43,p:{y:710.2939}},{t:this.shape_42,p:{y:710.2939}},{t:this.shape_41,p:{y:750.6236}},{t:this.shape_40,p:{y:750.8546}},{t:this.shape_39,p:{y:680.2587}},{t:this.shape_38,p:{y:680.2294}},{t:this.shape_37,p:{y:691.7054}},{t:this.shape_36,p:{y:691.7054}},{t:this.shape_35,p:{y:719.7}},{t:this.shape_34,p:{y:719.8228}},{t:this.shape_33,p:{y:731.1375}},{t:this.shape_32,p:{y:731.1419}},{t:this.shape_31,p:{y:653.1598}},{t:this.shape_30,p:{y:652.9115}},{t:this.shape_29,p:{y:696.825}},{t:this.shape_28,p:{y:696.825}},{t:this.shape_27,p:{y:694.725}},{t:this.shape_26,p:{y:710.775}}]}).to({state:[{t:this.shape_47,p:{y:578.6621}},{t:this.shape_46,p:{y:578.4491}},{t:this.shape_45,p:{y:593.175}},{t:this.shape_44,p:{y:593.175}},{t:this.shape_43,p:{y:642.4439}},{t:this.shape_42,p:{y:642.4439}},{t:this.shape_41,p:{y:682.7736}},{t:this.shape_40,p:{y:683.0046}},{t:this.shape_39,p:{y:612.4087}},{t:this.shape_38,p:{y:612.3794}},{t:this.shape_37,p:{y:623.8554}},{t:this.shape_36,p:{y:623.8554}},{t:this.shape_35,p:{y:651.85}},{t:this.shape_34,p:{y:651.9728}},{t:this.shape_33,p:{y:663.2875}},{t:this.shape_32,p:{y:663.2919}},{t:this.shape_31,p:{y:585.3098}},{t:this.shape_30,p:{y:585.0615}},{t:this.shape_29,p:{y:628.975}},{t:this.shape_28,p:{y:628.975}},{t:this.shape_27,p:{y:626.875}},{t:this.shape_26,p:{y:642.925}}]},4).to({state:[{t:this.shape_47,p:{y:646.5121}},{t:this.shape_46,p:{y:646.2991}},{t:this.shape_45,p:{y:661.025}},{t:this.shape_44,p:{y:661.025}},{t:this.shape_43,p:{y:710.2939}},{t:this.shape_42,p:{y:710.2939}},{t:this.shape_41,p:{y:750.6236}},{t:this.shape_40,p:{y:750.8546}},{t:this.shape_39,p:{y:680.2587}},{t:this.shape_38,p:{y:680.2294}},{t:this.shape_37,p:{y:691.7054}},{t:this.shape_36,p:{y:691.7054}},{t:this.shape_35,p:{y:719.7}},{t:this.shape_34,p:{y:719.8228}},{t:this.shape_33,p:{y:731.1375}},{t:this.shape_32,p:{y:731.1419}},{t:this.shape_31,p:{y:653.1598}},{t:this.shape_30,p:{y:652.9115}},{t:this.shape_29,p:{y:696.825}},{t:this.shape_28,p:{y:696.825}},{t:this.shape_27,p:{y:694.725}},{t:this.shape_26,p:{y:710.775}}]},4).to({state:[{t:this.shape_47,p:{y:578.6621}},{t:this.shape_46,p:{y:578.4491}},{t:this.shape_45,p:{y:593.175}},{t:this.shape_44,p:{y:593.175}},{t:this.shape_43,p:{y:642.4439}},{t:this.shape_42,p:{y:642.4439}},{t:this.shape_41,p:{y:682.7736}},{t:this.shape_40,p:{y:683.0046}},{t:this.shape_39,p:{y:612.4087}},{t:this.shape_38,p:{y:612.3794}},{t:this.shape_37,p:{y:623.8554}},{t:this.shape_36,p:{y:623.8554}},{t:this.shape_35,p:{y:651.85}},{t:this.shape_34,p:{y:651.9728}},{t:this.shape_33,p:{y:663.2875}},{t:this.shape_32,p:{y:663.2919}},{t:this.shape_31,p:{y:585.3098}},{t:this.shape_30,p:{y:585.0615}},{t:this.shape_29,p:{y:628.975}},{t:this.shape_28,p:{y:628.975}},{t:this.shape_27,p:{y:626.875}},{t:this.shape_26,p:{y:642.925}}]},4).to({state:[{t:this.shape_47,p:{y:646.5121}},{t:this.shape_46,p:{y:646.2991}},{t:this.shape_45,p:{y:661.025}},{t:this.shape_44,p:{y:661.025}},{t:this.shape_43,p:{y:710.2939}},{t:this.shape_42,p:{y:710.2939}},{t:this.shape_41,p:{y:750.6236}},{t:this.shape_40,p:{y:750.8546}},{t:this.shape_39,p:{y:680.2587}},{t:this.shape_38,p:{y:680.2294}},{t:this.shape_37,p:{y:691.7054}},{t:this.shape_36,p:{y:691.7054}},{t:this.shape_35,p:{y:719.7}},{t:this.shape_34,p:{y:719.8228}},{t:this.shape_33,p:{y:731.1375}},{t:this.shape_32,p:{y:731.1419}},{t:this.shape_31,p:{y:653.1598}},{t:this.shape_30,p:{y:652.9115}},{t:this.shape_29,p:{y:696.825}},{t:this.shape_28,p:{y:696.825}},{t:this.shape_27,p:{y:694.725}},{t:this.shape_26,p:{y:710.775}}]},4).to({state:[{t:this.shape_47,p:{y:578.6621}},{t:this.shape_46,p:{y:578.4491}},{t:this.shape_45,p:{y:593.175}},{t:this.shape_44,p:{y:593.175}},{t:this.shape_43,p:{y:642.4439}},{t:this.shape_42,p:{y:642.4439}},{t:this.shape_41,p:{y:682.7736}},{t:this.shape_40,p:{y:683.0046}},{t:this.shape_39,p:{y:612.4087}},{t:this.shape_38,p:{y:612.3794}},{t:this.shape_37,p:{y:623.8554}},{t:this.shape_36,p:{y:623.8554}},{t:this.shape_35,p:{y:651.85}},{t:this.shape_34,p:{y:651.9728}},{t:this.shape_33,p:{y:663.2875}},{t:this.shape_32,p:{y:663.2919}},{t:this.shape_31,p:{y:585.3098}},{t:this.shape_30,p:{y:585.0615}},{t:this.shape_29,p:{y:628.975}},{t:this.shape_28,p:{y:628.975}},{t:this.shape_27,p:{y:626.875}},{t:this.shape_26,p:{y:642.925}}]},4).wait(4));

	// dino_roxo
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C4380").s().p("AA2AZIgPgMQgNgKgUgIQgOgHgUgEIgpgFQAPgNAbgEQAXgDAWAKQAXAKAOATIAKATQAEAJACANIgRgOg");
	this.shape_48.setTransform(470.9,475.4154);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8B56A1").s().p("AhFgaIAPgEQATgEASACQA5AHAfA7g");
	this.shape_49.setTransform(470.9,475.9886);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#6C4380").p("AiJCGIAdgBQAngJAwgnQBahNAtg3QARgWADglIgCgf");
	this.shape_50.setTransform(446.3419,511.838);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8B56A1").s().p("ACGiHIACAfQgCAlgSAWQgtA4haBMQgvAogoAIIgdABg");
	this.shape_51.setTransform(446.1,511.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#69467A").s().p("AgTAnIgBgGQAGgUAHgTQAOgoAJAFQAKAFgKAmQgKAngMABIgEABQgHAAgCgEg");
	this.shape_52.setTransform(430.4875,495.9693);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#69467A").s().p("AgYAkIAAgGQAIgTAKgSQASgmAIAGQAKAGgOAlQgPAlgMAAQgKAAgDgFg");
	this.shape_53.setTransform(437.2041,496.4898);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4B3359").s().p("AANAYQgOgFgFgMQgCgHgdgBQgTgCAWgOQAZgQAeAPQAPAHAKALQABAFgGAJQgFAGgFAEQgCACgEAAQgFAAgHgCg");
	this.shape_54.setTransform(491.9618,551.9062);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4B3359").s().p("AAOASQgJgJgagEIgfgFQgIgDAKgHQAKgHAXgHQASgGAeALQAOAGALAHQACAZgQAGQgEACgEAAQgKAAgKgJg");
	this.shape_55.setTransform(486.8754,558.4781);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4B3359").s().p("AAHAWQgWgMgSgBQgSgBgBgGIACgFQAFgJApgMQAlgKAEACQAXAMgJAbQgJAZgKABIgBAAQgCAAgWgLg");
	this.shape_56.setTransform(486.4867,567.26);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#6C4380").p("AEOjZQgTAuglAqQhIBVhYgUQgXgFiOgVQhPgMhCggQhPgmggAVQgYAPgrBcQghBGBAAkQAgATAnAEIBoAPQB8AaBqA1QBxA4CyghQBagQBDgc");
	this.shape_57.setTransform(531.3879,567.4629);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8B56A1").s().p("AAAC0Qhpg1h9gaIhngPQgngEgggSQhBglAhhFQAshdAXgPQAhgUBPAmQBCAgBPALQCNAWAXAFQBYATBJhUQAkgqATguIC0F2QhDAchZARQhCAMg5AAQhiAAhHgkg");
	this.shape_58.setTransform(531.5415,567.3084);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4B3359").s().p("AgqBEQgEgHgFgOQgIgbACgfQADggAjgPQASgHAQgBQAtgGgCAqQAAAPgGAPQgGANgFACQgIgJgKgEQgUgHgKAZQgPAhgLALQgFAEgCAAIgCAAg");
	this.shape_59.setTransform(656.274,743.2342);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4B3359").s().p("Ag4A/IgFgRQgFgNADgSQAEgkAjgcQAkgfAdATQAYAQAAAgQAAAUgWACIgVgCQgSgBgPANQgRAOgLAYQgGAMgFAAQgDAAgDgGg");
	this.shape_60.setTransform(649.8083,739.2574);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4B3359").s().p("AhOAxQgGgaApgmQAsgqArAIQAnAIgEAoQgCATgJATQgMgGgQgCQghgGgUAOQgVANgYABg");
	this.shape_61.setTransform(644.7704,732.611);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#6C4380").p("Akfo7IgUA9QgVBLgIBKQgaDuB2CKQB2CMBZBOQArAnAVAMIAPAOQAQARADAPQAMAthvAAQhkAAg6AGQgSACgLAPQgKAPAEASQAMAzAfAlQAkArBPAFQBTAGCdgjQA4gMAigMQAwgSAUgWQAPgRACgdQAAgMgEgjQgHg+gVg5Qgag9gNggQghhQg9hbQgQgYhQhwQgHgJAkgrQAGgGBPhYQCGiUAJg+");
	this.shape_62.setTransform(669.2931,688.2593);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8B56A1").s().p("AhJI5QhPgFgkgrQgfglgMgzQgEgSAKgPQALgPASgCQA6gGBkAAQBvAAgMgtQgDgPgQgRIgPgOQgVgMgrgnQhZhOh2iMQh2iKAajuQAIhKAVhLIAUg9IJxBNQgJA+iGCUIhVBeQgkArAHAJQBQBwAQAYQA9BbAhBQIAnBdQAVA5AHA+QAEAjAAAMQgCAdgPARQgUAWgwASQgiAMg4AMQiIAehQAAIgYgBg");
	this.shape_63.setTransform(669.2931,688.0878);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C4380").s().p("AAcAAIgLgIQgDgDgJgEQgKgDgOAJQgLAIgMALQAIgPALgKQAHgGAHgDQAIgDAJADQARAGAJAPQAJANAAAQQgGgPgJgLg");
	this.shape_64.setTransform(460.8,495.3682);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8B56A1").s().p("AgqAHQAHgJAKgJQAVgSAQAJQARAJAJASQAEAJABAIg");
	this.shape_65.setTransform(460.8,495.6109);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DAE79C").s().p("ADkJ2QjPhmjtifQnbk+iUkcQgagxg0hXQgwhQgSglIitlmQAQgmAOAGQAXAJBHCTQBfDEAuBKQBSCFDYDZQDhDhCHBOQA7AiCIAzQBOAeCwA/QFGB6A5BPQAFAGBfAsQBkAvBiApQBYAkBcA+QBKAxAGALg");
	this.shape_66.setTransform(613.775,599.8648);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#6C4380").p("AEmA9IhkjBIAogGQAygGAwgBQCagBBQA4QBXA9A/AQQAuAMAogLQARgFAEgfQAFgggOgnQglhoh9gzQgegMhngyQhSgog/gUQi9g9kiAZQkvAZjZDtQhSBag4BoQgvBbgLBEQgGAhAMBNQAOBWAXAbQAsA0BngbQAzgNBKglQBFgiAggQQA1gbApgcQA4gHBRAWQArALBDAV");
	this.shape_67.setTransform(508.8933,483.7221);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8B56A1").s().p("AsKGWQgXgbgOhWQgMhNAGghQALhEAvhbQA4hoBShaQDZjtEvgZQEigZC9A9QA/AUBSAoQBnAyAeAMQB9AzAlBoQAOAngFAgQgEAfgRAFQgoALgugMQg/gQhXg9QhQg4iaABQgwABgyAGIgoAGIBkDBIlmEGQhDgVgrgLQhRgWg4AHQgpAcg1AbIhlAyQhKAlgzANQgjAJgcAAQg3AAgdgig");
	this.shape_68.setTransform(508.8933,483.7221);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#6C4380").p("A8HyCIAqBCQA6BOBJBAQDtDNE5gSQDlgNBvgBQCjgBB1ASQEFAoDGCzQC1CjCpFPQBUCmAwCHIAyBQQA/BgBIBTQDlEMDfAqQDfAqGEgQQDCgJCVgRIApgFQAsgDASAJQA3AgjrCWQj/CkoZgaQjWgLjCgoQi6gmhZgxQiRhOlZhnIs5jhQjQhmjtifQnbk/iVkcQgZgxg1hXQgvhQgTglIi4l+QAsg/BHhBQCNiBCFgGg");
	this.shape_69.setTransform(715.6167,601.1343);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8B56A1").s().p("AS3SAQjWgLjCgoQi6gmhagxQiQhOlahnIs5jhQjPhmjuifQnbk/iUkcQgagxg0hXQgwhQgSglIi4l+QAsg/BHhBQCNiBCEgGIArBCQA5BOBKBAQDsDNE6gSQDkgNBvgBQCkgBB0ASQEGAoDGCzQC0CjCpFPQBVCmAwCHIAxBQQBABgBHBTQDlEMDfAqQDfAqGEgQQDCgJCWgRIApgFQAsgDARAJQA4AgjrCWQjcCNmsAAQhFAAhLgDg");
	this.shape_70.setTransform(715.6552,601.1343);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4B3359").s().p("AgHAaQgcgTABgdQABgaALAQQARAXAGgBQAMgCAMAKQALAJgBAGQgBAHgDAHQgFAJgGADQgOgEgNgJg");
	this.shape_71.setTransform(483.1774,583.1605);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4B3359").s().p("AgFAiQgUgRgEgTQgGgXABgMQABgMAHAFIARAVQALASANAEQASAEACAQQACAQgXAMQgJgFgKgIg");
	this.shape_72.setTransform(484.6293,578.3265);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4B3359").s().p("AACAsQgCAAgEgFQgGgGgCgEQgJgTgHgSQgIgYAEgHIAEgFQAGgDALAQQAJAOARAKQASAIAAACQAEAJgIASQgHAQgMAAQgEAAgEgCg");
	this.shape_73.setTransform(487.3866,573.3436);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#6C4380").p("AElApQhhA6h5AlQjwBLh2hnQgIgaACghQAFhAA0ggIAjAAQA1ACBZAMIBWgeQBpgqBVg+");
	this.shape_74.setTransform(513.9235,576.5369);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8B56A1").s().p("AkcBsQgIgaACggQAFhBA0ggIAjAAQA1ADBZAMIBWgeQBpgrBVg+IBIDRQhhA6h5AlQhlAfhPAAQhuAAhEg8g");
	this.shape_75.setTransform(514.0452,576.4885);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4B3359").s().p("Ag9ApQgCgQAGgeQAEgZAmgPQASgIATgCQAZACAMAdQAKAcgSAQQgOAMgagHQgbgJgDADQgHADgIASQgIAPgHABIgCAAQgIAAgCgPg");
	this.shape_76.setTransform(599.55,733.6313);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4B3359").s().p("AhEAtQgKgGABgKQABgIAIgWQAHgSA4gPQAbgHAagDQASgDAFAJQADAFADAXQACAPgXAMQgTAJgVACQgJAAgTgKQgQgJgKAHQgHAFgJARQgEAIgFAAIgFgBg");
	this.shape_77.setTransform(594.9533,727.9773);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4B3359").s().p("AgqA+QgEgNgCgkQgBgaAVggIAWgbQAkAAAQAfQAJASgRAYQgRAYgPAAQgKAAgIATQgKAXgFAEQgDACgDAAQgFAAgEgLg");
	this.shape_78.setTransform(605.7285,739.8839);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#6C4380").p("Akfo7IgUA9QgVBLgIBKQgaDuB2CKQB2CMBZBOQArAnAVAMIAPAOQAQARADAPQAMAthvAAQhkAAg6AGQgSACgLAPQgKAPAEASQAMAzAfAlQAkArBPAFQBTAGCdgjQA4gMAigMQAwgSAUgWQAPgRACgdQAAgMgEgjQgHg+gVg5Qgag9gNggQghhQg9hbQgQgYhQhwQgHgJAkgrQAGgGBPhYQCGiUAJg+");
	this.shape_79.setTransform(621.3431,685.5093);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8B56A1").s().p("AhJI5QhPgFgkgrQgfglgMgzQgEgSAKgPQALgPASgCQA6gGBkAAQBvAAgMgtQgDgPgQgRIgPgOQgVgMgrgnQhZhOh2iMQh2iKAajuQAIhKAVhLIAUg9IJxBNQgJA+iGCUIhVBeQgkArAHAJQBQBwAQAYQA9BbAhBQIAnBdQAVA5AHA+QAEAjAAAMQgCAdgPARQgUAWgwASQgiAMg4AMQiIAehQAAIgYgBg");
	this.shape_80.setTransform(621.3431,685.3378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80,p:{y:685.3378}},{t:this.shape_79,p:{y:685.5093}},{t:this.shape_78,p:{y:739.8839}},{t:this.shape_77,p:{y:727.9773}},{t:this.shape_76,p:{y:733.6313}},{t:this.shape_75,p:{y:576.4885}},{t:this.shape_74,p:{y:576.5369}},{t:this.shape_73,p:{y:573.3436}},{t:this.shape_72,p:{y:578.3265}},{t:this.shape_71,p:{y:583.1605}},{t:this.shape_70,p:{y:601.1343}},{t:this.shape_69,p:{y:601.1343}},{t:this.shape_68,p:{y:483.7221}},{t:this.shape_67,p:{y:483.7221}},{t:this.shape_66,p:{y:599.8648}},{t:this.shape_65,p:{y:495.6109}},{t:this.shape_64,p:{y:495.3682}},{t:this.shape_63,p:{y:688.0878}},{t:this.shape_62,p:{y:688.2593}},{t:this.shape_61,p:{y:732.611}},{t:this.shape_60,p:{y:739.2574}},{t:this.shape_59,p:{y:743.2342}},{t:this.shape_58,p:{y:567.3084}},{t:this.shape_57,p:{y:567.4629}},{t:this.shape_56,p:{y:567.26}},{t:this.shape_55,p:{y:558.4781}},{t:this.shape_54,p:{y:551.9062}},{t:this.shape_53,p:{y:496.4898}},{t:this.shape_52,p:{y:495.9693}},{t:this.shape_51,p:{y:511.6}},{t:this.shape_50,p:{y:511.838}},{t:this.shape_49,p:{y:475.9886}},{t:this.shape_48,p:{y:475.4154}}]}).to({state:[{t:this.shape_80,p:{y:617.4878}},{t:this.shape_79,p:{y:617.6593}},{t:this.shape_78,p:{y:672.0339}},{t:this.shape_77,p:{y:660.1273}},{t:this.shape_76,p:{y:665.7813}},{t:this.shape_75,p:{y:508.6385}},{t:this.shape_74,p:{y:508.6869}},{t:this.shape_73,p:{y:505.4936}},{t:this.shape_72,p:{y:510.4765}},{t:this.shape_71,p:{y:515.3105}},{t:this.shape_70,p:{y:533.2843}},{t:this.shape_69,p:{y:533.2843}},{t:this.shape_68,p:{y:415.8721}},{t:this.shape_67,p:{y:415.8721}},{t:this.shape_66,p:{y:532.0148}},{t:this.shape_65,p:{y:427.7609}},{t:this.shape_64,p:{y:427.5182}},{t:this.shape_63,p:{y:620.2378}},{t:this.shape_62,p:{y:620.4093}},{t:this.shape_61,p:{y:664.761}},{t:this.shape_60,p:{y:671.4074}},{t:this.shape_59,p:{y:675.3842}},{t:this.shape_58,p:{y:499.4584}},{t:this.shape_57,p:{y:499.6129}},{t:this.shape_56,p:{y:499.41}},{t:this.shape_55,p:{y:490.6281}},{t:this.shape_54,p:{y:484.0562}},{t:this.shape_53,p:{y:428.6398}},{t:this.shape_52,p:{y:428.1193}},{t:this.shape_51,p:{y:443.75}},{t:this.shape_50,p:{y:443.988}},{t:this.shape_49,p:{y:408.1386}},{t:this.shape_48,p:{y:407.5654}}]},4).to({state:[{t:this.shape_80,p:{y:685.3378}},{t:this.shape_79,p:{y:685.5093}},{t:this.shape_78,p:{y:739.8839}},{t:this.shape_77,p:{y:727.9773}},{t:this.shape_76,p:{y:733.6313}},{t:this.shape_75,p:{y:576.4885}},{t:this.shape_74,p:{y:576.5369}},{t:this.shape_73,p:{y:573.3436}},{t:this.shape_72,p:{y:578.3265}},{t:this.shape_71,p:{y:583.1605}},{t:this.shape_70,p:{y:601.1343}},{t:this.shape_69,p:{y:601.1343}},{t:this.shape_68,p:{y:483.7221}},{t:this.shape_67,p:{y:483.7221}},{t:this.shape_66,p:{y:599.8648}},{t:this.shape_65,p:{y:495.6109}},{t:this.shape_64,p:{y:495.3682}},{t:this.shape_63,p:{y:688.0878}},{t:this.shape_62,p:{y:688.2593}},{t:this.shape_61,p:{y:732.611}},{t:this.shape_60,p:{y:739.2574}},{t:this.shape_59,p:{y:743.2342}},{t:this.shape_58,p:{y:567.3084}},{t:this.shape_57,p:{y:567.4629}},{t:this.shape_56,p:{y:567.26}},{t:this.shape_55,p:{y:558.4781}},{t:this.shape_54,p:{y:551.9062}},{t:this.shape_53,p:{y:496.4898}},{t:this.shape_52,p:{y:495.9693}},{t:this.shape_51,p:{y:511.6}},{t:this.shape_50,p:{y:511.838}},{t:this.shape_49,p:{y:475.9886}},{t:this.shape_48,p:{y:475.4154}}]},4).to({state:[{t:this.shape_80,p:{y:617.4878}},{t:this.shape_79,p:{y:617.6593}},{t:this.shape_78,p:{y:672.0339}},{t:this.shape_77,p:{y:660.1273}},{t:this.shape_76,p:{y:665.7813}},{t:this.shape_75,p:{y:508.6385}},{t:this.shape_74,p:{y:508.6869}},{t:this.shape_73,p:{y:505.4936}},{t:this.shape_72,p:{y:510.4765}},{t:this.shape_71,p:{y:515.3105}},{t:this.shape_70,p:{y:533.2843}},{t:this.shape_69,p:{y:533.2843}},{t:this.shape_68,p:{y:415.8721}},{t:this.shape_67,p:{y:415.8721}},{t:this.shape_66,p:{y:532.0148}},{t:this.shape_65,p:{y:427.7609}},{t:this.shape_64,p:{y:427.5182}},{t:this.shape_63,p:{y:620.2378}},{t:this.shape_62,p:{y:620.4093}},{t:this.shape_61,p:{y:664.761}},{t:this.shape_60,p:{y:671.4074}},{t:this.shape_59,p:{y:675.3842}},{t:this.shape_58,p:{y:499.4584}},{t:this.shape_57,p:{y:499.6129}},{t:this.shape_56,p:{y:499.41}},{t:this.shape_55,p:{y:490.6281}},{t:this.shape_54,p:{y:484.0562}},{t:this.shape_53,p:{y:428.6398}},{t:this.shape_52,p:{y:428.1193}},{t:this.shape_51,p:{y:443.75}},{t:this.shape_50,p:{y:443.988}},{t:this.shape_49,p:{y:408.1386}},{t:this.shape_48,p:{y:407.5654}}]},4).to({state:[{t:this.shape_80,p:{y:685.3378}},{t:this.shape_79,p:{y:685.5093}},{t:this.shape_78,p:{y:739.8839}},{t:this.shape_77,p:{y:727.9773}},{t:this.shape_76,p:{y:733.6313}},{t:this.shape_75,p:{y:576.4885}},{t:this.shape_74,p:{y:576.5369}},{t:this.shape_73,p:{y:573.3436}},{t:this.shape_72,p:{y:578.3265}},{t:this.shape_71,p:{y:583.1605}},{t:this.shape_70,p:{y:601.1343}},{t:this.shape_69,p:{y:601.1343}},{t:this.shape_68,p:{y:483.7221}},{t:this.shape_67,p:{y:483.7221}},{t:this.shape_66,p:{y:599.8648}},{t:this.shape_65,p:{y:495.6109}},{t:this.shape_64,p:{y:495.3682}},{t:this.shape_63,p:{y:688.0878}},{t:this.shape_62,p:{y:688.2593}},{t:this.shape_61,p:{y:732.611}},{t:this.shape_60,p:{y:739.2574}},{t:this.shape_59,p:{y:743.2342}},{t:this.shape_58,p:{y:567.3084}},{t:this.shape_57,p:{y:567.4629}},{t:this.shape_56,p:{y:567.26}},{t:this.shape_55,p:{y:558.4781}},{t:this.shape_54,p:{y:551.9062}},{t:this.shape_53,p:{y:496.4898}},{t:this.shape_52,p:{y:495.9693}},{t:this.shape_51,p:{y:511.6}},{t:this.shape_50,p:{y:511.838}},{t:this.shape_49,p:{y:475.9886}},{t:this.shape_48,p:{y:475.4154}}]},4).to({state:[{t:this.shape_80,p:{y:617.4878}},{t:this.shape_79,p:{y:617.6593}},{t:this.shape_78,p:{y:672.0339}},{t:this.shape_77,p:{y:660.1273}},{t:this.shape_76,p:{y:665.7813}},{t:this.shape_75,p:{y:508.6385}},{t:this.shape_74,p:{y:508.6869}},{t:this.shape_73,p:{y:505.4936}},{t:this.shape_72,p:{y:510.4765}},{t:this.shape_71,p:{y:515.3105}},{t:this.shape_70,p:{y:533.2843}},{t:this.shape_69,p:{y:533.2843}},{t:this.shape_68,p:{y:415.8721}},{t:this.shape_67,p:{y:415.8721}},{t:this.shape_66,p:{y:532.0148}},{t:this.shape_65,p:{y:427.7609}},{t:this.shape_64,p:{y:427.5182}},{t:this.shape_63,p:{y:620.2378}},{t:this.shape_62,p:{y:620.4093}},{t:this.shape_61,p:{y:664.761}},{t:this.shape_60,p:{y:671.4074}},{t:this.shape_59,p:{y:675.3842}},{t:this.shape_58,p:{y:499.4584}},{t:this.shape_57,p:{y:499.6129}},{t:this.shape_56,p:{y:499.41}},{t:this.shape_55,p:{y:490.6281}},{t:this.shape_54,p:{y:484.0562}},{t:this.shape_53,p:{y:428.6398}},{t:this.shape_52,p:{y:428.1193}},{t:this.shape_51,p:{y:443.75}},{t:this.shape_50,p:{y:443.988}},{t:this.shape_49,p:{y:408.1386}},{t:this.shape_48,p:{y:407.5654}}]},4).wait(4));

	// pte
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999443").s().p("AARAeQgVgCgfgYQgggXATgIQAQgHAlASQATAIAPAJQAZANgMAKQgJAGgRAAIgJAAg");
	this.shape_81.setTransform(694.0084,21.845);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").p("ABMBEQgDgOgIgUQgQgmgYgaQgXgZgrgJIgmgD");
	this.shape_82.setTransform(711.3774,70.926);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EBE84D").s().p("AhNhDIAnADQAqAJAXAZQAYAaAQAmQAIAUADAOg");
	this.shape_83.setTransform(711.15,70.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AglChQg2gIgrguQgYgagIgVQgMgaACgfQACgaAKgdQAKgcAQgXIgBABQARgZAagPQAZgPAegEQAVgEAjADQAeADAaAJQA6AVAdAxQANAZAEAdQAEAagDAdQACg/gagqQgdgug4gSQgYgHgdgDQgfgCgWADQgbAFgXAOQgYAPgNAUIgBABQghAygDAwQgCAdAKAWQAKAWATAWQAnAtA0AKQA6ANAwgSQgUALghADIgTABQgTAAgRgDg");
	this.shape_84.setTransform(725.4806,59.0554);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(724.15,57.5,1,1,0,0,0,19.2,17.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#373535").p("AinmsIADgCIAkAxQAyBCBGBUQBMBbBDD4QA9DigIBYQgPgcgbgkQgsg7g9g7QhGhGhWAIQgaACgaAKIgTAJQAMhBAMhLQAXiUgCgxQgDg+gXjkg");
	this.shape_85.setTransform(775.1856,157.4783);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#449966").s().p("ACRFqQgsg6g9g8QhGhFhWAHQgaADgaAKIgTAJQAMhBAMhLQAXiVgCgwQgDg+gXjkIADgCIAkAxQAyBCBGBUQBMBaBDD5QA9DigIBXQgPgbgbglg");
	this.shape_86.setTransform(775.2714,157);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#373535").p("AOyH4QgMgsi/hkQi2hfhVgQQhAgMghg2QgKgQgGgTIgDgQQgZhWgchWQg3itgMgCQhPgZhlgUQjIgoisATQitASkaBFIj4BBIBVgnIEXhYQExhaCHgLQBlgICJAYQBgARBlAfIAHgFQgLgJgBgZQgBgoAAAAQgCgKgVgfQgSgaAHgEQAHgEAnASQATAJASAKQgIgpAEgcQAFgcAMAEQAKACAOA3QAHAbAEAaQAMg6AJgUIAHgJIARAjQAPAogEAfQgDAfgkAiQgkAfgEAGQgGALAjBiQAkBmAdAtQAaAmASBIQAJAkADAcQAogHBFAfQAmARA6AhQAiARBpAaQBoAZA9AGQAzAEAhAjQARARAGAQ");
	this.shape_87.setTransform(584.4887,88.2552);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EBE84D").s().p("ALSFoQi2hfhVgQQhAgMghg2QgKgQgGgTIgDgQQgZhWgchWQg4itgLgCQhPgZhlgUQjIgoitATQisASkaBFIj4BBIBVgnIEWhYQEyhaCHgLQBlgICJAYQBgARBlAfIAHgFQgLgJgBgZIgCgoQgCgKgUgfQgSgaAGgEQAIgEAmASQAUAJASAKQgIgpAEgcQAEgcANAEQAKACAOA3QAGAbAFAaQAMg6AJgUIAHgJIARAjQAPAogEAfQgEAfgjAiQgkAfgFAGQgFALAjBiQAjBmAeAtQAZAmATBIQAIAkAEAcQAngHBFAfQAnARA6AhQAiARBoAaQBpAZA9AGQAzAEAhAjQAQARAHAQIhwB+QgMgsi/hkg");
	this.shape_88.setTransform(586.6,88.2552);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#373535").p("AGRjdQgQgyhDghQhHgih7gOQh+gwiGgpQkMhQgkAmQgBAIABAKQABAWAJAQQAUAnAxAuQAIAIAtA4QAzA+AOAQQAbAdBCA2QBJA7AuAbQA3AfAkAiQAsApAXAxQAWAsAbAiQANARAJAIQAXAaAxAJQAZAFAUgBQgVAVgOALQgWARgVAIQhCAWhugdQhBgRhNAAQgxAAh5ALQhTAHg+gNIgtgPQAZAsBSAhQAqARAkAIQAtAUDFAnQDIAnBjAHQBUAGAwgpQAYgVAHgW");
	this.shape_89.setTransform(674.7576,50.0962);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EBE84D").s().p("AEaHwQhjgHjIgnQjEgngugUQgkgIgpgRQhTghgZgsIAuAPQA9ANBUgHQB4gLAyAAQBMAABCARQBuAdBBgWQAVgIAXgRQAOgLAUgVQgUABgYgFQgygJgWgaQgKgIgNgRQgbgigVgsQgYgxgsgpQgkgig3gfQgtgbhKg7QhCg2gagdQgPgQgzg+Qgtg4gIgIQgxgugUgnQgIgQgCgWQgBgKABgIQAkgmEMBQQCGApB+AwQB7AOBHAiQBEAhAPAyIAvJ/QgHAWgYAVQgpAjhFAAIgWAAg");
	this.shape_90.setTransform(675.05,50.0962);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#373535").p("ABfCiQgbgFgigOQhDgbgkgsQgogygIgLQgCgEgdgyQgohHgCgCQgXgbg0AAQABgLAEgKQAJgVAUAAQAQgBAjAVQAbAQAKAJQBKBHAtAYQA2AdAnASIB2AKIBOA6IhBB0g");
	this.shape_91.setTransform(684.338,67.0849);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D569A2").s().p("ABgCiQgbgEgigOQhDgbgkgtQgpgygHgLIggg2IgqhJQgWgag0gBQAAgKAFgLQAJgUATgBQARAAAiAUQAbAQALAKQBKBGAsAYQA2AeAoASIB2AKIBNA5IhAB0g");
	this.shape_92.setTransform(684.275,67.0494);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#373535").p("AknAOQA0ADA8gRQAdgKATgKIBBgVQBMgSA7ANQA7ANA5gBQAdAAARgDIAsgLQAYAYAvAIQAXAEATgBQgVAVgNAKQgWARgWAIQhBAWhugdQhCgRhMABQgxAAh5AKQhwAKhFgaIgJgFg");
	this.shape_93.setTransform(667.9321,77.7233);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C33C42").s().p("AB9AkQhCgRhMABQgxAAh5AKQhwAKhFgaIgJgFIBMAFQA0ADA8gRQAdgKATgKIBBgVQBMgSA7ANQA7ANA5gBQAdAAARgDIAsgLQAYAYAvAIQAXAEATgBQgVAVgNAKQgWARgWAIQgcAKglAAQgwAAg+gRg");
	this.shape_94.setTransform(668.525,77.7233);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#373535").p("AlqBaQBWgEBwAWQBgATBoAjQBPAaA7AaQAhAPA7AbQAwAVAWACQAUACADgOQACgMgVgdIgVgbQhOhWiOiAQhShLijhmIiThX");
	this.shape_95.setTransform(786.6987,74.047);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EBE84D").s().p("AFSEXQgWgCgwgVIhcgqQg7gahPgaQhogjhggTQhwgWhWAEIBFlxICTBXQCjBmBSBLQCOCABOBWIAVAbQAVAdgCAMQgCANgQAAIgFgBg");
	this.shape_96.setTransform(786.4589,74.0121);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#373535").p("AlQHYIAogfQArgpAJg0QAJg0gEhBIgFg2IAohAQAphJAIgsQAIguAFhHQAEgzAAgQQAAgfAMiJQAOilAMgIQAUgMAtgDQA4gFA9APQBPATBOA2QBZA/AIA+IgcDwQgBAngVA+QgKAggKAXQgfA5g9AoQgwAfgxAMQggAHgvBHIgqBGIgiBEQgjBQgDA3");
	this.shape_97.setTransform(724.3999,81.3105);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EBE84D").s().p("AlPHWIAogfQAqgpAJg0QAJg0gDhBIgGg2IAphAQAphJAIgsQAIguAFhHQADgzABgQQgBgfAMiJQAOilANgIQATgMAtgDQA5gFA9APQBPATBOA2QBYA/AJA+IgcDwQgBAngVA+QgKAggKAXQgfA5g9AoQgwAfgxAMQggAHgwBHIgqBGIghBEQgjBQgEA3g");
	this.shape_98.setTransform(724.3,81.5467);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#373535").p("AhOjoQgOgUAQgWQAfgfAEgPQAFgQgFg3QAAgHABgIQADgRAKgEQAKgEAJARQAIAPACASQAJA/gBAFQgCAIAYglQAYgmAFgPQAEgQAKgDQAIgCABAGQACAJAAAXQgBAfgHAYQgGAXgpAiIgoAeIAMEBQAEBDgKByQgCAdgSBTQgTBXgKAUQgKARgGgUIgEgYQARjcABhLQAChHgChaQgDhsgGgvQgJgFgGgKg");
	this.shape_99.setTransform(761.1461,136.7952);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EBE84D").s().p("AhEGiIgEgYQARjcABhLQAChHgChaQgDhsgGgvQgJgFgGgKQgOgUAQgWQAfgfAEgPQAFgQgFg3QAAgHABgIQADgRAKgEQAKgEAJARQAIAPACASQAJA/gBAFQgCAIAYglQAYgmAFgPQAEgQAKgDQAIgCABAGQACAJAAAXQgBAfgHAYQgGAXgpAiIgoAeIAMEBQAEBDgKByQgCAdgSBTQgTBXgKAUQgFAIgEAAQgEAAgDgLg");
	this.shape_100.setTransform(761.1461,136.7952);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#373535").p("AAhADQgCg2gNgTQgIgMgGgCIgEABQgCgBgDADQgGAFABAQQACARgGAcQgGAXgEAFQgCADgDAMQgCAGgBAGQgBAuACgBQA+g7ACgXg");
	this.shape_101.setTransform(763.9107,99.6218);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EBE84D").s().p("AggAoIADgMQADgMACgDQAEgFAGgXQAGgcgCgRQgBgQAGgFQADgDACABIAEgBQAGACAIAMQANATACA2QgCAXg+A7IAAAAQgCAAABgtg");
	this.shape_102.setTransform(763.9107,99.6273);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#373535").p("AjrAvIAfgLQAqgIA5APQBxAdBTACIAMggQAUgpAlgmQAlgoARgiQAJgQACgJIAICFIhDCAQgFAJgKAJQgUASgYgBQgsgHgfgBQg4gDg4ASQg4ASg3gOIgsgR");
	this.shape_103.setTransform(733.1613,133.0427);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EBE84D").s().p("Ai9CXIgsgRIAAhrIAegLQArgIA5APQBwAdBUACIAMggQAUgoAlgnQAlgoARgiQAJgQABgJIAJCFIhDCAQgFAJgKAJQgVASgYgBQgrgHgfgBQg4gDg4ASQggAKggAAQgYAAgXgGg");
	this.shape_104.setTransform(733,135.0143);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#373535").p("Aifk3IAPCcQANCtgLBaIABAfQAEAkAVAZQAiApAFAFQAbAdAVAMIAaARQAaARAIgCQAAgKgDgOQgGgbgNgRIAsAQQAxAPAbgGQhUg2gYgTIA6AEQA+gBAQgcQg8gHgpgQIAcgJQAdgOAIgSQgjAAgqgDQhRgHgegSQgCgWACgeQACg8APgsQARg2A0hmQAag0AWgo");
	this.shape_105.setTransform(685.7573,255.3355);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EBE84D").s().p("AgCEwIgZgRQgWgMgagdIgnguQgVgZgEgkIgBgfQALhagNitIgPicIDigHQgXAogZA0Qg0BmgRA2QgPAsgCA8QgCAeACAWQAeASBRAHQApADAkAAQgJASgcAOIgcAJQApAQA8AHQgRAcg9ABIg6gEQAYATBUA2QgbAGgygPIgrgQQANARAGAbQADAOAAAKIgCAAQgJAAgYgPg");
	this.shape_106.setTransform(685.6,255.3355);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#373535").p("AFWBwQhQABhhAEQjDAJhZAUQgNAEgTAAQglAAgZgVQgtgjgWgXQgpgqgPg4QgCgcACgNIAXAOQARAMAJAOQAEAGADAGAkfgcQgEgJgDgKQgNgnAJglIARAcQATAgAOANQgDgQACgUQAFgoAagTIABAlQADAqAMAYIAPgeQATghASgKIgEBSQgBBUALAVIBJgEQBRgIAogXQBAgkB4gy");
	this.shape_107.setTransform(612.2031,197.4125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EBE84D").s().p("AjYB/QgsgjgXgYQgogqgPg3QgCgcACgNIAWAOQARAMAJANIgHgTQgMgnAIgkIASAcQATAgAOANQgDgQACgUQAFgoAagTIAAAkQADAqANAZIAPgfQATggARgKIgDBSQgBBUAKAVIBKgEQBRgIAogXQBAgjB4gzIBsChQhQABhhAEQjDAJhZAUQgOAEgSAAQgmAAgZgVg");
	this.shape_108.setTransform(612.45,197.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#373535").p("ABbm7QgSAJgTAYQgnAxgEBQQgdAGgqAWQhWArhABNQhWBegcAlQgqA2ggBnIAPA/QAXBDAqAWQAhASBTAgQBOAlAzA9QAzA9BigOQAygIAqgTQADACA3hMQA4hPAagsQAZgrAMhIQAJg3AAg/QAAgsADhDIADg8QAEgXAGgbQANg2AMgVQAKgRgOg4QgQg+AFgaQgkgXgtgXQhbguguABQgNAHgPAMQgeAWgNATg");
	this.shape_109.setTransform(674.6949,177.2873);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EBE84D").s().p("AhKHHQgzg9hNglQhTgggigSQgpgWgXhDIgPg/QAghnApg2QAcglBWheQBBhNBVgrQArgWAdgGQAEhQAmgxQATgYATgJQANgTAegWQAPgMAMgHQAvgBBaAuQAuAXAkAXQgFAaAPA+QAPA4gKARQgMAVgNA2QgHAbgEAXIgDA8QgDBDAAAsQAAA/gJA3QgMBIgZArQgZAsg5BPQg2BMgEgCQgqATgxAIQgTACgRAAQhIAAgqgxg");
	this.shape_110.setTransform(674.7041,177.2873);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#373535").p("AEdlsIiwh7QhOg3gigfQhKhCgvhSQgthPg3hNIgug9QhIgahjgXQjFgviIALQiHALkxBaIkXBXIBHAEQBXAHBTAMQEGAnBsBOQBQA6AdAZQAtApAYAsQAxBYAHDjICMA2QCWBBAwAzQAZAaATApQALAZATAzQAoBiBJAvIABARQgBAVgFAWQgRBFg8AuQg7Aug6A1IgtArICXAhQCnAuBPBCQBgBOBbBfQBbBfAKAhQANArBFg8QAAgXAkgzQA3hLBggjIARAJQAWAKAWAEQBIAPA0gsQA0gtAng0QATgaAJgSIAPgTQAVgWAdgOQBcgtCMAwIB8AxIBihJQBjhVAGg8QAJhWg9jkQhEj5hNhbQhGhUgyhCIgkgyQixCPgUAOQgVAQhBAXQhOAbgugBQgsgChwgvIhogvg");
	this.shape_111.setTransform(642.6244,155.6976);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#65BE89").s().p("AEyPxQgKghhahfQhbhfhghOQhQhCinguIiXghIAugrQA5g1A8guQA7guAShFQAFgWAAgVIAAgRQhJgvgohiQgUgzgLgZQgTgpgYgaQgwgziWhBIiNg2QgHjjgwhYQgYgsgugpQgcgZhQg6QhthOkGgnQhSgMhXgHIhHgEIEWhXQExhaCIgLQCHgLDGAvQBjAXBHAaIAvA9QA3BNAtBPQAuBSBLBCQAhAfBOA3ICwB7IDTBMIBnAvQBxAvArACQAuABBOgbQBBgXAWgQQAUgOCxiPIAjAyQAyBCBHBUQBNBbBDD5QA+DkgJBWQgGA8hkBVIhiBJIh8gxQiLgwhdAtQgdAOgUAWIgPATQgJASgUAaQgnA0g0AtQg0AshHgPQgXgEgWgKIgRgJQhfAjg3BLQglAzAAAXQgnAjgWAAQgPAAgGgSg");
	this.shape_112.setTransform(643.7574,155.6976);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112,p:{y:155.6976}},{t:this.shape_111,p:{y:155.6976}},{t:this.shape_110,p:{y:177.2873}},{t:this.shape_109,p:{y:177.2873}},{t:this.shape_108,p:{y:197.65}},{t:this.shape_107,p:{y:197.4125}},{t:this.shape_106,p:{y:255.3355}},{t:this.shape_105,p:{y:255.3355}},{t:this.shape_104,p:{y:135.0143}},{t:this.shape_103,p:{y:133.0427}},{t:this.shape_102,p:{y:99.6273}},{t:this.shape_101,p:{y:99.6218}},{t:this.shape_100,p:{y:136.7952}},{t:this.shape_99,p:{y:136.7952}},{t:this.shape_98,p:{y:81.5467}},{t:this.shape_97,p:{y:81.3105}},{t:this.shape_96,p:{y:74.0121}},{t:this.shape_95,p:{y:74.047}},{t:this.shape_94,p:{y:77.7233}},{t:this.shape_93,p:{y:77.7233}},{t:this.shape_92,p:{y:67.0494}},{t:this.shape_91,p:{y:67.0849}},{t:this.shape_90,p:{y:50.0962}},{t:this.shape_89,p:{y:50.0962}},{t:this.shape_88,p:{y:88.2552}},{t:this.shape_87,p:{y:88.2552}},{t:this.shape_86,p:{y:157}},{t:this.shape_85,p:{y:157.4783}},{t:this.instance_1,p:{y:57.5}},{t:this.shape_84,p:{y:59.0554}},{t:this.shape_83,p:{y:70.925}},{t:this.shape_82,p:{y:70.926}},{t:this.shape_81,p:{y:21.845}}]}).to({state:[{t:this.shape_112,p:{y:87.8476}},{t:this.shape_111,p:{y:87.8476}},{t:this.shape_110,p:{y:109.4373}},{t:this.shape_109,p:{y:109.4373}},{t:this.shape_108,p:{y:129.8}},{t:this.shape_107,p:{y:129.5625}},{t:this.shape_106,p:{y:187.4855}},{t:this.shape_105,p:{y:187.4855}},{t:this.shape_104,p:{y:67.1643}},{t:this.shape_103,p:{y:65.1927}},{t:this.shape_102,p:{y:31.7773}},{t:this.shape_101,p:{y:31.7718}},{t:this.shape_100,p:{y:68.9452}},{t:this.shape_99,p:{y:68.9452}},{t:this.shape_98,p:{y:13.6967}},{t:this.shape_97,p:{y:13.4605}},{t:this.shape_96,p:{y:6.1621}},{t:this.shape_95,p:{y:6.197}},{t:this.shape_94,p:{y:9.8733}},{t:this.shape_93,p:{y:9.8733}},{t:this.shape_92,p:{y:-0.8006}},{t:this.shape_91,p:{y:-0.7651}},{t:this.shape_90,p:{y:-17.7538}},{t:this.shape_89,p:{y:-17.7538}},{t:this.shape_88,p:{y:20.4052}},{t:this.shape_87,p:{y:20.4052}},{t:this.shape_86,p:{y:89.15}},{t:this.shape_85,p:{y:89.6283}},{t:this.instance_1,p:{y:-10.35}},{t:this.shape_84,p:{y:-8.7946}},{t:this.shape_83,p:{y:3.075}},{t:this.shape_82,p:{y:3.076}},{t:this.shape_81,p:{y:-46.005}}]},4).to({state:[{t:this.shape_112,p:{y:155.6976}},{t:this.shape_111,p:{y:155.6976}},{t:this.shape_110,p:{y:177.2873}},{t:this.shape_109,p:{y:177.2873}},{t:this.shape_108,p:{y:197.65}},{t:this.shape_107,p:{y:197.4125}},{t:this.shape_106,p:{y:255.3355}},{t:this.shape_105,p:{y:255.3355}},{t:this.shape_104,p:{y:135.0143}},{t:this.shape_103,p:{y:133.0427}},{t:this.shape_102,p:{y:99.6273}},{t:this.shape_101,p:{y:99.6218}},{t:this.shape_100,p:{y:136.7952}},{t:this.shape_99,p:{y:136.7952}},{t:this.shape_98,p:{y:81.5467}},{t:this.shape_97,p:{y:81.3105}},{t:this.shape_96,p:{y:74.0121}},{t:this.shape_95,p:{y:74.047}},{t:this.shape_94,p:{y:77.7233}},{t:this.shape_93,p:{y:77.7233}},{t:this.shape_92,p:{y:67.0494}},{t:this.shape_91,p:{y:67.0849}},{t:this.shape_90,p:{y:50.0962}},{t:this.shape_89,p:{y:50.0962}},{t:this.shape_88,p:{y:88.2552}},{t:this.shape_87,p:{y:88.2552}},{t:this.shape_86,p:{y:157}},{t:this.shape_85,p:{y:157.4783}},{t:this.instance_1,p:{y:57.5}},{t:this.shape_84,p:{y:59.0554}},{t:this.shape_83,p:{y:70.925}},{t:this.shape_82,p:{y:70.926}},{t:this.shape_81,p:{y:21.845}}]},4).to({state:[{t:this.shape_112,p:{y:87.8476}},{t:this.shape_111,p:{y:87.8476}},{t:this.shape_110,p:{y:109.4373}},{t:this.shape_109,p:{y:109.4373}},{t:this.shape_108,p:{y:129.8}},{t:this.shape_107,p:{y:129.5625}},{t:this.shape_106,p:{y:187.4855}},{t:this.shape_105,p:{y:187.4855}},{t:this.shape_104,p:{y:67.1643}},{t:this.shape_103,p:{y:65.1927}},{t:this.shape_102,p:{y:31.7773}},{t:this.shape_101,p:{y:31.7718}},{t:this.shape_100,p:{y:68.9452}},{t:this.shape_99,p:{y:68.9452}},{t:this.shape_98,p:{y:13.6967}},{t:this.shape_97,p:{y:13.4605}},{t:this.shape_96,p:{y:6.1621}},{t:this.shape_95,p:{y:6.197}},{t:this.shape_94,p:{y:9.8733}},{t:this.shape_93,p:{y:9.8733}},{t:this.shape_92,p:{y:-0.8006}},{t:this.shape_91,p:{y:-0.7651}},{t:this.shape_90,p:{y:-17.7538}},{t:this.shape_89,p:{y:-17.7538}},{t:this.shape_88,p:{y:20.4052}},{t:this.shape_87,p:{y:20.4052}},{t:this.shape_86,p:{y:89.15}},{t:this.shape_85,p:{y:89.6283}},{t:this.instance_1,p:{y:-10.35}},{t:this.shape_84,p:{y:-8.7946}},{t:this.shape_83,p:{y:3.075}},{t:this.shape_82,p:{y:3.076}},{t:this.shape_81,p:{y:-46.005}}]},4).to({state:[{t:this.shape_112,p:{y:155.6976}},{t:this.shape_111,p:{y:155.6976}},{t:this.shape_110,p:{y:177.2873}},{t:this.shape_109,p:{y:177.2873}},{t:this.shape_108,p:{y:197.65}},{t:this.shape_107,p:{y:197.4125}},{t:this.shape_106,p:{y:255.3355}},{t:this.shape_105,p:{y:255.3355}},{t:this.shape_104,p:{y:135.0143}},{t:this.shape_103,p:{y:133.0427}},{t:this.shape_102,p:{y:99.6273}},{t:this.shape_101,p:{y:99.6218}},{t:this.shape_100,p:{y:136.7952}},{t:this.shape_99,p:{y:136.7952}},{t:this.shape_98,p:{y:81.5467}},{t:this.shape_97,p:{y:81.3105}},{t:this.shape_96,p:{y:74.0121}},{t:this.shape_95,p:{y:74.047}},{t:this.shape_94,p:{y:77.7233}},{t:this.shape_93,p:{y:77.7233}},{t:this.shape_92,p:{y:67.0494}},{t:this.shape_91,p:{y:67.0849}},{t:this.shape_90,p:{y:50.0962}},{t:this.shape_89,p:{y:50.0962}},{t:this.shape_88,p:{y:88.2552}},{t:this.shape_87,p:{y:88.2552}},{t:this.shape_86,p:{y:157}},{t:this.shape_85,p:{y:157.4783}},{t:this.instance_1,p:{y:57.5}},{t:this.shape_84,p:{y:59.0554}},{t:this.shape_83,p:{y:70.925}},{t:this.shape_82,p:{y:70.926}},{t:this.shape_81,p:{y:21.845}}]},4).to({state:[{t:this.shape_112,p:{y:87.8476}},{t:this.shape_111,p:{y:87.8476}},{t:this.shape_110,p:{y:109.4373}},{t:this.shape_109,p:{y:109.4373}},{t:this.shape_108,p:{y:129.8}},{t:this.shape_107,p:{y:129.5625}},{t:this.shape_106,p:{y:187.4855}},{t:this.shape_105,p:{y:187.4855}},{t:this.shape_104,p:{y:67.1643}},{t:this.shape_103,p:{y:65.1927}},{t:this.shape_102,p:{y:31.7773}},{t:this.shape_101,p:{y:31.7718}},{t:this.shape_100,p:{y:68.9452}},{t:this.shape_99,p:{y:68.9452}},{t:this.shape_98,p:{y:13.6967}},{t:this.shape_97,p:{y:13.4605}},{t:this.shape_96,p:{y:6.1621}},{t:this.shape_95,p:{y:6.197}},{t:this.shape_94,p:{y:9.8733}},{t:this.shape_93,p:{y:9.8733}},{t:this.shape_92,p:{y:-0.8006}},{t:this.shape_91,p:{y:-0.7651}},{t:this.shape_90,p:{y:-17.7538}},{t:this.shape_89,p:{y:-17.7538}},{t:this.shape_88,p:{y:20.4052}},{t:this.shape_87,p:{y:20.4052}},{t:this.shape_86,p:{y:89.15}},{t:this.shape_85,p:{y:89.6283}},{t:this.instance_1,p:{y:-10.35}},{t:this.shape_84,p:{y:-8.7946}},{t:this.shape_83,p:{y:3.075}},{t:this.shape_82,p:{y:3.076}},{t:this.shape_81,p:{y:-46.005}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-69.3,936.6,841.4);


(lib.Scene_1_Layer_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_48
	this.instance = new lib.amigosfelizescenafinalai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(502.6,420.05,0.5758,0.5758,0,0,0,467.4,374.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(244).to({startPosition:23},0).wait(48).to({startPosition:23},0).wait(52));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pag07 = function(mode,startPosition,loop) {
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
	this.frame_343 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(343).call(this.frame_343).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(200,329);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(244).to({x:612.65,y:331.05},48).wait(52));

	// txt_obj_
	this.txt = new lib.Scene_1_txt();
	this.txt.name = "txt";
	this.txt.parent = this;
	this.txt.setTransform(202,50.6,1,1,0,0,0,202,50.6);
	this.txt.depth = 0;
	this.txt.isAttachedToCamera = 0
	this.txt.isAttachedToMask = 0
	this.txt.layerDepth = 0
	this.txt.layerIndex = 0
	this.txt.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(344));

	// Layer_48_obj_
	this.Layer_48 = new lib.Scene_1_Layer_48();
	this.Layer_48.name = "Layer_48";
	this.Layer_48.parent = this;
	this.Layer_48.setTransform(502.6,426.3,1,1,0,0,0,502.6,426.3);
	this.Layer_48.depth = 0;
	this.Layer_48.isAttachedToCamera = 0
	this.Layer_48.isAttachedToMask = 0
	this.Layer_48.layerDepth = 0
	this.Layer_48.layerIndex = 1
	this.Layer_48.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_48).wait(344));

	// dino_lama_obj_
	this.dino_lama = new lib.Scene_1_dino_lama();
	this.dino_lama.name = "dino_lama";
	this.dino_lama.parent = this;
	this.dino_lama.setTransform(119.3,402.1,1,1,0,0,0,119.3,402.1);
	this.dino_lama.depth = 0;
	this.dino_lama.isAttachedToCamera = 0
	this.dino_lama.isAttachedToMask = 0
	this.dino_lama.layerDepth = 0
	this.dino_lama.layerIndex = 2
	this.dino_lama.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_lama).wait(344));

	// fundo_obj_
	this.fundo = new lib.Scene_1_fundo();
	this.fundo.name = "fundo";
	this.fundo.parent = this;
	this.fundo.setTransform(726.1,238,1,1,0,0,0,726.1,238);
	this.fundo.depth = 0;
	this.fundo.isAttachedToCamera = 0
	this.fundo.isAttachedToMask = 0
	this.fundo.layerDepth = 0
	this.fundo.layerIndex = 3
	this.fundo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fundo).wait(344));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,147,1520.8,514.1);
// library properties:
lib.properties = {
	id: '497B5CD87945F345B1D0112E2D0D892C',
	width: 400,
	height: 658,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pag 07_atlas_.png?1599353353214", id:"pag 07_atlas_"}
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
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