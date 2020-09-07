(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pag 05_atlas_", frames: [[0,0,3857,2171],[0,2173,1149,433]]}
];


// symbols:



(lib.fundocena2 = function() {
	this.initialize(ss["pag 05_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.txtcena05 = function() {
	this.initialize(ss["pag 05_atlas_"]);
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


(lib.splash_gr_08ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// splash_gr_08
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#773B2F").s().p("AzWPAQqNgsm5iaQjIhGkGgOQi4gLk/AQQmkAWh9ABQlCAEkIgmQn6hIgbmzQgJiIApibIAqiAQApAHAsgFQBYgIAQg5QASg+KogyQJJgsHpgsQHqgsg3iaQg3iaFLgbQFLgcMSgpQMRgqG2C8QhFEkD+hJQCMgoChAEQCAADCuAhQBmAUDQAtQC9AnC3jXQC3jWFcAmQFbAmCiA9ID4BeQBXAhCCg4QCCg4CdCEQFhiGEQBvQEPBuhGAGQhHAGCGBMQCHBNDNC7QCrCcBQAuQDMB5jgDVQi8C0mNCrQkdB7wEArQkXAMp8APQpdAQkjANQo+Aal/g5QiKgUg7ACQhgADiVAtQjjBEl8AAQiqAAjIgOg");
	this.shape.setTransform(496.3936,369.7831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773B2F").s().p("EgD8Ag3QoegDpWi6Qi7g6iqhFIiEg6IhUgZQAFgXAJhcIAHhXQAPAbBeAUQAvALAsAEQgHgpAnhqIAohjQBWAHCPAmQgNg5AZheIAahTQAeAgBzgCQA5gCAzgIQgPhxAahrIAchUQAvAKCIgmQBEgTA7gVQgNg9AFifIAIiUQBZgOB/g+QA/gfAtgcQAAgkgvhzIgwhsQAJgrCVhRQBLgoBIggIirlKQAYgwB+hkQA/gyA7goQgpg3gwiDIgoh4QAYgYBshCQA3ghAxgcQgehiAMitIASiaQA7AHB1ASQANgTASgXQgKgpAAg9QgBh4AwhfQAOACCCAIQBOAEAgAUIAlhHQAxhUA9hHICXDXQAthFA7g7QBNhMAmANQBABLAwDbQCVAqBfBLQBoBSAXBwQAOBBASA4QARAXALAfQAGAQADASQAkBFAtAkQAeAXAVACQDeAXBFCwQA0CGgUE0QgODNlOCmQjQBnkYBEQAUApARAsQArARAzAbQBgA0CgByQBQA6A8AvIAFAFIAKAPQAbACAjAPQA8AYA1A0Ig+AQQgKAEgQAAQghAAgjgRIAAAGQAwAZBIBbQgZAEghgBQhBgDgmgYQAhArAtBBQg+AGgigGQgzgJgfgmQgNAEgOACIgKABQh3gkhyg9QAWDfgMEAQgHCngUCYIgEAYIAFgCIABgBQAHgjAUgXQAZgfAkAHIgIAfIgPBCQAfgaAhgNIgKAWQgLAcgIAiQgJAmgKAWIABANQAZgQAcgKQgfBcgaAsQgOCTgtA2QgOAQgPAGIgNACIkhgsQkCDHmRA/QhNANhWAGQg7AvhNAHIgfABQhgAAhzg3g");
	this.shape_1.setTransform(551.8278,215.848);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,992.8,467.2);


(lib.Scene_1_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.txtcena05();
	this.instance.parent = this;
	this.instance.setTransform(8,11,0.3366,0.3366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(338));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fundo
	this.instance = new lib.fundocena2();
	this.instance.parent = this;
	this.instance.setTransform(-20,-182,0.3869,0.3869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(338));

}).prototype = p = new cjs.MovieClip();


(lib.penasai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dinos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81353F").s().p("AgtLtIgYglQgFgwgEhAQgHh+AIhMQACgsAHg7QAOh3AchOQAdhXAYiLQAWh+AChMQADhpgCgaQgIhpgshTIg1hkQAFgEAbAjQAUAbAPAZQAWAlAMAmQAOAtAMBUQARBzgTCPQgGAugVBRQgZBigHAgQgYCDgXCXQgMBQAFCXQAECMAHgDIgFArQgBAEgDABIgBAAQgDAAgCgCg");
	this.shape.setTransform(329.3632,575.0339);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#81353E").p("AhoJzQgSgIgYgQQgvgggegoQgegogIg/QgEhBgCgVQgBgPAnh4QAlhxgNgcIAxAhQA2AsAYAyQAHgEgJgYQgUgvhWhgQAWgrAShEQAjiJgXh8IAuAMIgvg+QgLgggGgsQgNhYAYg7IAPgDQATgDAXAFQBKAOBUBOQBWBOAjBQQASApAAAYIgBAYQgKAfgqAjQgtAlgXAHIA5gMQBMgnAYgbIAPCAQALCPgZBSIgMAhQgQAkgPANIgqAhQgtAggRACIAqABQA0gGAugkIgVA6QgZBCgUAnQgdA3hOBXQhWBggzATg");
	this.shape_1.setTransform(332.3563,555.9316);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D23887").s().p("AhoJzQgSgIgYgQQgvgggegoQgegogIg/IgGhWQgBgPAnh4QAlhxgNgcIAxAhQA2AsAYAyQAHgEgJgYQgUgvhWhgQAWgrAShEQAjiJgXh8IAuAMIgvg+QgLgggGgsQgNhYAYg7IAPgDQATgDAXAFQBKAOBUBOQBWBOAjBQQASApAAAYIgBAYQgKAfgqAjQgtAlgXAHIA5gMQBMgnAYgbIAPCAQALCPgZBSIgMAhQgQAkgPANIgqAhQgtAggRACIAqABQA0gGAugkIgVA6QgZBCgUAnQgdA3hOBXQhWBggzATg");
	this.shape_2.setTransform(332.3563,555.9304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3A241").s().p("AreCVQgCgEACgDIAggdIBsgfQB7gfBMgHIBmgKQB3gKBSAMQBcAOCNgEQB/gDBMgMQBjgQAdgIQBmgbBJg8IBYhHQAFAFgeAgQgXAagVATQgfAdgjATQgqAWhRAcQhvAmiOAKQguAChTgEQhlgHgiAAQiIgBiVAIQhRADiTAiQiJAeAEAHIgrADQgEAAgBgDg");
	this.shape_3.setTransform(346.9041,122.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3A241").p("ApnAIQAEgSAMgaQAWg1AhglQAigmA8gTQAggLAzgLQAPgEB9APQB2APAZgSQgHAYgQAeQggA9guAhIAGACQAIgBAOgIQAqgcBOhnIAgAHQAoAIAtACQCNAJB1gvIgDAwIAzg6IBIggQBUgdA+ANIAGANQAGATAAAXQABBMg9BiQg8BihIAyQgWAPgVAJIgRAGQgHAFgQgCQghgDgqgjQgtglgMgVIAYA1IAeAkQAiAnAUALQg1AUhGATQiLAmhVgIQgQgBgTgFQgngIgPgNQgUgQgUgTQgpgmgEgQIAHAqQAQAxAsAmQhpgNhEgUQg8gShkg8QhvhDgdgug");
	this.shape_4.setTransform(365.2209,126.8301);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFDE47").s().p("Ak2DtQg8gShkg8QhvhDgdguIgFglQAEgSAMgaQAWg1AhglQAigmA8gTQAggLAzgLQAPgEB9APQB2APAZgSQgHAYgQAeQggA9guAhIAGACQAIgBAOgIQAqgcBOhnIAgAHQAoAIAtACQCNAJB1gvIgDAwIAzg6IBIggQBUgdA+ANIAGANQAGATAAAXQABBMg9BiQg8BihIAyQgWAPgVAJIgRAGQgHAFgQgCQghgDgqgjQgtglgMgVIAYA1IAeAkQAiAnAUALQg1AUhGATQiLAmhVgIQgQgBgTgFQgngIgPgNQgUgQgUgTQgpgmgEgQIAHAqQAQAxAsAmQhpgNhEgUg");
	this.shape_5.setTransform(365.2252,126.7262);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#368084").s().p("ADUBPQgugEhSgPQhigUgigEQh2gRimgOQhRgGiWANQiMANADAGIgrgCQgDAAgBgEQgBgDACgDIAjgZIBvgQQB+gPBMAEIBnACQB4AHBPAXQBaAYCMAPQB+AOBNgDQBjgCAfgFQBpgPBQgwIBgg7QAFAFgiAcQgZAWgYARQgkAYglAOQgsARhUASQhRAQhgAAQgnAAgpgCg");
	this.shape_6.setTransform(491.1874,265.9367);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#358084").p("ApxhLIAVgrQAdgxAmghQAmggA+gMQAigHA0gEQAPgCB7AgQByAdAbgOQgKAXgUAcQgoA4gxAbIAGACQAIABAOgHQAugWBbhcIAeALQAoANArAJQCLAaB6gfIgJAvIA7gyIBLgXQBXgSA8AVIAEAPQAEASgDAYQgKBKhIBZQhJBahOApQgYAMgWAGIgRAEQgIAEgQgEQgggIglgoQgogqgJgXIAQA4IAaAoQAcAqASAOQg3ANhHAKQiQAUhSgUQgQgDgSgHQglgNgOgPQgRgSgSgWQgjgrgDgRIACArQAJAzAnArQhngbhAgcQg5gahchIQhlhRgWgwg");
	this.shape_7.setTransform(510.1177,270.6284);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C1D3").s().p("AhND2QgQgDgSgHQglgNgOgPQgRgSgSgWQgjgrgDgRIACArQAJAzAnArQhngbhAgcQg5gahchIQhlhRgWgwIgBgmIAVgrQAdgxAmghQAmggA+gMQAigHA0gEQAPgCB7AgQByAdAbgOQgKAXgUAcQgoA4gxAbIAGACQAIABAOgHQAugWBbhcIAeALQAoANArAJQCLAaB6gfIgJAvIA7gyIBLgXQBXgSA8AVIAEAPQAEASgDAYQgKBKhIBZQhJBahOApQgYAMgWAGIgRAEQgIAEgQgEQgggIglgoQgogqgJgXIAQA4IAaAoQAcAqASAOQg3ANhHAKQhIAKg5AAQg3AAgqgKg");
	this.shape_8.setTransform(510.1192,270.6284);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#368084").s().p("ADUBOQgugDhSgQQhlgTgggFQiMgTiPgLQhRgGiWAMQiMANADAHIgrgCQgDgBgCgDQgBgEADgCIAjgZIBvgQQB+gPBMAEIBnACQB4AHBPAXQBZAYCNAPQB9ANBOgCQBqgEAYgDQBpgPBPgwIBhg7QAFAEgiAdQgaAXgYAQQgjAYglAOQgsARhUARQhQARhfAAQgoAAgqgDg");
	this.shape_9.setTransform(444.162,70.0221);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#358084").p("ApxhLIAVgrQAdgxAmghQAmghA+gLQAigHA0gEQAPgCB7AfQByAeAbgOQgKAWgUAcQgoA5gxAbIAGACQAIABAOgHQAugWBbhcIAeALQAoANArAIQCLAbB6gfIgJAvIA6gyIBMgXQBXgSA8AVIAEAOQAEATgDAYQgKBKhJBZQhIBahOAoQgYANgWAGIgRADQgIAFgQgEQgggIglgoQgogqgJgXIAQA4IAaAnQAcArASANQg3AOhHAKQiQAThSgTQgQgDgSgHQglgOgOgOQgRgSgSgWQgjgrgDgRIACArQAJAzAnArQhngbhBgdQg4gZhchJQhlhRgWgwg");
	this.shape_10.setTransform(463.1127,74.7096);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34C1D3").s().p("AhND2QgQgDgSgHQglgOgOgOQgRgSgSgWQgjgrgDgRIACArQAJAzAnArQhngbhBgdQg4gZhchJQhlhRgWgwIgBglIAVgrQAdgxAmghQAmghA+gLQAigHA0gEQAPgCB7AfQByAeAbgOQgKAWgUAcQgoA5gxAbIAGACQAIABAOgHQAugWBbhcIAeALQAoANArAIQCLAbB6gfIgJAvIA6gyIBMgXQBXgSA8AVIAEAOQAEATgDAYQgKBKhJBZQhIBahOAoQgYANgWAGIgRADQgIAFgQgEQgggIglgoQgogqgJgXIAQA4IAaAnQAcArASANQg3AOhHAKQhJAKg5AAQg3AAgpgKg");
	this.shape_11.setTransform(463.1143,74.7096);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#368084").s().p("ADUBOQgugDhSgQQhjgTgigFQiEgRiXgOQhRgFiWAMQiMANADAHIgrgCQgEgBgBgDQgBgEADgCIAjgZIBvgQQB+gPBMAEIBnACQB3AHBQAWQBZAZCNAPQB9ANBOgCQBlgDAdgEQBpgPBPgwIBhg7QAFAEgiAdQgaAXgYAQQgjAYglAOQgsARhUARQhRARhfAAQgnAAgqgDg");
	this.shape_12.setTransform(437.162,185.9221);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#358084").p("ApxhLIAVgqQAdgyAmggQAmghA+gMQAigHA0gEQAPgCB6AgQBzAdAbgOQgKAXgUAcQgoA4gxAbIAFACQAIABAPgHQAugWBahcIAfAMQAoANArAIQCLAaB6gfIgJAwIA6gzIBMgWQBXgTA8AVIAEAPQAEATgDAXQgKBLhJBZQhIBZhOApQgZAMgWAGIgRAEQgIAEgPgEQgggHglgoQgogrgJgXIAQA4IAZAoQAdAqASAOQg3ANhHAKQiQAUhSgUQgQgDgSgHQglgNgOgPQgRgSgSgWQgjgrgDgQIACAqQAJAzAnAsQhngchBgcQg4gZhchJQhlhRgXgwg");
	this.shape_13.setTransform(456.1135,190.5815);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34C1D3").s().p("AhND2QgQgDgSgHQglgNgOgPQgRgSgSgWQgjgrgDgQIACAqQAJAzAnAsQhngchBgcQg4gZhchJQhlhRgXgwIAAgmIAVgqQAdgyAmggQAmghA+gMQAigHA0gEQAPgCB6AgQBzAdAbgOQgKAXgUAcQgoA4gxAbIAFACQAIABAPgHQAugWBahcIAfAMQAoANArAIQCLAaB6gfIgJAwIA6gzIBMgWQBXgTA8AVIAEAPQAEATgDAXQgKBLhJBZQhIBZhOApQgZAMgWAGIgRAEQgIAEgPgEQgggHglgoQgogrgJgXIAQA4IAZAoQAdAqASAOQg3ANhHAKQhIAKg5AAQg3AAgqgKg");
	this.shape_14.setTransform(456.1143,190.5815);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#81353F").s().p("Ap5GQQgCgCABgEIATgnIBahDQBnhJBFghIBcgvQBsgyBRgSQBZgUCEg0QB2gwBCgnQBXgyAZgSQBVg+AvhRIA5hiQAGACgQApQgMAfgNAbQgTAmgaAeQgfAlhBA2QhZBKiEA8QgpAShQAZQhhAegfAMQh7AviNA8QhLAhh9BTQh2BOAGAEIgnATIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_15.setTransform(373.6425,49.1143);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#81353E").p("AofElQgCgTABgdQACg5ASgvQASgvAxgoQAbgVAsgcQAMgIB7gfQBzgcARgZIgDA7QgIBDgfAvIAGAAQAIgEAJgMQAegqAkh7IAhgFQAogHArgNQCGgrBdhVIAPAuIAbhIIA4g3QBEg6A/gKQARANAOAjQAbBGgWByQgVBxgxBIQgQAWgQAQIgOALQgFAIgQAEQgfAIg0gSQg3gSgTgQIApAqIApAXQAuAXAWAEQgqAmg7AqQh1BVhSAXQgQAEgTADQgnAGgTgHQgXgIgagKQgzgVgLgOIAWAlQAgAoA3AUQhnAZhHAFQg+AFhzgVQiAgXgqghg");
	this.shape_16.setTransform(389.5484,40.3351);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D23887").s().p("AliF9QiAgXgqghIgTggQgCgTABgdQACg5ASgvQASgvAxgoQAbgVAsgcQAMgIB7gfQBzgcARgZIgDA7QgIBDgfAvIAGAAQAIgEAJgMQAegqAkh7IAhgFQAogHArgNQCGgrBdhVIAPAuIAbhIIA4g3QBEg6A/gKQARANAOAjQAbBGgWByQgVBxgxBIQgQAWgQAQIgOALQgFAIgQAEQgfAIg0gSQg3gSgTgQIApAqIApAXQAuAXAWAEQgqAmg7AqQh1BVhSAXQgQAEgTADQgnAGgTgHIgxgSQgzgVgLgOIAWAlQAgAoA3AUQhnAZhHAFIgaABQg6AAhdgRg");
	this.shape_17.setTransform(389.5484,40.3481);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#81353F").s().p("Aj8LIQgEAAgBgEIgKgqQAKgvASg+QAih6AghFQAQgoAag2QA0hrAzhBQA5hJBEh8QA9hvAbhIQAkhfAIgcQAahmgPhdIgRhwQAGgDANArQALAgAGAcQAKAqgBAoQgCAwgQBTQgWBzhACAQgUApguBGQg5BVgQAcQg9BqhMCQQglBJgtCPQgpCHAHgBIgTAnQgBADgDAAIgBAAg");
	this.shape_18.setTransform(277.8548,382.7466);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#81353E").p("AkKJPQgOgOgRgWQgjgugPgwQgQgvANg+QASg/AFgVQAEgOBMhlQBHhfgDgeIAkAvQAkA6AGA4QAJgCgCgZQgCgzgzh2QAkgiAmg7QBNh2ASh9IApAbIgZhKQAAgiAIgsQARhXAqgwIAPACQATAEAVAMQBBAlA3BmQA4BlAHBXQADAsgHAXIgJAXQgTAagzATQg3AUgZAAIA6AGQBVgLAfgSIgbB+QglCLgxBFIgXAcQgaAdgUAHQgXAJgbAIQg1AQgQgEIAoAPQAyALA3gTIgmAwQgtA2ggAfQguArhlA4QhxA/g2ABg");
	this.shape_19.setTransform(286.2087,363.9898);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D23887").s().p("AkJJPQgOgOgRgWQgigvgQgvQgPgvAMg/IAYhTQADgOBMhlQBIhfgDgeIAjAuQAlA7AGA4QAIgCgBgZQgDg0gyh1QAjgiAng7QBNh3ASh8IAoAbIgYhKQAAgiAIgsQARhXAqgwIAPABQATAEAUANQBBAlA4BlQA3BmAHBXQAEArgIAYIgIAWQgTAbg0ASQg3AVgYgBIA6AHQBVgMAfgRIgbB+QglCKgyBGIgWAbQgbAegTAGQgXAJgbAJQg1AQgRgEIAoAOQAzAMA3gUIgnAxQgtA2ggAfQgtArhlA4QhyA+g2ACg");
	this.shape_20.setTransform(286.096,364);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#81353F").s().p("Aj8LIQgEAAgBgEIgKgqQAKgvASg+QAih6AghFQAQgoAag2QA0hsAzhBQA5hIBEh8QA9hvAbhIQAlhiAHgaQAahmgPhcIgRhwQAGgDANArQALAgAGAcQAKAqgBAoQgCAvgQBUQgWB1hAB+QgUApguBGQg4BTgRAeQhCBzhHCHQglBIgtCQQgpCHAHgBIgTAnQgBADgDAAIgBAAg");
	this.shape_21.setTransform(410.8548,300.1966);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#81353E").p("AkKJPQgOgOgRgXQgjgugPgvQgQgwANg9QASg/AFgVQAEgOBMhlQBHhfgDgfIAkAwQAlA6AGA4QAIgCgBgZQgDgzgyh2IAWgZQAcggAYglQBMh2ATh8IAoAaIgYhJQAAgiAIgsQAQhYAqgvIAPACQATAEAVAMQBBAlA3BlQA4BmAHBXQADAsgHAXQABAKgKANQgTAagzATQg3AUgZAAIA6AGIAvgIQAygKATgMIgbB+QglCLgxBGQgKANgNAOQgaAegUAHQgXAJgbAIQg1AQgQgEIAoAOQAyALA3gTQhABVgzAwQgtArhmA5QhxA/g2ABg");
	this.shape_22.setTransform(419.2098,281.4399);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D23887").s().p("AkIJOQgOgNgSgXQgigugQgvQgPgwAMg9IAYhUQADgPBMhkQBIhggDgeIAjAvQAlA7AGA4QAJgCgCgZQgDgzgyh2IAXgZQAbggAYglQBNh2ASh8IAoAaIgYhKQAAghAIgsQARhYAqgvIAPACQATAEAUAMQBBAlA4BlQA3BmAHBXQAEAsgIAXQABAKgJANQgTAZg0AUQg3AUgYgBIA6AHIAugIQAygKAUgMIgbB+QglCLgyBGQgJANgNAOQgbAdgTAIQgXAJgbAIQg1APgRgEIAoAPQAzALA3gTQhBBVgzAwQgtArhlA5QhyA+g2ACg");
	this.shape_23.setTransform(419.096,281.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#81353F").s().p("Aj8LIQgEAAgBgEIgKgqQAKgvASg+QAih6AghFQAQgoAag2QA0hsAzhBQA5hIBEh8QA9hvAbhIQAlhiAHgaQAahmgPhcIgRhwQAGgDANArQALAgAGAcQAKAqgBAoQgCAwgQBTQgXB3g/B8QgUApguBGQg4BUgRAdQhCBzhHCHQglBIgtCQQgpCHAHgBIgTAnQgBADgDAAIgBAAg");
	this.shape_24.setTransform(312.9048,449.6466);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#81353E").p("AkKJPQgOgOgRgXQgjgugPgvQgQgvANg+QASg/AFgVQAEgOBMhlQBHhfgDgeIAkAvQAlA6AGA4QAIgCgBgZQgDgzgyh2QAjgiAng7QBMh2ATh9IAoAbIgYhKQAAgiAIgsQAQhXAqgwIAPACQATAEAVAMQBBAlA3BlQA4BmAHBXQADAsgHAXIgJAXQgTAagzATQg3AUgZAAIA6AGIAvgIQAygKATgMIgbB+QglCLgxBGIgXAbQgaAegUAHQgXAJgbAIQg1AQgQgEIAoAPQAyALA3gTIgmAwQgtA2ggAfQguAqhlA5QhxA/g2ABg");
	this.shape_25.setTransform(321.2598,430.8898);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D23887").s().p("AkIJPQgOgOgSgXQgigugQgvQgPgwAMg+IAYhTQADgOBMhmQBIhegDgfIAjAwQAlA6AGA4QAJgCgCgaQgDgzgyh2QAjgiAng6QBNh3ASh8IAoAaIgYhJQAAgiAIgsQARhYAqgvIAPABQATAFAUALQBBAmA4BlQA3BlAHBYQAEAsgIAXIgIAWQgTAag0ATQg3AVgYAAIA6AGIAugIQAygLAUgLIgbB+QglCLgyBFIgWAcQgbAegTAGQgXAKgbAHQg1ARgRgEIAoAOQAzAMA3gUIgnAxQgtA2ggAeQgtArhlA4QhyBAg2ABg");
	this.shape_26.setTransform(321.146,430.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81353F").s().p("AqiFGQgCgCABgEIAXglIBhg4QBwg9BIgZIBggkQBxglBTgJQBbgKCJgmQB6giBHgfQBegpAYgOQBcg0A3hLIBEhbQAGACgUAoQgRAfgPAXQgYAlgdAaQgjAhhHAvQhiBAiIArQgrAOhSAQQhlATgfAIQh6AfiZAuQhOAYiFBEQh+BAAGAFIgpAOIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_27.setTransform(482.1858,163.1375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#81353E").p("Ao8DUQAAgUAEgcQAJg5AXgsQAXgsA1giQAdgSAvgXQANgIB9gQQB2gPAUgXIgJA6QgRBCgjArIAGAAQAHgCALgMQAjgkAyh3IAhgBQApgDArgIQCLgbBlhKIAKAvIAjhFIA+gxQBKgxA/gDIAJAMQALAQAGAXQATBJgiBuQgiBvg5BBQgSAVgTAOIgOAJQgGAHgQACQggAFgygXQg1gZgRgSIAkAuIAnAbQAqAdAWAGQguAhg/AkQh+BHhVANQgQADgTAAQgmACgTgJQgWgKgZgOQgwgbgJgOIARAnQAcAsA0AaQhqANhGgDQg+gChwgiQh9glgmgmg");
	this.shape_28.setTransform(498.9406,157.9973);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D23887").s().p("AjcFkQg+gChwghQh9gmgmglIgPgjQAAgTAEgdQAJg4AXgsQAXgtA1ghQAdgTAvgXQANgHB9gQQB2gPAUgYIgJA6QgRBCgjAsIAGAAQAHgCALgMQAjglAyh3IAhgBQApgDArgIQCLgbBlhKIAKAvIAjhEIA+gxQBKgxA/gDIAJALQALARAGAWQATBJgiBvQgiBug5BBQgSAVgTAOIgOAKQgGAHgQACQggAEgygXQg1gZgRgSIAkAuIAnAcQAqAdAWAFQguAhg/AkQh+BIhVANQgQACgTABQgmABgTgIQgWgLgZgNQgwgbgJgPIARAnQAcAsA0AaQhWALg/AAIgbgBg");
	this.shape_29.setTransform(498.9406,158.0031);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81353F").s().p("Aj8LIQgEgBgBgDIgKgqQAKgwASg9QAih6AghFQAQgoAag2QA0hsA0hBQA4hIBEh8QA9hwAbhHQAlhiAHgaQAahmgOhcIgShxQAGgCANAqQALAhAGAcQAKAqgBAoQgCAwgQBTQgWB0g/B/QgVApguBGQg3BTgSAeQhIB9hAB9QgmBIgtCQQgqCGAIAAIgTAnQgBADgDAAIgBAAg");
	this.shape_30.setTransform(287.2548,231.6212);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#81353E").p("AkKJPQgOgOgRgXQgjgugPgvQgQgwANg+QASg+AFgVQAEgOBMhlQBHhfgCgfIAjAwQAlA6AGA4QAIgCgBgaQgDgzgyh1IAWgZQAcggAYglQBMh2ATh8IAoAaIgYhJQAAgiAIgsQAQhYArgvIAPABQASAEAVAMQBBAmA3BlQA4BmAHBXQADAsgHAXQABAJgKANQgTAagzAUQg3AUgYAAIA6AGIAugIQAygKATgMIgbB+QglCLgxBGQgKANgNAOQgaAegTAHQgYAJgaAIQg2AQgQgEIAoAOQAzALA3gTQhBBVgzAwQgtArhlA5QhyA/g2ABg");
	this.shape_31.setTransform(295.6098,212.8649);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D23887").s().p("AkIJPQgOgOgSgXQgigugQgvQgPgwAMg+QATg+AFgVQADgOBMhlQBIhfgDgfIAkAwQAkA6AGA4QAJgCgCgaQgDgzgyh1IAXgZQAbggAYglQBNh2ASh8IAoAaIgYhJQAAgiAIgsQARhYAqgvIAPABQATAEAUAMQBBAmA4BlQA3BmAHBXQAEAsgIAXQABAJgJANQgTAag0AUQg2AUgZAAIA6AGIAugIQAygKAUgMIgbB+QglCLgyBGQgJANgNAOQgbAegTAHQgXAJgbAIQg1AQgRgEIAoAOQAzALA3gTQhABVg0AwQgsArhmA5QhyA/g1ABg");
	this.shape_32.setTransform(295.496,212.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#81353F").s().p("Aj8LIQgEAAgBgEIgKgqQAKgvASg+QAih6AghFQAQgoAag2QA0hrAzhCQA5hIBEh8QA9hvAbhIQAlhiAHgaQAahmgPhcIgRhwQAGgDANArQALAgAGAcQAKAqgBAoQgCAwgQBTQgXB3g/B8QgUApguBGQg4BUgRAdQhCBzhHCHQglBIgtCQQgpCHAHgBIgTAnQgBADgDAAIgBAAg");
	this.shape_33.setTransform(222.5048,415.6466);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#81353E").p("AkKJPQgOgOgRgXQgjgugPgvQgQgvANg+QASg/AFgVQAEgOBMhlQBHhfgDgeIAkAvQAlA6AGA4QAIgCgBgZQgDgzgyh2QAjgiAng7QBMh2ATh9IAoAbIgYhKQAAgiAIgsQAQhXAqgwIAPACQATAEAVAMQBBAlA3BlQA4BmAHBXQADAsgHAXIgJAXQgTAagzATQg3AUgZAAIA6AGIAvgIQAygKATgMIgbB+QglCLgxBGIgXAbQgaAegUAHQgXAJgbAIQg1AQgQgEIAoAPQAyALA3gTIgmAwQgtA2ggAfQguAqhlA5QhxA/g2ABg");
	this.shape_34.setTransform(230.8598,396.8898);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D23887").s().p("AkIJOQgOgNgSgXQgigugQgvQgPgvAMg+IAYhUQADgOBMhmQBIhegDgeIAjAvQAlA6AGA4QAJgCgCgaQgDgzgyh1QAjgiAng8QBNh2ASh8IAoAaIgYhJQAAgiAIgsQARhYAqgvIAPACQATADAUAMQBBAmA4BlQA3BmAHBXQAEArgIAYIgIAXQgTAZg0AUQg3AUgYAAIA6AGIAugIQAygLAUgLIgbB+QglCLgyBGIgWAbQgbAdgTAIQgXAIgbAJQg1AQgRgEIAoAPQAzAKA3gSIgnAvQgtA3ggAeQgtArhlA4QhyBAg2ABg");
	this.shape_35.setTransform(230.746,396.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#81353F").s().p("AnYJHQgDgCAAgDIAFgsQAbgoAlgzQBLhnA3g1QAdghArgpQBWhSBHgrQBOgwBshcQBghTAzg6QBEhNAQgXQA8hWAThcIAXhvQAGAAgCAsQgBAjgEAcQgGAqgPAlQgSAsgsBJQg/BmhnBfQgiAfhDAyQhSA6gbAWQhpBXhuBjQg8A3hcB3QhXBvAHACIgfAeIgDABIgDAAg");
	this.shape_36.setTransform(405.4985,478.3321);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#81353E").p("AmpHeQgIgRgIgcQgRg3ACgyQACgyAig1QAng1AMgRQAIgMBrhEQBkhAAIgdIARA4QAOBDgOA3QAJABAHgYQAPgxgFiAQAtgTA5gqQBxhUA9huIAcAnIADhNQAMggAXgmQAvhNA4gdIANAGQAQALAPASQAwA6AQByQARBzgYBUQgMAqgPAUQgDAJgNAJQgcARg2AAQgPAAgRgBQgjgCgOgGIA0AZIAuAJQAzAIAWgEQgcAygqA7QhTB2hHAwQgOAJgRAJQgjARgVAAQgZAAgbgBQg3gEgOgJIAfAcQAsAcA6ABQhaA4hAAcQg4AYh0ARQiBATgzgRg");
	this.shape_37.setTransform(418.1253,462.3396);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D23887").s().p("AmNH2IgcgYQgIgSgIgbQgRg4ACgxQACgyAig2IAzhGQAIgMBrhEQBkhAAIgcIARA3QAOBEgOA2QAJACAHgZQAPgxgFh/QAtgUA5gqQBxhTA9huIAcAnIADhOQAMggAXgmQAvhMA4geIANAHQAQAKAPASQAwA6AQBzQARBygYBVQgMAqgPATQgDAJgNAJQgcASg2AAIgggBQgjgDgOgGIA0AaIAuAJQAzAIAWgEQgcAxgqA7QhTB2hHAwQgOAJgRAJQgjASgVAAIg0gCQg3gDgOgKIAfAcQAsAcA6ABQhaA5hAAbQg4AZh0ARQhDAKguAAQgqAAgZgJg");
	this.shape_38.setTransform(418.1253,462.3695);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#81353F").s().p("AnYJHQgDgCAAgDIAFgsQAbgoAlgzQBLhnA3g1QAdghArgpQBWhSBHgrQBOgwBshcQBghTAzg6QBEhNAQgXQA8hWAThcIAXhvQAGAAgCAsQgBAjgEAcQgGAqgPAlQgSAsgsBJQg/BmhnBfQgiAghDAxQhUA8gZAUQhpBXhuBjQg8A3hcB3QhXBvAHACIgfAeIgDABIgDAAg");
	this.shape_39.setTransform(462.9985,497.4944);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#81353E").p("AmpHeQgIgRgIgcQgRg3ACgyQACgyAig1QAng1AMgRQAIgMBrhEQBkhAAIgdIARA4QAOBDgOA3QAJABAHgYQAPgxgFiAQAtgTA5gqQBxhUA9huIAcAnIADhNIAjhGQAvhNA4gdIANAGQAQALAPASQAwA6AQByQARBzgYBUQgMAqgPAUQgDAJgNAJQgcARg2AAQg6AAgXgJIA0AZIAuAJQAzAIAWgEQgcAygqA7QhTB2hHAwQgOAJgRAJQgjARgVAAQgZAAgbgBQg3gEgOgJIAfAcQAsAcA6ABQhaA4hAAcQg5AYhzARQiBATgzgRg");
	this.shape_40.setTransform(475.6253,481.4965);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D23887").s().p("AmNH3IgcgZQgIgSgIgbQgRg4ACgxQACgyAig2IAzhGQAIgMBrhEQBkhAAIgcIARA3QAOBEgOA2QAJACAHgZQAPgwgFiAQAtgUA5gqQBxhTA9huIAcAnIADhOIAjhGQAvhMA4geIANAHQAQAKAPASQAwA6AQBzQARBygYBVQgMAqgPATQgDAJgNAJQgcASg2AAQg6AAgXgJIA0AZIAuAJQAzAIAWgEQgcAxgqA7QhTB2hHAwQgOAJgRAJQgjASgVAAIg0gCQg3gDgOgKIAfAcQAsAcA6ACQhaA4hAAcQg5AYhzARQhEAKguAAQgqAAgYgIg");
	this.shape_41.setTransform(475.6253,481.5264);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3A241").s().p("AElKSQgggQgXgPQgkgYgbgcQgigjgvhHQhBhggtiIQgOgrgRhTQgUhigJghQgjiKgsiIQgYhNhGiGQhCh9gEAGIgPgpQgBgDADgDQADgCADABIAlAXIA5BhQA+BuAaBIIAlBhQAnBwAJBTQALBbAoCIQAiB6AgBGQApBdAPAZQA1BbBMA3IBcBDQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgIAAgfgPg");
	this.shape_42.setTransform(498.6875,353.8312);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B3A241").p("Ajao6IAwAEQA5AIAsAWQAtAXAiA1QASAdAYAuQAIANARB9QAQB2AYATQgZAAghgIQhCgPgsgkIAAAGQACAIAMALQAlAiB3AwIACAhQADApAJAsQAcCKBLBlIgvAKIBFAjIAxA9QAyBJAEBAQgOAQglAKQhIAThvggQhvghhCg5QgUgSgOgSIgKgOQgHgGgDgQQgFggAXgyIAPgdQAQgfALgKIguAkQgNARgOAWQgcAqgGAWQghgtglg/QhIh9gOhUQgDgQgBgUQgBgmAIgTIAYgvQAagxAOgJQgQADgWAPQgsAcgaA0QgNhpAChHQABg9AhhxQAkh8Algog");
	this.shape_43.setTransform(504.1422,370.5111);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFDE47").s().p("AB/InQhvghhCg5QgUgSgOgSIgKgOQgHgGgDgQQgFggAXgyIAPgdQAQgfALgKIguAkQgNARgOAWQgcAqgGAWQghgtglg/QhIh9gOhUQgDgQgBgUQgBgmAIgTIAYgvQAagxAOgJQgQADgWAPQgsAcgaA0QgNhpAChHQABg9AhhxQAkh8AlgoIAigPIAwAEQA5AIAsAWQAtAXAiA1QASAdAYAuQAIANARB9QAQB2AYATQgZAAghgIQhCgPgsgkIAAAGQACAIAMALQAlAiB3AwIACAhQADApAJAsQAcCKBLBlIgvAKIBFAjIAxA9QAyBJAEBAQgOAQglAKQgbAHghAAQg2AAhFgUg");
	this.shape_44.setTransform(504.1371,370.5156);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3A241").s().p("ApEHaQgDgCABgDIAOgqQAigiAvgrQBehVBBgpQAjgaAygfQBmg/BOgcQBWgfB8hEQBvg9A+gvQBSg+AUgTQBNhIAlhWIAthpQAGACgLAqQgIAjgKAaQgOApgWAgQgbAog6A+QhOBUh8BMQgnAYhNAhQhcAqgeAQQiBBEh4BGQhGAphzBiQhrBbAHAEIglAXIgDABIgDgCg");
	this.shape_45.setTransform(443.6332,562.9194);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B3A241").p("An4F0QgEgTgDgcQgEg5AMgxQAMgwAsguQAxgrAPgPQAKgKB3gtQBvgpAOgbIAEA6QAABEgZAzQAJADAMgWQAZgtAVh+IAggJQAogMAngTQCBg6BShgIAUAsIAShLQASgdAfggQA8hCA9gRIAMAJQAOANALAVQAjBCgHB0QgHBzgpBOQgUAmgTAQQgEAIgPAGQgeAMg2gLQg5gMgVgOIAuAlIArASQAwASAXAAIhaBcQhqBjhPAgQgPAGgTAGQgmAKgUgEQgYgFgagHQg2gPgMgMIAaAhQAlAlA4ANQhjAlhFAOQg9AMh0gHQiCgHgugcg");
	this.shape_46.setTransform(458.3798,550.7261);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFDE47").s().p("AkxG1QiCgIgugbIgXgeQgEgTgDgdQgEg5AMgwQAMgxAsgtIBAg6QAKgKB3gtQBvgpAOgcIAEA6QAABFgZAyQAJADAMgWQAZgtAVh+IAggJQAogMAngSQCBg7BShfIAUAsIAShLQASgdAfghQA8hBA9gSIAMAJQAOAOALAVQAjBCgHBzQgHB0gpBNQgUAmgTAQQgEAIgPAGQgeAMg2gLQg5gMgVgNIAuAkIArASQAwASAXABIhaBcQhqBjhPAgQgPAGgTAFQgmALgUgEQgYgFgagIQg2gPgMgMIAaAiQAlAkA4AOQhjAlhFANQgnAJg+AAQgiAAgqgDg");
	this.shape_47.setTransform(458.3798,550.7506);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B3A241").s().p("ArWC6QgBgDACgDIAeggIBqgjQB5gmBLgKIBmgRQB3gPBSAIQBbAJCOgLQB/gJBLgRQBggTAfgKQBkghBGg/IBUhMQAFADgbAjQgWAagUAVQgfAfghAVQgpAZhPAfQhvAsiLAQQguAFhUgBQhlgBghACQiDAGiaAPQhQAIiRAoQiIAnAEAFIgqAGQgEAAgCgDg");
	this.shape_48.setTransform(382.1563,378.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B3A241").p("AphAzQAEgTAKgbQAUg1AfgnQAfgnA7gXQAggMAzgOQANgEB/AJQB2AIAYgTIgUA3QgdA/gsAjQAHAHAUgQQAqgeBIhrIAhAGQAoAFAsABQCOABByg1IgBAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BkhFA2QgWARgVAKIgQAGQgHAGgQgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAUAKQg0AYhFAWQiJAuhUgEQgQgBgUgDQgngHgQgMQgUgOgWgSQgqgkgGgQIAKApQASAxAuAjQhqgIhFgQQg8gPhng3Qhzg9gegsg");
	this.shape_49.setTransform(400.184,381.3072);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFDE47").s().p("AklEIQg8gPhng3Qhzg9gegsIgIglQAEgTAKgbQAUg1AfgnQAfgnA7gXQAggMAzgOQANgEB/AJQB2AIAYgTIgUA3QgdA/gsAjQAHAHAUgQQAqgeBIhrIAhAGQAoAFAsABQCOABByg1IgBAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BkhFA2QgWARgVAKIgQAGQgHAGgQgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAUAKQg0AYhFAWQiJAuhUgEQgQgBgUgDQgngHgQgMQgUgOgWgSQgqgkgGgQIAKApQASAxAuAjQhqgIhFgQg");
	this.shape_50.setTransform(400.1887,381.2451);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3A241").s().p("AGLJaQgggKgcgMQgngRgfgYQgmgdg7g+QhQhVhDh/QgVgogchOQgkhggOgeQg0h1hGiMQglhJhah4QhVhxgDAGIgVgmQgCgDADgDQACgCAEAAIAoARIBHBWQBPBjAlBDIA0BZQA5BpAXBQQAZBYA8CBQA2BzArA/QA3BUATAYQBDBRBUAqIBlA0QAAACgFAAQgJAAgdgKg");
	this.shape_51.setTransform(384.2469,578.3631);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B3A241").p("AlLoNIAwgEQA5gCAwAPQAwAQAqAuQAXAaAfAqQAKALAkB5QAjByAaAPQgYAEgjgDQhDgEgxgcIABAGQADAHAOAJQArAcB8AcIAHAhQAKApAQAoQAyCEBaBYIgtARIBKAXIA6A0QA9BBAOA+QgMATgiAPQhEAfhzgPQhygOhLguQgXgOgRgQIgMgMQgIgFgFgPQgKgfAPg1QAPg4APgUIgnArIgVArQgVAvgCAWQgogogug4QhchvgbhSQgFgPgEgTQgIgnAFgUQAHgXAJgaQASg0ANgMIgkAYQgmAjgRA3QgfhlgJhGQgJg9APh1QAQiBAegsg");
	this.shape_52.setTransform(394.7088,593.7518);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFDE47").s().p("AC+INQhzgOhLguQgXgOgQgQIgMgMQgIgFgFgPQgKgfAOg1QAQg4APgUIgoArIgUArQgVAvgCAWQgpgogtg4QhchvgchSQgFgPgEgTQgIgnAGgUQAGgXAJgaQASg0ANgMIgjAYQgnAjgRA3QgehlgKhGQgIg9AOh1QAQiBAegsIAggUIAwgEQA5gCAvAPQAwAQArAuQAXAaAfAqQAJALAkB5QAjByAbAPQgZAEgigDQhEgEgxgcIABAGQAEAHANAJQArAcB9AcIAGAhQAKApAQAoQAyCEBaBYIgtARIBKAXIA7A0QA9BBANA+QgLATgiAPQgvAVhDAAQghAAgkgFg");
	this.shape_53.setTransform(394.6929,593.7518);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3A241").s().p("AmMJ/QgEgBAAgEIgBgrQAVgsAfg3QA9hwAvg7QAZgkAlgvQBMhdBAgzQBIg6BehpQBVheArhBQA4hTAOgbQAxhdAHheIAIhxQAGgBAEAsQADAiAAAdQgBArgKAmQgMAvgiBNQgwBshbBuQgdAjg9A6QhKBFgXAYQhZBfhlB2Qg1A+hMCBQhHB6AIABIgbAiQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_54.setTransform(265.675,607.789);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#B3A241").p("AlxIQQgKgQgMgaQgXg1gFgxQgEgyAag5QAgg5AKgTQAGgNBihSQBbhMAEgeIAXA2QAXBBgHA4QAJAAAEgZQAJgzgWh+QAqgZAzgxQBmhhAuh1IAhAjIgHhOQAIghASgpQAjhRA0glIAOAFQASAIARAQQA3A0AfBvQAfBvgNBXQgGAsgNAVIgNATQgZAVg2AHQg6AIgYgGIA3ATIAvADQA0ABAVgGIg3BzQhDCAhBA5IgcAWQggAWgVACQhjAOgYgMIAkAXQAvAWA6gGIgxAmQg4ArgmAWQg1AghwAgQh9Ajg1gLg");
	this.shape_55.setTransform(276.7094,590.3922);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EFDE47").s().p("AlSIlIgfgVQgKgQgMgbQgXg0gFgyQgEgyAag5QAgg5AKgTQAGgNBihRQBbhMAEgeIAXA1QAXBBgHA4QAJAAAEgZQAJgygWh+QAqgaAzgwQBmhiAuh1IAhAjIgHhNQAIgiASgoQAjhSA0gkIAOAFQASAIARAQQA3AzAfBvQAfBwgNBXQgGArgNAVIgNAUQgZAVg2AHQg6AHgYgGIA3AUIAvACQA0ACAVgHIg3B0QhDCAhBA4IgcAWQggAWgVADQhjANgYgMIAkAYQAvAWA6gGIgxAmQg4ArgmAWQg1AfhwAgQhgAbg2AAQgQAAgMgCg");
	this.shape_56.setTransform(276.7094,590.4212);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3A241").s().p("ArWC6QgBgDACgDIAeggIBqgjQB5gmBMgKIBmgRQB2gPBTAIQBbAJCNgLQB/gJBLgRQBggTAfgKQBkghBGg/IBUhMQAGAEgcAiQgXAcgTATQgfAfghAVQgpAZhPAfQhuAsiMAQQguAFhUgBQhlgBghACQiDAGiaAPQhQAIiRAoQiIAnAFAFIgrAGQgEAAgCgDg");
	this.shape_57.setTransform(192.513,510.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#B3A241").p("AphAzQADgTAKgbQAUg1AfgnQAggnA7gXQAggMAygNQAOgFB+AJQB3AIAYgTIgVA3QgdA/grAjQAGAHAVgQQApgeBIhrIAhAGQApAFAsABQCNABByg1IAAAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BlhGA1QgiAbgYAGQgHAGgRgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAVAKQg0AYhFAWQiJAuhVgEQgQgBgTgDQgngHgQgMQgUgOgWgSQgqgkgGgQIAJApQATAxAuAjQhqgIhFgQQg8gPhng3Qhzg9gegsg");
	this.shape_58.setTransform(210.5586,513.4572);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EFDE47").s().p("AklEIQg8gPhng3Qhzg9gegsIgIglQADgTAKgbQAUg1AfgnQAggnA7gXQAggMAygNQAOgFB+AJQB3AIAYgTIgVA3QgdA/grAjQAGAHAVgQQApgeBIhrIAhAGQApAFAsABQCNABByg1IAAAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BlhGA1QgiAbgYAGQgHAGgRgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAVAKQg0AYhFAWQiJAuhVgEQgQgBgTgDQgngHgQgMQgUgOgWgSQgqgkgGgQIAJApQATAxAuAjQhqgIhFgQg");
	this.shape_59.setTransform(210.5636,513.3951);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3A241").s().p("ArVC6QgCgDACgDIAeggQAugRA8gSQB5gmBMgKIBmgRQB2gPBSAIQBbAJCOgLQB/gJBLgRQBmgVAZgIQBkgiBGg+IBUhMQAFADgbAjQgWAagUAVQgfAfghAUQgpAahPAeQhuAtiMAQQguAFhUgBQhlgBghACQiDAGiaAPQhQAIiRAoQiHAnAEAFIgrAGQgEAAgBgDg");
	this.shape_60.setTransform(72.6813,562.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#B3A241").p("AphAzQADgTAKgbQAUg1AfgnQAggnA7gXQAggMAygOQAOgEB+AJQB3AIAYgTIgVA3QgdA/grAjQAGAGAVgPQApgeBIhrIAhAGQApAFAsABQCNAAByg0IAAAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BkhGA2QgiAbgYAGQgIAGgQgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAUAKQgzAYhFAWQiJAuhVgEQgQgBgTgDQgngHgRgMQgUgOgVgSQgrgkgFgQIAJApQATAxAuAjQhqgIhFgQQg8gPhng3Qhzg9gfgsg");
	this.shape_61.setTransform(90.7089,565.5072);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EFDE47").s().p("AklEIQg8gPhng3Qhzg9gfgsIgHglQADgTAKgbQAUg1AfgnQAggnA7gXQAggMAygOQAOgEB+AJQB3AIAYgTIgVA3QgdA/grAjQAGAGAVgPQApgeBIhrIAhAGQApAFAsABQCNAAByg0IAAAwIAxg8IBGgkQBSghA/AJIAHAOQAHASABAXQAEBLg3BmQg3BkhGA2QgiAbgYAGQgIAGgQgBQgggCgsggQgvgjgNgVIAaA0IAgAjQAkAkAUAKQgzAYhFAWQiJAuhVgEQgQgBgTgDQgngHgRgMQgUgOgVgSQgrgkgFgQIAJApQATAxAuAjQhqgIhFgQg");
	this.shape_62.setTransform(90.7136,565.4451);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#368084").s().p("AnYJHQgDgCAAgDIAFgsQAbgoAlgzQBLhnA3g1QAdghArgpQBWhSBHgrQBPgwBrhcQBhhTAyg6QBEhNAQgXQA8hWAThcIAXhvQAGAAgCAsQgBAjgEAcQgGArgPAkQgSAsgsBJQg9BkhpBiQgiAfhDAxQhTA7gaAVQhdBNh6BtQg8A3hcB3QhXBvAHACIgfAeIgDABIgDAAg");
	this.shape_63.setTransform(360.3985,468.4944);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#358084").p("AmpHeQgIgRgIgcQgRg3ACgyQACgyAig1QAng1AMgRQAIgMBrhEQBkhAAIgdIARA4QAOBEgOA2QAJACAHgZQAPgxgFiAQAtgTA5gqQBxhUA9htIAcAmIADhNQAMggAXgmQAvhNA4gdIANAGQAQALAPASQAwA6AQByQARBzgYBUQgMAqgPAUIgQASQgcARg2AAQg6AAgXgJIA0AaIAuAIQAzAIAWgEIhGBtQhTB2hHAwQgOAJgRAJQgjASgVAAQgZAAgbgCQg3gEgOgJIAfAcQAsAcA6ABQhaA5hAAbQg5AYhzARQiBATgzgRg");
	this.shape_64.setTransform(373.0253,452.4965);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#34C1D3").s().p("AmNH3IgcgZQgIgSgIgbQgRg3ACgyQACgyAig2IAzhGQAIgMBrhEQBkhAAIgcIARA3QAOBEgOA3QAJABAHgYQAPgxgFiAQAtgUA5gqQBxhTA9huIAcAnIADhOQAMggAXgmQAvhMA4geIANAHQAQAKAPASQAwA6AQBzQARBygYBVQgMAqgPATIgQASQgcASg2AAQg6AAgXgJIA0AZIAuAJQAzAIAWgEIhGBsQhTB2hHAwQgOAJgRAJQgjASgVAAQgZAAgbgCQg3gDgOgKIAfAcQAsAcA6ACQhaA4hAAcQg5AYhzARQhEAKguAAQgqAAgYgIg");
	this.shape_65.setTransform(373.0253,452.5264);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#368084").s().p("ApbGIQALghALgaQARgoAYgfQAegmA+g6QBXhRB+hBQAogUBPgdQBggkAdgNQB4g0CKhFQBJgkB5haQBxhUgGgEIAmgVQADgBADACQACADgBADIgQApIhWBHQhkBOhDAlIhZAzQhqA5hQAWQhYAYiBA8QhyA2hBAqQhWA5gVARQhSBDgrBTIg0BmQgGgCAOgqg");
	this.shape_66.setTransform(172.9743,590.8469);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#358084").p("AIQlIIADAwQABA5gPAwQgQAwguAqQgaAXgqAfQgLAJh6AkQhxAigQAbQgDgZACgiQAFhEAcgxIgFABQgIAEgJANQgbArgeB8QgwAHhCAZQiEAyhYBZIgRgsIgYBJIg0A6QhBA9g+AOQgTgMgPgiQgfhFAQhyQAPhzAthKQAOgXAQgRIANgMIAUgNQAfgJA1AOIAeAKQAhAMANAJIgsgoQgSgKgYgKQgugWgXgCQAogoA4guQBxhbBRgbIAigJQAngIAUAGIAxAQQA0ASALANQgGgQgRgUQgjgmg2gRIA6gRQBFgRArgGQA+gIB0APQCBAQAsAfg");
	this.shape_67.setTransform(157.5697,601.1986);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#34C1D3").s().p("An+FzQgfhFAQhyQAPhzAthKQAOgXAQgRIANgMIAUgNQAfgJA1AOIAeAKQAhAMANAJIgsgoQgSgKgYgKQgugWgXgCQAogoA4guQBxhbBRgbIAigJQAngIAUAGIAxAQQA0ASALANQgGgQgRgUQgjgmg2gRIA6gRQBFgRArgGQA+gIB0APQCBAQAsAfIAVAfIADAwQABA5gPAwQgQAwguAqQgaAXgqAfQgLAJh6AkQhxAigQAbQgDgZACgiQAFhEAcgxIgFABQgIAEgJANQgbArgeB8QgwAHhCAZQiEAyhYBZIgRgsIgYBJIg0A6QhBA9g+AOQgTgMgPgig");
	this.shape_68.setTransform(157.5697,601.1828);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#368084").s().p("AnYJHQgDgCAAgEIAFgrQAbgoAlg0QBLhmA3g1QAdghArgpQBWhSBHgrQBOgwBshcQBghTAzg6QBDhNARgXQA8hWAThcIAXhwQAGAAgCAtQgBAjgEAcQgGAqgPAlQgSAsgsBJQg/BmhnBfQgiAfhDAyQhSA6gbAWQhpBXhuBjQg8A3hcB3QhXBvAHACIgfAeIgDACIgDgBg");
	this.shape_69.setTransform(220.8485,594.7694);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#358084").p("AmpHeQgIgRgIgcQgRg3ACgyQACgyAig1QAng1AMgRQAJgNBqhEQBkg/AIgdIARA4QAOBDgOA3QAJABAHgYQAPgxgFiAQAtgTA5gqQBxhUA9huIAcAnIADhNQAMggAXgmQAvhNA4gdIANAGQAQALAPASQAwA6AQByQARBzgYBUQgMAqgPAUIgQARQgcASg2AAQg7AAgWgJIA0AZIAuAJQAzAIAWgEIhGBsQhTB2hHAwQgOAJgRAJQgjASgVAAQgZAAgbgBQg3gEgOgJIAfAcQAsAcA6ABQhaA4hAAcQg4AYh0ARQiBATgzgRg");
	this.shape_70.setTransform(233.4753,578.7896);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#34C1D3").s().p("AmNH2IgcgYQgIgSgIgbQgRg4ACgxQACgyAig2IAzhGQAJgMBqhEQBkhAAIgcIARA3QAOBEgOA2QAJACAHgZQAPgxgFh/QAtgUA5gqQBxhTA9huIAcAmIADhNQAMggAXgmQAvhMA4geIANAHQAQAKAPASQAwA6AQBzQARBygYBVQgMAqgPATIgQASQgcARg2AAQg7AAgWgJIA0AaIAuAIQAzAIAWgEIhGBtQhTB2hHAwQgOAJgRAJQgjASgVAAIg0gCQg3gDgOgKIAfAcQAsAcA6ABQhaA5hAAbQg4AZh0ARQhDAKguAAQgqAAgZgJg");
	this.shape_71.setTransform(233.4753,578.8195);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#368084").s().p("AgzLKQgSgdgNgbQgTgmgJgnQgKgugEhVQgGh4AgiJQAKgtAchOQAihfAKghQAjh7AmiYQAThPAJiWQAJiNgHACIAIgqQABgEAEAAQAEgBACADIAUAnIgBBwQgFB/gPBLIgSBlQgZB1giBLQgmBUglCJQggB6gKBNQgMBmgBAcQgBBpAkBXIAsBpIgBAAQgGAAgVgig");
	this.shape_72.setTransform(360.0591,201.5614);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#358084").p("ACVpuIAnAcQAsAkAbAqQAaArADA/QABAjgEA0QAAAPgyB0QgvBtAKAdQgVgOgZgYQgxgwgTg1IgDAFQgCAIAEAQQAPAxBNBnIgQAcQgTAlgPAqQgvCFAMB9IgtgQIAoBCIALBOQAFBZgeA4QgUAGglgKQhHgVhOhVQhOhWgbhTQgJgagDgXIgBgRQgDgJAHgPQAMgeAtgfIAcgRQAegRAPgEIg6AIQhQAfgaAZQgFg4ABhIQADiQAghQIAPggQATgiARgMIAsgcQAwgcARgBQgQgFgaABQg0ABgxAgQALgZAPgfQAfhAAYglQAig1BVhPQBfhYA0gOg");
	this.shape_73.setTransform(355.7767,220.7452);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#34C1D3").s().p("AAOJuQhHgVhOhVQhOhWgbhTQgJgagDgXIgBgRQgDgJAHgPQAMgeAtgfIAcgRQAegRAPgEIg6AIQhQAfgaAZQgFg4ABhIQADiQAghQIAPggQATgiARgMIAsgcQAwgcARgBQgQgFgaABQg0ABgxAgQALgZAPgfQAfhAAYglQAig1BVhPQBfhYA0gOIAlAFIAnAcQAsAkAbAqQAaArADA/QABAjgEA0QAAAPgyB0QgvBtAKAdQgVgOgZgYQgxgwgTg1IgDAFQgCAIAEAQQAPAxBNBnIgQAcQgTAlgPAqQgvCFAMB9IgtgQIAoBCIALBOQAFBZgeA4QgIACgKAAQgQAAgXgGg");
	this.shape_74.setTransform(355.7767,220.7493);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#368084").s().p("AnYJHQgDgCAAgEIAFgrQAagoAmg0QBLhmA3g1QAdghArgpQBWhSBHgrQBOgwBshcQBfhSA0g7QBDhNARgXQA8hWAThcIAXhwQAGAAgCAtQgBAjgEAbQgGArgPAlQgSAsgtBJQg9BlhoBgQgiAfhDAyQhSA6gbAWQhkBShzBoQg8A3hdB3QhWBvAHACIgfAeIgEACIgCgBg");
	this.shape_75.setTransform(343.1485,312.1531);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#358084").p("AmpHeQgJgSgIgbQgQg3ACgyQACgyAig2QAng0AMgRQAIgNBrhEQBkg/AIgdIARA4QAOBDgOA3QAIABAIgYQAPgxgFiAIAdgPQAlgUAkgaQBxhUA9huIAcAnIADhNIAjhGQAuhNA4gdIAOAGQAQALAPASQAwA6AQByQARBzgYBUQgMAqgPATQgDAJgNAJQgcASg2AAQg7AAgWgJIA0AZIAuAJQAzAIAWgEQgcAxgqA7QhTB2hHAwQgOAJgRAJQgjASgVAAQgZAAgbgBQg3gEgOgJIAfAbQAsAcA6ACQhaA4hAAcQg5AYhzARQiBATgzgRg");
	this.shape_76.setTransform(355.775,296.1896);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#34C1D3").s().p("AmNH2IgcgZQgJgRgIgcQgQg3ACgxQACgzAig1QAng0AMgSQAIgMBrhEQBkhAAIgcIARA3QAOBEgOA2QAIACAIgZQAPgxgFh/IAdgPQAlgVAkgaQBxhTA9huIAcAmIADhNIAjhGQAuhMA4geIAOAHQAQAKAPASQAwA6AQBzQARBygYBUQgMArgPATQgDAJgNAJQgcARg2AAQg7AAgWgJIA0AaIAuAIQAzAIAWgEQgcAygqA7QhTB2hHAwQgOAJgRAJQgjASgVAAIg0gCQg3gDgOgKIAfAcQAsAcA6ABQhaA5hAAbQg5AYhzASQhDAKguAAQgrAAgYgJg");
	this.shape_77.setTransform(355.775,296.2195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,573.8,672.1999999999999);


(lib.mc_passaro_rosa_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81353F").s().p("AkeFlICSl3IECmeICpCEIlTLcg");
	this.shape.setTransform(-680.625,-136.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81353F").s().p("AA5FQQkHghhggvIG6pnICjBjIAAJrQhxgHiFgQg");
	this.shape_1.setTransform(-638.575,-117.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352C2C").s().p("AidCeIgnkYIGJgjIjFC0ICrCHg");
	this.shape_2.setTransform(-248.35,-140.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	this.shape_3.setTransform(-320.725,-152.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353636").s().p("AhCBDQgcgbAAgoQAAgnAcgbQAcgcAmAAQAnAAAcAcQAcAbAAAnQAAAogcAbQgcAcgnAAQgmAAgcgcg");
	this.shape_4.setTransform(-322.375,-150.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81353F").s().p("AFTG/Qh9g/hlivIgBAoQgDAvgHAoQgYCAhAAAQhKABiWiWQiUiVgRhZQgXA6ghA1QhBBogvgfQg6gnhviqQhyitgUhaQgbAygjAyQhFBkglAAQgbgBgpgTQgzgZgtgsQh+h6ghjfIAtAoQA4AtA7AUQC8A/CPjLIAzBbQA/BoA5BCQC0DQAvkDIA3BJQBEBSBAAsQDOCLBgkgIBEBGQBUBOBJAsQDpCKApkFIBPA2QBfA/BKAmQDwB8gtibQgticgDhpQgBghADgXIADgSICwDeQC0DjAQAmQAuBvglA3QhEBjlJh+IjthsIgFAtQgIA3gNAwQgqCXhLASQgiAIgiAAQhGAAhDgig");
	this.shape_5.setTransform(-397.1879,78.4279);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81353F").s().p("ALVDCQjDglhXg5QgzAmhGAXQiKAthZhQQgqAVg9ASQh8AkhjgLQhSgKhNg8QhHg4gbhAQhFAnhWATQisAnhXhhIAAhnIApAPQAxAOAuACQCSAHA1h7IAagZQAegQAQApQARAqBLBNQBeBeBVAcQBJAXBKgmQBFgkAshJIAFgFQAGgFAIADQAZAJAcBPQAQAuAzANQAsAMA6gOQA1gNAogcQAogcAAgdIATgHQAZACAdAsQAdAtCfAPQBPAIBKgBIBPCPQhRgGhhgSg");
	this.shape_6.setTransform(-447.475,-41.8367);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#81353E").p("AwUyBQgZAggkA6QhIB0g6CBQi4GeAhGKQAUDsA8DZQA9DbBRB+QBYCIBYgKQBjgLBTjAIAyB6QA9CNA9BYQDAEaBrlYIBOBwQBdB/BNBHQBrBjA8gbQBKgigEjmIBEBlQBUBwBOA1QD5CrBjncICUBHQCsBMB5AdQCoAoAqg+QA0hOiYjqQiOjbkDkxQgmgtmxnrQkdlDiWjKQjRkXhVjSQicmCkrCbQhdAwhgBgg");
	this.shape_7.setTransform(-401.2115,-13.8849);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D23887").s().p("AF8VoQhOg1hUhwIhEhlQAEDmhKAiQg8AbhrhjQhNhHhdh/IhOhwQhrFYjAkaQg9hYg9iNIgyh6QhTDAhjALQhYAKhYiIQhRh+g9jbQg8jZgUjsQghmKC4meQA6iBBIh0QAkg6AZggIBOhXQBghgBdgwQEribCcGCQBVDSDREXQCWDKEdFDQGxHrAmAtQEDExCODbQCYDqg0BOQgqA+iogoQh5gdishMIiUhHQhJFeiaAAQg4AAhBgtg");
	this.shape_8.setTransform(-401.2115,-13.8849);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4EDCF").s().p("AlXMzQm5g8lNjIQkNiji7j2IFSiWIB7AYQCZAZCbAIQHyAaFIieQFgiqBUjSQAihVgChqQgBg+gUiBIBXAWQBwAbB9AUQGRBDF8gMQgHCCgUBEQgnCUhfC+QiLEVjCDUQj+EWk+CFQkVBzk8AAQh+AAiEgTg");
	this.shape_9.setTransform(-416.75,-36.0479);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#81353E").p("AxPnaIZ1jSQhLhFgthMQhYiXCcghQgxgagug4QhchvAQiUITTAAQENAACtCxQCRCVBFEFQA4DRAAD2QABDKgfBwQgnCUhfC+QiMEWjBDUQj+EWk+CFQmDCgnRhAQtEhzmnpSQiFi6hLjTQgXhCgPg9IgKgvQj7gZkJgmQoRhPhBhKQAUhMAfhXQA+iuA6g5QA5g5BSioIBHicg");
	this.shape_10.setTransform(-481.9505,-87.8229);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D23887").s().p("AFhU5QtEhzmopSQiEi6hLjTQgYhCgPg9IgKgvQj7gZkIgmQoRhPhChKQAUhMAfhXQA/iuA5g5QA6g5BSioIBGicIMUHMIZ2jSQhMhFgshMQhZiXCcghQgxgagug4QhchvARiUITSAAQEOAACtCxQCQCVBGEFQA3DRABD2QAADKgeBwQgoCUhfC+QiLEWjCDUQj9EWk/CFQkVByk9AAQh9AAiEgSg");
	this.shape_11.setTransform(-481.9246,-87.8229);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#ACA273").p("A2jtpIghBoQglCDgTCMQg+HBCNFwQBVDeB2DAQB3DBByBjQB5BqBTgiQBbgmAbjQIBSBoQBiB2BTBEQEHDaAHlpIBqBWQB8BgBdAvQCEBBAygrQA+g1hEjcIBdBOQBwBUBZAeQEgBegmnlICiAbQC6AaB8gGQCtgJAXhHQAchZjTi2QjFislOjcQgyghoolfQlqjnjKiYQkWjSiMiyQkBlHj0DoQhMBIhCB3g");
	this.shape_12.setTransform(-357.2195,-13.9708);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4EDCF").s().p("AChTLQhdgvh8hgIhqhWQgHFpkHjaQhThEhih2IhShoQgbDQhbAmQhTAih5hqQhyhjh3jBQh2jAhVjeQiNlwA+nBQATiMAliDIAhhoIAzhpQBCh3BMhIQD0joEBFHQCMCyEWDSQDKCYFqDnQIoFfAyAhQFODcDFCsQDTC2gcBZQgXBHitAJQh8AGi6gaIiigbQAmHlkgheQhZgehwhUIhdhOQBEDcg+A1QgUARghAAQgxAAhQgng");
	this.shape_13.setTransform(-357.2195,-13.9708);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#ACA273").p("AiaqVIgMAZQglBSAPC3QAIBbAOBKQgmALgkAgQhGA+AQBkQARBkgHBcQgDAvgHAaQgJACgOAFQgbALgWAQQhHA1AEBfQABARAbBPQAXBDgLAiQCWAUCUgFQBKgDArgHQCqghB5hYQDyiwjykWQhwiAh5jEQhPh/ibkbg");
	this.shape_14.setTransform(-406.8696,8.9798);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BEB388").s().p("AmJKFQALgigXhDQgbhQgBgRQgEheBHg1QAWgRAbgLIAXgHQAHgaADguQAHhdgRhkQgQhkBGg+QAkgfAmgLQgOhLgIhbQgPi2AlhSIAMgZQCbEaBPB/QB5DEBwCAQDyEXjyCwQh5BYiqAgQgrAHhKADIhAABQh0AAh2gPg");
	this.shape_15.setTransform(-406.8696,8.8343);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#ACA273").p("AE0qdIABgBQgdg+gihWIAAAAQgXAggaApQgzBSgQAuQg6AQgfApQgSAZgXA+QgNAkAJA+QAEAkAVBWQgsAKgcAlQgZAggIAxQgFAcgLA9QgFA5AZA+QgyAngQARQgRARgmA4QgnA4AUBUQAFAUAKAhQAGAXgHAFQgkAagUAbQgMARgUAnQgZAxARBQQAKAsAWA+QA5AaAmAOQAMgZgChOQgBhPAOggQATgpAMgMQAOgMAsgRQgCgQgPghQgZgzgDgIQgghNAogzQAmgwAjgdQAggbAmgRQAAgQgWhTQgShCASg3QAXhEAogcQADgCA4gXQgQg1gFgmQgKhFAXg2QAehFAXgEQAIgCAOAFQAQAEAKgBQAjhBAWhQg");
	this.shape_16.setTransform(-467.2418,-19.7347);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BEB388").s().p("AkOMKQgWg/gJgrQgRhQAZgxQAUgoAMgQQAUgbAjgaQAIgGgGgWQgKghgFgUQgVhUAng5QAng3AQgSQAQgQAzgnQgZg+AEg5IAQhZQAIgxAZggQAdglAsgLQgVhVgFgkQgIg+AMgkQAXg+ASgZQAfgqA7gQQAPgtA0hSQAagpAWggIABAAQAiBWAcA9IAAABIgPBDQgWBPgjBCQgKABgQgFQgPgEgHABQgYAFgdBEQgYA3AKBFQAGAlAPA2Qg3AXgEACQgoAcgWBDQgTA4ASBCQAXBTgBAQQgmARgfAbQgjAdgnAwQgoAyAgBOIAcA7QAQAgABARQgrAQgOANQgNAMgSApQgPAfACBPQACBPgMAZQgngOg5gag");
	this.shape_17.setTransform(-467.269,-19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#81353E").p("ACHjlQgdl1CciMQAwgsA+gPQAegHAVABIBBgZQgwhvguhNQhUiMhagdQhRgagtBIQg1BTgLDGQgGBjAFBTQiYgqg6ATQgjALgdA9QgmBPAoCZQATBMAcA9QiOhLhBBUQgyA/AJBsQAHBdBGBhQAiAwAiAdQhJgOg0AgQgrAagKArQgsCtB2BlQA6AyBEAQQg1AKgmAgQg1AqgIBIQgIA/AeBBQAiBLBZBYQBEBDBMA7QhEiKBmjKQAgg/Aug/IAmgxQjAkbA2itQARg2AogkQATgSARgIQhKj9Byg+QA6gfBIATg");
	this.shape_18.setTransform(-513.9289,-80.9591);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D23887").s().p("AkbQpQhZhYgihLQgehBAIg/QAIhIA1gqQAmggA1gKQhEgQg6gyQh2hlAsitQAKgrArgaQA0ggBJAOQgigdgigwQhGhhgHhdQgJhsAyg/QBBhUCOBLQgcg9gThMQgoiZAmhPQAdg9AjgLQA6gTCYAqQgFhTAGhjQALjGA1hTQAthIBRAaQBaAdBUCMQAuBNAwBvIhBAZQgVgBgeAHQg+APgwAsQicCMAdF1QhIgTg6AfQhyA+BKD9QgRAIgTASQgoAkgRA2Qg2CtDAEbIgmAxQguA/ggA/QhmDKBECKQhMg7hEhDg");
	this.shape_19.setTransform(-514.0127,-81.5717);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ACA273").p("AJMVWQiFAVjBgQQmAgfkqi4QiFhRhIg1QhahChPhOQhZhYgihMQgehAAIg/QAIhIA1grQAmgfA1gKQhEgQg6gzQh2hlAsisQAKgsArgaQA0gfBJAOQgigdgigwQhGhggHheQgJhtAyg/QBBhTCOBLQgcg9gThNQgoiZAmhPQAdg8AjgLQA6gTCZApQgFhSAGhkQALjGA1hTQAthHBRAaQBaAcBUCMQA8BkA3CKQAkBZAvCJQAbBOA2ChQBnEoBoC8QC2FJBLB7QCEDYB3CKQDyEWjyCwQh5BYiqAhg");
	this.shape_20.setTransform(-462.9189,-62.8426);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4EDCF").s().p("AEGVbQmAgfkqi4QiFhRhIg1QhahChPhOQhZhYgihMQgehAAIg/QAIhIA1grQAmgfA1gKQhEgQg6gzQh2hlAsisQAKgsArgaQA0gfBJAOQgigdgigwQhGhggHheQgJhtAyg/QBBhTCOBLQgcg9gThNQgoiZAmhPQAdg8AjgLQA6gTCZApQgFhSAGhkQALjGA1hTQAthHBRAaQBaAcBUCMQA8BkA3CKQAkBZAvCJIBRDvQBnEoBoC8QC2FJBLB7QCEDYB3CKQDyEWjyCwQh5BYiqAhQhMAMhhAAQhHAAhSgHg");
	this.shape_21.setTransform(-462.9189,-62.8426);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#725435").ss(1,1,1).p("Ag4jgIkUFOICeAJQC2AGB+gPIAigTQApgVAhgIQBpgbgQBuQgNBRhSgBQgZgBgegIIgYgJ");
	this.shape_22.setTransform(-425.463,145.6506);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#81353F").s().p("AkeFlICSl2IECmfICpCEIlTLdg");
	this.shape_23.setTransform(-667.275,-41.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#352C2C").s().p("AidCdIgnkXIGJgjIjFC0ICrCGg");
	this.shape_24.setTransform(-235.05,-45.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgPAPgWAAQgUAAgQgPg");
	this.shape_25.setTransform(-307.425,-57.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353636").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape_26.setTransform(-309.075,-55.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4EDCF").s().p("AlWMzQm6g8lMjIQkOiii7j3IFSg3IB7AJQCZAICcgHQHxgWFIieQFgipBUjTQAihUgChqQgBg/gUiAIBXAWQBwAaB9AVQGQBCF9gMQgHB9gUBKQgnCUhfC9QiMEVjBDVQj+EWk+CEQkVByk7AAQh+AAiEgSg");
	this.shape_27.setTransform(-403.425,58.7872);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#81353E").p("AxPnaIZ1jTQhMhFgshLQhYiXCcghQgxgagug4QhchvAQiUITSAAQEOAACtCxQCQCVBGEFQA3DRABD2QAADKgeBwQgoCUhfC+QiLEWjCDUQj9EWk/CEQmCChnRhAQtEhzmnpSQiFi6hLjUQgXhCgPg8IgKgwQj7gYkJgnQoRhOhBhKQAUhMAfhXQA+iuA6g5QA5g6BSinIBHicg");
	this.shape_28.setTransform(-468.6255,7.0122);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D23887").s().p("AFhU5QtEhzmopSQiEi6hLjUQgXhCgQg8IgKgwQj7gYkIgnQoRhOhChKQAUhMAfhXQA/iuA5g5QA5g6BTinIBGicIMUHMIZ1jTQhLhFgshLQhZiXCcghQgxgagug4QhchvARiUITSAAQEOAACsCxQCRCVBFEFQA4DRAAD2QABDKgfBwQgnCUhfC+QiMEWjBDUQj+EWk+CEQkUBzk8AAQh/AAiEgSg");
	this.shape_29.setTransform(-468.5996,7.0122);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81353F").s().p("ABJJUQhcgLhvgxIhcgvQglgZg5gwQhyhghhh0QAfgSAdhAQAhhNALgNQA8hIBZAJQAsAEAhATIA4gvQBChAA3hVQA3hWBeACQAwABAjASIBgiKQBwiRBSgjIAagLQhLE5gbCUQgrDigECrQgIFTj7AAQgXAAgYgDg");
	this.shape_30.setTransform(-407.95,-44.5896);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#81353F").s().p("ArXFwQAZg9AXgmQAphHAzgTQAqgQATgEQAhgGAtAEQAIABAMgVIAYgxQAphLBDgPQBCgPAXgCQAXgCBAAGQAYg/AqgoQAZgWAtghQAngeApgHQAtgIApAWQAohLAWggQAkgzAhgSQA8gfAdgGQAzgJA2AbQAqgXBegaQAvgNAmgIIAAAAQgdBOgYBJIgBAAQgVARgjAWQhGAthGAYQgIgGgIgOQgJgNgGgEQgVgNhEAfQg1AZgnA5QgjA/gLASIg9gUQgxgHg9AjQgzAcgeA9QgnBMgMAMQgngNgrgCQgugCg8AKQg/AKgdBPQgWBXgRAXQgsgSgTABQgRAAgpARQghAOgzA7Qg0A8gaAKQgVgqgVg0g");
	this.shape_31.setTransform(-413,-104.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D86BA9").s().p("AupK1QgIiSAJhAQAKhPAqgkQA3gwBDAEQAxADAuAcQgng5gKhNQgSiaCUhhQAlgZAyAKQA7ALAsA7QgFgrAHg8QAOh2A6hKQBDhWBOgNQBpgSA2CXQAFgQAKgYQASgxAYgsQBKiMBRghQA+gZAiAQQA3AZBVCGIB7iGQCOiMBfgZQBRgWArBKQAvBSggCfQgIAlgiA+QgmBGgKAdQAIg2gMg4QgWhxhcgOQhhgOhDBTQgPATgiA2QgdAugTATIgtgrQgcgZgXgMQhDgihfAqQhUAlgZBNQgNAngJCRQgHhBgpgzQhQhmilBFQg1AWggBiQghBmAlA9QgjgJgsgDQhZgFgwAiQgmAbAHBoQAGBiAqB3Qg5gNhEgHQiIgNg2AhQg6AjgmBjIgSA4QgEAMgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_32.setTransform(-401.7115,-192.7485);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#81353E").p("AkHUBQhwhKiFiOQkIkbhglRQgriWgShXQgWhtgFhuQgHh9AahPQAVhDAxgqQA3gwBDAEQAxADAuAcQgng5gKhNQgSiaCUhiQAlgYAyAJQA7ALAsA8QgFgsAHg8QAOh2A6hKQBDhWBOgNQBpgSA2CXQAEgQAKgYQAUgxAXgsQBKiMBQghQA/gZAhAQQA4AZBVCGIB7iGQCOiMBfgZQBRgWArBKQAvBSggCfQgYBygzCMQghBbg6CEQghBMhECbQh7EggyDRQhZF1gaCHQgwD4gFC2QgIFxkqghQhcgLhvgxg");
	this.shape_33.setTransform(-403.4017,-123.4166);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D23887").s().p("AAgVsQhcgLhvgxIhcgvQhwhKiFiOQkIkbhglRQgriWgShXQgWhtgFhuQgHh9AahPQAVhDAxgqQA3gwBDAEQAxADAuAcQgng5gKhNQgSiaCUhiQAlgYAyAJQA7ALAsA8QgFgsAHg8QAOh2A6hKQBDhWBOgNQBpgSA2CXQAEgQAKgYQAUgxAXgsQBKiMBQghQA/gZAhAQQA4AZBVCGIB7iGQCOiMBfgZQBRgWArBKQAvBSggCfQgYBygzCMQghBbg6CEIhlDnQh7EggyDRQhZF1gaCHQgwD4gFC2QgIFSj7AAQgXAAgYgCg");
	this.shape_34.setTransform(-403.4017,-123.4166);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#725435").ss(1,1,1).p("Ag4jgIkUFOICeAJQC2AGB+gPIAigTQApgVAhgIQBpgagQBtQgNBRhSgBQgZgBgegIIgYgJ");
	this.shape_35.setTransform(-417.013,142.5264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-638.575,y:-117.65}},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1,p:{x:-625.225,y:-22.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-638.575,y:-117.65}},{t:this.shape}]},3).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1,p:{x:-625.225,y:-22.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-638.575,y:-117.65}},{t:this.shape}]},3).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1,p:{x:-625.225,y:-22.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.mc_passaro_azul_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#368084").s().p("AkOFSICKliIDzmJICgB9IlAK1g");
	this.shape.setTransform(-212.875,-12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#368084").s().p("AA2E+Qj5gghagsIGipFICZBdIAAJKQhrgHh9gPg");
	this.shape_1.setTransform(-173.1,5.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352C2C").s().p("AiUCVIglkJIFzggIi6CqICiB/g");
	this.shape_2.setTransform(196.175,-16.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgOATAAQAVAAAOAOQAOAOAAAUQAAAUgOAPQgOAPgVAAQgTAAgPgPg");
	this.shape_3.setTransform(127.7,-27.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353636").s().p("Ag/BAQgagbAAglQAAgkAagaQAbgbAkAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_4.setTransform(126.125,-25.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#368084").s().p("AFBGnQh2g7hginIgBAmQgDAtgHAmQgWB5g8AAQhHABiNiOQiMiNgRhUQgWA3gfAxQg9BjgsgdQg4glhpihQhsikgThVQgZAwghAvQhBBfgjgBQgaAAgngTQgwgXgrgqQh3hzgfjTIAqAmQA2AqA3ATQCzA8CGjAIAxBWQA8BiA1A+QCrDFAtj0IAzBFQBABNA9ApQDDCEBakRIBBBCQBPBLBFApQDdCDAnj3IBLAzQBZA7BHAkQDjB2griSQgriUgDhjQgBgfADgXIAEgQICnDRQCpDXAPAkQAsBpgjA0QhBBdk3h2IjghnIgFArQgHA0gNAtQgnCPhHARQghAIghAAQhBAAg/ggg");
	this.shape_5.setTransform(55.3053,190.7028);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#368084").s().p("AKuC3Qi5gihSg3QgwAlhCAVQiDArhUhMQgoAUg5ARQh2AjhdgMQhOgJhJg5QhDg1gag8QhBAlhSASQijAlhRhcIAAhhIAmANQAvAOArACQCKAGAzh0IAZgXQAbgQAQAnQAQAoBHBJQBZBZBQAaQBFAWBGgkQBCgiAphFIAFgFQAGgFAHADQAYAJAbBLQAPArAwANQApALA3gNQAzgNAlgaQAmgbAAgbIASgHQAYACAbApQAbArCXAOQBLAIBGgCIBKCIQhMgGhcgRg");
	this.shape_6.setTransform(7.725,76.9025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#358084").p("AvcxDQgYAfgiA2QhEBug2B6QiuGHAfF1QASDgA5DNQA5DPBNB4QBTCABUgJQBdgLBPi1IAvB0QA6CFA5BTQC3ELBllGIBJBrQBYB4BJBDQDpDWgImMIBABfQBPBqBKAyQDsCiBdnCICMBDQCkBIByAbQCfAmAog7QAxhKiQjdQiGjPj1khQglgqmZnQQkOkyiOi/QjFkIhRjHQiTltkbCSQhYAuhcBbg");
	this.shape_7.setTransform(51.5392,103.3567);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C1D3").s().p("AFnUdQhKgyhPhqIhAhfQAIGMjpjWQhJhDhYh4IhJhrQhlFGi3kLQg5hTg6iFIgvh0QhPC1hdALQhUAJhTiAQhNh4g5jPQg5jNgSjgQgfl1CumHQA2h6BEhuQAig2AYgfIBJhSQBchbBYguQEbiSCTFtQBRDHDFEIQCOC/EOEyIG+H6QD1EhCGDPQCQDdgxBKQgoA7ifgmQhygbikhIIiMhDQhEFLiSAAQg0AAg/grg");
	this.shape_8.setTransform(51.5392,103.3567);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4EDCF").s().p("AlEMHQmig6k7i9Qj/iZixjqIFAg0IB0AJQCSAHCTgGQHWgVE3iVQFNihBPjHQAghQgChkQgBg7gSh6IBSAVQBqAZB2ATQF7A/FpgLQgIB6gSBCQglCMhaCzQiEEGi3DJQnGHyqDAAQh5AAiAgSg");
	this.shape_9.setTransform(36.825,82.4032);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#358084").p("AwUnBIYcjHQhHhBgqhHQhUiPCUggQgvgYgrg1QhXhqAPiMISQAAQD/AACkCoQCJCNBCD3QA0DFABDqQAAC+gdBrQglCMhaCzQiEEHi3DJQoaJPsphvQsXhtmRoyQh9iwhHjIQgWg+gPg6IgJgtQjugXj6gkQn0hLg+hGQAShHAehTQA7ikA2g3QA3g2BNifIBDiTg");
	this.shape_10.setTransform(-24.8749,33.4032);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37C1D3").s().p("AFOTxQsXhtmRoyQh+iwhHjIQgWg+gOg6IgKgtQjtgXj6gkQn1hLg+hGQAThHAdhTQA7ikA3g3QA2g2BOifIBDiTILpGzIYdjHQhIhBgphHQhUiPCTggQgugYgsg1QhXhqAQiMISQAAQD/AACkCoQCICNBCD3QA1DFAADqQABC+gdBrQgmCMhaCzQiEEHi3DJQnEHyqFAAQh5AAiAgSg");
	this.shape_11.setTransform(-24.8496,33.4032);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#ACA273").p("A1Vs6IggBhQgjB9gSCEQg6GpCFFcQBRDTBvC1QBxC3BrBdQBzBlBOghQBXgkAZjEIBOBiQBdBwBOBAQD5DOAGlVIBlBSQB1BaBYAsQEcCNh2l6IBZBKQBpBPBVAcQEQBagknLICZAaQCxAYB1gGQCkgIAVhEQAbhUjHisQi7iik8jRQgvgfoLlMQlXjai+iQQkHjHiFioQjzk2jnDbQhIBEg+Bxg");
	this.shape_12.setTransform(93.1524,103.3193);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4EDCF").s().p("ACYSIQhYgsh1haIhlhSQgGFVj5jOQhOhAhdhwIhOhiQgZDEhXAkQhOAhhzhlQhrhdhxi3Qhvi1hRjTQiFlcA6mpQASiEAjh9IAghhIAwhkQA+hxBIhEQDnjbDzE2QCFCoEHDHQC+CQFXDaQILFMAvAfQE8DRC7CiQDHCsgbBUQgVBEikAIQh1AGixgYIiZgaQAkHLkQhaQhVgchphPIhZhKQBWEUh/AAQgwAAhNgng");
	this.shape_13.setTransform(93.1524,103.3193);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#ACA273").p("AiSpxIgLAYQgjBNAOCtQAHBWAOBHQgkAKgiAeQhCA6APBgQAQBegHBXQgDAsgGAZQgIACgNAFQgaAKgVAPQhEAzAFBZQABAQAZBLQAVA/gKAhQCOATCNgGQBGgCApgHQCggeByhUQDlinjlkHQhph5hzi5QhJh3iVkNg");
	this.shape_14.setTransform(46.1359,124.9826);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BEB388").s().p("Al0JiQAKgggVg/QgZhMgBgPQgFhaBEgyQAVgQAagKIAVgHQAGgYADgsQAHhYgQhfQgPheBCg7QAigdAkgLQgOhGgHhXQgOisAjhOIALgYQCVEOBJB2QBzC6BpB4QDlEIjlCnQhyBTigAfQgpAGhGADIhAABQhtAAhugPg");
	this.shape_15.setTransform(46.1359,124.8367);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#ACA273").p("AEkp5IAAgBQgjhOgYg+IAAAAQgWAegYAnQgxBOgPArQg3APgdAoQgRAWgWA8QgMAiAIA6QAEAiAUBRQgqAKgaAjQgYAfgIAtQgEAbgLA6QgEA2AYA7QgwAlgQAQQgPAQgkA0QglA2ATBPQAFATAJAfQAGAWgHAFQgiAYgTAaQgLAPgTAmQgXAuAQBMQAJApAVA7QAwAWAqAQQALgYgChKQgBhLANgeQASgmAMgLQANgMApgQQgBgQgPgeQgYgygCgGQgfhKAmgvQAlgtAhgcQAegaAjgQQABgQgVhNQgSg/ASg0QAVhAAngaQACgCA1gWQgOgzgFgkQgKhBAWgzQAchBAWgEQAOgDAgAJQAhg+AVhLg");
	this.shape_16.setTransform(-10.9723,97.8155);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BEB388").s().p("Aj/LfQgVg6gJgpQgQhNAXgtQATgmALgPQATgaAigZQAHgEgGgXQgJgegFgTQgThQAlg1QAkg0APgRQAQgQAwglQgYg6AEg2IAPhVQAIgtAYgfQAagjAqgKQgUhRgEgiQgIg7AMghQAWg8ARgWQAdgoA3gPQAPgrAxhOQAYgnAWgeIAAAAQAYA+AjBNIAAABIgOA/QgVBMghA9QgggIgOADQgWAEgcBAQgWA0AKBBQAFAkAOAzQg1AWgCACQgnAagVBAQgSA0ASA/QAVBMgBARQgjAQgeAaQghAcglAtQgmAvAfBKIAaA3QAPAfABAQQgpAQgNAMQgMALgSAmQgNAeABBLQACBKgLAYQgqgQgwgXg");
	this.shape_17.setTransform(-10.9991,97.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#358084").p("AB/jZQgbliCUiEQBKhBBPAEIA9gXQgshmgthNQhPiEhVgbQhNgZgrBEQgyBOgKC8QgGBeAFBOQiQgng3ARQghALgcA5QgkBLAmCRQATBIAaA6QiGhHg+BPQgvA7AIBnQAHBYBBBbQAhAuAgAcQhFgOgxAeQgoAZgLApQgpCjBvBgQA4AwBAAPQgyAJgkAeQgyAogIBEQgHA8AcA9QAgBHBVBUQA9A9BLA6QhBiDBhi/QAeg8Arg7IAkgvQi1kMAzijQAQgzAlgiQATgRAQgHQhGjwBsg7QA2geBEATg");
	this.shape_18.setTransform(-55.1964,39.9344);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34C1D3").s().p("AkLPwQhVhUgghHQgcg9AHg8QAIhEAygoQAkgeAygJQhAgPg4gwQhvhgApijQALgpAogZQAxgeBFAOQgggcghguQhBhbgHhYQgIhnAvg7QA+hPCGBHQgag6gThIQgmiRAkhLQAcg5AhgLQA3gRCQAnQgFhOAGheQAKi8AyhOQArhEBNAZQBVAbBPCEQAtBNAsBmIg9AXQhPgEhKBBQiUCEAbFiQhEgTg2AeQhsA7BGDwQgQAHgTARQglAigQAzQgzCjC1EMIgkAvQgrA7geA8QhhC/BBCDQhLg6g9g9g");
	this.shape_19.setTransform(-55.278,39.3238);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ACA273").p("AItUMQh+AUi2gOQltgekaiuQh8hNhFgyQhVg+hLhKQhUhUghhHQgcg9AIg8QAIhEAxgoQAlgeAxgJQhAgPg3gwQhvhgApijQALgpAogZQAwgdBFANQgfgbghguQhChbgHhZQgIhnAvg7QA+hPCGBHQgag6gThIQgliRAkhLQAbg5AigLQA2gRCSAnQgFhOAFheQAKi8AyhOQArhEBNAZQBVAbBPCEQA5BfA0CCQAiBVAtCBQAZBKA0CYQBhEYBjCyQCxFABCBsQB9DNBwCBQDlEIjlCmQhyBUihAeg");
	this.shape_20.setTransform(-6.903,57.0285);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4EDCF").s().p("AD5USQltgekaiuQh8hNhFgyQhVg+hLhKQhUhUghhHQgcg9AIg8QAIhEAxgoQAlgeAxgJQhAgPg3gwQhvhgApijQALgpAogZQAwgdBFANQgfgbghguQhChbgHhZQgIhnAvg7QA+hPCGBHQgag6gThIQgliRAkhLQAbg5AigLQA2gRCSAnQgFhOAFheQAKi8AyhOQArhEBNAZQBVAbBPCEQA5BfA0CCQAiBVAtCBIBNDiQBhEYBjCyQCxFABCBsQB9DNBwCBQDlEIjlCmQhyBUihAeQhJAMhcAAQhDAAhMgGg");
	this.shape_21.setTransform(-6.903,57.0285);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#725435").ss(1,1,1).p("Ag1jUIkFE8ICVAJQCsAFB4gOIAggSQAngUAfgIQBjgYgPBnQgMBNhOgBQgYgBgcgIIgXgI");
	this.shape_22.setTransform(28.5549,254.3257);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#368084").s().p("AkOFRICKliIDzmIICgB9IlAK1g");
	this.shape_23.setTransform(-200.275,77.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#368084").s().p("AA2E9Qj5gfhbgrIGjpGICaBdIAAJKQhrgHh+gQg");
	this.shape_24.setTransform(-160.475,94.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#352C2C").s().p("AiVCVIglkIIF0ghIi6CqICiB/g");
	this.shape_25.setTransform(208.75,73.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAOAPAAATQAAAVgOAOQgOAOgVAAQgTAAgPgOg");
	this.shape_26.setTransform(140.25,61.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353636").s().p("Ag+BAQgbgbAAglQAAgkAbgaQAagbAkAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAQgkAAgagag");
	this.shape_27.setTransform(138.675,64.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4EDCF").s().p("AlEMHQmhg5k7i9Qj/iaixjpIE/g0IB0AIQCSAICTgHQHXgUE3iWQFMigBPjIQAhhPgChlQgBg7gUh6IBTAVQBqAZB2AUQF7A/FpgMQgHB1gSBHQgmCNhaCzQiEEGi3DJQnFHxqDAAQh6AAiAgSg");
	this.shape_28.setTransform(49.4,172.1282);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#358084").p("AwUnBIYdjHQhIhBgqhIQhUiPCUgfQgvgZgrg0QhXhqAPiMISQAAQD/AACkCoQCJCMBBD4QA1DFABDpQAAC/gdBrQgmCMhZCzQiEEHi4DJQoZJPsphvQsXhtmRoyQh9iwhHjIQgWg+gPg6IgJgtQjugXj6gkQn0hLg+hGQAShIAehSQA7ikA2g3QA3g2BNifIBDiTg");
	this.shape_29.setTransform(-12.2749,123.1532);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#37C1D3").s().p("AFOTxQsXhtmRoyQh+iwhHjIQgWg+gOg6IgKgtQjtgXj6gkQn1hLg+hGQAThIAdhSQA8ikA2g3QA2g2BOifIBDiTILpGzIYdjHQhHhBgqhIQhUiPCTgfQgugZgsg0QhXhqAQiMISPAAQD/AACkCoQCJCMBCD4QA0DFABDpQABC/gdBrQgmCMhaCzQiEEHi3DJQnEHyqFAAQh5AAiAgSg");
	this.shape_30.setTransform(-12.2496,123.1532);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#368084").s().p("ABFI0QhXgKhpgvIhXgsQgjgYg2gtQhrhbhdhtQAegRAbg9QAghJAKgMQA5hEBUAIQAqAEAeASIA1gsQA/g9A1hRQA0hQBZABQAsABAiAQIBaiCQBqiIBOgiIAZgKQhHEmgaCOQgpDVgDCiQgIFAjuAAQgVAAgXgCg");
	this.shape_31.setTransform(45.125,74.2804);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#368084").s().p("AqwFcQAYg5AVgkQAnhDAxgTQAmgPAUgEQAfgGAqAFQAIAAALgTIAXguQAnhJA/gNQA/gPAWgBQAWgBA8AFQAWg7AogmQAXgWAsgfQAlgcAmgHQArgIAmAWQAnhIAUgfQAigvAggRQA4gdAcgGQAwgJAzAaQAogWBYgZQAtgMAkgHIAAAAQgdBMgVBDIgBAAQgUAQghAVQhCAphCAYQgSgcgMgHQgTgMhAAdQgzAXglA3QghA7gLARIg4gTQgugGg7AgQgwAcgeA5QgkBHgLAMQgmgMgogCQgrgCg5AJQg8AKgbBKQgVBTgRAWQgpgRgSAAQgQAAgnARQgeANgxA5QgxA3gZALQgbg4gNgig");
	this.shape_32.setTransform(40.325,17.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8ED4DB").s().p("At3KQQgHiLAIg7QAKhMAnghQA0gtBAADQAuADAsAaQglg2gJhJQgSiRCNhcQAjgXAuAJQA5AKApA4QgEgpAGg4QAOhwA2hGQA/hRBLgNQBjgQAzCPIAOgnQASguAWgqQBFiEBNgfQA7gYAgAPQA0AYBRB+IB0h/QCGiDBagZQBNgVApBGQAtBOgfCXQgHAkggA6QglBDgJAaQAHgzgLg1QgVhrhXgNQhcgNg/BOQgOASggAzQgcArgSASIgrgoQgagYgWgLQg/gghaAoQhPAjgYBJQgMAlgJCIQgHg9gmgwQhMhhidBCQgxAVgeBdQgfBgAiA5QghgIgqgDQhUgEgtAfQgkAaAHBjQAGBcAnBxQg2gNhBgGQiAgMg0AfQg2AggkBfIgRA1QgEALgBAAIgBgEg");
	this.shape_33.setTransform(51.0439,-65.922);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#358084").p("Aj5S8QhqhGh9iGQj6kMhck+QgoiOgRhTQgVhngFhoQgGh3AYhKQAVhAAtgnQA0gtBAADQAuADAsAaQglg2gJhJQgSiRCNhdQAjgXAuAJQA5AKApA5QgEgqAGg4QAOhwA2hGQA/hRBLgNQBjgQAzCPQAEgPAJgYQATguAWgqQBFiEBNgfQA7gYAgAPQA0AYBRB+IB0h/QCGiDBagZQBNgVApBGQAtBOgfCXQgXBugwCCQgfBWg3B+QgfBHhACTQh1ERgvDFQhUFhgZCAQguDrgECsQgIFdkaggQhXgKhpgug");
	this.shape_34.setTransform(49.431,-0.3119);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#34C1D3").s().p("AAeUhQhXgKhpguIhXgtQhqhGh9iGQj6kMhck+QgoiOgRhTQgVhngFhoQgGh3AYhKQAVhAAtgnQA0gtBAADQAuADAsAaQglg2gJhJQgSiRCNhdQAjgXAuAJQA5AKApA5QgEgqAGg4QAOhwA2hGQA/hRBLgNQBjgQAzCPIANgnQATguAWgqQBFiEBNgfQA7gYAgAPQA0AYBRB+IB0h/QCGiDBagZQBNgVApBGQAtBOgfCXQgXBugwCCQgfBWg3B+IhfDaQh1ERgvDFQhUFhgZCAQguDrgECsQgIFAjtAAQgWAAgXgDg");
	this.shape_35.setTransform(49.431,-0.3119);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#725435").ss(1,1,1).p("Ag1jUIkFE8ICVAJQCsAFB4gOIAggSQAngUAfgIQBjgZgPBoQgMBNhOgBQgYgBgcgIIgXgI");
	this.shape_36.setTransform(36.5549,251.3506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.mc_passaro_amarelo_voo_passaro_amarelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// voo_passaro_amarelo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACA273").p("AieqlIgMAaQgmBUAQC7QAHBdAPBMQgnAMgkAgQhJBAARBnQARBmgHBeQgDAwgHAaQgJACgOAGQgcAKgXASQhJA2AFBhQABARAbBSQAYBEgMAjQCaAUCYgFQBMgDAsgHQCtghB8hbQD5i0j4kdQhziEh8jIQhSiEiekgg");
	this.shape.setTransform(83.5807,57.4284);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEB388").s().p("AmTKUQAMgjgYhEQgbhSgBgRQgFhgBJg3QAXgRAcgLQAOgFAJgCQAHgbADgvQAHhfgRhnQgRhmBJhAQAkggAngLQgPhNgHhdQgQi6AmhUIAMgaQCeEfBSCEQB8DJBzCDQD4Edj5C1Qh8BaitAhQgsAHhMADIhBABQh3AAh6gQg");
	this.shape_1.setTransform(83.5807,57.2832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#ACA273").p("AE8qtIAAgBQgehCgihVIAAAAQgXAggbAqQg1BUgQAvQg8ARgfAqQgTAZgXBAQgNAlAJA/QAEAlAWBYQguAKgcAmQgaAhgIAyQgFAdgLA+QgFA7AaA/Qg0AogRASQgQARgoA5QgoA6AVBVQAFAVAKAhQAGAYgHAFQglAbgUAcQgNARgUAoQgZAyARBTQAKAsAWBAQA3AZArAQQANgZgChRQgChRAPghQASgpAOgMQAOgNAsgRQgBgRgQghQgag2gDgGQgghQApgzQAngxAkgeQAggcAngSQABgRgXhUQgThDATg6QAXhFApgcQAEgDA4gXQgPg3gGgmQgKhHAYg4QAehGAYgEQAHgCAPAFQARAEAKgBQAkhDAXhRg");
	this.shape_2.setTransform(21.771,28.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEB388").s().p("AkUMcQgXg/gJgtQgShSAagyQAUgoAMgRQAVgcAkgbQAIgGgGgXQgKghgFgVQgVhWAog6QAng5ARgRQAQgSA0gnQgahAAFg6IAQhcQAIgxAagiQAdglAtgLQgVhXgFgmQgIg+AMglQAYhAASgZQAggrA8gQQAQgvA1hUQAagqAXghIABAAQAiBWAeBBIgBABIgPBEQgWBSglBDQgKABgQgFQgPgEgHABQgZAFgeBGQgYA4ALBGQAFAnAQA2Qg5AXgDADQgqAdgXBFQgTA5ATBEQAXBTgBASQgnASggAbQgkAegnAxQgpAzAhBQIAcA9QAQAhACARQgtAQgOANQgNANgTApQgPAhACBRQACBQgMAaQgsgRg2gZg");
	this.shape_3.setTransform(21.7439,27.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3A241").p("ACKjrQgdl+CgiPQAygsA+gQQAggHAVABIBCgaQgxhxgvhQQhWiPhcgdQhTgbgvBJQg2BVgLDLQgGBmAGBUQidgqg7ATQgkAMgeA+QgmBQAoCdQAVBOAcA/QiRhNhEBWQgyBAAIBvQAIBfBHBjQAkAyAiAeQhLgPg1AgQgsAcgLAsQgsCwB4BoQA8AzBFARQg2AKgnAgQg1AsgJBKQgIBAAeBCQAkBNBbBbQBGBGBNA6QhGiMBpjQQAhhBAug/IAngzQjEkiA3ixQASg3AoglQAUgTARgHQhLkEB0hAQA7ggBKAUg");
	this.shape_4.setTransform(-26.069,-34.6771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFDE47").s().p("AkhRDQhbhbgkhNQgehCAIhAQAJhKA1gsQAnggA2gKQhFgRg8gzQh4hoAsiwQALgsAsgcQA1ggBLAPQgigegkgyQhHhjgIhfQgIhvAyhAQBEhWCRBNQgcg/gVhOQgoidAmhQQAeg+AkgMQA7gTCdAqQgGhUAGhmQALjLA2hVQAvhJBTAbQBcAdBWCPQAvBQAxBxIhCAaQgVgBggAHQg+AQgyAsQigCPAdF+QhKgUg7AgQh0BABLEEQgRAHgUATQgoAlgSA3Qg3CxDEEiIgnAzQguA/ghBBQhpDQBGCMQhNg6hGhGg");
	this.shape_5.setTransform(-26.1519,-35.2779);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#ACA273").p("AJbV3QiJAVjFgQQmKggkxi8QiHhShLg3QhchDhRhRQhbhagjhNQgehCAHhBQAJhKA2grQAnggA2gLQhFgQg9g0Qh4hnAtixQALgsAsgbQA0ggBLAOQgigdgjgxQhIhjgHhgQgJhvAzhBQBDhVCRBMQgcg+gUhPQgpicAnhRQAdg+AlgMQA7gTCdArQgFhVAFhlQALjMA3hUQAuhJBUAaQBcAdBVCQQA8BkA6CPQAlBbAwCNQAbBQA4CkQBqEvBrDBQC8FTBLB8QCGDdB7CNQD4Edj5C0Qh8BbitAhg");
	this.shape_6.setTransform(26.1919,-16.1116);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4EDCF").s().p("AENV8QmKggkxi8QiHhShLg3QhchDhRhRQhbhagjhNQgehCAHhBQAJhKA2grQAnggA2gLQhFgQg9g0Qh4hnAtixQALgsAsgbQA0ggBLAOQgigdgjgxQhIhjgHhgQgJhvAzhBQBDhVCRBMQgcg+gUhPQgpicAnhRQAdg+AlgMQA7gTCdArQgFhVAFhlQALjMA3hUQAuhJBUAaQBcAdBVCQQA8BkA6CPQAlBbAwCNIBTD0QBqEvBrDBQC8FTBLB8QCGDdB7CNQD4Edj5C0Qh8BbitAhQhPAMhiAAQhJAAhUgHg");
	this.shape_7.setTransform(26.1919,-16.1116);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#725435").ss(1,1,1).p("Ag6jmIkaFWICiAKQC6AGCBgQIAjgTQAqgWAigIQBrgbgRBwQgMBThUgBQgbAAgegJIgZgJ");
	this.shape_8.setTransform(64.5661,197.4006);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3A241").s().p("AklFtICWl/IEHmoICuCHIlbLug");
	this.shape_9.setTransform(-183.075,5.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3A241").s().p("AA7FYQkOgjhigvIHFp1ICmBlIAAJ6Qh0gHiHgRg");
	this.shape_10.setTransform(-140.025,24.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#352C2C").s().p("AigCiIgpkfIGTgjIjKC3ICvCLg");
	this.shape_11.setTransform(259.575,1.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgVAPgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_12.setTransform(185.45,-10.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353636").s().p("AhEBFQgcgdAAgoQAAgnAcgdQAdgcAnAAQAoAAAcAcQAdAdAAAnQAAAogdAdQgcAcgoAAQgnAAgdgcg");
	this.shape_13.setTransform(183.75,-8.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4EDCF").s().p("AleNHQnFg+lUjNQkUimjAj9IFag4IB+AJQCdAICfgHQH+gWFQiiQFoiuBWjXQAjhXgChsQgChAgUiEIBZAXQBzAbCAAVQGaBEGGgNQgHCDgUBJQgpCYhhDCQiPEbjGDaQkEEdlGCHQkbB2lDAAQiBAAiHgTg");
	this.shape_14.setTransform(87.125,108.4577);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B3A241").p("AxqnmIadjXQhNhGguhOQhaiaCfgiQgygbgvg5QhehyARiYITvAAQEUAACyC2QCUCYBHEMQA5DWABD8QAADOgfB0QgpCXhhDCQiPEdjGDZQkEEdlGCHQmMClnbhCQtZh2mxpgQiIi+hNjZQgYhEgPg+IgLgwQkBgZkPgoQodhQhDhMQAUhNAghZQBAiyA7g7QA7g7BUisIBIifg");
	this.shape_15.setTransform(20.3744,55.4327);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFDE47").s().p("AFpVZQtYh2mxpgQiIi+hNjZQgYhEgPg+IgLgwQkBgZkPgoQoehQhDhMQAVhNAghZQBAiyA7g7QA6g7BUisIBIifIMnHWIadjXQhMhGguhOQhbiaCggiQgzgbgvg5QhehyARiYITwAAQEUAACxC2QCUCYBHEMQA5DWACD8QAADOggB0QgoCXhiDCQiOEdjHDZQkDEdlGCHQkbB2lEAAQiBAAiIgTg");
	this.shape_16.setTransform(20.4004,55.4327);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3A241").s().p("ABLJiQhfgLhxgyIhegwQgmgZg6gyQh1hihkh3QAhgSAchCQAjhPALgNQA+hKBaAJQAuAFAhATIA5gwQBEhBA5hYQA4hXBhABQAwABAlASIBhiNQBziUBVgkIAagLQhNFCgcCWQgrDngFCvQgIFbkCAAQgWAAgZgDg");
	this.shape_17.setTransform(82.475,2.5865);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3A241").s().p("ArpF5QAag+AXgoQAqhIA1gUQArgQATgEQAjgHAtAFQAJABALgWIAZgxQArhOBEgPQBEgPAXgCQAZgCBBAGQAYhBArgpQAZgWAvgiQAngfAqgIQAugIAqAXQArhPAWgeQAkg1AigSQA9ggAegFQA1gLA3AdQArgYBfgbQAxgNAngIIAAAAQgcBIgaBSIgBABQgWARgkAXQhHAthIAZQgIgGgJgPQgJgMgGgFQgVgNhFAgQg4AZgoA7IgvBTIg+gVQgxgHhAAkQgzAdghA/QgnBNgMAMQgogNgsgCQgvgDg+AKQhAALgeBQQgXBbgSAXQgsgTgTABQgSAAgqASQghAOg1A9Qg0A8gbALQgUgogYg4g");
	this.shape_18.setTransform(77.3,-58.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBDF8C").s().p("AvALGQgHiXAIhAQALhSAqgkQA4gxBFAEQAzADAvAdQgog7gKhPQgTidCYhkQAmgZAyAKQA9ALAtA8QgEgsAHg8QAOh5A7hMQBEhYBRgOQBrgSA3CbIAQgqQATgyAYgtQBLiPBTgiQBAgZAjAQQA4AZBYCJIB9iJQCSiOBhgbQBTgWAsBLQAwBUghCkQgIAmgiA/QgoBJgKAcQAIg3gMg6QgWhzhfgOQhjgPhEBVQgQATgjA4QgeAugTAUIgugsQgdgagYgMQhEgjhhAsQhWAmgZBOQgOApgKCUQgHhDgpg0QhShpiqBIQg2AWggBlQgiBoAmA+QgkgJgugDQhbgFgwAiQgoAcAIBrQAGBkArB6Qg7gOhFgGQiMgOg3AiQg7AjgnBmQgHATgMAnQgDAMgCAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_19.setTransform(88.8835,-149.1432);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B3A241").p("AkNUfQh0hMiHiRQkOkihjlYQgsiYgShbQgXhwgFhxQgHiAAahRQAWhFAygqQA4gxBFAEQAzADAuAdQgog7gJhPQgUidCYhlQAmgZAzAKQA9ALAtA9QgFgtAHg8QAOh5A7hMQBFhYBQgOQBsgSA3CbQAEgQAKgaQAUgyAYgtQBMiPBTgiQA/gZAjAQQA5AZBXCJIB+iJQCRiOBhgbQBUgWArBLQAxBUgiCkQgYB1g0COQgiBdg7CIQgiBOhFCeQh/EogzDVQhaF+gbCLQgyD+gFC6QgIF6kxgiQhegLhygyg");
	this.shape_20.setTransform(87.1443,-78.1428);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFDE47").s().p("AAhWNQhegLhygyIhegxQh0hMiHiRQkOkihjlYQgsiYgShbQgXhwgFhxQgHiAAahRQAWhFAygqQA4gxBFAEQAzADAuAdQgog7gJhPQgUidCYhlQAmgZAzAKQA9ALAtA9QgFgtAHg8QAOh5A7hMQBFhYBQgOQBsgSA3CbIAOgqQAUgyAYgtQBMiPBTgiQA/gZAjAQQA5AZBXCJIB+iJQCRiOBhgbQBUgWArBLQAxBUgiCkQgYB1g0COQgiBdg7CIIhnDsQh/EogzDVQhaF+gbCLQgyD+gFC6QgIFbkBAAQgXAAgZgDg");
	this.shape_21.setTransform(87.1443,-78.1428);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#725435").ss(1,1,1).p("Ag5jmIkbFWICiAKQC6AGCBgQIAjgTQAqgWAigIQBrgbgRBwQgMBThUgBQgbAAgegJIgZgJ");
	this.shape_22.setTransform(73.2161,194.2006);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3A241").s().p("AkkFuICVmAIEImoICsCHIlbLug");
	this.shape_23.setTransform(-230.4,-91.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3A241").s().p("AA6FYQkOgjhhgvIHFp1ICmBlIAAJ6Qh0gHiIgRg");
	this.shape_24.setTransform(-187.35,-72.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglAmQgQgQAAgWQAAgVAQgQQAPgPAWgBQAWABAQAPQAQAQAAAVQAAAWgQAQQgQAPgWAAQgWAAgPgPg");
	this.shape_25.setTransform(138.2,-107.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353636").s().p("AhEBFQgcgdAAgoQAAgnAcgdQAdgcAnAAQAoAAAdAcQAcAdAAAnQAAAogcAdQgdAcgoAAQgnAAgdgcg");
	this.shape_26.setTransform(136.475,-105.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3A241").s().p("AFbHKQiAhBhoizIgBApQgCAwgIApQgYCDhBAAQhNABiZiaQiYiYgShbQgXA8giA1QhCBrgwggQg8gohxiuQh1ixgVhcQgcAzgjAzQhHBnglgBQgcAAgqgUQg0gZgvgtQiBh9ghjlIAuApQA5AuA9AUQDABCCSjQIA1BdQBBBqA5BDQC5DVAwkIIA4BKQBGBUBCAtQDTCPBhkoIBHBIQBVBQBLAtQDuCOAqkMIBSA4QBgBABNAnQD2B/gvieQguiggDhsQgBghADgZIAEgRIC0DiQC4DpAQAnQAwBygnA4QhFBllRiBIjyhvIgGAvQgIA4gNAxQgrCbhNASQgjAIgjAAQhHAAhFgig");
	this.shape_27.setTransform(59.8618,128.6222);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3A241").s().p("ALmDGQjIglhYg7Qg1AohHAXQiOAuhbhSQgrAVg+ATQh/AlhlgMQhUgKhPg+QhKg5gbhBQhGAohZAUQixAohXhkIAAhpIApAOQAyAQAvACQCWAGA3h+IAbgZQAegRARAqQAQArBOBPQBgBhBXAcQBKAYBMgoQBHgkAthLIAFgGQAHgEAIADQAYAJAeBRQAQAvA0AOQAtAMA8gOQA3gNAogdQApgdAAgdIATgIQAZACAeAtQAeAuCjAQQBRAIBMgCIBRCTQhTgGhkgTg");
	this.shape_28.setTransform(8.35,5.4551);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#B3A241").p("AwtydQgZAhglA7QhKB3g7CEQi9GoAiGUQAUDyA+DeQA9DgBUCBQBZCLBbgKQBlgLBWjFIAzB+QA/CQA9BaQDGEhBtlhIBPB0QBgCBBPBJQBtBmA9gcQBNgjgFjsIBGBoQBWByBQA3QD/CuBlnnICYBIQCwBPB8AdQCtApAqhAQA1hPibjwQiRjgkJk4Qgngum9n3QkjlLiajPQjWkdhXjYQifmLkyCeQhgAyhjBig");
	this.shape_29.setTransform(55.7475,34.0677);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFDE47").s().p("AGFWKQhQg3hWhyIhGhoQAFDshNAjQg9AchthmQhPhJhgiBIhPh0QhtFhjGkhQg9hag/iQIgzh+QhWDFhlALQhbAKhZiLQhUiBg9jgQg+jegUjyQgimUC9moQA7iEBKh3QAlg7AZghIBPhZQBjhiBggyQEyieCfGLQBXDYDWEdQCaDPEjFLQG9H3AnAuQEJE4CRDgQCbDwg1BPQgqBAitgpQh8gdiwhPIiYhIQhKFnifAAQg4AAhDgug");
	this.shape_30.setTransform(55.7475,34.0677);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4EDCF").s().p("AlfNHQnEg+lVjNQkTimjAj8IFaiaIB+AYQCdAbCfAIQH+AaFQiiQFoitBWjYQAjhWgChtQgBhAgViEIBZAXQBzAbCAAVQGaBEGGgMQgHCCgUBJQgpCYhhDCQiPEcjGDZQkEEdlGCHQkbB2lEAAQiBAAiHgTg");
	this.shape_31.setTransform(39.825,11.3725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#B3A241").p("AxqnmIadjXQhNhHguhNQhaibCfghQgygbgvg5QhehyAQiYITxAAQEUAACxC2QCUCYBHELQA5DWABD8QAADPgfBzQgpCYhhDCQiPEdjGDZQkEEdlGCHQmMCknchBQtYh2mypgQiHi+hNjZQgYhEgQg+IgKgwQkBgZkPgoQodhRhDhLQAUhNAghaQBAiyA6g7QA7g6BUisIBJigg");
	this.shape_32.setTransform(-26.9251,-41.6275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFDE47").s().p("AFpVZQtYh2mypgQiIi+hNjZQgYhEgPg+IgLgwQkBgZkOgoQoehRhDhLQAUhNAghaQBAiyA7g7QA7g6BUisIBIigIMnHXIaejXQhOhHgthNQhbibCgghQgzgbgvg5QhehyARiYITwAAQEUAACyC2QCUCYBHELQA4DWABD8QABDPggBzQgoCYhiDCQiOEdjHDZQkDEdlGCHQkcB2lEAAQiBAAiHgTg");
	this.shape_33.setTransform(-26.8996,-41.6275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#ACA273").p("A3Ft9IgiBpQgmCHgUCPQg/HMCQF5QBXDkB5DEQB6DGB0BlQB9BsBUgjQBegmAbjVIBUBqQBlB5BUBGQEODeAHlxIBsBYQB/BjBgAvQCGBDA0grQBAg3hGjhIBgBQQByBWBcAeQEmBhgnnxICmAcQC/AaB/gGQCxgJAXhJQAdhbjYi7QjKivlWjiQgxggo3lpQlzjsjPicQkcjXiQi2QkHlPj6DtQhOBKhEB6g");
	this.shape_34.setTransform(100.7851,33.9963);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4EDCF").s().p("AClToQhggvh/hjIhshYQgHFxkOjeQhUhGhlh5IhUhqQgbDVheAmQhUAjh9hsQh0hlh6jGQh5jEhXjkQiQl5A/nMQAUiPAmiHIAihpIAzhsQBEh6BOhKQD6jtEHFPQCQC2EcDXQDPCcFzDsIJoGJQFWDiDKCvQDYC7gdBbQgXBJixAJQh/AGi/gaIimgcQAnHxkmhhQhcgehyhWIhghQQBGDhhAA3QgVARghAAQgzAAhRgpg");
	this.shape_35.setTransform(100.7851,33.9963);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:259.575,y:1.55}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{x:212.275,y:-95.5}},{t:this.shape_24},{t:this.shape_23}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:259.575,y:1.55}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{x:212.275,y:-95.5}},{t:this.shape_24},{t:this.shape_23}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:259.575,y:1.55}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{x:212.275,y:-95.5}},{t:this.shape_24},{t:this.shape_23}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_rindo_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBtQgHgIAAgUQgiAagJAEQgNAGgPAAQgWAAgQgPQgPgQAAgaQABgRAGgMQAKgQAZgPQAZgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgJAIAAALIAAAOQAAALgGAGQgGAGgIAAQgKAAgGgGQgFgGAAgLQAAgVAWgSQAVgRAmAAQAdAAAUAKQAOAHAGAQQAFALAAAgIAABLQAAAgACAHQAAAIADACQADACAEAAQAEAAADgBQAFgDAOgPIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALAAAOQAAASALAMQAKALAOAAQATAAAdgYIAAhVQgkAPgLAFg");
	this.shape.setTransform(-138.85,-168.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdClIAAgJIAMAAQAUAAAKgMQAGgHAAgeIAAhlIiZAAIAABlQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJIiOAAIAAgJIAMAAQAUAAAJgMQAGgHAAgeIAAjVQAAgZgDgIQgCgGgIgFQgLgFgLAAIgMAAIAAgJICOAAIAAAJIgMAAQgMgBgLAGQgHAEgDAIQgDAIAAAYIAABfICZAAIAAhfQAAgZgDgIQgDgGgIgFQgKgFgMAAIgMAAIAAgJICOAAIAAAJIgMAAQgLgBgLAGQgIAEgCAIQgDAIAAAYIAADVQAAAZADAIQACAGAIAFQALAFALAAIAMAAIAAAJg");
	this.shape_1.setTransform(-168.925,-174.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBtQgHgIAAgUQgiAagIAEQgNAGgQAAQgWAAgQgPQgOgQAAgaQAAgRAGgMQAKgQAZgPQAZgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgKAIAAALIABAOQAAALgGAGQgGAGgIAAQgJAAgHgGQgFgGAAgLQAAgVAWgSQAVgRAnAAQAdAAASAKQAPAHAGAQQAFALAAAgIAABLQAAAgABAHQABAIADACQADACAEAAQAEAAADgBQAFgDAOgPIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgJAMQgIALAAAOQAAASALAMQALALANAAQATAAAdgYIAAhVQgkAPgLAFg");
	this.shape_2.setTransform(-56.4,-211.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdClIAAgJIAMAAQAUABAKgMQAGgJAAgdIAAhlIiZAAIAABlQAAAZADAIQADAGAHAEQALAHAMgBIAMAAIAAAJIiOAAIAAgJIAMAAQAUABAJgMQAGgJAAgdIAAjUQAAgagDgIQgCgHgIgDQgLgHgLAAIgMAAIAAgJICOAAIAAAJIgMAAQgMABgLAFQgHAEgDAIQgDAIAAAZIAABeICZAAIAAheQAAgagDgIQgDgHgIgDQgKgHgMAAIgMAAIAAgJICOAAIAAAJIgMAAQgLABgLAFQgIAEgCAIQgDAIAAAZIAADUQAAAZADAIQACAGAIAEQALAHALgBIAMAAIAAAJg");
	this.shape_3.setTransform(-86.475,-217.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBtQgHgIAAgUQgiAagJAEQgNAGgPAAQgWAAgQgPQgPgQAAgaQABgRAGgMQAKgQAZgPQAZgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgJAIAAALIAAAOQAAALgGAGQgGAGgIAAQgKAAgGgGQgFgGAAgLQAAgVAWgSQAVgRAmAAQAdAAAUAKQAOAHAGAQQAFALAAAgIAABLQAAAgACAHQAAAIADACQADACAEAAQAEAAADgBQAFgDAOgPIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALABAOQAAASAKAMQAKALAOAAQATAAAdgYIAAhVQgkAPgLAFg");
	this.shape_4.setTransform(29.9,-192.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBtQgHgIAAgUQgiAagJAEQgNAGgPAAQgWAAgQgPQgPgQAAgaQABgRAGgMQALgQAYgPQAZgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgJAIAAALIAAAOQAAALgGAGQgGAGgIAAQgKAAgFgGQgGgGAAgLQAAgVAWgSQAVgRAmAAQAeAAATAKQAOAHAGAQQAFALAAAgIAABLQAAAgACAHQABAIACACQADACAEAAQADAAAEgBQAFgDAPgPIAAAOQgcAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALABAOQAAASAKAMQAKALAOAAQASAAAegYIAAhVQgkAPgLAFg");
	this.shape_5.setTransform(-89,-204.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-168.925,y:-174.1}},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:-86.475,y:-217.25}},{t:this.shape_2}]},5).to({state:[{t:this.shape_1,p:{x:-0.175,y:-198.05}},{t:this.shape_4}]},5).to({state:[{t:this.shape_3,p:{x:-119.075,y:-210.05}},{t:this.shape_5}]},5).to({state:[{t:this.shape_1,p:{x:-168.925,y:-174.1}},{t:this.shape}]},7).to({state:[{t:this.shape_3,p:{x:-86.475,y:-217.25}},{t:this.shape_2}]},6).to({state:[{t:this.shape_1,p:{x:-0.175,y:-198.05}},{t:this.shape_4}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_rindo_dino_roxo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_roxo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69467A").s().p("AgTAnIgBgGIANgnQAOgoAJAFQAKAFgKAmQgKAngMABIgEABQgHAAgCgEg");
	this.shape.setTransform(-234.9335,9.2989,0.6746,0.6746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69467A").s().p("AgYAkIAAgFQAIgUAKgSQASgmAIAGQAKAGgOAlQgPAlgMAAQgLAAgCgFg");
	this.shape_1.setTransform(-230.3732,9.6503,0.6746,0.6746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B3359").s().p("AgSAiQgQgZAQgdIASgZQAGgBAIAGQAHAEAEAGQAEAEgFAOQgGAOgLAEQgHADgCAdQgBAIgDAAQgEAAgIgMg");
	this.shape_2.setTransform(-199.1787,74.6192,0.6745,0.6745);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B3359").s().p("AgJAuQgGgKgHgXQgGgSAKgZIALgVQAZgBAGAQQAFAOgNAOQgJAIgCAWIgEAbQgBAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQgDAAgEgGg");
	this.shape_3.setTransform(-196.8316,77.081,0.6745,0.6745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3359").s().p("AgJAvQgHgEgFgYQgDgTgBgVQgBgFADgIIADgIQAMgPASAOQAPAMACAKQAAACgLAQQgLAQgBASQgBASgGABg");
	this.shape_4.setTransform(-193.347,79.0866,0.6745,0.6745);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3359").s().p("AABAmQgXgQACghIAGgfQAMgGAQAJQAGAEABAOQACAQgJAHQgFAFAIAcQAEAKgGAAQgEAAgKgHg");
	this.shape_5.setTransform(-185.3665,110.7205,0.6745,0.6745);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B3359").s().p("AAPAzQgKgGgPgSQgNgPgCgfIACgcQAXgMALAMQALALgHARQgEANAHAZIAHAfQAAAEgDAAQgDAAgEgDg");
	this.shape_6.setTransform(-179.9555,112.0135,0.6745,0.6745);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B3359").s().p("AAYAwQgKgBgYggQgYgeABgFQACgaAdgCQAZgCAGAJQABABgDAZQgDAaAGAQQAHASgGADIgDABIgEgBg");
	this.shape_7.setTransform(-174.8287,109.9806,0.6745,0.6745);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B3359").s().p("Ag9ApQgCgRAFgdQAFgZAmgPQATgIASgCQAaACAKAdQALAcgSAQQgOAMgagHQgagJgEADQgHADgIASQgIAPgHABIgCAAQgIAAgCgPg");
	this.shape_8.setTransform(-120.8896,169.5918,0.6745,0.6745);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B3359").s().p("AhDAtQgKgGAAgKQABgIAJgWQAGgSA4gPQAbgHAagDQASgDAFAKQADAFADAWQADAPgYAMQgTAKgVABQgJAAgTgKQgQgJgJAHQgHAFgJARQgEAIgGAAIgEgBg");
	this.shape_9.setTransform(-123.9959,165.7847,0.6745,0.6745);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4B3359").s().p("AgwANQgBgbAVgfIAWgbQAkAAAQAfQAJASgRAYQgRAYgQAAQgJAAgJATQgJAXgFAEQgDACgCAAQgOAAgCg8g");
	this.shape_10.setTransform(-116.701,173.8332,0.6745,0.6745);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B3359").s().p("AgqBEQgFgHgEgOQgJgbADgfQADggAjgPQASgHAQgBQAtgGgCAqQgBAPgGAPQgGANgEACQgIgJgKgEQgUgHgKAZQgPAhgLALQgFAEgCAAIgCAAg");
	this.shape_11.setTransform(-82.6107,176.0693,0.6745,0.6745);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4B3359").s().p("Ag4BAIgFgSQgEgNACgSQAEgkAjgcQAlgfAcATQAYAQAAAgQAAAVgWACIgVgDQgSgBgPANQgRAOgLAYQgGAMgFAAQgDAAgDgFg");
	this.shape_12.setTransform(-86.9923,173.3929,0.6745,0.6745);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4B3359").s().p("AhOAxQgGgaApgmQAsgqArAIQAnAIgEAoQgCATgJATQgMgGgQgCQghgGgUAOQgVAOgYAAg");
	this.shape_13.setTransform(-90.3769,168.9205,0.6745,0.6745);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C4380").s().p("AAcAAIgLgIQgHgFgFgCQgKgDgOAJQgJAGgOANQAGgOANgLQAGgGAIgDQAJgDAIACQAQAGAKAQQAKANgBAQQgFgNgKgNg");
	this.shape_14.setTransform(-212.4142,8.3648,0.6745,0.6745);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B56A1").s().p("AgqAIQAHgKAKgJQAVgSAQAJQARAKAJARQAEAKABAHg");
	this.shape_15.setTransform(-212.4173,8.5172,0.6745,0.6745);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B56A1").s().p("AhFArIgdgHQAFgJANgMQAagYAngSQAkgSArAAQAWABANADQhdBJgaAKQgKAEgNAAQgMAAgOgDg");
	this.shape_16.setTransform(-201.436,1.9841,0.6746,0.6746);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#6C4380").p("AA8lJIACAfQABAngHAiQgVBthVAbQh6AmhnBKQh6BZgDBVQgEBXAgAWQAXAQBmAEQBOACAIhKQACgXgFgcIgFgXQgDgSAVgRQAsggB9ALQB9ALCPhyQAsgiApgsIAggk");
	this.shape_17.setTransform(-160.3329,88.3156,0.6745,0.6745);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B56A1").s().p("Aj4FIQhmgEgXgQQgggWAEhXQADhVB6hZQBnhKB6gmQBVgbAVhtQAHgigBgnIgCgfIFXDsIggAkQgpAsgsAiQiPByh9gLQh9gLgsAgQgVARADASIAFAXQAFAcgCAXQgIBIhJAAIgFAAg");
	this.shape_18.setTransform(-160.2911,88.1577,0.6745,0.6745);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#6C4380").p("Akfo7IgUA9QgVBLgIBKQgaDuB2CKQB2CMBYBOQAsAnAUAMIAPAOQAQARAEAPQAMAthvAAQhkAAg6AGQgSACgLAPQgKAPAEASQANA1AeAjQAkArBPAFQBTAGCcgjQB+gbAhglQAPgRABgdQABgOgEghQgHg+gVg4Qgag+gOggQghhRg8haQgSgbhOhtQgHgJAkgrQAFgGBQhYQCFiUAKg+");
	this.shape_19.setTransform(-73.8469,138.9871,0.6745,0.6745);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B56A1").s().p("AhJI5QhPgFgkgrQgegjgNg1QgEgSAKgPQALgPASgCQA6gGBkAAQBvAAgMgtQgEgPgQgRIgPgOQgUgMgsgnQhYhOh2iMQh2iKAajuQAIhKAVhLIAUg9IJxBNQgKA+iFCUIhVBeQgkArAHAJQBOBtASAbQA8BaAhBRIAoBeQAVA4AHA+QAEAhgBAOQgBAdgPARQghAlh+AbQiHAehQAAIgYgBg");
	this.shape_20.setTransform(-73.8469,138.8714,0.6745,0.6745);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DAE79C").s().p("ADkJ3QjPhmjtifQnbk/iVkcQgZgwg1hYQgvhPgSgmIitlmQAQgmAOAGQAWAJBICTQBfDEAuBKQBSCFDYDZQDhDhCHBOQA7AiCIAzQBOAeCwA/QFGB6A5BPQAEAGBfAsQBlAvBhApQBYAkBdA+QBJAwAHAMg");
	this.shape_21.setTransform(-111.26,79.3859,0.6746,0.6746);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#6C4380").p("AD7imQhxgDh7AaQj2A1g1CSIAFARQAHAUALARQAkA3A+ACQAIgDAXgOQAtgbBHg2IBagRQBwgOBoAO");
	this.shape_22.setTransform(-179.8583,67.4713,0.6745,0.6745);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B56A1").s().p("AkHBuQgLgRgIgUIgFgRQA1iSD2g1QB8gaBxADIAnDaQhpgOhwAOIhaARQhHA2gtAbQgWAOgJADQg9gCgkg3g");
	this.shape_23.setTransform(-179.7026,67.4701,0.6745,0.6745);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2E2E2E").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_24.setTransform(-208.134,-0.8662,0.6745,0.6745);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#373535").p("ABkAAQAAAqgdAdQgdAdgqAAQgoAAgegdQgdgdAAgqQAAgoAdgeQAegdAoAAQAqAAAdAdQAdAeAAAog");
	this.shape_25.setTransform(-204.9974,-3.3957,0.6745,0.6745);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAEAEA").s().p("AhGBHQgdgdAAgqQAAgoAdgeQAegdAoAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAQgoAAgegdg");
	this.shape_26.setTransform(-204.9974,-3.3957,0.6745,0.6745);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#6C4380").p("AEnAbIhkjCIAogGQAygGAwAAQCagBBRA4QBXA9A/AQQAuAMAngMQARgFAEgeQAFgggOgnQglhoh9gzQgegNhngyQhSgog/gUQi9g8kiAYQkvAajZDtQhSBag3BpQgvBZgMBEQgFAgABAqQACAwALAWQAOADAPgBQAOgBAIgFQAKgGApgSQAngSAWgOQAUgMA5gcQAvgXAHgIQAIgGAUgMQAVgNAJgGQAGgFADgPQADgQACgDQAMAbgJAuQgCAJgOAwQgXBJgSAaQgwBBgwApQgKAJgQAAQgMAAgagGQgCAHABANQACAMAEAIQAIAPAlgDQAvgFA5grQAegXBDhIQA/hDAjgXQA5gIBQAWQArAMBDAV");
	this.shape_27.setTransform(-182.1206,3.3644,0.6745,0.6745);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B56A1").s().p("AqOHPQgEgIgCgMQgBgNACgHQAaAGAMAAQAQAAAKgJQAwgpAwhBQASgaAXhJQAOgwACgJQAJgugMgbQgCADgDAQQgDAPgGAFIgeATIgcASQgHAIgvAXQg5AcgUAMQgWAOgnASQgpASgKAGQgIAFgOABQgPABgOgDQgLgWgCgwQgBgqAFggQAMhEAvhZQA3hpBShaQDZjtEvgaQEigYC9A8QA/AUBSAoQBnAyAeANQB9AzAlBoQAOAngFAgQgEAegRAFQgnAMgugMQg/gQhXg9QhRg4iaABQgwAAgyAGIgoAGIBkDCIlmEGQhDgVgrgMQhQgWg5AIQgjAXg/BDQhDBIgeAXQg5ArgvAFIgMAAQgbAAgGgMg");
	this.shape_28.setTransform(-182.1206,3.3644,0.6745,0.6745);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9D4D5F").s().p("AhYCDQgSgNAag5QAbg5BGhKIBChAIALAkQAHAqgSAeQgdAvh2BvQgGADgGAAQgGAAgGgEg");
	this.shape_29.setTransform(-218.019,23.1916,0.6746,0.6746);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C07180").s().p("AiIDOQAEgNAKgaQATgzAgg8QANgZATgcIAZgmQAig9AKgZQATgwgHgsIAVAaQAYAiARAgQA3BogmA6QgkA5gbAdIhEBJQgaAHgcAEQgWADgQAAQgZAAgJgIg");
	this.shape_30.setTransform(-217.1024,18.7423,0.6746,0.6746);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#6C4380").p("A8HyCIArBCQA5BOBKBAQDsDNE5gSQDlgNBvgBQCkgBB0ASQEGAoDFCzQC1CjCpFPQBVCmAwCHIAxBQQBABgBHBTQDlEMDfAqQDfAqGEgQQDCgJCWgRIApgFQAsgDARAJQA4AgjrCWQkACkoYgaQjWgLjCgoQi6gmhagxQiQhOlahnIs5jhQjPhmjuifQnbk/iVkcQgZgwg1hYQgvhPgSgmIi5l+QAtg/BGhBQCOiBCEgGg");
	this.shape_31.setTransform(-42.5934,80.2186,0.6745,0.6745);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8B56A1").s().p("AS3SAQjWgLjCgoQi6gmhZgxQiRhOlZhnIs5jhQjQhmjtifQnbk/iVkcQgagwg0hYQgvhPgTgmIi4l+QAsg/BHhBQCNiBCFgGIAqBCQA6BOBJBAQDtDNE5gSQDkgNBvgBQCkgBB0ASQEGAoDGCzQC1CjCpFPQBUCmAwCHIAyBQQA/BgBIBTQDlEMDfAqQDfAqGEgQQDCgJCVgRIApgFQAsgDASAJQA3AgjrCWQjcCNmsAAQhFAAhLgDg");
	this.shape_32.setTransform(-42.5671,80.2186,0.6745,0.6745);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#6C4380").p("Akeo7IgUA9QgWBLgIBKQgaDuB2CKQB2CMBZBOQArAnAVAMIAPAOQAQARAEAPQAMAthwAAQhlAAg5AGQgSACgKAPQgLAPAEASQAOA1AdAjQAkArBPAFQBTAGCdgjQB+gbAgglQAPgRACgdQAAgLgEgkQgHg+gVg4Qgag+gNggQghhRg8haQgTgbhOhtQgGgJAkgrQAFgGBQhYQCFiUAJg+");
	this.shape_33.setTransform(-106.2003,137.1321,0.6745,0.6745);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8B56A1").s().p("AhJI5QhPgFgkgrQgdgjgOg1QgEgSALgPQAKgPASgCQA5gGBlAAQBwAAgMgtQgEgPgQgRIgPgOQgVgMgrgnQhZhOh2iMQh2iKAajuQAIhKAWhLIAUg9IJwBNQgJA+iFCUIhVBeQgkArAGAJQBOBtATAbQA8BaAhBRIAnBeQAVA4AHA+QAEAkAAALQgCAdgPARQggAlh+AbQiHAehQAAIgZgBg");
	this.shape_34.setTransform(-106.2003,137.0164,0.6745,0.6745);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{rotation:0,x:-106.2003,y:137.0164}},{t:this.shape_33,p:{rotation:0,x:-106.2003,y:137.1321}},{t:this.shape_32,p:{rotation:0,x:-42.5671,y:80.2186}},{t:this.shape_31,p:{rotation:0,x:-42.5934,y:80.2186}},{t:this.shape_30,p:{rotation:0,x:-217.1024,y:18.7423}},{t:this.shape_29,p:{rotation:0,x:-218.019,y:23.1916}},{t:this.shape_28,p:{rotation:0,x:-182.1206,y:3.3644}},{t:this.shape_27,p:{rotation:0,x:-182.1206,y:3.3644}},{t:this.shape_26,p:{rotation:0,x:-204.9974,y:-3.3957}},{t:this.shape_25,p:{rotation:0,x:-204.9974,y:-3.3957}},{t:this.shape_24,p:{rotation:0,x:-208.134,y:-0.8662}},{t:this.shape_23,p:{rotation:0,x:-179.7026,y:67.4701}},{t:this.shape_22,p:{rotation:0,x:-179.8583,y:67.4713}},{t:this.shape_21,p:{rotation:0,x:-111.26,y:79.3859}},{t:this.shape_20,p:{rotation:0,x:-73.8469,y:138.8714}},{t:this.shape_19,p:{rotation:0,x:-73.8469,y:138.9871}},{t:this.shape_18,p:{rotation:0,x:-160.2911,y:88.1577}},{t:this.shape_17,p:{rotation:0,x:-160.3329,y:88.3156}},{t:this.shape_16,p:{rotation:0,x:-201.436,y:1.9841}},{t:this.shape_15,p:{rotation:0,x:-212.4173,y:8.5172}},{t:this.shape_14,p:{rotation:0,x:-212.4142,y:8.3648}},{t:this.shape_13,p:{rotation:0,x:-90.3769,y:168.9205}},{t:this.shape_12,p:{rotation:0,x:-86.9923,y:173.3929}},{t:this.shape_11,p:{rotation:0,x:-82.6107,y:176.0693}},{t:this.shape_10,p:{rotation:0,x:-116.701,y:173.8332}},{t:this.shape_9,p:{rotation:0,x:-123.9959,y:165.7847}},{t:this.shape_8,p:{rotation:0,x:-120.8896,y:169.5918}},{t:this.shape_7,p:{rotation:0,x:-174.8287,y:109.9806}},{t:this.shape_6,p:{rotation:0,x:-179.9555,y:112.0135}},{t:this.shape_5,p:{rotation:0,x:-185.3665,y:110.7205}},{t:this.shape_4,p:{rotation:0,x:-193.347,y:79.0866}},{t:this.shape_3,p:{rotation:0,x:-196.8316,y:77.081}},{t:this.shape_2,p:{rotation:0,x:-199.1787,y:74.6192}},{t:this.shape_1,p:{rotation:0,x:-230.3732,y:9.6503}},{t:this.shape,p:{rotation:0,x:-234.9335,y:9.2989}}]}).to({state:[{t:this.shape_34,p:{rotation:10.4711,x:-97.0518,y:130.5923}},{t:this.shape_33,p:{rotation:10.4711,x:-97.0728,y:130.7061}},{t:this.shape_32,p:{rotation:10.4711,x:-24.1556,y:86.3048}},{t:this.shape_31,p:{rotation:10.4711,x:-24.1814,y:86.3001}},{t:this.shape_30,p:{rotation:10.4717,x:-184.614,y:-5.8721}},{t:this.shape_29,p:{rotation:10.4717,x:-186.3239,y:-1.6635}},{t:this.shape_28,p:{rotation:10.4711,x:-147.4181,y:-14.6323}},{t:this.shape_27,p:{rotation:10.4711,x:-147.4181,y:-14.6323}},{t:this.shape_26,p:{rotation:10.4711,x:-168.6855,y:-25.4374}},{t:this.shape_25,p:{rotation:10.4711,x:-168.6855,y:-25.4374}},{t:this.shape_24,p:{rotation:10.4711,x:-172.2295,y:-23.5201}},{t:this.shape_23,p:{rotation:10.4711,x:-156.6909,y:48.8456}},{t:this.shape_22,p:{rotation:10.4711,x:-156.8442,y:48.8184}},{t:this.shape_21,p:{rotation:10.4717,x:-91.5577,y:72.997}},{t:this.shape_20,p:{rotation:10.4711,x:-65.5741,y:138.2963}},{t:this.shape_19,p:{rotation:10.4711,x:-65.5951,y:138.4101}},{t:this.shape_18,p:{rotation:10.4711,x:-141.3624,y:72.7166}},{t:this.shape_17,p:{rotation:10.4711,x:-141.4322,y:72.8643}},{t:this.shape_16,p:{rotation:10.4717,x:-166.1629,y:-19.5036}},{t:this.shape_15,p:{rotation:10.4711,x:-178.1468,y:-15.0714}},{t:this.shape_14,p:{rotation:10.4711,x:-178.1161,y:-15.2207}},{t:this.shape_13,p:{rotation:10.4711,x:-87.29,y:164.8409}},{t:this.shape_12,p:{rotation:10.4711,x:-84.7746,y:169.854}},{t:this.shape_11,p:{rotation:10.4711,x:-80.9524,y:173.2821}},{t:this.shape_10,p:{rotation:10.4711,x:-114.0687,y:164.8876}},{t:this.shape_9,p:{rotation:10.4711,x:-119.7794,y:155.6475}},{t:this.shape_8,p:{rotation:10.4711,x:-117.4167,y:159.9557}},{t:this.shape_7,p:{rotation:10.4711,x:-159.6241,y:91.534}},{t:this.shape_6,p:{rotation:10.4711,x:-165.0349,y:92.6014}},{t:this.shape_5,p:{rotation:10.4711,x:-170.1208,y:90.3465}},{t:this.shape_4,p:{rotation:10.4711,x:-172.2194,y:57.789}},{t:this.shape_3,p:{rotation:10.4711,x:-175.2814,y:55.1834}},{t:this.shape_2,p:{rotation:10.4711,x:-177.142,y:52.336}},{t:this.shape_1,p:{rotation:10.4717,x:-196.011,y:-17.2244}},{t:this.shape,p:{rotation:10.4717,x:-200.4315,y:-18.3988}}]},6).to({state:[{t:this.shape_34,p:{rotation:0,x:-106.2063,y:137.002}},{t:this.shape_33,p:{rotation:0,x:-106.2063,y:137.1177}},{t:this.shape_32,p:{rotation:0,x:-42.576,y:80.2068}},{t:this.shape_31,p:{rotation:0,x:-42.6022,y:80.2068}},{t:this.shape_30,p:{rotation:0,x:-217.1029,y:18.7378}},{t:this.shape_29,p:{rotation:0,x:-218.0194,y:23.187}},{t:this.shape_28,p:{rotation:0,x:-182.1232,y:3.3561}},{t:this.shape_27,p:{rotation:0,x:-182.1232,y:3.3561}},{t:this.shape_26,p:{rotation:0,x:-204.9989,y:-3.4037}},{t:this.shape_25,p:{rotation:0,x:-204.9989,y:-3.4037}},{t:this.shape_24,p:{rotation:0,x:-208.1354,y:-0.8743}},{t:this.shape_23,p:{rotation:0,x:-179.7052,y:67.4589}},{t:this.shape_22,p:{rotation:0,x:-179.8609,y:67.4601}},{t:this.shape_21,p:{rotation:0,x:-111.2629,y:79.38}},{t:this.shape_20,p:{rotation:0,x:-73.8543,y:138.8569}},{t:this.shape_19,p:{rotation:0,x:-73.8543,y:138.9726}},{t:this.shape_18,p:{rotation:0,x:-160.2946,y:88.1455}},{t:this.shape_17,p:{rotation:0,x:-160.3364,y:88.3035}},{t:this.shape_16,p:{rotation:0,x:-201.4368,y:1.98}},{t:this.shape_15,p:{rotation:0,x:-212.4184,y:8.5086}},{t:this.shape_14,p:{rotation:0,x:-212.4154,y:8.3562}},{t:this.shape_13,p:{rotation:0,x:-90.3836,y:168.9046}},{t:this.shape_12,p:{rotation:0,x:-86.9991,y:173.3768}},{t:this.shape_11,p:{rotation:0,x:-82.6178,y:176.0531}},{t:this.shape_10,p:{rotation:0,x:-116.7065,y:173.8171}},{t:this.shape_9,p:{rotation:0,x:-124.0011,y:165.769}},{t:this.shape_8,p:{rotation:0,x:-120.8949,y:169.5759}},{t:this.shape_7,p:{rotation:0,x:-174.8316,y:109.9674}},{t:this.shape_6,p:{rotation:0,x:-179.9581,y:112.0003}},{t:this.shape_5,p:{rotation:0,x:-185.3689,y:110.7073}},{t:this.shape_4,p:{rotation:0,x:-193.349,y:79.0749}},{t:this.shape_3,p:{rotation:0,x:-196.8335,y:77.0693}},{t:this.shape_2,p:{rotation:0,x:-199.1804,y:74.6076}},{t:this.shape_1,p:{rotation:0,x:-230.3733,y:9.646}},{t:this.shape,p:{rotation:0,x:-234.9336,y:9.2946}}]},6).to({state:[{t:this.shape_34,p:{rotation:10.4716,x:-97.0577,y:130.5779}},{t:this.shape_33,p:{rotation:10.4716,x:-97.0788,y:130.6917}},{t:this.shape_32,p:{rotation:10.4716,x:-24.1644,y:86.293}},{t:this.shape_31,p:{rotation:10.4716,x:-24.1903,y:86.2882}},{t:this.shape_30,p:{rotation:10.4719,x:-184.6144,y:-5.8766}},{t:this.shape_29,p:{rotation:10.4719,x:-186.3243,y:-1.6681}},{t:this.shape_28,p:{rotation:10.4716,x:-147.4207,y:-14.6406}},{t:this.shape_27,p:{rotation:10.4716,x:-147.4207,y:-14.6406}},{t:this.shape_26,p:{rotation:10.4716,x:-168.687,y:-25.4455}},{t:this.shape_25,p:{rotation:10.4716,x:-168.687,y:-25.4455}},{t:this.shape_24,p:{rotation:10.4716,x:-172.2309,y:-23.5282}},{t:this.shape_23,p:{rotation:10.4716,x:-156.6935,y:48.8343}},{t:this.shape_22,p:{rotation:10.4716,x:-156.8469,y:48.8072}},{t:this.shape_21,p:{rotation:10.4719,x:-91.5606,y:72.9911}},{t:this.shape_20,p:{rotation:10.4716,x:-65.5815,y:138.2818}},{t:this.shape_19,p:{rotation:10.4716,x:-65.6025,y:138.3956}},{t:this.shape_18,p:{rotation:10.4716,x:-141.3659,y:72.7044}},{t:this.shape_17,p:{rotation:10.4716,x:-141.4357,y:72.8521}},{t:this.shape_16,p:{rotation:10.4719,x:-166.1638,y:-19.5077}},{t:this.shape_15,p:{rotation:10.4716,x:-178.148,y:-15.08}},{t:this.shape_14,p:{rotation:10.4716,x:-178.1173,y:-15.2293}},{t:this.shape_13,p:{rotation:10.4716,x:-87.2967,y:164.8251}},{t:this.shape_12,p:{rotation:10.4716,x:-84.7814,y:169.8379}},{t:this.shape_11,p:{rotation:10.4716,x:-80.9594,y:173.266}},{t:this.shape_10,p:{rotation:10.4716,x:-114.0742,y:164.8716}},{t:this.shape_9,p:{rotation:10.4716,x:-119.7846,y:155.6318}},{t:this.shape_8,p:{rotation:10.4716,x:-117.422,y:159.9398}},{t:this.shape_7,p:{rotation:10.4716,x:-159.6269,y:91.5209}},{t:this.shape_6,p:{rotation:10.4716,x:-165.0376,y:92.5881}},{t:this.shape_5,p:{rotation:10.4716,x:-170.1232,y:90.3333}},{t:this.shape_4,p:{rotation:10.4716,x:-172.2214,y:57.7772}},{t:this.shape_3,p:{rotation:10.4716,x:-175.2833,y:55.1717}},{t:this.shape_2,p:{rotation:10.4716,x:-177.1438,y:52.3244}},{t:this.shape_1,p:{rotation:10.4719,x:-196.0112,y:-17.2287}},{t:this.shape,p:{rotation:10.4719,x:-200.4316,y:-18.4031}}]},6).to({state:[{t:this.shape_34,p:{rotation:0,x:-106.2063,y:137.002}},{t:this.shape_33,p:{rotation:0,x:-106.2063,y:137.1177}},{t:this.shape_32,p:{rotation:0,x:-42.576,y:80.2068}},{t:this.shape_31,p:{rotation:0,x:-42.6022,y:80.2068}},{t:this.shape_30,p:{rotation:0,x:-217.1029,y:18.7378}},{t:this.shape_29,p:{rotation:0,x:-218.0194,y:23.187}},{t:this.shape_28,p:{rotation:0,x:-182.1232,y:3.3561}},{t:this.shape_27,p:{rotation:0,x:-182.1232,y:3.3561}},{t:this.shape_26,p:{rotation:0,x:-204.9989,y:-3.4037}},{t:this.shape_25,p:{rotation:0,x:-204.9989,y:-3.4037}},{t:this.shape_24,p:{rotation:0,x:-208.1354,y:-0.8743}},{t:this.shape_23,p:{rotation:0,x:-179.7052,y:67.4589}},{t:this.shape_22,p:{rotation:0,x:-179.8609,y:67.4601}},{t:this.shape_21,p:{rotation:0,x:-111.2629,y:79.38}},{t:this.shape_20,p:{rotation:0,x:-73.8543,y:138.8569}},{t:this.shape_19,p:{rotation:0,x:-73.8543,y:138.9726}},{t:this.shape_18,p:{rotation:0,x:-160.2946,y:88.1455}},{t:this.shape_17,p:{rotation:0,x:-160.3364,y:88.3035}},{t:this.shape_16,p:{rotation:0,x:-201.4368,y:1.98}},{t:this.shape_15,p:{rotation:0,x:-212.4184,y:8.5086}},{t:this.shape_14,p:{rotation:0,x:-212.4154,y:8.3562}},{t:this.shape_13,p:{rotation:0,x:-90.3836,y:168.9046}},{t:this.shape_12,p:{rotation:0,x:-86.9991,y:173.3768}},{t:this.shape_11,p:{rotation:0,x:-82.6178,y:176.0531}},{t:this.shape_10,p:{rotation:0,x:-116.7065,y:173.8171}},{t:this.shape_9,p:{rotation:0,x:-124.0011,y:165.769}},{t:this.shape_8,p:{rotation:0,x:-120.8949,y:169.5759}},{t:this.shape_7,p:{rotation:0,x:-174.8316,y:109.9674}},{t:this.shape_6,p:{rotation:0,x:-179.9581,y:112.0003}},{t:this.shape_5,p:{rotation:0,x:-185.3689,y:110.7073}},{t:this.shape_4,p:{rotation:0,x:-193.349,y:79.0749}},{t:this.shape_3,p:{rotation:0,x:-196.8335,y:77.0693}},{t:this.shape_2,p:{rotation:0,x:-199.1804,y:74.6076}},{t:this.shape_1,p:{rotation:0,x:-230.3733,y:9.646}},{t:this.shape,p:{rotation:0,x:-234.9336,y:9.2946}}]},8).to({state:[{t:this.shape_34,p:{rotation:10.4716,x:-97.0577,y:130.5779}},{t:this.shape_33,p:{rotation:10.4716,x:-97.0788,y:130.6917}},{t:this.shape_32,p:{rotation:10.4716,x:-24.1644,y:86.293}},{t:this.shape_31,p:{rotation:10.4716,x:-24.1903,y:86.2882}},{t:this.shape_30,p:{rotation:10.4719,x:-184.6144,y:-5.8766}},{t:this.shape_29,p:{rotation:10.4719,x:-186.3243,y:-1.6681}},{t:this.shape_28,p:{rotation:10.4716,x:-147.4207,y:-14.6406}},{t:this.shape_27,p:{rotation:10.4716,x:-147.4207,y:-14.6406}},{t:this.shape_26,p:{rotation:10.4716,x:-168.687,y:-25.4455}},{t:this.shape_25,p:{rotation:10.4716,x:-168.687,y:-25.4455}},{t:this.shape_24,p:{rotation:10.4716,x:-172.2309,y:-23.5282}},{t:this.shape_23,p:{rotation:10.4716,x:-156.6935,y:48.8343}},{t:this.shape_22,p:{rotation:10.4716,x:-156.8469,y:48.8072}},{t:this.shape_21,p:{rotation:10.4719,x:-91.5606,y:72.9911}},{t:this.shape_20,p:{rotation:10.4716,x:-65.5815,y:138.2818}},{t:this.shape_19,p:{rotation:10.4716,x:-65.6025,y:138.3956}},{t:this.shape_18,p:{rotation:10.4716,x:-141.3659,y:72.7044}},{t:this.shape_17,p:{rotation:10.4716,x:-141.4357,y:72.8521}},{t:this.shape_16,p:{rotation:10.4719,x:-166.1638,y:-19.5077}},{t:this.shape_15,p:{rotation:10.4716,x:-178.148,y:-15.08}},{t:this.shape_14,p:{rotation:10.4716,x:-178.1173,y:-15.2293}},{t:this.shape_13,p:{rotation:10.4716,x:-87.2967,y:164.8251}},{t:this.shape_12,p:{rotation:10.4716,x:-84.7814,y:169.8379}},{t:this.shape_11,p:{rotation:10.4716,x:-80.9594,y:173.266}},{t:this.shape_10,p:{rotation:10.4716,x:-114.0742,y:164.8716}},{t:this.shape_9,p:{rotation:10.4716,x:-119.7846,y:155.6318}},{t:this.shape_8,p:{rotation:10.4716,x:-117.422,y:159.9398}},{t:this.shape_7,p:{rotation:10.4716,x:-159.6269,y:91.5209}},{t:this.shape_6,p:{rotation:10.4716,x:-165.0376,y:92.5881}},{t:this.shape_5,p:{rotation:10.4716,x:-170.1232,y:90.3333}},{t:this.shape_4,p:{rotation:10.4716,x:-172.2214,y:57.7772}},{t:this.shape_3,p:{rotation:10.4716,x:-175.2833,y:55.1717}},{t:this.shape_2,p:{rotation:10.4716,x:-177.1438,y:52.3244}},{t:this.shape_1,p:{rotation:10.4719,x:-196.0112,y:-17.2287}},{t:this.shape,p:{rotation:10.4719,x:-200.4316,y:-18.4031}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_28
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").p("AhcgeIABAvQAKAyAuAEQAtAFAthIQAWgjANglQiSApgkgDg");
	this.shape.setTransform(75.3275,-18.5817,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D7D7").s().p("AgiBGQgugFgKgxIAAgwQAjAECTgpQgOAlgWAiQgqBEgrAAIgFAAg");
	this.shape_1.setTransform(75.2217,-18.4946,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("ADdApQg3gog3hIQhsiSAGihQgkgHgtAlQhbBLgnDeQgnDdA6B/QAdBAAkAU");
	this.shape.setTransform(-62.5854,-32.2954,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("Ai4EpQg6h/AnjdQAnjeBbhLQAtglAkAHQgGChBsCSQA3BIA3AoIlTFUQgkgUgdhAg");
	this.shape_1.setTransform(-62.511,-32.2954,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_26
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("AKBobQhzgYiJgQQkTgfhyAlQgQAFhoAfQg9ASgkAPQheAqhqBuQhlBphFELQgiCGgOBxIAQAQQAWAUAbATQBYA6BsARIC1jQIgUB4QgRB+APAfIAhAYQApAeAsAWQCJBHBqgaQAfhGA6hFQB0iLCGAE");
	this.shape.setTransform(-43.6411,10.6498,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AhkIeQgrgWgpgeIghgYQgPgfAQh+IAVh4Ii1DQQhsgRhYg6QgcgTgVgUIgQgQQAOhxAiiGQBFkLBlhpQBqhuBegqQAkgPA9gSIB4gkQBxglETAfQCKAQByAYIibNUQiGgEh1CLQg5BFggBGQgbAHgfAAQhUAAhlg0g");
	this.shape_1.setTransform(-43.4854,10.6498,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("ADChwIAADoQgPARgqALQhUAXiDgaQgWgmgag6QgyhygShh");
	this.shape.setTransform(13.1237,48.4538,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AhOCUQgWgmgag6QgyhzgRhhIGDAyIAADpQgPAQgqALQgoALgzAAQg3AAhFgNg");
	this.shape_1.setTransform(13.1237,48.3034,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_23
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("AgvKoQgnATgzAQQhnAgg/gOQgFgNgFgaQgJgzAEg+QgaADgmgCQhLgFg8gcQAOgjAVgnQAohNAdgUQgpgLgvgTQhdglgdghQATgoAcgwQA3hgApglQgegogagxQg1hkAPguIBHgtQBRgtAzACQgKgsgGg2QgMhsAWgxIBbACQBeAEARANIA9hdQBHhmAwgnIBNAkQBRApATAaIBngpQBsgoAdAAIAvCoIA/AbQBDAgAaAZIgbBFQggBJgaAX");
	this.shape.setTransform(19.7396,-3.2135,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AkvLdQgGgNgEgaQgJg0AEg+QgaADgmgCQhLgFg9gbQAPgjAUgnQAphOAcgTQgpgMgugSQhdglgdghQATgoAcgwQA3hgApglQgegpgbgxQg0hjAPguIBHgtQBRgtAzACQgLgtgFg2QgMhrAVgxIBbACQBfADARAOIA9heQBHhlAwgnIBMAkQBRApAUAZIBngoQBsgpAdAAIAuCpIA/AbQBEAgAZAZIgbBFQggBIgZAYIpLPRQgoASgyAQQhJAXg0AAQgWAAgTgEg");
	this.shape_1.setTransform(19.7427,-3.1824,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_22
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("Algo3IA+gSQBPgSBQgFQD/gPCvCBQAKAHAVASQAYAVAPAQQA+BGAtBPQBaCegZB3IgrBsQg2B2g1AoQg0AphHCEQgjBCgZA5QgcAUg6APQhyAgiRgUQiygYhkhFQhmhHgch7");
	this.shape.setTransform(43.1701,9.9603,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AiJJbQiygYhkhFQhmhHgch7IDBtzIA+gSQBPgSBQgFQD/gPCvCBQAKAHAVASQAYAVAPAQQA+BGAtBPQBaCegZB3IgrBsQg2B2g1AoQg0AphHCEQgjBCgZA5QgcAUg6APQhHAUhRAAQgzAAg4gIg");
	this.shape_1.setTransform(43.1701,9.9603,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").p("AhZgSIAFAvQAOAwAvAAQAtAAAmhLQATglAJgmQiOA3gjAAg");
	this.shape.setTransform(55.4989,-17.0458,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D7D7").s().p("AhTAcIgFgwQAjAACOg3QgJAmgTAlQgmBMgtgBQgvAAgOgvg");
	this.shape_1.setTransform(55.4191,-16.9317,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_17
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("ABsAAQAAAwggAiQggAigsAAQgrAAgggiQgggiAAgwQAAgvAggiQAggiArAAQAsAAAgAiQAgAiAAAvg");
	this.shape.setTransform(52.8043,17.2063,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBSQgggiAAgwQAAgvAggiQAfgiAsAAQAtAAAfAiQAgAigBAvQABAwggAiQgfAigtAAQgsAAgfgig");
	this.shape_1.setTransform(52.8043,17.2063,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2E").s().p("AggAkQgOgOAAgWQAAgUAOgPQAOgPASAAQAUAAAOAPQANAPAAAUQAAAWgNAOQgOAPgUAAQgSAAgOgPg");
	this.shape.setTransform(53.5174,20.1868,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69A7D7").s().p("Ag7AkQhBhnAVg7IAaAGQAfAIAcAOQBZAqAcBHQAdBJg4AbQgSAIgYADIgUABQgkgoghgzg");
	this.shape.setTransform(48.1411,26.5134,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("AAagrQgNACgMAMQgXAZACA0");
	this.shape.setTransform(55.0849,35.551,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AAAgfQALgMANgCIguBbQgCg1AYgYg");
	this.shape_1.setTransform(55.2459,35.727,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAIgHAEQgKAIgLAAQgHAAgJgDg");
	this.shape.setTransform(74.472,45.381,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_azul_com_mov_boca_cima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boca_cima
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#433F78").p("AifhRIAhgnQArgoAzgJIBuAdQByAoARA3QAQA2gkBUQgTApgVAfIgfg2Qg/gEhIgKQiSgUg1gY");
	this.shape.setTransform(74.5791,33.6149,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69A7D7").s().p("AB3ByQg+gFhIgKQiTgUg0gYIA4iGIAhgnQArgoA0gIIBuAdQByAoAQA2QARA2glBUQgSApgWAgg");
	this.shape_1.setTransform(74.4736,33.4597,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:0,x:74.4736,y:33.4597,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:0,x:74.5791,y:33.6149,scaleX:0.7314,scaleY:0.7314}}]}).to({state:[{t:this.shape_1,p:{rotation:11.2246,x:73.2834,y:35.3331,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:11.2246,x:73.3567,y:35.5058,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:0,x:74.4701,y:33.4578,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:0,x:74.5757,y:33.6129,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:11.2248,x:73.28,y:35.3312,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:11.2248,x:73.3533,y:35.5039,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:0,x:74.4701,y:33.4578,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:0,x:74.5757,y:33.6129,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:11.2248,x:73.28,y:35.3312,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:11.2248,x:73.3533,y:35.5039,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:0,x:74.4667,y:33.4558,scaleX:0.7314,scaleY:0.7314}},{t:this.shape,p:{rotation:0,x:74.5722,y:33.6109,scaleX:0.7314,scaleY:0.7314}}]},5).to({state:[{t:this.shape_1,p:{rotation:11.2251,x:73.2765,y:35.3292,scaleX:0.7313,scaleY:0.7313}},{t:this.shape,p:{rotation:11.2251,x:73.3498,y:35.5019,scaleX:0.7313,scaleY:0.7313}}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E5").s().p("AgPAPQgHgHAAgIQAAgHAHgHQAHgGAIAAQAKAAAGAGQAHAHAAAHQAAAIgHAHQgGAGgKAAQgIAAgHgGg");
	this.shape.setTransform(13.25,15.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E5").s().p("AgPAPQgHgGAAgJQAAgHAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAHQAAAJgHAGQgHAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(19.4,7.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3D45").s().p("AhUBPQgkghAAguQAAgtAkghQAjggAxAAQAyAAAjAgQAkAhAAAtQAAAugkAhQgjAggyAAQgxAAgjggg");
	this.shape_2.setTransform(12.075,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E9E8").s().p("Ah6ByQgzgvAAhDQAAhCAzguQAzgwBHABQBIgBAzAwQAzAuAABCQAABDgzAvQgzAuhIAAQhHAAgzgug");
	this.shape_3.setTransform(20.875,19.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.Clip_Group_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815144").s().p("AghAzQAGgaATgeQALgSAGgHQAMgMAMgIIABABIgRAZIgSAYQgJAJgIAPQgKAQgEALg");
	this.shape.setTransform(45.15,19.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AAAC").s().p("AgTAUQATgkAigiIhDBlQAEgMAKgTg");
	this.shape_1.setTransform(45.15,19.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#815144").p("AEljNQgMgKgWgEQgugIg0AgQgHgGgRgBQgigCgyAWQgLAFgMAJQgsAngpAsQgZAbhCBBQgXAYg3AmQgTANgiAXQgZARgDAHQgKAcAEAgQADAlAYgEQAjgGDGgmQAJgDCtiMQCwiNAFgNQAEgMgLgng");
	this.shape_2.setTransform(31.82,34.7895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AAAC").s().p("Ak3C9QgEggAKgcQADgHAZgRIA1gkQA3gmAXgYQBChBAZgbQApgsAsgnQAMgJALgFQAygWAiACQARABAHAGQA0ggAuAIQAWAEAMAKIAMAjQALAngEAMQgFANiwCNQitCMgJADIjpAsIgEAAQgUAAgDghg");
	this.shape_3.setTransform(31.82,34.7895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_Layer_3, null, null);


(lib.Clip_Group_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C3337").s().p("AkbD6QgWgJgFgJQgKgTAMgNQALgLA/goQAzghBqhtQA0g1AqgwIhqhtIDvg2QAjAHCAB2QAPAOhIBRQhABHhBA3QgrAkhuA2Qh4A6hPASQgKADgLAAQgSAAgTgIg");
	this.shape.setTransform(33.277,25.8039);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_Layer_1, null, null);


(lib.Clip_Group_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815144").s().p("AgYA3QACgbANgfQAJgWAEgGQAKgPALgIIAAAAQgDAKgJASIgOAaQgGAKgHARQgHARgCALg");
	this.shape.setTransform(39.575,19.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AAAC").s().p("AgPAXQANgnAbgmIgxBtQABgMAIgUg");
	this.shape_1.setTransform(39.6,19.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#815144").p("AD+j9QgNgIgXAAQguAAgvAnQgIgEgRACQgiADguAeQgKAHgKALQgjApgkA2QgJAOhCBbQgUAdgvAtQgQAQgfAcQgVAUgCAIQgFAdAIAfQAKAkAXgIQAYgIBggjQBegiAIgEQAJgDCUimQCXioADgOQADgNgRgjg");
	this.shape_2.setTransform(29.0895,37.2977);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AAAC").s().p("AkYDpQgIgfAFgdQACgIAVgUIAvgsQAvgtAUgdIBLhpQAkg2AjgpQAKgLAKgHQAugeAigDQARgCAIAEQAvgnAuAAQAXAAANAIIASAiQARAjgDANQgDAOiXCoQiUCmgJADIhmAmIh4ArIgIABQgRAAgIgdg");
	this.shape_3.setTransform(29.0895,37.2977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);


(lib.Clip_Group_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C3337").s().p("AjxEcQgYgFgGgJQgTgXACgWQAEgjAwgrQAtgpBWh0QAsg6AigyIhfhMIDjhcQAlABCPBgQARAMg6BcQgzBQg4BAQglArhkBHQhsBMhLAfQgRAHgTAAQgLAAgLgDg");
	this.shape.setTransform(29.0579,28.7074);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_1, null, null);


(lib.bocabaixo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAHgHAFQgKAIgLAAQgHAAgJgDg");
	this.shape.setTransform(-0.1727,-4.7587,0.7314,0.7314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAHgHAFQgKAHgLAAQgHAAgJgCg");
	this.shape_1.setTransform(-1.9098,-5.401,0.7314,0.7314);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAHgHAFQgKAIgLAAQgHAAgJgDg");
	this.shape_2.setTransform(1.546,-3.0764,0.7314,0.7314);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAIgHAEQgKAIgLAAQgHAAgJgDg");
	this.shape_3.setTransform(6.8487,0.4221,0.7314,0.7314);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#536E40").s().p("AgXAJIANgMQAQgMASAHQgDAHgHAFQgKAIgLAAQgHAAgJgDg");
	this.shape_4.setTransform(-0.6116,-3.9175,0.7314,0.7314);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#536E40").s().p("AgVABQgLgLAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgIg");
	this.shape_5.setTransform(6.4975,-1.9488,0.7314,0.7314);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#536E40").s().p("AgVABQgLgLAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgIg");
	this.shape_6.setTransform(4.9982,-0.8883,0.7314,0.7314);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#536E40").s().p("AgVABQgLgLAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgIg");
	this.shape_7.setTransform(3.9742,-2.6071,0.7314,0.7314);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#536E40").s().p("AgVABQgLgLAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgIg");
	this.shape_8.setTransform(7.5215,-0.8883,0.7314,0.7314);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#536E40").s().p("AgVACQgLgMAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgHg");
	this.shape_9.setTransform(2.1457,-3.9049,0.7314,0.7314);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#536E40").s().p("AgVABQgLgLAcACQANABAQAEQgHAFgJAEQgIADgFAAQgKAAgHgIg");
	this.shape_10.setTransform(3.1697,-1.5465,0.7314,0.7314);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#433F78").p("AiTA5IAuARQA2AVApASIA7gBQA/gNAWg2QAEgJACgPQADgSgGgDQgEAGgGAGQgLALgIgEQgugVg5gjQhFgtgcgf");
	this.shape_11.setTransform(0.1446,-0.0154,0.7314,0.7314);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#69A7D7").s().p("AhJA3IghgNIArh8QAUAWAzAhQApAaAiAPQAGACAIgIIAHgIQAFACgDANQgBALgDAGQgQAoguAKIgrABQgegNgogPg");
	this.shape_12.setTransform(0.0196,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD4874").s().p("AAeA+QgKgCg0goQg1gmgDgHQgFgKACgNQACgQAOACQAWAECJBUIACACQADAFAEAKQADAKgbAGQgSAEgMAAIgJgBg");
	this.shape_13.setTransform(1.5579,-2.1191,0.7314,0.7314);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#433F78").p("AgihIICXBGQAHAHAAABQADAJgJAQQgLATgeANIgcAKIivhk");
	this.shape_14.setTransform(1.104,-0.3852,0.7314,0.7314);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#69A7D7").s().p("AiCgjIBnglICXBGIAHAIQADAJgJAQQgLATgeANIgcAKg");
	this.shape_15.setTransform(0.6095,-0.4187,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-9.3,24.799999999999997,18.6);


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
	this.instance = new lib.splash_gr_08ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.3,406.45,0.741,0.741,0,0,0,496.4,233.6);

	this.instance_1 = new lib.penasai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.6,388.7,0.4307,0.4307,0,0,0,286.6,335.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},116).wait(222));

}).prototype = p = new cjs.MovieClip();


(lib.mcpassarorosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.mc_passaro_rosa_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-455.1,-47.4,1,1,0,0,0,-455.1,-47.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-710.3,-263.6,509.99999999999994,432.8);


(lib.mcpassaroazul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.mc_passaro_azul_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(0.6,71.9,1,1,0,0,0,0.6,71.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-133.2,482.7,409.8);


(lib.mcpassaroamarelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// voo_passaro_amarelo_obj_
	this.voo_passaro_amarelo = new lib.mc_passaro_amarelo_voo_passaro_amarelo();
	this.voo_passaro_amarelo.name = "voo_passaro_amarelo";
	this.voo_passaro_amarelo.parent = this;
	this.voo_passaro_amarelo.setTransform(33.4,-0.1,1,1,0,0,0,33.4,-0.1);
	this.voo_passaro_amarelo.depth = 0;
	this.voo_passaro_amarelo.isAttachedToCamera = 0
	this.voo_passaro_amarelo.isAttachedToMask = 0
	this.voo_passaro_amarelo.layerDepth = 0
	this.voo_passaro_amarelo.layerIndex = 0
	this.voo_passaro_amarelo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.voo_passaro_amarelo).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.7,-221.5,540.5,443);


(lib.mc_dino_azul_com_mov_boca_baixo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boca_baixo
	this.instance = new lib.bocabaixo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.9,42.1,1,1,0,0,0,-10.2,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regY:-3.6,rotation:-9.7105,y:42.2},0).wait(5).to({regY:-3.7,rotation:0,y:42.1},0).wait(5).to({regY:-3.6,rotation:-9.7105,y:42.2},0).wait(5).to({regY:-3.7,rotation:0,y:42.1},0).wait(5).to({regY:-3.6,rotation:-9.7105,y:42.2},0).wait(5).to({regY:-3.7,rotation:0,y:42.1},0).wait(5).to({regY:-3.6,rotation:-9.7105,y:42.2},0).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkbD6QgWgJgFgJQgKgTAMgNQALgLA/goQAzghBqhtQA0g1AqgwIhqhtIDvg2QAjAHCAB2QAPAOhIBRQhABHhBA3QgrAkhuA2Qh4A6hPASQgKADgLAAQgSAAgTgIg");
	mask.setTransform(33.277,25.8039);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(31.6,34.8,1,1,0,0,0,31.6,34.8);
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
	this.Layer_1 = new lib.Clip_Group_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(33.3,25.8,1,1,0,0,0,33.3,25.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(1.8,0,63,51.6), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxEcQgYgFgGgJQgTgXACgWQAEgjAwgrQAtgpBWh0QAsg6AigyIhfhMIDjhcQAlABCPBgQARAMg6BcQgzBQg4BAQglArhkBHQhsBMhLAfQgRAHgTAAQgLAAgLgDg");
	mask.setTransform(29.0579,28.7074);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(28.7,37.3,1,1,0,0,0,28.7,37.3);
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
	mask.graphics.p("Ah6ByQgzgwAAhCQAAhBAzgwQAzguBHgBQBIABAzAuQAzAwAABBQAABCgzAwQgzAuhIABQhHgBgzgug");
	mask.setTransform(20.725,19.4);

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

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.3,3.4,34.900000000000006,31.9), null);


(lib.Scene_1_passaro_rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// passaro_rosa
	this.instance = new lib.mcpassarorosa();
	this.instance.parent = this;
	this.instance.setTransform(-132.35,275.2,0.2717,0.2717,0,0,0,0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,x:317.35,y:275.25},114).to({regY:-0.2,x:786.05,y:-79},203).wait(21));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_passaro_azul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// passaro_azul
	this.instance = new lib.mcpassaroazul();
	this.instance.parent = this;
	this.instance.setTransform(-166.05,308.55,0.2717,0.2717,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-165.9,308.6,-91.3,315.3,-5.9,319.6,164.9,328.3,219,316.4,229.8,314,256.2,308.4,281.4,302.9,301.8,297.6,360.5,282.5,410.5,261.9,552.9,203.3,647.5,92.2,739.4,-15.8,793,-73.1,816.1,-97.6,825.5,-106.3]}},316).to({guide:{path:[825.4,-106.4,827,-107.8,828.1,-108.8]}},1).wait(21));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_passaro_amarelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// passaro_amarelo
	this.instance = new lib.mcpassaroamarelo();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,211.3,0.2717,0.2717,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-108.4,211.3,-102.9,216.6,-92.2,224.3,-70.2,240.4,-43,253.9,44.3,297.1,151.6,298.5,295.2,300.4,391.1,290.8,506.3,279.2,566.7,250.2,597.9,235.3,655.9,187.4,676.4,170.5,698,151.4,716.1,135.4,734.8,117.9,752.5,101.4,770.8,83.7,831.8,24.3,877.1,-27.7,923,-80.5,938.6,-109.7]}},316).to({guide:{path:[938.6,-109.7,939.5,-111.5,940.3,-113.2]}},1).wait(21));

}).prototype = p = new cjs.MovieClip();


(lib.mcdinoazulcommov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// boca_cima_obj_
	this.boca_cima = new lib.mc_dino_azul_com_mov_boca_cima();
	this.boca_cima.name = "boca_cima";
	this.boca_cima.parent = this;
	this.boca_cima.setTransform(74.5,33.6,1,1,0,0,0,74.5,33.6);
	this.boca_cima.depth = 0;
	this.boca_cima.isAttachedToCamera = 0
	this.boca_cima.isAttachedToMask = 0
	this.boca_cima.layerDepth = 0
	this.boca_cima.layerIndex = 0
	this.boca_cima.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boca_cima).wait(40));

	// boca_baixo_obj_
	this.boca_baixo = new lib.mc_dino_azul_com_mov_boca_baixo();
	this.boca_baixo.name = "boca_baixo";
	this.boca_baixo.parent = this;
	this.boca_baixo.setTransform(65.3,45.8,1,1,0,0,0,65.3,45.8);
	this.boca_baixo.depth = 0;
	this.boca_baixo.isAttachedToCamera = 0
	this.boca_baixo.isAttachedToMask = 0
	this.boca_baixo.layerDepth = 0
	this.boca_baixo.layerIndex = 1
	this.boca_baixo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boca_baixo).wait(40));

	// Layer_5_obj_
	this.Layer_5 = new lib.mc_dino_azul_com_mov_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.setTransform(74.5,45.4,1,1,0,0,0,74.5,45.4);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 2
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(40));

	// Layer_14_obj_
	this.Layer_14 = new lib.mc_dino_azul_com_mov_Layer_14();
	this.Layer_14.name = "Layer_14";
	this.Layer_14.parent = this;
	this.Layer_14.setTransform(54.5,35.7,1,1,0,0,0,54.5,35.7);
	this.Layer_14.depth = 0;
	this.Layer_14.isAttachedToCamera = 0
	this.Layer_14.isAttachedToMask = 0
	this.Layer_14.layerDepth = 0
	this.Layer_14.layerIndex = 3
	this.Layer_14.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_14).wait(40));

	// Layer_15_obj_
	this.Layer_15 = new lib.mc_dino_azul_com_mov_Layer_15();
	this.Layer_15.name = "Layer_15";
	this.Layer_15.parent = this;
	this.Layer_15.setTransform(48.1,26.5,1,1,0,0,0,48.1,26.5);
	this.Layer_15.depth = 0;
	this.Layer_15.isAttachedToCamera = 0
	this.Layer_15.isAttachedToMask = 0
	this.Layer_15.layerDepth = 0
	this.Layer_15.layerIndex = 4
	this.Layer_15.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_15).wait(40));

	// Layer_16_obj_
	this.Layer_16 = new lib.mc_dino_azul_com_mov_Layer_16();
	this.Layer_16.name = "Layer_16";
	this.Layer_16.parent = this;
	this.Layer_16.setTransform(53.5,20.2,1,1,0,0,0,53.5,20.2);
	this.Layer_16.depth = 0;
	this.Layer_16.isAttachedToCamera = 0
	this.Layer_16.isAttachedToMask = 0
	this.Layer_16.layerDepth = 0
	this.Layer_16.layerIndex = 5
	this.Layer_16.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_16).wait(40));

	// Layer_17_obj_
	this.Layer_17 = new lib.mc_dino_azul_com_mov_Layer_17();
	this.Layer_17.name = "Layer_17";
	this.Layer_17.parent = this;
	this.Layer_17.setTransform(52.8,17.2,1,1,0,0,0,52.8,17.2);
	this.Layer_17.depth = 0;
	this.Layer_17.isAttachedToCamera = 0
	this.Layer_17.isAttachedToMask = 0
	this.Layer_17.layerDepth = 0
	this.Layer_17.layerIndex = 6
	this.Layer_17.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_17).wait(40));

	// Layer_18_obj_
	this.Layer_18 = new lib.mc_dino_azul_com_mov_Layer_18();
	this.Layer_18.name = "Layer_18";
	this.Layer_18.parent = this;
	this.Layer_18.setTransform(55.5,-17.1,1,1,0,0,0,55.5,-17.1);
	this.Layer_18.depth = 0;
	this.Layer_18.isAttachedToCamera = 0
	this.Layer_18.isAttachedToMask = 0
	this.Layer_18.layerDepth = 0
	this.Layer_18.layerIndex = 7
	this.Layer_18.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_18).wait(40));

	// Layer_22_obj_
	this.Layer_22 = new lib.mc_dino_azul_com_mov_Layer_22();
	this.Layer_22.name = "Layer_22";
	this.Layer_22.parent = this;
	this.Layer_22.setTransform(43.1,10.2,1,1,0,0,0,43.1,10.2);
	this.Layer_22.depth = 0;
	this.Layer_22.isAttachedToCamera = 0
	this.Layer_22.isAttachedToMask = 0
	this.Layer_22.layerDepth = 0
	this.Layer_22.layerIndex = 8
	this.Layer_22.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_22).wait(40));

	// Layer_23_obj_
	this.Layer_23 = new lib.mc_dino_azul_com_mov_Layer_23();
	this.Layer_23.name = "Layer_23";
	this.Layer_23.parent = this;
	this.Layer_23.setTransform(19.7,-3.3,1,1,0,0,0,19.7,-3.3);
	this.Layer_23.depth = 0;
	this.Layer_23.isAttachedToCamera = 0
	this.Layer_23.isAttachedToMask = 0
	this.Layer_23.layerDepth = 0
	this.Layer_23.layerIndex = 9
	this.Layer_23.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_23).wait(40));

	// Layer_25_obj_
	this.Layer_25 = new lib.mc_dino_azul_com_mov_Layer_25();
	this.Layer_25.name = "Layer_25";
	this.Layer_25.parent = this;
	this.Layer_25.setTransform(13.2,48.3,1,1,0,0,0,13.2,48.3);
	this.Layer_25.depth = 0;
	this.Layer_25.isAttachedToCamera = 0
	this.Layer_25.isAttachedToMask = 0
	this.Layer_25.layerDepth = 0
	this.Layer_25.layerIndex = 10
	this.Layer_25.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_25).wait(40));

	// Layer_26_obj_
	this.Layer_26 = new lib.mc_dino_azul_com_mov_Layer_26();
	this.Layer_26.name = "Layer_26";
	this.Layer_26.parent = this;
	this.Layer_26.setTransform(-43.5,10.7,1,1,0,0,0,-43.5,10.7);
	this.Layer_26.depth = 0;
	this.Layer_26.isAttachedToCamera = 0
	this.Layer_26.isAttachedToMask = 0
	this.Layer_26.layerDepth = 0
	this.Layer_26.layerIndex = 11
	this.Layer_26.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_26).wait(40));

	// Layer_27_obj_
	this.Layer_27 = new lib.mc_dino_azul_com_mov_Layer_27();
	this.Layer_27.name = "Layer_27";
	this.Layer_27.parent = this;
	this.Layer_27.setTransform(-62.5,-32.3,1,1,0,0,0,-62.5,-32.3);
	this.Layer_27.depth = 0;
	this.Layer_27.isAttachedToCamera = 0
	this.Layer_27.isAttachedToMask = 0
	this.Layer_27.layerDepth = 0
	this.Layer_27.layerIndex = 12
	this.Layer_27.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_27).wait(40));

	// Layer_28_obj_
	this.Layer_28 = new lib.mc_dino_azul_com_mov_Layer_28();
	this.Layer_28.name = "Layer_28";
	this.Layer_28.parent = this;
	this.Layer_28.setTransform(75.4,-18.6,1,1,0,0,0,75.4,-18.6);
	this.Layer_28.depth = 0;
	this.Layer_28.isAttachedToCamera = 0
	this.Layer_28.isAttachedToMask = 0
	this.Layer_28.layerDepth = 0
	this.Layer_28.layerIndex = 13
	this.Layer_28.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_28).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-61.1,182.4,122.2);


(lib.mc_dino_rindo_ptero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ptero
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999443").s().p("AARAeQgVgCgfgYQgggXATgIQAQgHAlARQATAJAPAJQAZANgMAJQgJAHgRAAIgJAAg");
	this.shape.setTransform(117.4803,-166.2973,0.6746,0.6746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#373535").p("ABMBEQgDgOgIgUQgQgmgYgZQgXgagrgJIgmgD");
	this.shape_1.setTransform(129.1663,-133.2083,0.6745,0.6745);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBE84D").s().p("AhNhDIAmADQArAJAYAaQAXAZAQAmQAIAUADAOg");
	this.shape_2.setTransform(129.013,-133.209,0.6745,0.6745);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AglCiQg2gKgrgtQgXgagKgVQgLgaACgfQABgYALgeQALgeAPgVIgBAAQAigwBAgLQAZgEAfADQAdADAbAJQA7AWAcAxQANAYAEAdQAFAagEAdQACg/gagqQgdgug4gRQgagIgbgDQgggCgVAEQgbAEgXAOQgXAOgOAVIgBABQghAzgDAvQgCAdAKAWQAKAXATAWQAnAsAzALQA7AMAwgSQgVALggADIgTABQgRAAgTgCg");
	this.shape_3.setTransform(138.6619,-141.2106,0.6745,0.6745);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(137.65,-142.25,0.6745,0.6745,0,0,0,19.3,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").p("AinmrIADgDIAkAxQAyBCBGBUQBMBbBDD4QA9DigIBYQgPgbgbglQgsg6g9g8QhGhFhWAHQgaADgaAJIgTAKQAMhBAMhLQAXiVgCgxQgDg9gXjkg");
	this.shape_4.setTransform(172.244,-74.8132,0.6746,0.6746);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#449966").s().p("ACRFrQgsg7g9g8QhGhFhWAIQgaACgaAKIgTAJQAMhBAMhLQAXiVgCgwQgDg+gXjkIADgDIAkAyQAyBCBGBTQBMBcBDD4QA9DigIBYQgPgcgbgkg");
	this.shape_5.setTransform(172.3019,-75.1223,0.6746,0.6746);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").p("AOyH4QgMgsi/hkQi3hfhUgQQhAgMghg1QgKgRgGgTIgEgPQgZhXgbhVQg3iugMgCQhPgZhlgUQjIgoisATQitASkaBFIj4BBIBVgnIEWhYQEyhaCHgLQBlgICJAYQBeARBnAfIAHgFQgLgJgBgZQgBgnAAgBQgCgJgVggQgSgaAHgEQAHgEAnASQATAJASAKQgIgoAEgdQAFgcAMAEQAKADAOA2QAHAbAEAaQAMg6AJgUIAHgJIARAjQAPAogEAgQgDAegkAiQglAfgDAGQgGALAjBiQAkBmAdAtQAaAmASBIQAJAkADAcQAogHBFAfQAmARA6AhQAiASBpAZQBpAaA8AFQAzAEAhAjQARARAGAQ");
	this.shape_6.setTransform(43.5747,-121.519,0.6745,0.6745);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBE84D").s().p("ALSFoQi3hfhUgQQhBgMggg1QgLgRgFgTIgEgPQgZhXgbhVQg4iugMgCQhOgZhmgUQjIgoirATQitASkaBFIj4BBIBUgnIEXhYQExhaCIgLQBlgICIAYQBfARBnAfIAHgFQgLgJgBgZIgBgoQgCgJgWggQgRgaAHgEQAHgEAmASQAUAJARAKQgHgoAEgdQAFgcAMAEQAKADANA2QAIAbAEAaQAMg6AJgUIAHgJIAQAjQAQAogEAgQgDAeglAiQgkAfgDAGQgGALAiBiQAlBmAdAtQAaAmARBIQAKAkADAcQAogHBFAfQAlARA7AhQAiASBpAZQBpAaA8AFQAyAEAiAjQAQARAHAQIhwB+QgMgsi/hkg");
	this.shape_7.setTransform(45.0003,-121.519,0.6745,0.6745);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").p("AGRjdQghhnj0gcQh+gwiGgpQkMhQgkAmQgBAIABAKQABAWAJAQQAMAZAaAdQASAUANALQAIAHAtA4QAyA/APAQQAbAdBCA1QBJA8AuAaQBzBDArBZQAWAsAbAiQANARAJAIQAXAaAxAJQAZAEAUAAQgVAVgOALQgWARgVAHQhBAXhvgdQhBgRhNAAQgzAAh3ALQhTAHg+gNIgtgPQAZArBSAiQAqARAkAIQAtAUDFAmQDHAnBkAIQBUAGAwgpQAYgVAHgW");
	this.shape_8.setTransform(104.4652,-147.2249,0.6745,0.6745);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBE84D").s().p("AEaHwQhkgIjGgnQjFgmgugUQgkgIgqgRQhSgigZgrIAtAPQA/ANBSgHQB3gLAzAAQBNAABBARQBvAdBBgXQAWgHAVgRQAOgLAVgVQgUAAgZgEQgwgJgYgaQgIgIgOgRQgbgigWgsQgrhZhyhDQgvgahJg8QhCg1gbgdQgOgQgyg/Qgug4gIgHQgMgLgSgUQgagdgNgZQgJgQgBgWQgBgKABgIQAkgmEMBQQCGApB+AwQD1AcAgBnIAvJ/QgHAWgYAVQgpAjhFAAIgWAAg");
	this.shape_9.setTransform(104.6624,-147.2249,0.6745,0.6745);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").p("ABfChQgbgEgigOQhDgbgkgsQgpgzgHgKQgDgFgcgxQgohHgCgDQgXgag0AAQABgLAEgKQAJgVAUgBQAQAAAjAUQAbARAKAJQBNBIAqAWQA2AeAnASIB2AKIBOA6IhBB0g");
	this.shape_10.setTransform(110.9587,-135.7777,0.6746,0.6746);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D569A2").s().p("ABgCiQgbgFgigNQhDgbgkgtQgpgygHgLIggg2IgqhJQgWgag0gBQAAgKAFgLQAJgVATAAQARgBAiAVQAbAQALAKQBMBHAqAXQA2AeAoASIB2AJIBNA6IhAB0g");
	this.shape_11.setTransform(110.9166,-135.8022,0.6746,0.6746);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").p("AknAOQA1ADA7gRQAegKATgKIBBgVQBMgSA6ANQA7ANA6gBQAdgBARgDIArgKQAYAYAvAIQAYAEATgBQgVAUgOALQgVARgWAIQhCAWhugdQhBgRhNAAQgxAAh5ALQhyAKhDgbIgJgEIAHAAQARABA0AEg");
	this.shape_12.setTransform(99.8622,-128.5932,0.6746,0.6746);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C33C42").s().p("AB9AkQhCgRhMAAQgxAAh5ALQhyAKhDgbIgJgEIAHAAIBFAFQA1ADA7gRQAdgKATgKIBBgVQBNgSA6ANQA7ANA5gBQAdgBARgDIAsgKQAYAYAvAIQAXAEAUgBQgWAUgNALQgVARgXAIQgcAJglAAQgwAAg+gQg");
	this.shape_13.setTransform(100.2749,-128.5932,0.6746,0.6746);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").p("AlqBZQCigGDsBPQBPAaA7AaQAhAOA7AcQAwAVAWACQAUACADgOQACgMgVgdIgVgbQhOhWiOiAQhShLijhmIiThX");
	this.shape_14.setTransform(179.9735,-131.0694,0.6745,0.6745);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBE84D").s().p("AFSEXQgWgCgwgVIhcgqQg7gahPgaQjshPiiAGIBFlwICTBXQCjBmBSBLQCOCABOBWIAVAbQAVAdgCAMQgCANgQAAIgFgBg");
	this.shape_15.setTransform(179.8111,-131.0929,0.6745,0.6745);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").p("AlQHYIAogfQArgpAIg0QAJg0gDhAIgGg2IAphBQAphJAIgsQAIgtAFhHQAEg0AAgQQAAgeAMiKQAOilAMgIQAUgMAtgDQA4gFA9APQBQATBNA3QBZA+AIA+IgcDxQgBAngVA9QgKAggKAXQgfA5g9AoQgwAggxALQggAHgvBIIgqBFIgiBFQgjBPgDA3");
	this.shape_16.setTransform(137.9249,-126.2074,0.6745,0.6745);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBE84D").s().p("AlQHWIApgfQArgpAIg0QAJg0gEhAIgFg2IAohBQAqhJAIgsQAIgtAFhHQADg0AAgQQAAgeANiKQAOilAMgIQAUgMAtgDQA3gFA+APQBPATBOA3QBZA+AHA+IgbDxQgBAngVA9QgKAggLAXQgeA5g+AoQgvAggxALQggAHgvBIIgqBFIgjBFQgiBPgDA3g");
	this.shape_17.setTransform(137.8575,-126.048,0.6745,0.6745);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").p("AhOjoQgOgUAQgWQAfgfAEgQQAFgPgFg3QAAgHABgIQADgRAKgEQAKgEAJARQAIAOACATQAJA+gBAGQgDAIAZgmQAYgmAFgPQAEgPAKgDQAIgCABAGQACAJAAAXQgBAfgHAXQgGAXgpAjIgoAeIAMEBQADA0gJCBQgCAdgSBSQgTBZgKATQgKARgGgUIgEgYQARjcABhMQAChGgChaQgDhsgGgvQgJgFgGgKg");
	this.shape_18.setTransform(162.7333,-88.7444,0.6745,0.6745);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBE84D").s().p("AhEGiIgEgYQARjcABhMQAChGgChaQgDhsgGgvQgJgFgGgKQgOgUAQgWQAfgfAEgQQAFgPgFg3QAAgHABgIQADgRAKgEQAKgEAJARQAIAOACATQAJA+gBAGQgDAIAZgmQAYgmAFgPQAEgPAKgDQAIgCABAGQACAJAAAXQgBAfgHAXQgGAXgpAjIgoAeIAMEBQADA0gJCBQgCAdgSBSQgTBZgKATQgFAIgEAAQgEAAgDgLg");
	this.shape_19.setTransform(162.7333,-88.7444,0.6745,0.6745);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").p("AAhADQgCg2gNgTQgIgMgGgCIgEABQgCgBgDADQgGAFABAQQACAQgGAcQgGAXgEAGQgCADgDAMQgCAGgBAGQgBAuACgBQA+g7ACgXg");
	this.shape_20.setTransform(164.6381,-113.8122,0.6746,0.6746);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBE84D").s().p("AggAoIADgMQADgMACgDQAEgGAGgXQAGgcgCgQQgBgQAGgFQADgDACABIAEgBQAGACAIAMQANATACA2QgCAXg+A7IAAAAQgCAAABgtg");
	this.shape_21.setTransform(164.6381,-113.8094,0.6746,0.6746);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").p("AjrAuIAfgKQAqgIA5APQBuAcBWADIAMghQAUgoAlgmQAlgoARgiQAJgQACgJIAICEIhDCBQgFAJgKAJQgUASgYgCQgsgGgfgCQg4gCg4ASQg4ASg3gOIgsgS");
	this.shape_22.setTransform(143.8603,-91.2789,0.6745,0.6745);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EBE84D").s().p("Ai+CXIgsgSIAAhrIAggKQAqgIA5APQBuAcBWADIAMghQAUgnAkgnQAmgoARgiQAJgQACgJIAICEIhECBQgEAJgLAJQgUASgXgCQgtgGgfgCQg4gCg3ASQgfAKggAAQgYAAgZgGg");
	this.shape_23.setTransform(143.7515,-89.9505,0.6745,0.6745);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").p("Aifk4IAPCcQANCtgLBaIABAfQAEAkAVAaQAfAlAIAJQAaAcAWAMIAaASQAaARAIgCQAAgKgDgOQgGgbgNgRIAsAQQAxAPAbgGQhUg2gYgUIA6AFQA+gBAQgcQg8gHgpgQIAcgJQAdgOAIgSQgjAAgqgEQhRgHgegRQgCgWACgeQACg9APgsQARg1A0hnQAagzAWgo");
	this.shape_24.setTransform(111.8838,-8.8017,0.6745,0.6745);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBE84D").s().p("AgBEwIgagSQgWgMgbgcIgmguQgVgagFgkIAAgfQALhagNitIgQicIDjgGQgXAogaAzQgzBngSA1QgOAsgDA9QgBAeABAWQAfARBRAHQApAEAjAAQgIASgdAOIgbAJQApAQA7AHQgPAcg+ABIg6gFQAYAUBUA2QgbAGgxgPIgsgQQANARAFAbQADAOAAAKIgBAAQgJAAgXgPg");
	this.shape_25.setTransform(111.7787,-8.8017,0.6745,0.6745);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").p("AFWBwQhQABhiAEQjCAJhZAUQgNAEgTAAQglABgZgWQgtgigWgYQgpgqgPg4QgCgbACgOIAXAOQARANAJANQgEgIgDgLQgNgnAJglIAQAcQAUAgANAOQgCgRACgUQAFgoAagTIABAlQADAqAMAYIAPgeQATghASgKIgEBSQgBBVALAUIBJgDQBRgIAogXQBAglB4gyAkfgcQAEAGADAG");
	this.shape_26.setTransform(62.2703,-47.889,0.6745,0.6745);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBE84D").s().p("AjYB+QgsgigWgYQgpgqgPg3QgCgcACgNIAXAOQARANAJANQgEgJgEgLQgMgnAJglIAQAdQATAfAOAOQgDgQADgUQAFgoAagTIABAlQACApAMAZIAQgfQATghARgJIgDBRQgBBVALAVIBJgEQBQgIAogXQBBgjB4gzIBsCgQhQABhiAFQjCAJhZATQgNAFgTAAIgCAAQgkAAgZgWg");
	this.shape_27.setTransform(62.4369,-47.7288,0.6745,0.6745);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").p("ABbm7QgSAJgTAYQgnAxgEBRQgdAGgqAVQhWArhABNQhWBfgcAlQgqA2ggBnIAPA+QAXBEAqAWQAhARBTAhQBOAkAzA9QAzA+BigPQAygHAqgTQADABA3hMQA4hPAagsQAZgrAMhHQAJg4AAg/QAAgsADhDIADg7QAEgXAGgbQANg2AMgWQAKgRgOg4QgQg+AFgaQgkgXgtgXQhbguguABQgNAHgPAMQgeAXgNASg");
	this.shape_28.setTransform(104.4399,-61.4477,0.6746,0.6746);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBE84D").s().p("AhJHHQgzg9hOgkQhTghghgRQgqgWgXhEIgPg+QAghnAqg2QAcglBWhfQBAhNBWgrQAqgVAdgGQAEhRAngxQATgYASgJQANgSAegXQAPgMANgHQAugBBbAuQAtAXAkAXQgFAaAQA+QAOA4gKARQgMAWgNA2QgGAbgEAXIgDA7QgDBDAAAsQAAA/gJA4QgMBHgZArQgaAsg4BPQg3BMgDgBQgqATgyAHQgTACgSAAQhHAAgpgxg");
	this.shape_29.setTransform(104.4461,-61.4477,0.6746,0.6746);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").p("AEdlrQh0hQg8grQhQg5gggdQhKhDgvhSQgthOg3hNIgug+QhIgZhjgYQjFgviIALQiHALkxBaIkXBYIBHAEQBYAHBSAMQEGAnBsBOQBRA7AcAYQAtApAYArQAxBYAHDjICMA3QCWBBAwAzQAZAaATApQALAYATA0QAoBiBJAvIABARQgBAVgFAVQgRBFg8AvQg7Aug6A1IgtArICXAhQCnAuBPBBQBfBOBcBgQBbBfAKAgQAIAcAmgRQAkgRAAgKQAAgXAkgzQA3hLBggjIARAJQAWAKAWAEQBIAPA0gtQA0gsAng0QATgbAJgRIAPgTQAVgWAdgOQBcguCMAxIB8AwIBihJQBjhUAGg9QAJhVg9jkQhEj5hNhcQhGhTgyhCIgkgyQixCPgUAOQgVAQhBAXQhOAbgugCQgsgBhwgvIhogvg");
	this.shape_30.setTransform(82.8237,-76.053,0.6746,0.6746);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#65BE89").s().p("AEyPxQgKgghbhfQhbhghfhOQhQhBinguIiXghIAugrQA5g1A8guQA7gvARhFQAGgVAAgVIAAgRQhJgvgohiQgUg0gLgYQgTgpgYgaQgwgziWhBIiNg3QgHjjgwhYQgYgrgugpQgcgYhQg7QhthOkGgnQhSgMhXgHIhHgEIEWhYQExhaCIgLQCHgLDGAvQBjAYBHAZIAvA+QA3BNAtBOQAuBSBLBDQAfAdBQA5ICwB7IDTBMIBnAvQBxAvArABQAuACBOgbQBBgXAWgQQAUgOCxiPIAjAyQAyBCBHBTQBNBcBDD5QA+DkgJBVQgGA9hkBUIhiBJIh8gwQiLgxhdAuQgdAOgUAWIgPATQgJARgUAbQgnA0g0AsQg0AthHgPQgXgEgWgKIgRgJQhfAjg3BLQglAzAAAXQAAAKgkARQgOAGgKAAQgQAAgGgRg");
	this.shape_31.setTransform(83.5838,-76.053,0.6746,0.6746);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").p("AFWBwQhQABhiAEQjCAJhZAUQgNAEgTAAQglABgZgWQgtgigWgYQgpgqgPg4QgCgbACgOIAXAOQARANAJANQAEAGADAGAkfgcQgEgIgDgLQgNgnAJglIAQAcQAUAgANAOQgCgRACgUQAFgoAagTIABAlQADAqAMAYIAPgeQATghASgKIgEBSQgBBVALAUIBJgDQBRgIAogXQBAglB4gy");
	this.shape_32.setTransform(94.7476,-16.8973,0.6745,0.6745,-60.0008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31,p:{rotation:0,x:83.5838,y:-76.053,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_30,p:{rotation:0,x:82.8237,y:-76.053,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_29,p:{rotation:0,x:104.4461,y:-61.4477,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_28,p:{rotation:0,x:104.4399,y:-61.4477,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_27,p:{rotation:0,x:62.4369,y:-47.7288}},{t:this.shape_26,p:{rotation:0,x:62.2703,y:-47.889}},{t:this.shape_25,p:{rotation:0,x:111.7787,y:-8.8017}},{t:this.shape_24,p:{rotation:0,x:111.8838,y:-8.8017}},{t:this.shape_23,p:{rotation:0,x:143.7515,y:-89.9505}},{t:this.shape_22,p:{rotation:0,x:143.8603,y:-91.2789}},{t:this.shape_21,p:{rotation:0,x:164.6381,y:-113.8094,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_20,p:{rotation:0,x:164.6381,y:-113.8122,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_19,p:{rotation:0,x:162.7333,y:-88.7444}},{t:this.shape_18,p:{rotation:0,x:162.7333,y:-88.7444}},{t:this.shape_17,p:{rotation:0,x:137.8575,y:-126.048,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_16,p:{rotation:0,x:137.9249,y:-126.2074,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_15,p:{rotation:0,x:179.8111,y:-131.0929}},{t:this.shape_14,p:{rotation:0,x:179.9735,y:-131.0694}},{t:this.shape_13,p:{rotation:0,x:100.2749,y:-128.5932,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_12,p:{rotation:0,x:99.8622,y:-128.5932,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_11,p:{rotation:0,x:110.9166,y:-135.8022,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_10,p:{rotation:0,x:110.9587,y:-135.7777,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_9,p:{rotation:0,x:104.6624,y:-147.2249}},{t:this.shape_8,p:{rotation:0,x:104.4652,y:-147.2249}},{t:this.shape_7,p:{rotation:0,x:45.0003,y:-121.519}},{t:this.shape_6,p:{rotation:0,x:43.5747,y:-121.519}},{t:this.shape_5,p:{rotation:0,x:172.3019,y:-75.1223,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_4,p:{rotation:0,x:172.244,y:-74.8132,scaleX:0.6746,scaleY:0.6746}},{t:this.instance,p:{regX:19.3,regY:17.7,rotation:0,x:137.65,y:-142.25}},{t:this.shape_3,p:{rotation:0,x:138.6619,y:-141.2106,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_2,p:{rotation:0,x:129.013,y:-133.209}},{t:this.shape_1,p:{rotation:0,x:129.1663,y:-133.2083}},{t:this.shape,p:{rotation:0,x:117.4803,y:-166.2973,scaleX:0.6746,scaleY:0.6746}}]}).to({state:[{t:this.shape_31,p:{rotation:-60.0005,x:81.0123,y:-49.433,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_30,p:{rotation:-60.0005,x:80.6323,y:-48.7748,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_29,p:{rotation:-60.0005,x:104.0913,y:-60.1976,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_28,p:{rotation:-60.0005,x:104.0882,y:-60.1922,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_27,p:{rotation:-60.0008,x:94.9696,y:-16.9614}},{t:this.shape_32,p:{rotation:-60.0008,x:94.7476,y:-16.8973}},{t:this.shape_25,p:{rotation:-60.0008,x:153.3509,y:-40.2295}},{t:this.shape_24,p:{rotation:-60.0008,x:153.4034,y:-40.3205}},{t:this.shape_23,p:{rotation:-60.0008,x:99.0605,y:-108.4909}},{t:this.shape_22,p:{rotation:-60.0008,x:97.9645,y:-109.2493}},{t:this.shape_21,p:{rotation:-60.0005,x:88.8405,y:-138.5037,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_20,p:{rotation:-60.0005,x:88.838,y:-138.5051,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_19,p:{rotation:-60.0008,x:109.5955,y:-124.3264}},{t:this.shape_18,p:{rotation:-60.0008,x:109.5955,y:-124.3264}},{t:this.shape_17,p:{rotation:-60.0011,x:64.848,y:-121.4318,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_16,p:{rotation:-60.0011,x:64.7436,y:-121.5698,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_15,p:{rotation:-60.0008,x:81.4596,y:-160.2893}},{t:this.shape_14,p:{rotation:-60.0008,x:81.5612,y:-160.4182}},{t:this.shape_13,p:{rotation:-60.0005,x:43.8576,y:-90.1565,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_12,p:{rotation:-60.0005,x:43.6512,y:-89.7991,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_11,p:{rotation:-60.0005,x:42.9351,y:-102.9766,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_10,p:{rotation:-60.0005,x:42.9774,y:-103.0008,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_9,p:{rotation:-60.0008,x:29.9165,y:-103.2752}},{t:this.shape_8,p:{rotation:-60.0008,x:29.8179,y:-103.1043}},{t:this.shape_7,p:{rotation:-60.0008,x:22.3484,y:-38.7545}},{t:this.shape_6,p:{rotation:-60.0008,x:21.6356,y:-37.5199}},{t:this.shape_5,p:{rotation:-60.0005,x:126.1754,y:-125.7979,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_4,p:{rotation:-60.0005,x:126.4142,y:-125.5932,scaleX:0.6746,scaleY:0.6746}},{t:this.instance,p:{regX:19.6,regY:17.9,rotation:-60.0008,x:50.65,y:-129.45}},{t:this.shape_3,p:{rotation:-60.0011,x:52.1192,y:-129.7092,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_2,p:{rotation:-60.0008,x:54.2292,y:-117.3554}},{t:this.shape_1,p:{rotation:-60.0008,x:54.3065,y:-117.4879}},{t:this.shape,p:{rotation:-60.0005,x:19.808,y:-123.9077,scaleX:0.6746,scaleY:0.6746}}]},6).to({state:[{t:this.shape_31,p:{rotation:0,x:83.5765,y:-76.0554,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_30,p:{rotation:0,x:82.8164,y:-76.0554,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_29,p:{rotation:0,x:104.4384,y:-61.4504,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_28,p:{rotation:0,x:104.4322,y:-61.4504,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_27,p:{rotation:0,x:62.4233,y:-47.7348}},{t:this.shape_32,p:{rotation:0,x:62.2567,y:-47.895}},{t:this.shape_25,p:{rotation:0,x:111.7629,y:-8.8094}},{t:this.shape_24,p:{rotation:0,x:111.868,y:-8.8094}},{t:this.shape_23,p:{rotation:0,x:143.7342,y:-89.9546}},{t:this.shape_22,p:{rotation:0,x:143.843,y:-91.283}},{t:this.shape_21,p:{rotation:0,x:164.629,y:-113.8109,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_20,p:{rotation:0,x:164.629,y:-113.8138,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_19,p:{rotation:0,x:162.7151,y:-88.7486}},{t:this.shape_18,p:{rotation:0,x:162.7151,y:-88.7486}},{t:this.shape_17,p:{rotation:0,x:137.832,y:-126.0518,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_16,p:{rotation:0,x:137.8994,y:-126.2111,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_15,p:{rotation:0,x:179.7922,y:-131.0951}},{t:this.shape_14,p:{rotation:0,x:179.9546,y:-131.0716}},{t:this.shape_13,p:{rotation:0,x:100.2672,y:-128.5943,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_12,p:{rotation:0,x:99.8545,y:-128.5943,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_11,p:{rotation:0,x:110.9087,y:-135.8032,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_10,p:{rotation:0,x:110.9508,y:-135.7787,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_9,p:{rotation:0,x:104.6469,y:-147.2264}},{t:this.shape_8,p:{rotation:0,x:104.4497,y:-147.2264}},{t:this.shape_7,p:{rotation:0,x:44.9874,y:-121.5217}},{t:this.shape_6,p:{rotation:0,x:43.5619,y:-121.5217}},{t:this.shape_5,p:{rotation:0,x:172.2926,y:-75.1247,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_4,p:{rotation:0,x:172.2348,y:-74.8156,scaleX:0.6746,scaleY:0.6746}},{t:this.instance,p:{regX:19.4,regY:17.7,rotation:0,x:137.65,y:-142.25}},{t:this.shape_3,p:{rotation:0,x:138.6363,y:-141.2133,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_2,p:{rotation:0,x:128.9964,y:-133.2111}},{t:this.shape_1,p:{rotation:0,x:129.1497,y:-133.2104}},{t:this.shape,p:{rotation:0,x:117.4723,y:-166.2977,scaleX:0.6746,scaleY:0.6746}}]},6).to({state:[{t:this.shape_31,p:{rotation:-60.001,x:81.0027,y:-49.4281,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_30,p:{rotation:-60.001,x:80.6227,y:-48.7699,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_29,p:{rotation:-60.001,x:104.0808,y:-60.1925,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_28,p:{rotation:-60.001,x:104.0777,y:-60.1872,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_27,p:{rotation:-60,x:94.9538,y:-16.944}},{t:this.shape_26,p:{rotation:-60,x:94.7318,y:-16.8799}},{t:this.shape_25,p:{rotation:-60,x:153.3313,y:-40.2096}},{t:this.shape_24,p:{rotation:-60,x:153.3838,y:-40.3006}},{t:this.shape_23,p:{rotation:-60,x:99.0457,y:-108.467}},{t:this.shape_22,p:{rotation:-60,x:97.9497,y:-109.2254}},{t:this.shape_21,p:{rotation:-60.001,x:88.8299,y:-138.4961,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_20,p:{rotation:-60.001,x:88.8274,y:-138.4975,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_19,p:{rotation:-60,x:109.5801,y:-124.3012}},{t:this.shape_18,p:{rotation:-60,x:109.5801,y:-124.3012}},{t:this.shape_17,p:{rotation:-60.0019,x:64.8175,y:-121.4015,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_16,p:{rotation:-60.0019,x:64.7132,y:-121.5395,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_15,p:{rotation:-60,x:81.4468,y:-160.262}},{t:this.shape_14,p:{rotation:-60,x:81.5483,y:-160.3909}},{t:this.shape_13,p:{rotation:-60.001,x:43.8487,y:-90.15,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_12,p:{rotation:-60.001,x:43.6424,y:-89.7926,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_11,p:{rotation:-60.001,x:42.9262,y:-102.9697,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_10,p:{rotation:-60.001,x:42.9685,y:-102.994,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_9,p:{rotation:-60,x:29.9064,y:-103.2527}},{t:this.shape_8,p:{rotation:-60,x:29.8078,y:-103.0819}},{t:this.shape_7,p:{rotation:-60,x:22.338,y:-38.7367}},{t:this.shape_6,p:{rotation:-60,x:21.6252,y:-37.5022}},{t:this.shape_5,p:{rotation:-60.001,x:126.1637,y:-125.791,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_4,p:{rotation:-60.001,x:126.4025,y:-125.5863,scaleX:0.6745,scaleY:0.6745}},{t:this.instance,p:{regX:19.9,regY:18.1,rotation:-60,x:50.7,y:-129.45}},{t:this.shape_3,p:{rotation:-60.0019,x:52.0901,y:-129.6778,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_2,p:{rotation:-60,x:54.2176,y:-117.3316}},{t:this.shape_1,p:{rotation:-60,x:54.2949,y:-117.464}},{t:this.shape,p:{rotation:-60.001,x:19.7996,y:-123.9,scaleX:0.6745,scaleY:0.6745}}]},6).to({state:[{t:this.shape_31,p:{rotation:0,x:83.5765,y:-76.0554,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_30,p:{rotation:0,x:82.8164,y:-76.0554,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_29,p:{rotation:0,x:104.4384,y:-61.4504,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_28,p:{rotation:0,x:104.4322,y:-61.4504,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_27,p:{rotation:0,x:62.4233,y:-47.7348}},{t:this.shape_32,p:{rotation:0,x:62.2567,y:-47.895}},{t:this.shape_25,p:{rotation:0,x:111.7629,y:-8.8094}},{t:this.shape_24,p:{rotation:0,x:111.868,y:-8.8094}},{t:this.shape_23,p:{rotation:0,x:143.7342,y:-89.9546}},{t:this.shape_22,p:{rotation:0,x:143.843,y:-91.283}},{t:this.shape_21,p:{rotation:0,x:164.629,y:-113.8109,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_20,p:{rotation:0,x:164.629,y:-113.8138,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_19,p:{rotation:0,x:162.7151,y:-88.7486}},{t:this.shape_18,p:{rotation:0,x:162.7151,y:-88.7486}},{t:this.shape_17,p:{rotation:0,x:137.832,y:-126.0518,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_16,p:{rotation:0,x:137.8994,y:-126.2111,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_15,p:{rotation:0,x:179.7922,y:-131.0951}},{t:this.shape_14,p:{rotation:0,x:179.9546,y:-131.0716}},{t:this.shape_13,p:{rotation:0,x:100.2672,y:-128.5943,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_12,p:{rotation:0,x:99.8545,y:-128.5943,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_11,p:{rotation:0,x:110.9087,y:-135.8032,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_10,p:{rotation:0,x:110.9508,y:-135.7787,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_9,p:{rotation:0,x:104.6469,y:-147.2264}},{t:this.shape_8,p:{rotation:0,x:104.4497,y:-147.2264}},{t:this.shape_7,p:{rotation:0,x:44.9874,y:-121.5217}},{t:this.shape_6,p:{rotation:0,x:43.5619,y:-121.5217}},{t:this.shape_5,p:{rotation:0,x:172.2926,y:-75.1247,scaleX:0.6746,scaleY:0.6746}},{t:this.shape_4,p:{rotation:0,x:172.2348,y:-74.8156,scaleX:0.6746,scaleY:0.6746}},{t:this.instance,p:{regX:19.4,regY:17.7,rotation:0,x:137.65,y:-142.25}},{t:this.shape_3,p:{rotation:0,x:138.6363,y:-141.2133,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_2,p:{rotation:0,x:128.9964,y:-133.2111}},{t:this.shape_1,p:{rotation:0,x:129.1497,y:-133.2104}},{t:this.shape,p:{rotation:0,x:117.4723,y:-166.2977,scaleX:0.6746,scaleY:0.6746}}]},8).to({state:[{t:this.shape_31,p:{rotation:-60.001,x:81.0027,y:-49.4281,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_30,p:{rotation:-60.001,x:80.6227,y:-48.7699,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_29,p:{rotation:-60.001,x:104.0808,y:-60.1925,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_28,p:{rotation:-60.001,x:104.0777,y:-60.1872,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_27,p:{rotation:-60,x:94.9538,y:-16.944}},{t:this.shape_26,p:{rotation:-60,x:94.7318,y:-16.8799}},{t:this.shape_25,p:{rotation:-60,x:153.3313,y:-40.2096}},{t:this.shape_24,p:{rotation:-60,x:153.3838,y:-40.3006}},{t:this.shape_23,p:{rotation:-60,x:99.0457,y:-108.467}},{t:this.shape_22,p:{rotation:-60,x:97.9497,y:-109.2254}},{t:this.shape_21,p:{rotation:-60.001,x:88.8299,y:-138.4961,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_20,p:{rotation:-60.001,x:88.8274,y:-138.4975,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_19,p:{rotation:-60,x:109.5801,y:-124.3012}},{t:this.shape_18,p:{rotation:-60,x:109.5801,y:-124.3012}},{t:this.shape_17,p:{rotation:-60.0019,x:64.8175,y:-121.4015,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_16,p:{rotation:-60.0019,x:64.7132,y:-121.5395,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_15,p:{rotation:-60,x:81.4468,y:-160.262}},{t:this.shape_14,p:{rotation:-60,x:81.5483,y:-160.3909}},{t:this.shape_13,p:{rotation:-60.001,x:43.8487,y:-90.15,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_12,p:{rotation:-60.001,x:43.6424,y:-89.7926,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_11,p:{rotation:-60.001,x:42.9262,y:-102.9697,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_10,p:{rotation:-60.001,x:42.9685,y:-102.994,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_9,p:{rotation:-60,x:29.9064,y:-103.2527}},{t:this.shape_8,p:{rotation:-60,x:29.8078,y:-103.0819}},{t:this.shape_7,p:{rotation:-60,x:22.338,y:-38.7367}},{t:this.shape_6,p:{rotation:-60,x:21.6252,y:-37.5022}},{t:this.shape_5,p:{rotation:-60.001,x:126.1637,y:-125.791,scaleX:0.6745,scaleY:0.6745}},{t:this.shape_4,p:{rotation:-60.001,x:126.4025,y:-125.5863,scaleX:0.6745,scaleY:0.6745}},{t:this.instance,p:{regX:19.9,regY:18.1,rotation:-60,x:50.7,y:-129.45}},{t:this.shape_3,p:{rotation:-60.0019,x:52.0901,y:-129.6778,scaleX:0.6744,scaleY:0.6744}},{t:this.shape_2,p:{rotation:-60,x:54.2176,y:-117.3316}},{t:this.shape_1,p:{rotation:-60,x:54.2949,y:-117.464}},{t:this.shape,p:{rotation:-60.001,x:19.7996,y:-123.9,scaleX:0.6745,scaleY:0.6745}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_rindo_dino_verde_esc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_verde_esc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E7345").s().p("AgKgDQANgjAPAJQAOAJgaAaIgbAaQAEgTAHgQg");
	this.shape.setTransform(-36.5672,-46.0765,0.6746,0.6746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E7345").s().p("AgJgFQAYgiANANQAOANgkAXIglAVg");
	this.shape_1.setTransform(-28.2105,-42.4329,0.6746,0.6746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBE9E4").s().p("AgdAIQgOgSAmgFQASgDAVACQgKAOgOAJQgMALgLAAQgKAAgGgKg");
	this.shape_2.setTransform(-19.6428,-63.926,0.6746,0.6746);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBE9E4").s().p("AgEARQgfgOALgVQAMgVAUAgQALAOAJAUQgSgDgOgHg");
	this.shape_3.setTransform(-16.2073,-71.2738,0.6746,0.6746);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AAeAUIgwgVQgMgEgLgBQAGgOARgDQAPgDAPAHQAMAGAJAMIAHAMQACAJAAAFIgMgFg");
	this.shape_4.setTransform(6.552,-56.7645,0.6745,0.6745);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AALAPIgLgDIgcgKQADgKALgFQALgEAKADQALADAGAIQAGAIgBAMg");
	this.shape_5.setTransform(-2.6964,-59.4756,0.6745,0.6745);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#374031").p("ADqhqQhdgchjgZQjGgyggAMQgIAFgJALQgRAUgDAYIgQB9IAaATQAsAZBTATQBTAUCEBDQBCAhAxAd");
	this.shape_6.setTransform(75.6298,64.7268,0.6745,0.6745);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#83A066").s().p("AB/CKQiEhDhTgUQhTgTgsgZIgagTIAQh9QADgYARgUQAJgLAIgFQAggMDGAyQBjAZBdAcIAIEyQgxgdhCghg");
	this.shape_7.setTransform(75.6408,64.7268,0.6745,0.6745);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#374031").p("Ah0i6IgcEgQADAnArAjQArAjA5AMQAdAFAUgBIAXgGQAZgQAKgsQAJgtAIhMIATkP");
	this.shape_8.setTransform(116.0102,109.6487,0.6745,0.6745);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83A066").s().p("AACDhQg5gMgrgjQgrgigDgoIAckgIEFgtIgTEPQgIBNgJAsQgKAtgZAPIgXAHIgGAAQgSAAgZgFg");
	this.shape_9.setTransform(116.0114,109.4921,0.6745,0.6745);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#374031").p("Ab5YIQBYACBpgYQA1gLAjgMQg2gLhPgaQifg1h/hRQhJguhDgyQhjhKh/hsQh/huhpj8QghhOgahUIgUhDQgdhKhDhnQiGjPi/iWQjYiqkMBnQhTAhhQA3Ig+AxQjagOi7iQQhihMi0jPQhjhwgIj6QgBggAAifQABhogJguQgKhSgkhYQhHixiAgiQh/gihbATQgcAGgVALIgQAJQgFADgHAHQgOAOgLAVQgkBCAKBsQhBAJhTAPQikAghTAlQheAqgeBdQgbBXAqBEQAqBEBHAgQBMAiBBgcQAagMBwgvQBzgyBMgkQCJhBAzgSQAjgMA6AQQA2AQAZAYQAiAhgUAmQgfA7ifBWQjwCCgRAIQhPAmgcgPQgdgPgGgNQgDgIAEgVIgLAXQgHAdAYAdQAZAeCTgkQB6gdBQglQBNgiAhgJQA3gNANAcQAMAZABAwQABAZAAAlQAMBXAYBOQAmB2A9BMQB+CcGXHIQgVBUAiB8QAQA+AVAtQB7DhDNBjQCgBOC6gIQCAgGCIhIQBEglArgjIB9CoIAgAgQAqAnA2AqQCqCDDTBfQCdBHCFADQBLACCEgKg");
	this.shape_10.setTransform(98.3223,28.2401,0.6745,0.6745);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83A066").s().p("AYxYQQiFgDichHQjUhfiqiDQg1gqgrgnIggggIh9ioQgqAjhFAlQiIBIiAAGQi5AIighOQjNhjh7jhQgVgtgRg+Qghh8AVhUQmXnIh+icQg+hMglh2QgZhOgLhXIgBg+QgBgwgMgZQgOgcg2ANQghAJhNAiQhQAlh6AdQiUAkgZgeQgXgdAGgdIALgXQgEAVAEAIQAFANAdAPQAdAPBPgmQARgIDviCQCfhWAgg7QAUgmgighQgagYg2gQQg6gQgjAMQgzASiIBBQhMAkh0AyIiKA7QhBAchLgiQhHgggqhEQgrhEAchXQAehdBegqQBSglClggQBSgPBCgJQgLhsAkhCQALgVAPgOQAHgHAFgDIAPgJQAWgLAcgGQBbgTB/AiQB/AiBICxQAjBYAKBSQAKAugBBoQgBCfABAgQAJD6BiBwQC0DPBjBMQC6CQDaAOIA/gxQBPg3BTghQENhnDXCqQDACWCGDPQBDBnAcBKIAUBDQAbBUAhBOQBpD8B/BuQB+BsBjBKQBDAyBJAuQB/BRCfA1QBPAaA2ALQgjAMg0ALQhpAYhYgCQhvAJhHAAIgagBg");
	this.shape_11.setTransform(97.8394,28.2401,0.6745,0.6745);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B2B2B2").p("AEWiLQgMgNgXgGQgsgLgyAmQhnBSgpAeQhZBCgjAOQgqASgJADQgLADgHgIQgGgIAzg0QAlglAdgZQgBgGgDgEQgGgJgMAJQgpAaggAUQg+AmgJAPQgCAEgMAKQgKALgEAHQgHAPABASQABAQAGAEQADACALALQAOALAPAFQAvAPBDgrQBqhDEdjKg");
	this.shape_12.setTransform(2.7785,-22.765,0.6746,0.6746);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9F9FA").s().p("AjjCeQgPgFgOgLIgOgNQgGgEgBgQQgBgSAHgPQAEgHAKgLQAMgKACgEQAJgPA+gmIBJguQAMgJAGAJQADAEABAGQgdAZglAlQgzA0AGAIQAHAIALgDIAzgVQAjgOBZhCQApgeBnhSQAygmAsALQAXAGAMANQkdDKhqBDQgxAggnAAQgNAAgNgEg");
	this.shape_13.setTransform(2.7785,-22.765,0.6746,0.6746);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B2B2B2").p("AFGiKIAGAwQABACgFAGQgKAKgbARQg5AiioBUQjHBlgvAJQgxALgigHQgbgGgIgOQgGgKgNggIgNgeIKFkGg");
	this.shape_14.setTransform(-12.1965,-34.9821,0.6746,0.6746);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9F9FA").s().p("AkICwQgbgGgIgOQgGgKgNggIgNgeIKFkGIALAnIAGAwQABACgFAGQgKAKgbARQg5AiioBUQjHBlgvAJQgdAHgYAAQgQAAgOgDg");
	this.shape_15.setTransform(-12.144,-34.9235,0.6746,0.6746);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(4.8,-27.7,0.6746,0.6746,0,0,0,32.3,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#374031").p("AAeiKIjFAsIgHANQgFAVAGAqIATCHIAFALQAOALAxAAQBOABC9gd");
	this.shape_16.setTransform(65.5222,74.8878,0.6745,0.6745);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#83A066").s().p("AhYCLQgxAAgOgLIgFgLIgTiHQgGgqAFgVIAHgNIDFgsICXD5Qi6AchPAAIgCAAg");
	this.shape_17.setTransform(65.6654,74.8838,0.6745,0.6745);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#374031").p("Ah2iYIgDEzIAMAHQAVAIArgCICHgGIAMgDQAMgNAFgxQAGgwgEhzIgEhq");
	this.shape_18.setTransform(105.7696,108.6179,0.6745,0.6745);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#83A066").s().p("AhtClIgMgIIADkyIDrgUIAEBqQAEBygGAxQgFAwgMANIgMAEIiHAFIgSAAQgeAAgQgFg");
	this.shape_19.setTransform(105.7707,108.4556,0.6745,0.6745);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19,p:{rotation:0,x:105.7707,y:108.4556}},{t:this.shape_18,p:{rotation:0,x:105.7696,y:108.6179}},{t:this.shape_17,p:{rotation:0,x:65.6654,y:74.8838}},{t:this.shape_16,p:{rotation:0,x:65.5222,y:74.8878}},{t:this.instance,p:{regX:32.3,rotation:0,x:4.8,y:-27.7}},{t:this.shape_15,p:{rotation:0,x:-12.144,y:-34.9235}},{t:this.shape_14,p:{rotation:0,x:-12.1965,y:-34.9821}},{t:this.shape_13,p:{rotation:0,x:2.7785,y:-22.765}},{t:this.shape_12,p:{rotation:0,x:2.7785,y:-22.765}},{t:this.shape_11,p:{rotation:0,x:97.8394,y:28.2401}},{t:this.shape_10,p:{rotation:0,x:98.3223,y:28.2401}},{t:this.shape_9,p:{rotation:0,x:116.0114,y:109.4921}},{t:this.shape_8,p:{rotation:0,x:116.0102,y:109.6487}},{t:this.shape_7,p:{rotation:0,x:75.6408,y:64.7268}},{t:this.shape_6,p:{rotation:0,x:75.6298,y:64.7268}},{t:this.shape_5,p:{rotation:0,x:-2.6964,y:-59.4756}},{t:this.shape_4,p:{rotation:0,x:6.552,y:-56.7645}},{t:this.shape_3,p:{rotation:0,x:-16.2073,y:-71.2738}},{t:this.shape_2,p:{rotation:0,x:-19.6428,y:-63.926}},{t:this.shape_1,p:{rotation:0,x:-28.2105,y:-42.4329}},{t:this.shape,p:{rotation:0,x:-36.5672,y:-46.0765}}]}).to({state:[{t:this.shape_19,p:{rotation:18.4661,x:110.9169,y:105.3692}},{t:this.shape_18,p:{rotation:18.4661,x:110.8644,y:105.5228}},{t:this.shape_17,p:{rotation:18.4661,x:83.5101,y:60.8227}},{t:this.shape_16,p:{rotation:18.4661,x:83.373,y:60.7812}},{t:this.instance,p:{regX:32.5,rotation:18.4661,x:58.25,y:-55.75}},{t:this.shape_15,p:{rotation:18.4661,x:44.4844,y:-67.9807}},{t:this.shape_14,p:{rotation:18.4661,x:44.4533,y:-68.0529}},{t:this.shape_13,p:{rotation:18.4661,x:54.7873,y:-51.7219}},{t:this.shape_12,p:{rotation:18.4661,x:54.7873,y:-51.7219}},{t:this.shape_11,p:{rotation:18.4661,x:128.8017,y:26.7715}},{t:this.shape_10,p:{rotation:18.4661,x:129.2598,y:26.9244}},{t:this.shape_9,p:{rotation:18.4661,x:120.302,y:109.596}},{t:this.shape_8,p:{rotation:18.4661,x:120.2513,y:109.7441}},{t:this.shape_7,p:{rotation:18.4661,x:96.189,y:54.3483}},{t:this.shape_6,p:{rotation:18.4661,x:96.1786,y:54.3448}},{t:this.shape_5,p:{rotation:18.4661,x:61.2256,y:-88.2722}},{t:this.shape_4,p:{rotation:18.4661,x:69.1391,y:-82.7713}},{t:this.shape_3,p:{rotation:18.4661,x:52.144,y:-103.7458}},{t:this.shape_2,p:{rotation:18.4661,x:46.5581,y:-97.8646}},{t:this.shape_1,p:{rotation:18.4661,x:31.624,y:-80.1922}},{t:this.shape,p:{rotation:18.4661,x:24.8518,y:-86.2951}}]},6).to({state:[{t:this.shape_19,p:{rotation:0,x:105.7552,y:108.4425}},{t:this.shape_18,p:{rotation:0,x:105.7541,y:108.6048}},{t:this.shape_17,p:{rotation:0,x:65.6517,y:74.8723}},{t:this.shape_16,p:{rotation:0,x:65.5085,y:74.8763}},{t:this.instance,p:{regX:32.3,rotation:0,x:4.8,y:-27.7}},{t:this.shape_15,p:{rotation:0,x:-12.1491,y:-34.9268}},{t:this.shape_14,p:{rotation:0,x:-12.2016,y:-34.9854}},{t:this.shape_13,p:{rotation:0,x:2.773,y:-22.7686}},{t:this.shape_12,p:{rotation:0,x:2.773,y:-22.7686}},{t:this.shape_11,p:{rotation:0,x:97.8242,y:28.2306}},{t:this.shape_10,p:{rotation:0,x:98.3071,y:28.2306}},{t:this.shape_9,p:{rotation:0,x:115.9954,y:109.479}},{t:this.shape_8,p:{rotation:0,x:115.9942,y:109.6356}},{t:this.shape_7,p:{rotation:0,x:75.6266,y:64.7157}},{t:this.shape_6,p:{rotation:0,x:75.6156,y:64.7157}},{t:this.shape_5,p:{rotation:0,x:-2.707,y:-59.4811}},{t:this.shape_4,p:{rotation:0,x:6.541,y:-56.7701}},{t:this.shape_3,p:{rotation:0,x:-16.2123,y:-71.2763}},{t:this.shape_2,p:{rotation:0,x:-19.6477,y:-63.9287}},{t:this.shape_1,p:{rotation:0,x:-28.2152,y:-42.436}},{t:this.shape,p:{rotation:0,x:-36.5718,y:-46.0796}}]},6).to({state:[{t:this.shape_19,p:{rotation:18.4657,x:110.9078,y:105.3483}},{t:this.shape_18,p:{rotation:18.4657,x:110.8554,y:105.5019}},{t:this.shape_17,p:{rotation:18.4657,x:83.5021,y:60.8043}},{t:this.shape_16,p:{rotation:18.4657,x:83.365,y:60.7627}},{t:this.instance,p:{regX:32.5,rotation:18.4653,x:58.25,y:-55.75}},{t:this.shape_15,p:{rotation:18.4653,x:44.4826,y:-67.9891}},{t:this.shape_14,p:{rotation:18.4653,x:44.4515,y:-68.0614}},{t:this.shape_13,p:{rotation:18.4653,x:54.7855,y:-51.731}},{t:this.shape_12,p:{rotation:18.4653,x:54.7855,y:-51.731}},{t:this.shape_11,p:{rotation:18.4657,x:128.7913,y:26.7544}},{t:this.shape_10,p:{rotation:18.4657,x:129.2493,y:26.9073}},{t:this.shape_9,p:{rotation:18.4657,x:120.2925,y:109.5748}},{t:this.shape_8,p:{rotation:18.4657,x:120.2418,y:109.723}},{t:this.shape_7,p:{rotation:18.4657,x:96.1804,y:54.3301}},{t:this.shape_6,p:{rotation:18.4657,x:96.17,y:54.3266}},{t:this.shape_5,p:{rotation:18.4657,x:61.2177,y:-88.2831}},{t:this.shape_4,p:{rotation:18.4657,x:69.1308,y:-82.7825}},{t:this.shape_3,p:{rotation:18.4653,x:52.1414,y:-103.7533}},{t:this.shape_2,p:{rotation:18.4653,x:46.5558,y:-97.8722}},{t:this.shape_1,p:{rotation:18.4653,x:31.6224,y:-80.2001}},{t:this.shape,p:{rotation:18.4653,x:24.8502,y:-86.3027}}]},6).to({state:[{t:this.shape_19,p:{rotation:0,x:105.7552,y:108.4425}},{t:this.shape_18,p:{rotation:0,x:105.7541,y:108.6048}},{t:this.shape_17,p:{rotation:0,x:65.6517,y:74.8723}},{t:this.shape_16,p:{rotation:0,x:65.5085,y:74.8763}},{t:this.instance,p:{regX:32.3,rotation:0,x:4.8,y:-27.7}},{t:this.shape_15,p:{rotation:0,x:-12.1491,y:-34.9268}},{t:this.shape_14,p:{rotation:0,x:-12.2016,y:-34.9854}},{t:this.shape_13,p:{rotation:0,x:2.773,y:-22.7686}},{t:this.shape_12,p:{rotation:0,x:2.773,y:-22.7686}},{t:this.shape_11,p:{rotation:0,x:97.8242,y:28.2306}},{t:this.shape_10,p:{rotation:0,x:98.3071,y:28.2306}},{t:this.shape_9,p:{rotation:0,x:115.9954,y:109.479}},{t:this.shape_8,p:{rotation:0,x:115.9942,y:109.6356}},{t:this.shape_7,p:{rotation:0,x:75.6266,y:64.7157}},{t:this.shape_6,p:{rotation:0,x:75.6156,y:64.7157}},{t:this.shape_5,p:{rotation:0,x:-2.707,y:-59.4811}},{t:this.shape_4,p:{rotation:0,x:6.541,y:-56.7701}},{t:this.shape_3,p:{rotation:0,x:-16.2123,y:-71.2763}},{t:this.shape_2,p:{rotation:0,x:-19.6477,y:-63.9287}},{t:this.shape_1,p:{rotation:0,x:-28.2152,y:-42.436}},{t:this.shape,p:{rotation:0,x:-36.5718,y:-46.0796}}]},8).to({state:[{t:this.shape_19,p:{rotation:18.4657,x:110.9078,y:105.3483}},{t:this.shape_18,p:{rotation:18.4657,x:110.8554,y:105.5019}},{t:this.shape_17,p:{rotation:18.4657,x:83.5021,y:60.8043}},{t:this.shape_16,p:{rotation:18.4657,x:83.365,y:60.7627}},{t:this.instance,p:{regX:32.5,rotation:18.4653,x:58.25,y:-55.75}},{t:this.shape_15,p:{rotation:18.4653,x:44.4826,y:-67.9891}},{t:this.shape_14,p:{rotation:18.4653,x:44.4515,y:-68.0614}},{t:this.shape_13,p:{rotation:18.4653,x:54.7855,y:-51.731}},{t:this.shape_12,p:{rotation:18.4653,x:54.7855,y:-51.731}},{t:this.shape_11,p:{rotation:18.4657,x:128.7913,y:26.7544}},{t:this.shape_10,p:{rotation:18.4657,x:129.2493,y:26.9073}},{t:this.shape_9,p:{rotation:18.4657,x:120.2925,y:109.5748}},{t:this.shape_8,p:{rotation:18.4657,x:120.2418,y:109.723}},{t:this.shape_7,p:{rotation:18.4657,x:96.1804,y:54.3301}},{t:this.shape_6,p:{rotation:18.4657,x:96.17,y:54.3266}},{t:this.shape_5,p:{rotation:18.4657,x:61.2177,y:-88.2831}},{t:this.shape_4,p:{rotation:18.4657,x:69.1308,y:-82.7825}},{t:this.shape_3,p:{rotation:18.4653,x:52.1414,y:-103.7533}},{t:this.shape_2,p:{rotation:18.4653,x:46.5558,y:-97.8722}},{t:this.shape_1,p:{rotation:18.4653,x:31.6224,y:-80.2001}},{t:this.shape,p:{rotation:18.4653,x:24.8502,y:-86.3027}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();


(lib.mc_dino_rindo_dino_verde_claro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_verde_claro
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ACB59").s().p("AgdAQQgGgEgHgRIgGgQIASABQAWACARAHQASAHAMANQAHAHADAFIgfABQgnAAgIgGg");
	this.shape.setTransform(-142.0192,-74.5592,0.6746,0.6746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9ACB59").s().p("AgaASQgGgEgLgPIgIgPIASgCQAWgCASAEQASAEAQALQAHAFAEAFQgxAKgSAAQgHAAgEgBg");
	this.shape_1.setTransform(-153.6056,-76.7538,0.6746,0.6746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIAAQAJAAAHAHQAGAFAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(-142.8962,-76.7559,0.6746,0.6746);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AgPAPQgGgFAAgKQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAKgGAFQgHAHgJAAQgIAAgHgHg");
	this.shape_3.setTransform(-154.2633,-79.0495,0.6746,0.6746);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#525252").p("AA1AAQAAAWgPAQQgQAQgWAAQgVAAgQgQQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAPAQAAAVg");
	this.shape_4.setTransform(-152.9984,-80.0108,0.6746,0.6746);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F0F0").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAPAQAAAVQAAAWgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_5.setTransform(-152.9984,-80.0108,0.6746,0.6746);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#525252").p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");
	this.shape_6.setTransform(-141.0242,-77.8015,0.6746,0.6746);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F0F0").s().p("AgpArQgSgSAAgZQAAgXASgTQARgRAYAAQAZAAARARQASASAAAYQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_7.setTransform(-141.0242,-77.8015,0.6746,0.6746);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBE9E4").s().p("AgaAOQgRgQAlgLQARgFAWgCIgUAbQgNAOgLAAQgIAAgHgHg");
	this.shape_8.setTransform(-168.8973,-78.9664,0.6746,0.6746);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBE9E4").s().p("AgEARQgfgOALgVQALgVAVAgQALAOAIAUQgRgDgOgHg");
	this.shape_9.setTransform(-162.6762,-91.5432,0.6746,0.6746);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AAIAOIgKgGIgYgRQAGgJAMgCQAKgBAKAGQAKAGADAJQAEALgEAKIgRgHg");
	this.shape_10.setTransform(-181.889,-57.4328,0.6745,0.6745);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AAAAOIgdgGQACgKAKgGQAJgGAKABQAMABAHAIQAIAHABALIgTABg");
	this.shape_11.setTransform(-171.944,-54.3078,0.6745,0.6745);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7EA54C").p("AhrjqIg0DAQgxDGAMAgIAQARQAUARAYADIB9AQQAIgFALgWQAYgrAUhTQAThUBDiDIA+h0");
	this.shape_12.setTransform(-49.5796,48.4912,0.6745,0.6745);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9ACB59").s().p("AiJDiQgXgDgVgQIgQgRQgMghAyjGIA0jAIEzgJIg/B0QhCCDgUBUQgTBTgYAsQgLAVgIAGg");
	this.shape_13.setTransform(-49.5592,48.3966,0.6745,0.6745);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7EA54C").p("Ah0i6IgcEgQADAnArAjQArAjA5AMQAdAFAUgBQALABAMgHQAZgQAKgsQAJgtAIhMIATkP");
	this.shape_14.setTransform(-11.8418,55.894,0.6745,0.6745);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9ACB59").s().p("AACDhQg5gMgrgjQgrgigDgoIAckgIEFgtIgTEPQgIBNgJAsQgKAtgZAPQgMAIgLgBIgGAAQgSAAgZgFg");
	this.shape_15.setTransform(-11.8406,55.7374,0.6745,0.6745);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#7EA54C").p("AdKSVQBXgNBkgnQAygUAhgSQg3gBhSgOQilgbiLg7QhNghhMgnQhtg5iPhYQiPhYi7jEIiei0QgRggg9g5Qh5hwjVh1QjviFkKApQhUANhMAcIg7AaQjkAWhMgeQglgPgxgoQhAg5gwgoQhzhfgxj1QgGghgYibQgQhogRgsQgXhOgxhSQhjijiDgNQiDgNhXAhQgbAKgTAOQgKAHgEAFIgUAbQgUAmgBA1QgBAygeApQgeApgwARQiqA8hSA2QhXA5gOBhQgNBZA1A9QA0A8BLAUQBQAWA8gmQA7gnBFgnQBqg8BRgjICQg8QAkgPAkgNQAVgJASgRQASAqgKA6QgNBIg2BBQh1CKhtAzQhPAlgxgQQgPgGgGgWQgCgZgBgGQgCgHgCAAIgGADIgHAZQgCAdAbAZQAPANAkACQAoACAsgNQA8gRBMgoQA5geArgdQBFguAhgOQA0gWARAZQAQAXAJAvQAFAZAGAkQAYBUAmBKQA4BuBJBBQBdBTBvChQA4BRAlA/QBFBoBQBbQAoAtAbAZQCdDKDaBCQCrAzC1gmQCEgbFQBHQC0AmGWBtQCmAtCEgSQAmgFBCgQQBCgQAhgEg");
	this.shape_16.setTransform(-42.1233,-13.7456,0.6745,0.6745);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9ACB59").s().p("AVcSjQmWhti0gmQlQhHiEAbQi1AmirgzQjahCidjKQgbgZgogtQhQhbhFhoQglg/g4hRQhvihhdhTQhJhBg4huQgmhKgYhUIgLg9QgJgvgQgXQgRgZg0AWQghAOhFAuQgrAdg5AeQhMAog8ARQgsANgogCQgkgCgPgNQgbgZACgdIAHgZIAGgDQACAAACAHIADAfQAGAWAPAGQAxAQBPglQBtgzB1iKQA2hBANhIQAKg6gSgqQgSARgVAJQgkANgkAPIiQA8QhRAjhqA8QhFAng7AnQg8AmhQgWQhLgUg0g8Qg1g9ANhZQAOhhBXg5QBSg2Cqg8QAwgRAegpQAegpABgyQABg1AUgmIAUgbQAEgFAKgHQATgOAbgKQBXghCDANQCDANBjCjQAxBSAXBOQARAsAQBoQAYCbAGAhQAxD1BzBfQAwAoBAA5QAxAoAlAPQBMAeDkgWIA7gaQBMgcBUgNQEKgpDvCFQDVB1B5BwQA9A5ARAgICeC0QC7DECPBYQCPBYBtA5QBMAnBNAhQCLA7ClAbQBSAOA3ABQghASgyAUQhkAnhXANQghAEhCAQQhCAQgmAFQgmAFgpAAQhlAAh2ggg");
	this.shape_17.setTransform(-42.5912,-13.7456,0.6745,0.6745);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B2B2B2").p("AD/i0QgOgLgXgCQgugFgrAuQhaBigiAkQhNBPghAUQgZAPgWAOQgKAFgIgHQgHgHAqg8QAggsAXgbQgCgGgEgDQgIgIgKAKQgHAJg5AvQg3AxgHAQQgBAEgKANQgJALgCAIQgEARADAQQADAQAHADQADACANAJQAPAJAQACQAxAHA7g1QBdhTD6j1g");
	this.shape_18.setTransform(-140.2697,-41.9657,0.6746,0.6746);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9F9FA").s().p("AjEDCQgQgCgPgJIgQgLQgHgDgDgQQgDgQAEgRQACgIAJgLQAKgNABgEQAHgQA3gxQA5gvAHgJQAKgKAIAIQAEADACAGQgXAbggAsQgqA8AHAHQAIAHAKgFIAvgdQAhgUBNhPIB8iGQArguAuAFQAXACAOALQj6D1hdBTQg0AvgsAAIgMgBg");
	this.shape_19.setTransform(-140.2697,-41.9657,0.6746,0.6746);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B2B2B2").p("AEsi2IAOAuIgDAIQgHAMgZAVQguAoidBwQi0CEgtARQgvASgigBQgcgBgKgNQgHgKgTgdIgRgbIJTlqg");
	this.shape_20.setTransform(-156.849,-51.9005,0.6746,0.6746);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9F9FA").s().p("AjnDdQgcgBgKgNIgagmIgRgbIJTlrIAQAlIAOAvIgDAIQgHAMgZAUQguAoidBxQi0CDgtASQgsARggAAIgFgBg");
	this.shape_21.setTransform(-156.7931,-51.8253,0.6746,0.6746);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-138.55,-46.35,0.6746,0.6746,0,0,0,28.8,32);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#7EA54C").p("Ah3juIgcGoIALAKQATALAqAGICGAUQAFAEAHgFQAPgLAOgvQAOgvAThyIAPhn");
	this.shape_22.setTransform(-64.5295,44.7858,0.6745,0.6745);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9ACB59").s().p("AA7DrIiGgUQgqgGgTgLIgLgKIAcmoIELCUIgPBnQgTBygOAvQgOAvgPALQgEADgDAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_23.setTransform(-64.5226,44.6285,0.6745,0.6745);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#7EA54C").p("Ah2iYIgDEzIAMAHQAVAIArgCICHgGQAGADAGgGQAMgNAFgxQAGgwgEhzIgEhq");
	this.shape_24.setTransform(-22.0826,54.8632,0.6745,0.6745);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9ACB59").s().p("AhtClIgMgIIADkyIDrgUIAEBqQAEBygGAxQgFAwgMANQgGAHgGgDIiHAFIgSAAQgeAAgQgFg");
	this.shape_25.setTransform(-22.0816,54.7009,0.6745,0.6745);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3A4030").p("AsUiNQAMgvAVgxQAqhiAugIQAtAgAiA9QARAeAIAYIBzi3QBKBUAsArICLiBIA+BwIAug3QA1g1AgAIIAeAuQAgA6ALA3IA0gmQA5gnAWABIAXA4QAXA+gBAhIA0gSQA9gSAsgFIAIBNQAIBSgDAWIBFgJQBKgIAcAKIAVA8QAUBIgDA9IAxABQA8gBAygIIgBBYQgCBcgCAW");
	this.shape_26.setTransform(-26.8807,-5.5173,0.6745,0.6745);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#475435").s().p("AsUiPQAMgvAVgxQAqhiAugIQAtAgAiA9QARAfAIAYIBzi3QBKBTAsAsICLiCIA+BwIAug2QA1g1AgAIIAeAuQAgA5ALA4IA0gnQA5gmAWAAIAXA4QAXA+gBAhIA0gRQA9gTAsgFIAIBNQAIBSgDAXIBFgJQBKgIAcAKIAVA7QAUBJgDA8IAxABQA8AAAygIIgBBXQgCBcgCAXg");
	this.shape_27.setTransform(-26.883,-5.4153,0.6745,0.6745);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27,p:{rotation:0,x:-26.883,y:-5.4153}},{t:this.shape_26,p:{rotation:0,x:-26.8807,y:-5.5173}},{t:this.shape_25,p:{rotation:0,x:-22.0816,y:54.7009}},{t:this.shape_24,p:{rotation:0,x:-22.0826,y:54.8632}},{t:this.shape_23,p:{rotation:0,x:-64.5226,y:44.6285}},{t:this.shape_22,p:{rotation:0,x:-64.5295,y:44.7858}},{t:this.instance,p:{regY:32,rotation:0,x:-138.55,y:-46.35}},{t:this.shape_21,p:{rotation:0,x:-156.7931,y:-51.8253}},{t:this.shape_20,p:{rotation:0,x:-156.849,y:-51.9005}},{t:this.shape_19,p:{rotation:0,x:-140.2697,y:-41.9657}},{t:this.shape_18,p:{rotation:0,x:-140.2697,y:-41.9657}},{t:this.shape_17,p:{rotation:0,x:-42.5912,y:-13.7456}},{t:this.shape_16,p:{rotation:0,x:-42.1233,y:-13.7456}},{t:this.shape_15,p:{rotation:0,x:-11.8406,y:55.7374}},{t:this.shape_14,p:{rotation:0,x:-11.8418,y:55.894}},{t:this.shape_13,p:{rotation:0,x:-49.5592,y:48.3966}},{t:this.shape_12,p:{rotation:0,x:-49.5796,y:48.4912}},{t:this.shape_11,p:{rotation:0,x:-171.944,y:-54.3078}},{t:this.shape_10,p:{rotation:0,x:-181.889,y:-57.4328}},{t:this.shape_9,p:{rotation:0,x:-162.6762,y:-91.5432}},{t:this.shape_8,p:{rotation:0,x:-168.8973,y:-78.9664}},{t:this.shape_7,p:{rotation:0,x:-141.0242,y:-77.8015}},{t:this.shape_6,p:{rotation:0,x:-141.0242,y:-77.8015}},{t:this.shape_5,p:{rotation:0,x:-152.9984,y:-80.0108}},{t:this.shape_4,p:{rotation:0,x:-152.9984,y:-80.0108}},{t:this.shape_3,p:{rotation:0,x:-154.2633,y:-79.0495}},{t:this.shape_2,p:{rotation:0,x:-142.8962,y:-76.7559}},{t:this.shape_1,p:{rotation:0,x:-153.6056,y:-76.7538}},{t:this.shape,p:{rotation:0,x:-142.0192,y:-74.5592}}]}).to({state:[{t:this.shape_27,p:{rotation:14.9982,x:-7.9345,y:-6.1433}},{t:this.shape_26,p:{rotation:14.9982,x:-7.9059,y:-6.2413}},{t:this.shape_25,p:{rotation:14.9982,x:-18.8538,y:53.1661}},{t:this.shape_24,p:{rotation:14.9982,x:-18.8968,y:53.3225}},{t:this.shape_23,p:{rotation:14.9982,x:-57.2415,y:32.454}},{t:this.shape_22,p:{rotation:14.9982,x:-57.2889,y:32.6042}},{t:this.instance,p:{regY:32.2,rotation:14.9985,x:-105.25,y:-74.5}},{t:this.shape_21,p:{rotation:14.9985,x:-121.4074,y:-84.5923}},{t:this.shape_20,p:{rotation:14.9985,x:-121.442,y:-84.6794}},{t:this.shape_19,p:{rotation:14.9985,x:-107.9991,y:-70.793}},{t:this.shape_18,p:{rotation:14.9985,x:-107.9991,y:-70.793}},{t:this.shape_17,p:{rotation:14.9982,x:-20.9515,y:-18.2546}},{t:this.shape_16,p:{rotation:14.9982,x:-20.4996,y:-18.1336}},{t:this.shape_15,p:{rotation:14.9982,x:-9.2302,y:56.8174}},{t:this.shape_14,p:{rotation:14.9982,x:-9.2718,y:56.9684}},{t:this.shape_13,p:{rotation:14.9982,x:-43.7633,y:39.9659}},{t:this.shape_12,p:{rotation:14.9982,x:-43.8074,y:40.052}},{t:this.shape_11,p:{rotation:14.9982,x:-135.3979,y:-90.9083}},{t:this.shape_10,p:{rotation:14.9982,x:-144.1952,y:-96.5005}},{t:this.shape_9,p:{rotation:14.9985,x:-116.8115,y:-124.4779}},{t:this.shape_8,p:{rotation:14.9985,x:-126.0751,y:-113.94}},{t:this.shape_7,p:{rotation:14.9985,x:-99.4542,y:-105.6018}},{t:this.shape_6,p:{rotation:14.9985,x:-99.4542,y:-105.6018}},{t:this.shape_5,p:{rotation:14.9985,x:-110.4482,y:-110.8345}},{t:this.shape_4,p:{rotation:14.9985,x:-110.4482,y:-110.8345}},{t:this.shape_3,p:{rotation:14.9985,x:-111.9188,y:-110.2333}},{t:this.shape_2,p:{rotation:14.9985,x:-101.5329,y:-105.0762}},{t:this.shape_1,p:{rotation:14.9985,x:-111.8776,y:-107.8456}},{t:this.shape,p:{rotation:14.9985,x:-101.2543,y:-102.7275}}]},6).to({state:[{t:this.shape_27,p:{rotation:0,x:-26.8973,y:-5.4272}},{t:this.shape_26,p:{rotation:0,x:-26.8951,y:-5.5293}},{t:this.shape_25,p:{rotation:0,x:-22.0962,y:54.6849}},{t:this.shape_24,p:{rotation:0,x:-22.0973,y:54.8472}},{t:this.shape_23,p:{rotation:0,x:-64.5344,y:44.6132}},{t:this.shape_22,p:{rotation:0,x:-64.5413,y:44.7705}},{t:this.instance,p:{regY:32,rotation:0,x:-138.55,y:-46.35}},{t:this.shape_21,p:{rotation:0,x:-156.7968,y:-51.8311}},{t:this.shape_20,p:{rotation:0,x:-156.8527,y:-51.9063}},{t:this.shape_19,p:{rotation:0,x:-140.2741,y:-41.9719}},{t:this.shape_18,p:{rotation:0,x:-140.2741,y:-41.9719}},{t:this.shape_17,p:{rotation:0,x:-42.6044,y:-13.7569}},{t:this.shape_16,p:{rotation:0,x:-42.1366,y:-13.7569}},{t:this.shape_15,p:{rotation:0,x:-11.856,y:55.7214}},{t:this.shape_14,p:{rotation:0,x:-11.8572,y:55.8779}},{t:this.shape_13,p:{rotation:0,x:-49.572,y:48.381}},{t:this.shape_12,p:{rotation:0,x:-49.5924,y:48.4756}},{t:this.shape_11,p:{rotation:0,x:-171.9485,y:-54.3164}},{t:this.shape_10,p:{rotation:0,x:-181.8928,y:-57.4412}},{t:this.shape_9,p:{rotation:0,x:-162.6796,y:-91.5473}},{t:this.shape_8,p:{rotation:0,x:-168.9004,y:-78.971}},{t:this.shape_7,p:{rotation:0,x:-141.0285,y:-77.8062}},{t:this.shape_6,p:{rotation:0,x:-141.0285,y:-77.8062}},{t:this.shape_5,p:{rotation:0,x:-153.0023,y:-80.0154}},{t:this.shape_4,p:{rotation:0,x:-153.0023,y:-80.0154}},{t:this.shape_3,p:{rotation:0,x:-154.2671,y:-79.0541}},{t:this.shape_2,p:{rotation:0,x:-142.9005,y:-76.7606}},{t:this.shape_1,p:{rotation:0,x:-153.6094,y:-76.7585}},{t:this.shape,p:{rotation:0,x:-142.0235,y:-74.564}}]},6).to({state:[{t:this.shape_27,p:{rotation:14.9976,x:-7.9401,y:-6.156}},{t:this.shape_26,p:{rotation:14.9976,x:-7.9115,y:-6.254}},{t:this.shape_25,p:{rotation:14.9976,x:-18.8582,y:53.1505}},{t:this.shape_24,p:{rotation:14.9976,x:-18.9012,y:53.307}},{t:this.shape_23,p:{rotation:14.9976,x:-57.2442,y:32.4399}},{t:this.shape_22,p:{rotation:14.9976,x:-57.2916,y:32.5901}},{t:this.instance,p:{regY:32.2,rotation:14.9975,x:-105.25,y:-74.5}},{t:this.shape_21,p:{rotation:14.9975,x:-121.4063,y:-84.597}},{t:this.shape_20,p:{rotation:14.9975,x:-121.4409,y:-84.6841}},{t:this.shape_19,p:{rotation:14.9975,x:-107.9982,y:-70.7984}},{t:this.shape_18,p:{rotation:14.9975,x:-107.9982,y:-70.7984}},{t:this.shape_17,p:{rotation:14.9976,x:-20.9565,y:-18.2666}},{t:this.shape_16,p:{rotation:14.9976,x:-20.5047,y:-18.1456}},{t:this.shape_15,p:{rotation:14.9976,x:-9.2351,y:56.8016}},{t:this.shape_14,p:{rotation:14.9976,x:-9.2767,y:56.9525}},{t:this.shape_13,p:{rotation:14.9976,x:-43.7666,y:39.9512}},{t:this.shape_12,p:{rotation:14.9976,x:-43.8108,y:40.0374}},{t:this.shape_11,p:{rotation:14.9976,x:-135.398,y:-90.9156}},{t:this.shape_10,p:{rotation:14.9976,x:-144.1949,y:-96.5073}},{t:this.shape_9,p:{rotation:14.9975,x:-116.8112,y:-124.4817}},{t:this.shape_8,p:{rotation:14.9975,x:-126.0743,y:-113.9439}},{t:this.shape_7,p:{rotation:14.9975,x:-99.454,y:-105.6063}},{t:this.shape_6,p:{rotation:14.9975,x:-99.454,y:-105.6063}},{t:this.shape_5,p:{rotation:14.9975,x:-110.4479,y:-110.8387}},{t:this.shape_4,p:{rotation:14.9975,x:-110.4479,y:-110.8387}},{t:this.shape_3,p:{rotation:14.9975,x:-111.9183,y:-110.2375}},{t:this.shape_2,p:{rotation:14.9975,x:-101.5327,y:-105.0807}},{t:this.shape_1,p:{rotation:14.9975,x:-111.8771,y:-107.8499}},{t:this.shape,p:{rotation:14.9975,x:-101.2541,y:-102.7321}}]},6).to({state:[{t:this.shape_27,p:{rotation:0,x:-26.8973,y:-5.4272}},{t:this.shape_26,p:{rotation:0,x:-26.8951,y:-5.5293}},{t:this.shape_25,p:{rotation:0,x:-22.0962,y:54.6849}},{t:this.shape_24,p:{rotation:0,x:-22.0973,y:54.8472}},{t:this.shape_23,p:{rotation:0,x:-64.5344,y:44.6132}},{t:this.shape_22,p:{rotation:0,x:-64.5413,y:44.7705}},{t:this.instance,p:{regY:32,rotation:0,x:-138.55,y:-46.35}},{t:this.shape_21,p:{rotation:0,x:-156.7968,y:-51.8311}},{t:this.shape_20,p:{rotation:0,x:-156.8527,y:-51.9063}},{t:this.shape_19,p:{rotation:0,x:-140.2741,y:-41.9719}},{t:this.shape_18,p:{rotation:0,x:-140.2741,y:-41.9719}},{t:this.shape_17,p:{rotation:0,x:-42.6044,y:-13.7569}},{t:this.shape_16,p:{rotation:0,x:-42.1366,y:-13.7569}},{t:this.shape_15,p:{rotation:0,x:-11.856,y:55.7214}},{t:this.shape_14,p:{rotation:0,x:-11.8572,y:55.8779}},{t:this.shape_13,p:{rotation:0,x:-49.572,y:48.381}},{t:this.shape_12,p:{rotation:0,x:-49.5924,y:48.4756}},{t:this.shape_11,p:{rotation:0,x:-171.9485,y:-54.3164}},{t:this.shape_10,p:{rotation:0,x:-181.8928,y:-57.4412}},{t:this.shape_9,p:{rotation:0,x:-162.6796,y:-91.5473}},{t:this.shape_8,p:{rotation:0,x:-168.9004,y:-78.971}},{t:this.shape_7,p:{rotation:0,x:-141.0285,y:-77.8062}},{t:this.shape_6,p:{rotation:0,x:-141.0285,y:-77.8062}},{t:this.shape_5,p:{rotation:0,x:-153.0023,y:-80.0154}},{t:this.shape_4,p:{rotation:0,x:-153.0023,y:-80.0154}},{t:this.shape_3,p:{rotation:0,x:-154.2671,y:-79.0541}},{t:this.shape_2,p:{rotation:0,x:-142.9005,y:-76.7606}},{t:this.shape_1,p:{rotation:0,x:-153.6094,y:-76.7585}},{t:this.shape,p:{rotation:0,x:-142.0235,y:-74.564}}]},8).to({state:[{t:this.shape_27,p:{rotation:14.9976,x:-7.9401,y:-6.156}},{t:this.shape_26,p:{rotation:14.9976,x:-7.9115,y:-6.254}},{t:this.shape_25,p:{rotation:14.9976,x:-18.8582,y:53.1505}},{t:this.shape_24,p:{rotation:14.9976,x:-18.9012,y:53.307}},{t:this.shape_23,p:{rotation:14.9976,x:-57.2442,y:32.4399}},{t:this.shape_22,p:{rotation:14.9976,x:-57.2916,y:32.5901}},{t:this.instance,p:{regY:32.2,rotation:14.9975,x:-105.25,y:-74.5}},{t:this.shape_21,p:{rotation:14.9975,x:-121.4063,y:-84.597}},{t:this.shape_20,p:{rotation:14.9975,x:-121.4409,y:-84.6841}},{t:this.shape_19,p:{rotation:14.9975,x:-107.9982,y:-70.7984}},{t:this.shape_18,p:{rotation:14.9975,x:-107.9982,y:-70.7984}},{t:this.shape_17,p:{rotation:14.9976,x:-20.9565,y:-18.2666}},{t:this.shape_16,p:{rotation:14.9976,x:-20.5047,y:-18.1456}},{t:this.shape_15,p:{rotation:14.9976,x:-9.2351,y:56.8016}},{t:this.shape_14,p:{rotation:14.9976,x:-9.2767,y:56.9525}},{t:this.shape_13,p:{rotation:14.9976,x:-43.7666,y:39.9512}},{t:this.shape_12,p:{rotation:14.9976,x:-43.8108,y:40.0374}},{t:this.shape_11,p:{rotation:14.9976,x:-135.398,y:-90.9156}},{t:this.shape_10,p:{rotation:14.9976,x:-144.1949,y:-96.5073}},{t:this.shape_9,p:{rotation:14.9975,x:-116.8112,y:-124.4817}},{t:this.shape_8,p:{rotation:14.9975,x:-126.0743,y:-113.9439}},{t:this.shape_7,p:{rotation:14.9975,x:-99.454,y:-105.6063}},{t:this.shape_6,p:{rotation:14.9975,x:-99.454,y:-105.6063}},{t:this.shape_5,p:{rotation:14.9975,x:-110.4479,y:-110.8387}},{t:this.shape_4,p:{rotation:14.9975,x:-110.4479,y:-110.8387}},{t:this.shape_3,p:{rotation:14.9975,x:-111.9183,y:-110.2375}},{t:this.shape_2,p:{rotation:14.9975,x:-101.5327,y:-105.0807}},{t:this.shape_1,p:{rotation:14.9975,x:-111.8771,y:-107.8499}},{t:this.shape,p:{rotation:14.9975,x:-101.2541,y:-102.7321}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_dino_azul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dino_azul
	this.instance = new lib.mcdinoazulcommov();
	this.instance.parent = this;
	this.instance.setTransform(295.3,602.15,0.7785,0.7785,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},309).wait(29));

}).prototype = p = new cjs.MovieClip();


(lib.mcdinorindo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// dino_verde_esc_obj_
	this.dino_verde_esc = new lib.mc_dino_rindo_dino_verde_esc();
	this.dino_verde_esc.name = "dino_verde_esc";
	this.dino_verde_esc.parent = this;
	this.dino_verde_esc.setTransform(98.5,28.4,1,1,0,0,0,98.5,28.4);
	this.dino_verde_esc.depth = 0;
	this.dino_verde_esc.isAttachedToCamera = 0
	this.dino_verde_esc.isAttachedToMask = 0
	this.dino_verde_esc.layerDepth = 0
	this.dino_verde_esc.layerIndex = 0
	this.dino_verde_esc.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_verde_esc).wait(38));

	// dino_roxo_obj_
	this.dino_roxo = new lib.mc_dino_rindo_dino_roxo();
	this.dino_roxo.name = "dino_roxo";
	this.dino_roxo.parent = this;
	this.dino_roxo.setTransform(-66.3,77.3,1,1,0,0,0,-66.3,77.3);
	this.dino_roxo.depth = 0;
	this.dino_roxo.isAttachedToCamera = 0
	this.dino_roxo.isAttachedToMask = 0
	this.dino_roxo.layerDepth = 0
	this.dino_roxo.layerIndex = 1
	this.dino_roxo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_roxo).wait(38));

	// dino_verde_claro_obj_
	this.dino_verde_claro = new lib.mc_dino_rindo_dino_verde_claro();
	this.dino_verde_claro.name = "dino_verde_claro";
	this.dino_verde_claro.parent = this;
	this.dino_verde_claro.setTransform(-42,-11.3,1,1,0,0,0,-42,-11.3);
	this.dino_verde_claro.depth = 0;
	this.dino_verde_claro.isAttachedToCamera = 0
	this.dino_verde_claro.isAttachedToMask = 0
	this.dino_verde_claro.layerDepth = 0
	this.dino_verde_claro.layerIndex = 2
	this.dino_verde_claro.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_verde_claro).wait(38));

	// Layer_6_obj_
	this.Layer_6 = new lib.mc_dino_rindo_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(-157.4,-173.9,1,1,0,0,0,-157.4,-173.9);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 3
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(38));

	// ptero_obj_
	this.ptero = new lib.mc_dino_rindo_ptero();
	this.ptero.name = "ptero";
	this.ptero.parent = this;
	this.ptero.setTransform(87.5,-85.3,1,1,0,0,0,87.5,-85.3);
	this.ptero.depth = 0;
	this.ptero.isAttachedToCamera = 0
	this.ptero.isAttachedToMask = 0
	this.ptero.layerDepth = 0
	this.ptero.layerIndex = 4
	this.ptero.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ptero).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.7,-247.2,478.29999999999995,430.1);


(lib.Scene_1_Layer_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_46
	this.instance = new lib.mcdinorindo();
	this.instance.parent = this;
	this.instance.setTransform(749.7,453.95,1,1,0,0,0,-0.1,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(338));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pag05 = function(mode,startPosition,loop) {
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
	this.frame_337 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(337).call(this.frame_337).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(200,329);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(176).to({x:693.75,y:320.1},139).wait(23));

	// txt_obj_
	this.txt = new lib.Scene_1_txt();
	this.txt.name = "txt";
	this.txt.parent = this;
	this.txt.setTransform(201.4,83.9,1,1,0,0,0,201.4,83.9);
	this.txt.depth = 0;
	this.txt.isAttachedToCamera = 0
	this.txt.isAttachedToMask = 0
	this.txt.layerDepth = 0
	this.txt.layerIndex = 0
	this.txt.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(338));

	// Layer_46_obj_
	this.Layer_46 = new lib.Scene_1_Layer_46();
	this.Layer_46.name = "Layer_46";
	this.Layer_46.parent = this;
	this.Layer_46.setTransform(750.5,451.9,1,1,0,0,0,750.5,451.9);
	this.Layer_46.depth = 0;
	this.Layer_46.isAttachedToCamera = 0
	this.Layer_46.isAttachedToMask = 0
	this.Layer_46.layerDepth = 0
	this.Layer_46.layerIndex = 1
	this.Layer_46.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_46).wait(338));

	// dino_azul_obj_
	this.dino_azul = new lib.Scene_1_dino_azul();
	this.dino_azul.name = "dino_azul";
	this.dino_azul.parent = this;
	this.dino_azul.setTransform(295.6,602,1,1,0,0,0,295.6,602);
	this.dino_azul.depth = 0;
	this.dino_azul.isAttachedToCamera = 0
	this.dino_azul.isAttachedToMask = 0
	this.dino_azul.layerDepth = 0
	this.dino_azul.layerIndex = 2
	this.dino_azul.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_azul).wait(338));

	// passaro_azul_obj_
	this.passaro_azul = new lib.Scene_1_passaro_azul();
	this.passaro_azul.name = "passaro_azul";
	this.passaro_azul.parent = this;
	this.passaro_azul.setTransform(-164.25,308.75,1,1,0,0,0,-166,328.2);
	this.passaro_azul.depth = 0;
	this.passaro_azul.isAttachedToCamera = 0
	this.passaro_azul.isAttachedToMask = 0
	this.passaro_azul.layerDepth = 0
	this.passaro_azul.layerIndex = 3
	this.passaro_azul.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.passaro_azul).wait(316).to({x:-166,y:328.2},1).wait(21));

	// passaro_rosa_obj_
	this.passaro_rosa = new lib.Scene_1_passaro_rosa();
	this.passaro_rosa.name = "passaro_rosa";
	this.passaro_rosa.parent = this;
	this.passaro_rosa.setTransform(-228.8,262.4,1,1,0,0,0,-228.8,262.4);
	this.passaro_rosa.depth = 0;
	this.passaro_rosa.isAttachedToCamera = 0
	this.passaro_rosa.isAttachedToMask = 0
	this.passaro_rosa.layerDepth = 0
	this.passaro_rosa.layerIndex = 4
	this.passaro_rosa.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.passaro_rosa).wait(338));

	// passaro_amarelo_obj_
	this.passaro_amarelo = new lib.Scene_1_passaro_amarelo();
	this.passaro_amarelo.name = "passaro_amarelo";
	this.passaro_amarelo.parent = this;
	this.passaro_amarelo.setTransform(-103.35,215.8,1,1,0,0,0,-99.6,211.3);
	this.passaro_amarelo.depth = 0;
	this.passaro_amarelo.isAttachedToCamera = 0
	this.passaro_amarelo.isAttachedToMask = 0
	this.passaro_amarelo.layerDepth = 0
	this.passaro_amarelo.layerIndex = 5
	this.passaro_amarelo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.passaro_amarelo).wait(316).to({x:-99.6,y:211.3},1).wait(21));

	// dino_lama_obj_
	this.dino_lama = new lib.Scene_1_dino_lama();
	this.dino_lama.name = "dino_lama";
	this.dino_lama.parent = this;
	this.dino_lama.setTransform(119.3,406.4,1,1,0,0,0,119.3,406.4);
	this.dino_lama.depth = 0;
	this.dino_lama.isAttachedToCamera = 0
	this.dino_lama.isAttachedToMask = 0
	this.dino_lama.layerDepth = 0
	this.dino_lama.layerIndex = 6
	this.dino_lama.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dino_lama).wait(338));

	// fundo_obj_
	this.fundo = new lib.Scene_1_fundo();
	this.fundo.name = "fundo";
	this.fundo.parent = this;
	this.fundo.setTransform(726.1,238,1,1,0,0,0,726.1,238);
	this.fundo.depth = 0;
	this.fundo.isAttachedToCamera = 0
	this.fundo.isAttachedToMask = 0
	this.fundo.layerDepth = 0
	this.fundo.layerIndex = 7
	this.fundo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fundo).wait(338));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,147,1597.7,512);
// library properties:
lib.properties = {
	id: '497B5CD87945F345B1D0112E2D0D892C',
	width: 400,
	height: 658,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pag 05_atlas_.png?1599353312770", id:"pag 05_atlas_"}
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