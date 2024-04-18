(function()
{
	// Adds Event Graph shapes
	Sidebar.prototype.addEgPalette = function(expand)
	{
		var lineTags = 'line lines connector connectors connection connections arrow arrows ';
		this.setCurrentSearchEntryLibrary('eg', 'eg');
		var sb = this;

		var temp = parseInt(this.editorUi.editor.graph.defaultVertexStyle['fontSize']);
		var fontSize = !isNaN(temp) ? 'fontSize=' + Math.min(16, temp) + ';' : '';

		// Reusable cells
		var field = new mxCell('List Item', new mxGeometry(0, 0, 80, 30),
			'text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;' +
			'spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];' +
			'portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;' + fontSize);
		field.vertex = true;

		var fns = [
			this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;', 120, 80, '', 'Event', null, null, 'oval ellipse state'),
			this.addEntry('Curve', mxUtils.bind(this, function()
			{
				var cell = new mxCell('', new mxGeometry(0, 0, 50, 50), 'curved=1;endArrow=open;html=1;');
				cell.geometry.setTerminalPoint(new mxPoint(0, 50), true);
				cell.geometry.setTerminalPoint(new mxPoint(50, 0), false);
				cell.geometry.points = [new mxPoint(50, 50), new mxPoint(0, 0)];
				cell.geometry.relative = true;
				cell.edge = true;

				return this.createEdgeTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Schedule');
			}))
		];

		this.addPaletteFunctions('eventGraph', mxResources.get('Event Graph'), false, fns);
		this.setCurrentSearchEntryLibrary();
	};

})();
